# Kubernetes Interview Questions

## Why did you choose one control plane and three worker nodes?

**Answer:**

To simulate a production-style Kubernetes environment where the control plane manages scheduling and worker nodes run application workloads. It also helps understand pod scheduling, scaling, and workload distribution.

---

## Why not use a single-node cluster?

**Answer:**

A single-node cluster is suitable for basic learning, but it doesn't demonstrate scheduling, workload distribution, or production-like architecture. A multi-node cluster better represents real-world deployments.

---

## Does the control plane run application services?

**Answer:**

In this project, the control plane is dedicated to managing the cluster, while all application workloads run on worker nodes, following common production practices.

---

## Why use a Kind configuration file instead of the default command?

**Answer:**

A configuration file allows us to create a reproducible multi-node cluster with custom settings like worker nodes and port mappings.

---

## Why are ports 80 and 443 mapped?

**Answer:**

They allow the Ingress Controller to receive HTTP and HTTPS requests directly from the host machine without using port forwarding.

---

## Why is only one worker node configured with port mappings?

**Answer:**

Only one node needs to expose ports to the host. The Ingress Controller will run on that node and route traffic internally to the appropriate services.

---

## What happens when you run `kind create cluster`?

**Answer:**

Kind creates Docker containers as Kubernetes nodes, initializes the control plane, joins the worker nodes to the cluster, and configures `kubectl` to communicate with it.

---

## How do you verify that all Kubernetes nodes are healthy?

**Answer:**

Run:

```bash
kubectl get nodes
```

All nodes should be in the `Ready` state.

---

## How do you verify that Kubernetes system components are running?

**Answer:**

Run:

```bash
kubectl get pods -n kube-system
```

All system pods should be in the `Running` state.

---

## How do you check which Kubernetes cluster `kubectl` is currently using?

**Answer:**

Run:

```bash
kubectl config current-context
```

---

## How do you switch to another Kubernetes context?

**Answer:**

Run:

```bash
kubectl config use-context <context-name>
```

---

## How do you completely recreate a Kind cluster?

**Answer:**

Delete the existing cluster:

```bash
kind delete cluster --name commerce-cluster
```

Then recreate it:

```bash
kind create cluster --name commerce-cluster --config kubernetes\cluster\kind-config.yaml
```

---

## What is kubectl?

**Answer:**

`kubectl` is the command-line tool used to communicate with the Kubernetes API Server and manage Kubernetes resources.

---

## What is a Kubernetes context?

**Answer:**

A context stores the cluster, user, and namespace information that `kubectl` uses to determine which Kubernetes cluster to communicate with.

---

## How do you check the current Kubernetes context?

**Answer:**

```bash
kubectl config current-context
```

---

## How do you list all available Kubernetes contexts?

**Answer:**

```bash
kubectl config get-contexts
```

---

## How do you switch to another Kubernetes context?

**Answer:**

```bash
kubectl config use-context <context-name>
```

---

## How do you verify that kubectl is connected to the cluster?

**Answer:**

```bash
kubectl cluster-info
```

---

## Which command shows all Kubernetes nodes?

**Answer:**

```bash
kubectl get nodes
```

---

## Which command displays detailed information about a Kubernetes resource?

**Answer:**

```bash
kubectl describe <resource-type> <resource-name>
```

Example:

```bash
kubectl describe pod my-pod
```

---

## How do you view logs of a running Pod?

**Answer:**

```bash
kubectl logs <pod-name>
```

---

## How do you open a shell inside a running Pod?

**Answer:**

```bash
kubectl exec -it <pod-name> -- sh
```

or

```bash
kubectl exec -it <pod-name> -- bash
```

---

## How do you apply Kubernetes manifests?

**Answer:**

```bash
kubectl apply -f <file-or-folder>
```

---

## Why do we need `kind load docker-image`?

**Answer:**

Kind runs Kubernetes inside Docker containers. The nodes cannot directly access images stored in the host's Docker daemon, so images must be copied into the Kind cluster using `kind load docker-image`.

