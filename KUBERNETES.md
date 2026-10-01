# Distributed Commerce Platform — Kubernetes

This document contains the Kubernetes-specific architecture, deployment, operations, security, scaling, monitoring, testing, troubleshooting, and production-readiness documentation for the Distributed Commerce Platform.

The application-level architecture and business logic are documented separately in `README.md`.

---

# Kubernetes Overview

The Distributed Commerce Platform is deployed locally on a Kubernetes cluster created using **Kind**.

The Kubernetes implementation covers:

- Microservice deployments
- Infrastructure workloads
- Namespace isolation
- Service discovery
- Ingress routing
- ConfigMaps
- Secrets
- Persistent storage
- Health probes
- Resource management
- Autoscaling
- Monitoring
- RBAC
- NetworkPolicies
- Container hardening
- Rolling updates
- Rollbacks
- Failure recovery
- Kubernetes debugging
- End-to-end validation

---

# Kubernetes Architecture

```text
                         Clients
                            │
                            ▼
                 ┌─────────────────────┐
                 │  Ingress Controller │
                 └──────────┬──────────┘
                            │
             ┌──────────────┴──────────────┐
             ▼                             ▼
    api.commerce.local           graphql.commerce.local
             │                             │
             ▼                             ▼
      API Gateway                  GraphQL Gateway
             │                             │
             └──────────────┬──────────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │   DCP Namespace     │
                 └─────────────────────┘
                            │
       ┌────────────────────┼────────────────────┐
       ▼                    ▼                    ▼
  User Service        Product Service       Cart Service
  Order Service       Payment Service       Inventory Service
  Search Service      Analytics Service     Notification Service
                            │
             ┌──────────────┼──────────────┐
             ▼              ▼              ▼
         PostgreSQL       Redis         RabbitMQ
                                             │
                                             ▼
                                      Event Consumers
                                             │
                                             ▼
                                      Elasticsearch

                 Monitoring Namespace
                         │
                  ┌──────┴──────┐
                  ▼             ▼
              Prometheus     Grafana
```

---

# Namespaces

The platform uses dedicated namespaces.

```text
dcp
monitoring
```

Application and infrastructure workloads are deployed into:

```text
dcp
```

Monitoring components are deployed into:

```text
monitoring
```

The default namespace is not used for project workloads.

---

# Kubernetes Workloads

## Application Deployments

The following application services run as Kubernetes Deployments:

- API Gateway
- GraphQL Gateway
- User Service
- Product Service
- Cart Service
- Inventory Service
- Order Service
- Payment Service
- Search Service
- Analytics Service
- Notification Service

## Infrastructure StatefulSets

Stateful workloads include:

- PostgreSQL
- Redis
- RabbitMQ
- Elasticsearch
- Prometheus
- Grafana

Stateful workloads use persistent storage where required.

---

# Kubernetes Services

The platform uses Kubernetes Services for stable internal networking.

Application Services include:

```text
api-gateway-service
graphql-gateway-service
user-service
product-service
cart-service
inventory-service
order-service
payment-service
search-service
analytics-service
notification-service
```

Infrastructure Services include:

```text
postgres-service
redis-service
rabbitmq-service
rabbitmq-management
elasticsearch-service
```

Both normal ClusterIP and Headless Services are used where appropriate.

---

# Kubernetes Deployment Scripts

The project includes PowerShell scripts for the local Kind workflow.

| Script | Purpose | Usage |
| --- | --- | --- |
| `create-cluster.ps1` | Create Kind Cluster | `.\scripts\create-cluster.ps1` |
| `load-images.ps1` | Load Images | `.\scripts\load-images.ps1` |
| `deploy.ps1` | Deploy Platform | `.\scripts\deploy.ps1` |
| `rebuild-service.ps1` | Rebuild Service | `.\scripts\rebuild-service.ps1 -Service product-service` |
| `delete.ps1` | Delete Platform | `.\scripts\delete.ps1` |

---

# Service Discovery

Kubernetes DNS provides internal service discovery.

Services communicate using Kubernetes Service names instead of Pod IP addresses.

Example:

```text
product-service
inventory-service
order-service
rabbitmq-service
redis-service
```

This allows Pods to be replaced or rescheduled without requiring application configuration changes.

