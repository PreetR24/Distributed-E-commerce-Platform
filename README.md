![Build](https://github.com/PreetR24/Distributed-E-commerce-Platform/actions/workflows/build.yml/badge.svg)

![Docker](https://github.com/PreetR24/Distributed-E-commerce-Platform/actions/workflows/docker.yml/badge.svg)

# Distributed Commerce Platform

A distributed microservices-based commerce platform built with Node.js, TypeScript, PostgreSQL, Redis, RabbitMQ, Elasticsearch, GraphQL, gRPC, Docker, Prometheus, and Grafana..

The project is designed to demonstrate modern backend engineering concepts including microservice communication, event-driven architecture, distributed transactions, CQRS, caching, search infrastructure, authentication, authorization, and analytics aggregation.

---

# Project Overview

This project simulates a production-style commerce ecosystem focused entirely on backend engineering and distributed systems.

The goal is to showcase:

| Area           | Technologies / Concepts            |
| -------------- | ---------------------------------- |
| Architecture   | Microservices, Distributed Systems |
| Communication  | REST, GraphQL, gRPC, RabbitMQ      |
| Patterns       | SAGA, CQRS                         |
| Data           | PostgreSQL, Redis, Elasticsearch   |
| Security       | JWT, RBAC                          |
| Infrastructure | Docker, Kubernetes                 |
| Observability  | Prometheus, Grafana                |

Rather than focusing on frontend development, the project emphasizes scalable backend architecture and real-world engineering practices.

---

# Key Features

| Category      | Features                                      |
| ------------- | --------------------------------------------- |
| Architecture  | Microservices, API Gateway, GraphQL Gateway   |
| Communication | REST, gRPC, RabbitMQ                          |
| Data          | PostgreSQL, Redis, Elasticsearch              |
| Security      | JWT, RBAC, Refresh Tokens                     |
| Observability | Prometheus, Grafana, Metrics                  |
| DevOps        | Docker, Docker Compose, Kubernetes, Kustomize |
| Reliability   | Health Checks, Graceful Shutdown              |

---

# Architecture Overview

```text
Clients
 ├── Web Application
 ├── Mobile Application
 └── Admin Dashboard
        ┌──────────┴──────────┐
        ▼                     ▼
    REST Clients         GraphQL Clients
        │                     │
        ▼                     ▼
    API Gateway        GraphQL Gateway
      │                     │
      └──────────┬──────────┘
                 │
                 ▼
 ┌─────────────────────────────┐
 │      Microservices          │
 └─────────────────────────────┘

 ├── User Service
 ├── Product Service
 ├── Cart Service
 ├── Order Service
 ├── Payment Service
 ├── Inventory Service
 ├── Search Service
 ├── Analytics Service
 └── Notification Service

          │
          ▼

     gRPC Communication

          │
          ▼

      RabbitMQ Events

          │
          ▼
   Shared Infrastructure Layer
          │
          ▼
      Retry Framework
          │
          ▼
      Bootstrap Framework
          │
          ▼
    Graceful Shutdown
          │
          ▼

   Distributed Workflows

          │
          ▼

 PostgreSQL / Redis / Elasticsearch
```

---

# Implemented Backend Concepts

## Architecture

* Monorepo Architecture
* Microservices Architecture
* API Gateway Pattern
* GraphQL Gateway Pattern
* Service Isolation
* Database Per Service Pattern
* Middleware Architecture
* Event-Driven Architecture
* Health Check Pattern
* Retry & Wait Strategy
* Shared Common Library
* Infrastructure Bootstrap Pattern
* Shared Infrastructure Package
* Graceful Shutdown Pattern
* Dependency Initialization Framework

## API Communication

| Technology | Purpose                         |
| ---------- | ------------------------------- |
| REST       | CRUD APIs, Client Communication |
| GraphQL    | Aggregated Queries, Dashboard   |
| gRPC       | Internal Service Communication  |
| RabbitMQ   | Async Events, SAGA              |
| WebSockets | Real-Time Notifications         |

---

# Security Features

Implemented production-oriented security practices:

- JWT Access & Refresh Token Authentication
- Refresh Token Persistence
- Refresh Token Rotation
- SHA-256 Refresh Token Hashing
- Role-Based Access Control (RBAC)
- Helmet Security Headers
- API Rate Limiting
- Request ID Tracking
- Request Logging
- Secure Password Hashing (bcrypt)
- Logout & Logout All Devices
- Multi-Device Session Management

---

# Databases & Storage

| Component     | Purpose              |
| ------------- | -------------------- |
| PostgreSQL    | Database-per-service |
| Redis         | Cache, Cart Storage  |
| Elasticsearch | Search, Autocomplete |

---

# Distributed System Patterns

## SAGA Pattern

Implemented using:

* Order Service
* Payment Service
* Inventory Service
* RabbitMQ

Example Flow:

```text
Create Order
      │
      ▼
Reserve Inventory
      │
      ▼
Process Payment
      │
      ▼
Success
```

Failure Flow:

```text
Create Order
      │
      ▼
Payment Failed
      │
      ▼
Cancel Order
      │
      ▼
Compensation Action
```

## CQRS Pattern

Implemented in Search Service.

### Command Side

RabbitMQ Consumers

* Product Created
* Product Updated

Events update Elasticsearch indexes.

### Query Side

Elasticsearch Read Models

* Search Products
* Autocomplete
* Suggestions

## Cache Versioning Strategy

Instead of deleting Redis cache keys after product updates, the platform uses cache versioning.

Workflow:

```text
Product Updated
      │
      ▼
Increment Cache Version
      │
      ▼
Generate New Cache Keys
      │
      ▼
Old Cache Expires Automatically
```

---

# Observability

The platform includes a production-style observability stack to monitor the health, performance, and business activity of every microservice. Each service exposes Prometheus metrics through a dedicated `/metrics` endpoint, enabling centralized monitoring and visualization using Prometheus and Grafana.

| Metric Category | Examples                              |
| --------------- | ------------------------------------- |
| HTTP            | Request Count, Duration, Status Codes |
| Infrastructure  | CPU, Memory, Heap, Event Loop         |
| Redis           | Hits, Misses, Writes                  |
| RabbitMQ        | Published, Consumed Events            |
| gRPC            | Requests, Failures, Latency           |
| Health          | Liveness, Readiness                   |

## Grafana Dashboards

Built centralized dashboards for platform monitoring.

### API Dashboard

- Request Volume
- Request Rate
- Average Response Time
- Top Active Services

### Business Dashboard

- Orders Created
- Order Status Distribution
- Payment Success vs Failure
- Inventory Operations
- Search Activity
- Refresh Token Events
- Authentication Events

### Infrastructure Dashboard

- CPU Usage
- Memory Usage
- Heap Usage
- Event Loop Lag
- Garbage Collection

### Messaging Dashboard

- RabbitMQ Published Events
- RabbitMQ Consumed Events

### Service Communication Dashboard

- gRPC Request Count
- gRPC Failures
- gRPC Latency

### Service Health Dashboard

- Service Availability
- Health Status
- HTTP Error Rates

## Reliability Features

Implemented production-ready reliability mechanisms.

- Graceful Shutdown
- Health Check Endpoints
- Docker Health Checks
- Dependency Readiness Checks
- Retry with Exponential Backoff
- Centralized Logging
- Request ID Tracking

---

# Services

## Service Communication

| Source | Destination | Protocol |
|---------|-------------|----------|
| API Gateway | All Services | REST |
| GraphQL Gateway | User Service | REST |
| GraphQL Gateway | Product Service | REST |
| GraphQL Gateway | Order Service | REST |
| GraphQL Gateway | Analytics Service | REST |
| GraphQL Gateway | Search Service | REST |
| GraphQL Gateway | Notification Service | REST |
| Order Service | Product Service | gRPC |
| Product Service | Search Service | RabbitMQ |
| Payment Service | Analytics Service | RabbitMQ |
| Order Service | Notification Service | RabbitMQ |
| Payment Service | Notification Service | RabbitMQ |

## API Gateway

Responsibilities:

* Authentication
* Authorization forwarding
* Rate limiting
* Request logging
* Routing

## GraphQL Gateway

Responsibilities:

* Unified GraphQL API
* Direct Microservice Communication
* Cross-Service Data Aggregation
* Dashboard Aggregation
* Authentication Forwarding
* Request Orchestration

## User Service

Responsibilities:

* User Registration
* Login
* Access Token Generation
* Refresh Token Persistence
* Refresh Token Rotation
* Logout
* Logout All Devices
* JWT Authentication
* Role-Based Access Control

## Product Service

Responsibilities:

* Product Management
* Category Management
* Redis Caching
* gRPC Server
* Health Monitoring
* Graceful Shutdown

## Cart Service

Responsibilities:

* Redis Cart Storage
* Cart Operations

## Order Service

Responsibilities:

* Order Lifecycle
* SAGA Coordination
* gRPC Product Lookup
* Startup Dependency Waiting
* Graceful Shutdown

## Payment Service

Responsibilities:

* Payment Processing
* Idempotency Handling
* Payment Events
* SAGA Integration

## Inventory Service

Responsibilities:

* Inventory Tracking
* Stock Management

## Search Service

Responsibilities:

* Elasticsearch Integration
* Startup Dependency Waiting
* Product Search
* Autocomplete
* CQRS Read Model

## Analytics Service

Responsibilities:

* Revenue Aggregation
* Payment Metrics
* Product Metrics
* Dashboard APIs

## Notification Service

Responsibilities:

- Notification Storage
- RabbitMQ Event Consumption
- Real-Time Notifications
- Read / Unread Tracking
- Notification APIs
- WebSocket Delivery

---

# CI/CD & Automation

## Continuous Integration

Implemented GitHub Actions based CI pipelines for automated project validation.

Workflows automatically execute on:

* Push Events
* Pull Requests

## Build Pipeline

Implemented automated validation for:

* Dependency Installation
* Shared Package Build
* Microservice Compilation
* TypeScript Validation

Services validated automatically:

* API Gateway
* GraphQL Gateway
* User Service
* Product Service
* Cart Service
* Order Service
* Payment Service
* Inventory Service
* Search Service
* Analytics Service
* Notification Service

## Monorepo Build Automation

Created centralized build orchestration:

```bash
npm run build-all
```

This builds the complete distributed platform from a single command.

## Docker Validation Pipeline

Implemented automated Docker validation workflows.

Checks:

* Docker Compose Configuration
* Container Build Validation
* Infrastructure Verification
* Network Configuration
* Volume Configuration

Infrastructure validated:

* PostgreSQL
* Redis
* RabbitMQ
* Elasticsearch

## Kubernetes Deployment

The platform is fully deployed on a local Kubernetes cluster using Kind, following production-inspired deployment practices.

### Kubernetes Features

- Kind Cluster
- Namespace Isolation
- Deployments
- StatefulSets
- ClusterIP Services
- Headless Services
- ConfigMaps
- Secrets
- Kustomize
- Startup, Readiness & Liveness Probes
- Resource Requests & Limits
- Persistent Volumes
- Persistent Volume Claims
- StorageClass
- Rolling Updates
- Internal DNS-based Service Discovery

## GitHub Actions

Implemented:

```text
.github/workflows/
├── build.yml
└── docker.yml
```

Capabilities:

* Automated Builds
* Docker Validation
* Infrastructure Verification
* Pull Request Validation

## CI/CD Concepts Covered

* Continuous Integration
* Build Automation
* Monorepo Pipelines
* GitHub Actions
* Workflow Automation
* Infrastructure Validation
* Docker Validation
* Production Build Verification

---

# Health Monitoring

Every service exposes:

GET /health
GET /health/live
GET /health/ready

Services:

- User Service
- Product Service
- Cart Service
- Order Service
- Payment Service
- Inventory Service
- Search Service
- Analytics Service
- Notification Service

API Gateway aggregates service health through:

GET /api/v1/system-health

---

# Automated Verification Framework

The project includes an automated verification suite that validates:

- Service Availability
- PostgreSQL Connectivity
- Redis Connectivity
- RabbitMQ Connectivity
- Elasticsearch Connectivity

Business Workflow Verification:

Create Category
↓
Create Product
↓
Create Inventory
↓
Create Order
↓
Create Payment
↓
Notification Generated
↓
Analytics Updated

Run:

npm run verify-system

---

# Event-Driven Communication

## Exchanges

| Exchange       | Events                           |
| -------------- | -------------------------------- |
| ORDER_EVENTS   | order.created, order.cancelled   |
| PAYMENT_EVENTS | payment.success, payment.failed  |
| PRODUCT_EVENTS | product.created, product.updated |

---

# Infrastructure Framework

The platform includes a shared infrastructure package used across all services.

Implemented Components:

| Shared Component | Purpose             |
| ---------------- | ------------------- |
| Bootstrap        | Initialization      |
| Retry            | Retry Logic         |
| Cache            | Redis Utilities     |
| Messaging        | RabbitMQ Utilities  |
| Health           | Health Checks       |
| Metrics          | Prometheus          |
| Logger           | Centralized Logging |
| Authentication   | JWT Middleware      |
| RBAC             | Authorization       |
| Shutdown         | Graceful Shutdown   |

These components ensure consistent initialization, monitoring, communication, and shutdown behavior across all microservices.

---

# Technology Stack

| Category | Technologies |
|----------|--------------|
| Backend | Node.js, TypeScript, Express, Prisma |
| Database | PostgreSQL, Redis, Elasticsearch |
| Messaging | RabbitMQ |
| APIs | REST, GraphQL, gRPC |
| Authentication | JWT, RBAC |
| DevOps | Docker, Docker Compose, Kubernetes (Kind), Kustomize |
| Monitoring | Prometheus, Grafana |
| Validation | Zod |
| Logging | Winston |

## Infrastructure Features:

* Shared RabbitMQ Connection Management
* Centralized Queue Configuration
* Shared Event Publishing
* Shared Event Consumption

---

# Running in Kubernetes

## Kubernetes Automation Scripts

The project includes PowerShell automation scripts to simplify the local Kubernetes development workflow.

| Script              | Purpose             | Usage                                                    |
| ------------------- | ------------------- | -------------------------------------------------------- |
| create-cluster.ps1  | Create Kind Cluster | `.\scripts\create-cluster.ps1`                           |
| load-images.ps1     | Load Images         | `.\scripts\load-images.ps1`                              |
| deploy.ps1          | Deploy Platform     | `.\scripts\deploy.ps1`                                   |
| rebuild-service.ps1 | Rebuild Service     | `.\scripts\rebuild-service.ps1 -Service product-service` |
| delete.ps1          | Delete Platform     | `.\scripts\delete.ps1`                                   |

---

# Running The Project

## Install Dependencies

```bash
npm install
```

## Start Platform

```bash
docker compose up --build
```

## Verify Entire Platform

```bash
npm run verify-system
```

Expected Output:
```bash

- All Services Healthy
- RabbitMQ Connected
- Redis Connected
- Elasticsearch Connected
- PostgreSQL Connected

- Category Created
- Product Created
- Inventory Created
- Order Created
- Payment Successful
- Notification Generated
- Analytics Updated

- SYSTEM VERIFICATION PASSED
```