---

## When should you run `kind load docker-image` again?

**Answer:**

Whenever a Docker image is rebuilt. Otherwise, Kubernetes continues using the older image already stored inside the Kind cluster.

---

## Why don't we need Docker Hub in this project initially?

**Answer:**

Because the project is running on a local Kind cluster. Images are loaded directly from the local Docker daemon into the cluster, eliminating the need for a remote container registry during development.

---

## Why should applications be deployed in a custom namespace instead of the `default` namespace?

**Answer:**

Using a custom namespace keeps application resources isolated from default and system resources, making the cluster easier to manage and maintain.

---

## Which Kubernetes resources will be deployed in the `commerce` namespace?

**Answer:**

All application resources, including the API Gateways, business services, databases, Redis, RabbitMQ, and Elasticsearch, will be deployed in the `commerce` namespace.

---

## Why do we create a separate namespace for monitoring?

**Answer:**

A separate namespace keeps monitoring components like Prometheus and Grafana isolated from application workloads, making the cluster easier to manage and troubleshoot.

---

## Why use labels on a namespace?

**Answer:**

Labels help organize Kubernetes resources and can later be used for resource selection, monitoring, and automation.

---

## Why use a shared ConfigMap?

**Answer:**

A shared ConfigMap stores common configuration values in one place, reducing duplication and making updates easier across multiple services.

---

## Why are all values in a ConfigMap stored as strings?

**Answer:**

The `data` section of a ConfigMap only supports string values. Even numbers like ports should be enclosed in quotes.

---

## Why shouldn't passwords be stored in a ConfigMap?

**Answer:**

ConfigMaps are intended for non-sensitive configuration. Passwords, tokens, and API keys should be stored in Kubernetes Secrets.

---

## Are Kubernetes Secrets encrypted?

**Answer:**

Not by default. Secret values are Base64 encoded, which is an encoding format, not encryption. Encryption at rest must be enabled separately in the Kubernetes cluster.

---

## What is the purpose of the `Opaque` Secret type?

**Answer:**

`Opaque` is the default Secret type used for arbitrary key-value pairs such as passwords, tokens, and application secrets.

---

## Why use `stringData` instead of `data` while creating a Secret?

**Answer:**

`stringData` allows you to write plain text values. Kubernetes automatically converts them to Base64 and stores them internally, making the manifest easier to write and maintain.

---

## Is `stringData` stored inside Kubernetes?

**Answer:**

No. `stringData` is only used when creating or updating the Secret. Kubernetes converts it into the `data` field before storing the Secret.

---

## After applying a Secret with `stringData`, what do you see when retrieving it as YAML?

**Answer:**

The Secret is stored under the `data` field with Base64-encoded values. The original `stringData` field is not retained.

---

## How do you apply updated ConfigMap values?

Restart the Deployment using:

kubectl rollout restart deployment <deployment-name> -n dcp

---

## When can ConfigMap changes appear without restarting?

When the ConfigMap is mounted as a volume and the application reloads the updated files.

---

## Why do we use ClusterIP for internal microservice communication?

**Answer:**

ClusterIP exposes a Service only within the Kubernetes cluster, allowing secure communication between microservices without exposing them externally.

---

## Why should every container define resource requests and limits?

**Answer:**

Resource requests help Kubernetes schedule Pods, while resource limits prevent a container from consuming excessive CPU or memory, ensuring fair resource usage across the cluster.

---

## Why are labels important in Kubernetes?

**Answer:**

Labels are used to identify resources. Services use label selectors to route traffic to the correct Pods, and Deployments use them to manage their Pods.

---

## Why do we use Append Only File (AOF) in Redis?

**Answer:**

AOF persists every write operation so Redis can recover its data after a restart, making it more durable than using memory alone.

---

## Why is Redis deployed with a PersistentVolumeClaim?

**Answer:**

The PVC stores Redis persistence files, ensuring cached or session data survives pod recreation.

---

## Why is Redis exposed using a ClusterIP Service?

