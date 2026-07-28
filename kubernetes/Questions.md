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