---

# Ingress

The project uses host-based Ingress routing.

```text
api.commerce.local
        │
        ▼
api-gateway-service
```

```text
graphql.commerce.local
        │
        ▼
graphql-gateway-service
```

For local Kind testing:

```powershell
kubectl port-forward -n ingress-nginx svc/ingress-nginx-controller 8080:80
```

Then:

```text
http://api.commerce.local:8080
http://graphql.commerce.local:8080
```

Local development does not use TLS.

---

# API Gateway Kubernetes Routing

The API Gateway supports both versioned business routes and root-level service proxies.

## Business Routes

Existing routes remain unchanged:

```text
/api/v1/users/...
        ↓
User Service /api/v1/users/...
```

## Root-Level Service Proxies

Root-level service endpoints are exposed through:

```text
/service/<service-name>/...
```

Example:

```text
/service/users/metrics
        ↓
User Service /metrics
```

This allows root-level endpoints such as:

- `/metrics`
- `/health`
- `/docs`

to be accessed without applying the existing `/api/v1` rewrite.

---

# Configuration

## ConfigMap

Shared non-sensitive configuration is stored in:

```text
shared-config
```

## Secrets

Sensitive configuration is stored in Kubernetes Secrets.

Existing application Secrets include:

```text
user-secret
product-secret
inventory-secret
order-secret
payment-secret
search-secret
analytics-secret
notification-secret
```

Shared authentication secrets are stored separately.

Sensitive values such as:

- Database URLs
- Passwords
- JWT secrets
- Authentication credentials

are not stored in ConfigMaps or Deployment YAML.

---

# Kustomize

Kustomize is used to organize and manage Kubernetes manifests.

The deployment structure separates application and infrastructure resources while allowing the complete platform to be deployed consistently.

Typical resources include:

```text
Deployment
StatefulSet
Service
ConfigMap
Secret
Ingress
HPA
VPA
NetworkPolicy
RBAC
PersistentVolume
PersistentVolumeClaim
```

---

# Health Probes

Application Deployments use Kubernetes health probes.

## Startup Probe

```yaml
startupProbe:
  httpGet:
    path: /api/v1/health/live
    port: <port>
  initialDelaySeconds: 20
  periodSeconds: 10
  timeoutSeconds: 5
  failureThreshold: 30
```

## Readiness Probe

```yaml
readinessProbe:
  httpGet:
    path: /api/v1/health/ready
    port: <port>
  initialDelaySeconds: 10
  periodSeconds: 10
  timeoutSeconds: 5
  failureThreshold: 3
```

## Liveness Probe

```yaml
livenessProbe:
  httpGet:
    path: /api/v1/health/live
    port: <port>
  initialDelaySeconds: 30
  periodSeconds: 20
  timeoutSeconds: 5
  failureThreshold: 3
```

The exact health route should follow the route implemented by each service.

---

# Resource Management

Application workloads use Kubernetes resource requests and limits.

Resource management supports:

- Predictable scheduling
- CPU protection
- Memory protection
- HPA operation
- Better cluster utilization

---

# Persistent Storage

Persistent storage is used for stateful workloads.

The Kubernetes implementation includes:

- PersistentVolumes
- PersistentVolumeClaims
- StorageClasses

Stateful workloads that require persistent data use PVC-backed storage.

---

# Autoscaling

## Horizontal Pod Autoscaler

Product Service has an HPA configured with:

```text
Minimum replicas: 1
Maximum replicas: 5
Target CPU: 60%
```

The HPA was tested for:

- Scale-up
- Scale-down
- Stabilization
- Load generation
- Recovery after load removal

## Vertical Pod Autoscaler

Product Service also has a VPA configured in:

```text
updateMode: Off
```

This allows resource recommendations to be observed without automatically modifying or restarting Pods.

---

# Load Testing

A reusable Node.js load generator was created for autoscaling demonstrations.

It supports:

- User-defined URL
- User-defined request count
- Concurrent requests

The same generator can be reused for different services and endpoints.

---

# Monitoring

The Kubernetes monitoring stack is deployed in:

```text
monitoring
```

Components:

```text
Prometheus
Grafana
```

Prometheus collects application metrics through:

```text
/metrics
```