**Answer:**

Redis is an internal infrastructure component that should only be accessed by other services within the Kubernetes cluster.

---

## Why do we use the `rabbitmq:3-management` image?

**Answer:**

It includes both the RabbitMQ broker and the Management Plugin, allowing us to manage queues, exchanges, users, and connections through a web interface.

---

## Why are there two ports exposed in Services for RabbitMQ?

**Answer:**

RabbitMQ uses two ports because port 5672 handles AMQP communication for applications, while port 15672 provides the web-based Management UI for administrators.

---

## Why does RabbitMQ use a PersistentVolumeClaim?

**Answer:**

The PVC stores queues and broker data so messages and configuration persist even if the RabbitMQ pod is recreated.

---

## Why does the Product Service expose two ports?

**Answer:**

The Product Service exposes port **4002** for REST APIs and port **50052** for gRPC communication. REST requests come from clients or gateways, while the Order Service uses gRPC to communicate with the Product Service internally.

---

## Why are both REST and gRPC exposed through the same Kubernetes Service?

**Answer:**

A Kubernetes Service can expose multiple named ports. This allows different protocols, such as REST and gRPC, to reach the same Pods through a single Service, simplifying service discovery.

---

## Why is `enableServiceLinks: false` recommended?

**Answer:**

Setting `enableServiceLinks: false` prevents Kubernetes from automatically injecting Service environment variables into the container. This reduces unnecessary environment variables, speeds up container startup slightly, and encourages applications to rely on ConfigMaps, Secrets, or DNS for service discovery.

---

## Why doesn't the Cart Service use a database Secret?

**Answer:**

The Cart Service stores its data in Redis instead of PostgreSQL. Therefore, it only requires the shared configuration and Redis connection details, not a `DATABASE_URL` Secret.

---

## Why does the Inventory Service expose both HTTP and gRPC ports?

**Answer:**

The HTTP port (4006) serves REST APIs and health endpoints, while the gRPC port (50053) is used for high-performance internal communication with other microservices such as the Order Service.

---

## Why does the Order Service act as both a gRPC client and a gRPC server?

**Answer:**

The Order Service acts as a **gRPC client** when communicating with the Product Service and Inventory Service to validate products and reserve inventory. It also acts as a **gRPC server** by exposing port `50051`, allowing other services, such as the Payment Service, to communicate with it efficiently.

---

## Why are PRODUCT_GRPC_URL and INVENTORY_GRPC_URL defined in the Deployment?

**Answer:**

These are service-specific configuration values required only by the Order Service. They specify the internal Kubernetes DNS addresses of the Product and Inventory gRPC services, enabling direct communication between microservices.

---

## Why does the Search Service communicate with the Product Service using both REST and gRPC?

**Answer:**

The Search Service uses REST APIs for standard HTTP operations and gRPC for efficient internal service-to-service communication. This allows it to choose the most suitable protocol depending on the operation while keeping communication inside the Kubernetes cluster.

---

## Why does the Search Service depend on Redis, RabbitMQ, and Elasticsearch?

**Answer:**

Redis is used for caching, RabbitMQ for processing asynchronous events, and Elasticsearch for indexing and searching product data. Together, they provide fast, scalable, and event-driven search functionality.

---

## How do you verify that a Kubernetes Service is correctly routing traffic to a Pod?

**Answer:**

Run:

```bash
kubectl get endpoints <service-name> -n <namespace>
```

If one or more Pod IP addresses are listed, the Service is correctly routing traffic to the matching Pods.

---

## How do you verify that environment variables from ConfigMaps and Secrets are available inside a container?

**Answer:**

Run:

```bash
kubectl exec deployment/<deployment-name> -n <namespace> -- printenv
```

This displays all environment variables inside the container, allowing you to verify values loaded from ConfigMaps and Secrets.

---

## How do you verify communication between Kubernetes microservices?

**Answer:**

Check the application logs:

```bash
kubectl logs deployment/<deployment-name> -n <namespace>
```

