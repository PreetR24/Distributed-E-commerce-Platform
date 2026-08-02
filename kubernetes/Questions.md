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