Grafana visualizes the collected metrics.

---

# Monitoring Architecture

```text
Microservices
     │
     ▼
  /metrics
     │
     ▼
 Prometheus
     │
     ▼
  Grafana
```

Prometheus monitors the application services through Kubernetes networking and service discovery.

Monitoring includes:

- Request metrics
- CPU
- Memory
- Application health
- HTTP errors
- RabbitMQ activity
- gRPC activity
- Service availability

---

# Monitoring Access

Prometheus:

```powershell
kubectl port-forward -n monitoring svc/prometheus 9090:9090
```

Grafana:

```powershell
kubectl port-forward -n monitoring svc/grafana 3000:3000
```

---

# Autoscaling Verification

Metrics Server is required for resource-based Kubernetes metrics.

Verify:

```powershell
kubectl top nodes
kubectl top pods -n dcp
```

HPA:

```powershell
kubectl get hpa -n dcp
```

VPA:

```powershell
kubectl get vpa -n dcp
```

---

# Security

The Kubernetes deployment implements multiple security controls.

## ServiceAccounts

Application workloads use a dedicated ServiceAccount:

```text
dcp-app
```

## RBAC

The application ServiceAccount follows least-privilege principles.

The application does not receive unnecessary permissions to:

- Read Pods
- Read Secrets
- Create Deployments

## NetworkPolicy

NetworkPolicies restrict network access for protected services.

## Container Security

Application containers use:

```yaml
runAsNonRoot: true
```

and:

```yaml
allowPrivilegeEscalation: false
readOnlyRootFilesystem: true
```

Capabilities are dropped:

```yaml
capabilities:
  drop:
    - ALL
```

Temporary writable data should use an appropriate `emptyDir` volume where required.

## Service Links

Application Deployments use:

```yaml
enableServiceLinks: false
```

---

# Rolling Updates

Deployments use Kubernetes rolling updates for controlled application releases.

Important controls include:

```yaml
strategy:
  type: RollingUpdate
```

with:

```text
maxUnavailable
maxSurge
```

Rolling updates allow new Pods to become Ready before old Pods are completely removed.

---

# Revision History

Kubernetes Deployments maintain revision history through ReplicaSets.

Deployment changes can create new revisions.

Inspect revisions:

```powershell
kubectl rollout history deployment/product-service -n dcp
```

A specific revision can be inspected with:

```powershell
kubectl rollout history deployment/product-service -n dcp --revision=<revision>
```

---

# Rollbacks

Rollback to the previous revision:

```powershell
kubectl rollout undo deployment/product-service -n dcp
```

Rollback to a specific revision:

```powershell
kubectl rollout undo deployment/product-service -n dcp --to-revision=<revision>
```

Verify:

```powershell
kubectl rollout status deployment/product-service -n dcp
```

---

# Zero-Downtime Verification

Rolling update validation uses:

- Deployment replicas
- Readiness probes
- Service endpoints
- Continuous health requests
- Rollout monitoring

The objective is to ensure that traffic continues reaching healthy Pods while a new version is deployed.

---

# Failure Recovery

Common recovery workflow:

```text
Observe Failure
      ↓
Check Pod Status
      ↓
Check Logs
      ↓
Check Events
      ↓
Describe Resources
      ↓
Identify Failed Component
      ↓
Pause / Resume Rollout if Required
      ↓
Rollback if Required
      ↓
Validate Health
      ↓
Document Incident
```

Useful commands:

```powershell
kubectl get pods -n dcp
kubectl describe pod <pod-name> -n dcp
kubectl logs <pod-name> -n dcp
kubectl get events -n dcp --sort-by=.lastTimestamp
kubectl rollout status deployment/<deployment> -n dcp
kubectl rollout history deployment/<deployment> -n dcp
kubectl rollout undo deployment/<deployment> -n dcp
```

---

# Kubernetes Debugging

## Logs

```powershell
kubectl logs <pod-name> -n dcp
```

Previous crashed container:

```powershell
kubectl logs <pod-name> -n dcp --previous
```

## Describe

```powershell
kubectl describe pod <pod-name> -n dcp
```

## Events

```powershell
kubectl get events -n dcp --sort-by=.lastTimestamp
```

## Exec