The logs should confirm successful connections to dependent services, databases, caches, message brokers, or gRPC endpoints without connection errors.

---

## Does scaling a Deployment require updating its Service?

**Answer:**

No.

A Kubernetes Service automatically discovers all matching Pods using label selectors. When a Deployment is scaled, the Service updates its endpoints automatically without requiring any changes.

---

## How do you verify that scaling a Deployment was successful?

**Answer:**

Check the Deployment:

```bash
kubectl get deployment <deployment-name> -n <namespace>
```

Then verify the Pods:

```bash
kubectl get pods -n <namespace>
```

Finally, confirm that the Service endpoints include all Pod IPs:

```bash
kubectl get endpoints <service-name> -n <namespace>
```

---

## Explain how scaling works in Kubernetes.

**Answer:**

When a Deployment is scaled, it updates the desired replica count. The ReplicaSet creates or removes Pods to match that count. Once new Pods pass the Readiness Probe, Kubernetes automatically updates the Service's Endpoint/EndpointSlice. The Service itself does not change. kube-proxy then load balances traffic across all Ready Pods. If a Pod fails, the ReplicaSet creates a new one, and it starts receiving traffic only after becoming Ready.

---

## What is the first command you run when debugging a Kubernetes application?

**Answer:**

Check the Pods first:

```bash
kubectl get pods -n <namespace>
```

The Pod status usually indicates where to begin troubleshooting.

---

## How do you investigate why a Pod is failing?

**Answer:**

Describe the Pod:

```bash
kubectl describe pod <pod-name> -n <namespace>
```

Then check the container logs:

```bash
kubectl logs <pod-name> -n <namespace>
```

The `describe` output provides Kubernetes events, while the logs show application-level errors.

---

## What does `CrashLoopBackOff` mean?

**Answer:**

`CrashLoopBackOff` means the container starts, crashes, and Kubernetes repeatedly tries to restart it with an increasing delay between attempts.

---

## When would you use `kubectl logs --previous`?

**Answer:**

Use it when a container is restarting repeatedly. It shows the logs from the previous container instance, which often contain the original startup error.

```bash
kubectl logs <pod-name> --previous -n <namespace>
```

---

## How do you verify that a Service is routing traffic to Pods?

**Answer:**

Run:

```bash
kubectl get endpoints <service-name> -n <namespace>
```

If one or more Pod IPs are listed, the Service is correctly routing traffic to the matching Pods.

---

## What is the role of a StorageClass in Kubernetes?

**Answer:**

A StorageClass defines how PersistentVolumes are provisioned. It specifies the storage provisioner and storage-related policies, allowing PersistentVolumeClaims to dynamically request storage without manually creating PersistentVolumes.

---

## How do you verify which StorageClass a PersistentVolumeClaim is using?

**Answer:**

Run:

```bash
kubectl get pvc -n <namespace>
```

or

```bash
kubectl describe pvc <pvc-name> -n <namespace>
```

The output shows the StorageClass associated with the PVC.

---

## What is the difference between a PersistentVolume (PV) and a PersistentVolumeClaim (PVC)?

**Answer:**

A **PersistentVolume (PV)** is the actual storage resource available in the cluster, while a **PersistentVolumeClaim (PVC)** is a request for storage made by a Pod. Kubernetes binds a PVC to a suitable PV.

---

## How do you verify that a PersistentVolume is correctly bound?

**Answer:**

Run:

```bash
kubectl get pv
```

A correctly configured PersistentVolume should have:

- `STATUS` as `Bound`
- A valid `CLAIM` pointing to the corresponding PersistentVolumeClaim.

---

## Why is `ReadWriteOnce (RWO)` commonly used with StatefulSets?

**Answer:**

`ReadWriteOnce (RWO)` allows a volume to be mounted as read-write by a single node. This is suitable for stateful applications such as PostgreSQL, Redis, RabbitMQ, and Elasticsearch, where each Pod owns its dedicated persistent storage.

---

## What does a PVC with `Pending` status indicate?

**Answer:**

A `Pending` PVC indicates that Kubernetes could not bind the claim to a suitable PersistentVolume. This can occur if no matching storage is available or if the StorageClass cannot provision a volume.

---

## Why do StatefulSets use volume mounts?

**Answer:**

Volume mounts attach PersistentVolumes to containers, allowing stateful applications to store data that persists even if the Pod is restarted or recreated.

---

## How do you verify that a PersistentVolume is mounted inside a container?

**Answer:**

Describe the Pod:

```bash
kubectl describe pod <pod-name> -n <namespace>
```

Then verify the mounted filesystem from inside the container:

```bash
kubectl exec -it <pod-name> -n <namespace> -- df -h
```

or inspect the mount directory:

```bash
kubectl exec -it <pod-name> -n <namespace> -- ls -la <mount-path>
```

---

## Where is data stored in PostgreSQL, Redis, RabbitMQ, and Elasticsearch by default?

**Answer:**

- PostgreSQL: `/var/lib/postgresql/data`
- Redis: `/data`
- RabbitMQ: `/var/lib/rabbitmq`
- Elasticsearch: `/usr/share/elasticsearch/data`

---

## Why does data remain after deleting a StatefulSet Pod?

**Answer:**

Deleting a StatefulSet Pod does not delete its PersistentVolumeClaim (PVC) or PersistentVolume (PV). When Kubernetes recreates the Pod, it reattaches the same PVC, allowing the application to continue using the existing data.

---

## How do you verify PostgreSQL data persistence in Kubernetes?

**Answer:**

Connect to PostgreSQL, verify the data or databases, delete the PostgreSQL Pod, wait for it to be recreated, and verify the same data again. If the data still exists, the PersistentVolume is working correctly.

---

## What is the purpose of testing data persistence after deleting a Pod?

**Answer:**

It verifies that application data is stored on a PersistentVolume rather than inside the container filesystem. This ensures that data survives Pod failures, restarts, and rescheduling.

---

## How do you verify that Kubernetes DNS is working?

**Answer:**

Run:

```bash
kubectl exec -it deployment/<deployment-name> -n <namespace> -- sh
```

Then verify DNS resolution:

```bash
nslookup <service-name>
```

If the Service name resolves successfully, Kubernetes DNS is working.

---

## What is the difference between a normal Service and a Headless Service in DNS resolution?

**Answer:**

A normal Service resolves to a **ClusterIP**, while a Headless Service resolves directly to the IP address(es) of the backing Pod(s), enabling direct Pod discovery.

---

## Why can we use `product-service` instead of `product-service.dcp.svc.cluster.local`?

**Answer:**

Kubernetes automatically configures DNS search domains for each Pod. Since all services are in the same namespace (`dcp`), the short Service name is automatically expanded to its full DNS name.

---

## What should a liveness probe check?

**Answer:**

A liveness probe should only verify that the application is running and responsive. It should not check external dependencies such as databases or message brokers, as temporary dependency failures could cause unnecessary container restarts.

---

## Why can the readiness probe check external dependencies?

**Answer:**

The readiness probe determines whether a Pod is ready to receive traffic. If a required dependency such as PostgreSQL or Redis is unavailable, Kubernetes temporarily removes the Pod from the Service endpoints without restarting it.

---

## Why should health endpoint logic be shared across all microservices?

**Answer:**

A shared health utility ensures consistent response formats, reduces duplicate code, simplifies maintenance, and keeps health behavior uniform across all services.

---

## Why is the readiness probe important during rolling updates?

**Answer:**

Kubernetes waits until the readiness probe succeeds before sending traffic to the new Pod. This helps achieve zero-downtime deployments by ensuring only healthy Pods receive requests.

---

## What is the purpose of a LimitRange in Kubernetes?

**Answer:**

A `LimitRange` defines default resource requests and limits for Pods in a namespace. If a Pod does not specify its own resources, Kubernetes automatically applies the defaults from the `LimitRange`.

---

## Does a LimitRange override resource requests and limits already defined in a Deployment?