```powershell
kubectl exec -it <pod-name> -n dcp -- sh
```

## Port Forwarding

```powershell
kubectl port-forward -n dcp svc/<service-name> <local-port>:<service-port>
```

---

# Common Kubernetes Failure Scenarios

## CrashLoopBackOff

Check:

```powershell
kubectl get pods -n dcp
kubectl logs <pod-name> -n dcp
kubectl logs <pod-name> -n dcp --previous
kubectl describe pod <pod-name> -n dcp
```

Investigate:

- Application crash
- Missing environment variables
- Dependency failures
- Probe failures
- Configuration errors

## ImagePullBackOff

Check:

```powershell
kubectl describe pod <pod-name> -n dcp
```

Verify:

- Image name
- Image availability
- Kind image loading
- `imagePullPolicy`

## Pending Pods

Check:

```powershell
kubectl describe pod <pod-name> -n dcp
```

Investigate:

- Insufficient CPU/memory
- PVC problems
- Scheduling constraints
- Node availability

## Failed Scheduling

Check:

```powershell
kubectl get nodes
kubectl describe node <node-name>
kubectl describe pod <pod-name> -n dcp
```

---

# Kubernetes Validation

Before declaring the platform healthy, validate:

```text
Cluster
   ↓
Namespaces
   ↓
Infrastructure
   ↓
Deployments
   ↓
Pods
   ↓
Services
   ↓
Endpoints
   ↓
Ingress
   ↓
Health Probes
   ↓
Monitoring
   ↓
Autoscaling
   ↓
Security
   ↓
Business Workflow
```

---

# End-to-End Integration Testing

Kubernetes validation also includes the complete commerce workflow.

The primary flow is:

```text
User Authentication
       ↓
Product
       ↓
Cart
       ↓
Inventory
       ↓
Order
       ↓
Payment
       ↓
RabbitMQ Events
       ↓
Analytics
       ↓
Notification
```

Validation should confirm that the workflow continues to operate correctly after migration to Kubernetes.

---

# Local Kubernetes Workflow

## 1. Create Cluster

```powershell
.\scripts\create-cluster.ps1
```

## 2. Build Application Images

Build the required local Docker images using the project's Docker workflow.

## 3. Load Images Into Kind

```powershell
.\scripts\load-images.ps1
```

## 4. Deploy Platform

```powershell
.\scripts\deploy.ps1
```

## 5. Verify Cluster

```powershell
kubectl get nodes
kubectl get pods -n dcp
kubectl get pods -n monitoring
```

## 6. Access Ingress

```powershell
kubectl port-forward -n ingress-nginx svc/ingress-nginx-controller 8080:80
```

Then:

```text
http://api.commerce.local:8080
http://graphql.commerce.local:8080
```

## 7. Delete Platform

```powershell
.\scripts\delete.ps1
```

---

# Kubernetes Project Structure

The Kubernetes resources are organized separately from the application source code.

A typical structure is:

```text
k8s/
├── namespaces/
├── infrastructure/
│   ├── postgres/
│   ├── redis/
│   ├── rabbitmq/
│   └── elasticsearch/
├── services/
│   ├── api-gateway/
│   ├── graphql-gateway/
│   ├── user-service/
│   ├── product-service/
│   ├── cart-service/
│   ├── inventory-service/
│   ├── order-service/
│   ├── payment-service/
│   ├── search-service/
│   ├── analytics-service/
│   └── notification-service/
├── ingress/
├── monitoring/
├── security/
├── autoscaling/
└── kustomization.yaml
```

Use the actual repository structure as the source of truth if it differs from this overview.

---

# Kubernetes Best Practices Implemented

- Dedicated namespaces
- Dedicated ServiceAccounts
- Least-privilege RBAC
- NetworkPolicies
- Kubernetes Secrets
- Non-root containers
- Dropped Linux capabilities
- Disabled privilege escalation
- Read-only root filesystem
- Resource requests and limits
- Startup, readiness, and liveness probes
- Persistent storage for stateful workloads
- Internal DNS-based service discovery
- Rolling updates
- Revision history
- Rollbacks
- HPA
- VPA recommendations
- Prometheus monitoring
- Grafana dashboards
- Failure recovery procedures
- Local automation scripts
- Kustomize-based organization

---