**Answer:**

No.

A `LimitRange` only applies default values when a Pod does not specify its own resource requests or limits. If the Deployment already defines them, those values are used instead.

---

## What is the difference between a LimitRange and a ResourceQuota?

**Answer:**

A **LimitRange** applies to individual Pods or containers by setting default or minimum/maximum resource requests and limits. A **ResourceQuota** applies to the entire namespace by limiting the total amount of resources (CPU, memory, Pods, Secrets, ConfigMaps, etc.) that all resources in the namespace can consume.

---

## What happens if a namespace exceeds its ResourceQuota?

**Answer:**

Kubernetes rejects the creation or update of the resource and returns a **Forbidden** error indicating that the namespace has exceeded its configured quota.

---

## Why are ResourceQuotas useful?

**Answer:**

ResourceQuotas prevent a namespace from consuming excessive cluster resources, ensuring fair resource sharing and protecting the cluster from accidental over-allocation.

---

## What is the difference between an Ingress and an Ingress Controller?

**Answer:**

An **Ingress** defines the routing rules for incoming HTTP/HTTPS traffic, while an **Ingress Controller** is the component that reads those rules and routes requests to the appropriate Kubernetes Services. Without an Ingress Controller, an Ingress resource has no effect.

---

## Why is an Ingress Controller needed if Services already exist?

**Answer:**

Services provide networking inside the Kubernetes cluster. An Ingress Controller exposes selected Services externally and acts as a single entry point, routing incoming traffic based on hostnames or URL paths.

---

## What is an IngressClass?

**Answer:**

An IngressClass tells Kubernetes which Ingress Controller should manage an Ingress resource. For the NGINX Ingress Controller, the IngressClass is typically named `nginx`.

---

## Why is `ingressClassName: nginx` specified in an Ingress resource?

**Answer:**

It tells Kubernetes that this Ingress should be managed by the NGINX Ingress Controller. Without a matching IngressClass, the controller will not process the Ingress resource.

---

## Why are API Gateway and GraphQL Gateway placed behind a single Ingress?

**Answer:**

Using a single Ingress provides one entry point into the cluster. It routes requests to different backend Services based on the request path or host, reducing the need to expose multiple external endpoints.

---

## What is Path-Based Routing in Kubernetes Ingress?

**Answer:**

Path-Based Routing forwards requests to different backend Services based on the URL path. For example, requests to `/graphql` can be routed to the GraphQL Gateway, while all other requests (`/`) are routed to the REST API Gateway.

---

## Why is the `/graphql` path defined before `/` in the Ingress?

**Answer:**

`/graphql` is a more specific path than `/`. Defining it first makes the routing intent clear and ensures requests starting with `/graphql` are directed to the GraphQL Gateway, while all other requests match the `/` path and go to the API Gateway.

---

## What is Host-Based Routing in Kubernetes Ingress?

**Answer:**

Host-Based Routing forwards requests based on the hostname in the HTTP request. For example, requests to `api.commerce.local` can be routed to the API Gateway, while requests to `graphql.commerce.local` can be routed to the GraphQL Gateway.

---

## When would you choose Host-Based Routing instead of Path-Based Routing?

**Answer:**

Host-Based Routing is useful when different applications or APIs need separate domains, such as `api.example.com` and `admin.example.com`. Path-Based Routing is preferred when multiple services are exposed under a single domain, such as `/api` and `/graphql`.

---

## What is the difference between Metrics Server and Prometheus?

**Answer:**

The Metrics Server provides CPU and memory metrics used by Kubernetes features such as `kubectl top` and the Horizontal Pod Autoscaler (HPA). Prometheus is a monitoring system that scrapes application and infrastructure metrics, stores historical data, and enables querying, dashboards, and alerting.

---

## Why can HPA work without Prometheus?

**Answer:**

The Horizontal Pod Autoscaler uses metrics from the Kubernetes Metrics Server. Prometheus is not required for HPA to scale Pods based on CPU or memory utilization.

---

