![Build](https://github.com/PreetR24/Distributed-E-commerce-Platform/actions/workflows/build.yml/badge.svg)

![Docker](https://github.com/PreetR24/Distributed-E-commerce-Platform/actions/workflows/docker.yml/badge.svg)

# Distributed Commerce Platform

A distributed microservices-based commerce platform built with Node.js, TypeScript, PostgreSQL, Redis, RabbitMQ, Elasticsearch, GraphQL, gRPC, Docker, Prometheus, and Grafana..

The project is designed to demonstrate modern backend engineering concepts including microservice communication, event-driven architecture, distributed transactions, CQRS, caching, search infrastructure, authentication, authorization, and analytics aggregation.

---

# Project Overview

This project simulates a production-style commerce ecosystem focused entirely on backend engineering and distributed systems.

The goal is to showcase:

* Microservices Architecture
* API Gateway Pattern
* GraphQL Gateway
* gRPC Service Communication
* RabbitMQ Event-Driven Architecture
* SAGA Pattern
* CQRS Pattern
* Redis Caching
* Elasticsearch Search Infrastructure
* JWT Authentication
* RBAC Authorization
* Analytics Aggregation
* Distributed System Design
* Shared Infrastructure Package
* Infrastructure Bootstrap Framework
* Graceful Shutdown Handling
* Health Monitoring Framework
* Docker-First Development Workflow

Rather than focusing on frontend development, the project emphasizes scalable backend architecture and real-world engineering practices.

---

# Key Features

- Distributed Microservices Architecture
- API Gateway & GraphQL Gateway
- Event-Driven Communication with RabbitMQ
- gRPC Service-to-Service Communication
- CQRS-based Search Service
- SAGA-based Order & Payment Workflow
- Redis Caching
- Elasticsearch Full-Text Search & Autocomplete
- JWT Authentication & RBAC Authorization
- Real-Time Notifications with WebSockets
- Prometheus & Grafana Observability
- Custom Business & Infrastructure Metrics
- Health Checks & Graceful Startup & Shutdown
- Dockerized Development Environment
- Docker Compose Multi-Service Orchestration
- GitHub Actions CI Pipeline
- Shared Infrastructure Package
- Infrastructure Bootstrap Framework

---

# Architecture Overview

```text
Clients
 ├── Web Application
 ├── Mobile Application
 └── Admin Dashboard
          │
          ▼
      API Gateway
          │
          ▼
    GraphQL Gateway
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

### REST APIs

Used for:

* Public APIs
* CRUD operations
* External client communication

### GraphQL

Used for:

* Aggregated queries
* Dashboard data
* Flexible data retrieval

### gRPC

Used for:

* Product Lookup
* Inventory Validation
* Order Retrieval
* Service-to-Service Communication
* Internal Low-Latency Communication

### Sample Queries

#### Products

```graphql
query {
    products {
        products {
            id
            name
            price
        }
    }
}
```

#### Dashboard

```graphql
query {

    dashboard(
        search: "iphone"
    ) {

        analytics {
            totalRevenue
            totalOrders
        }

        products {
            products {
                name
            }
        }

        searchResults {
            products {
                name
            }
        }

        trendingSearches {
            searchTerm
            totalSearches
        }
    }
}
```

### gRPC

Implemented between:

* Order Service
* Product Service

Used for:

* Internal service communication
* Fast product lookup
* Protocol Buffer contracts
* Startup Dependency Validation

### RabbitMQ

Used for:

* Async Workflows
* SAGA Communication
* Analytics Aggregation
* Search Indexing
* Shared Messaging Infrastructure

### WebSockets

Implemented for:

- Real-time notifications

Used for:

- Order notifications
- Payment notifications
- Live user updates

## Testing & Verification

- Automated System Verification
- End-to-End Workflow Testing
- Infrastructure Verification
- RabbitMQ Verification
- Redis Verification
- Elasticsearch Verification
- PostgreSQL Verification
- Health Monitoring
- Operational Visibility
- Service Health Verification
- Docker Health Check Verification
- Graceful Shutdown Verification

---

# Authentication & Authorization

Implemented:

* JWT Authentication
* Access Tokens
* Refresh Tokens
* Role-Based Access Control (RBAC)
* API Gateway Authentication
* Secure Password Hashing
* Helmet Security
* CORS Protection
* Rate Limiting

### Supported Roles

#### CUSTOMER

Can:

* Browse products
* Search products
* Manage cart
* Create orders
* View own orders
* Make payments

#### SELLER

Can:

* Create products
* Update products
* Manage inventory
* Create categories

#### ADMIN

Can:

* Manage all resources
* View analytics dashboard
* Manage inventory
* Update order statuses
* Access administrative operations

---

# Databases & Storage

## PostgreSQL

Database-per-service pattern:

* User Database
* Product Database
* Order Database
* Payment Database
* Search Database
* Analytics Database
* Notification Database

## Redis

Used for:

* Product caching
* Cart storage
* Fast data retrieval
* Cache invalidation

## Elasticsearch

Used for:

* Product search
* Full-text search
* Search suggestions
* Autocomplete
* Search optimization

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

## Event-Driven Notifications

Implemented using:

- RabbitMQ
- Notification Service
- WebSockets

Flow:

Order Created
↓
RabbitMQ Event
↓
Notification Service
↓
PostgreSQL
↓
WebSocket Push
↓
User

---

# Observability

The platform includes a production-style observability stack to monitor the health, performance, and business activity of every microservice. Each service exposes Prometheus metrics through a dedicated `/metrics` endpoint, enabling centralized monitoring and visualization using Prometheus and Grafana.

## Monitoring Stack

- Prometheus
- Grafana
- PromQL
- Custom Prometheus Metrics
- Node.js Process Metrics

## Metrics Endpoint

Every service exposes:

```http
GET /metrics
```

Monitored Services:

- API Gateway
- User Service
- Product Service
- Cart Service
- Order Service
- Payment Service
- Inventory Service
- Search Service
- Analytics Service
- Notification Service

## HTTP Metrics

Implemented HTTP request instrumentation for every service.

Collected metrics include:

- Total HTTP Requests
- Request Rate
- Request Duration
- Response Status Codes
- Route-wise Request Count

## Business Metrics

Implemented custom business metrics to monitor core commerce workflows.

### Order Service

- Orders Created
- Orders by Status
- Order Processing Duration

### Payment Service

- Successful Payments
- Failed Payments
- Payments by Status
- Payment Processing Duration

### Inventory Service

- Inventory Operations
- Inventory Operation Duration

### Search Service

- Search Operations
- Search Operation Duration

## Infrastructure Metrics

Automatically collected runtime metrics using Prometheus Node.js instrumentation.

Includes:

- CPU Usage
- Memory Usage
- Heap Usage
- Event Loop Lag
- Garbage Collection Duration
- Active Handles
- Active Requests
- Process Uptime

## Redis Metrics

Custom metrics for cache performance.

Tracked metrics:

- Cache Hits
- Cache Misses
- Cache Writes

Used to evaluate cache efficiency and optimize read performance.

## RabbitMQ Metrics

Custom messaging metrics for event-driven communication.

Tracked metrics:

- Published Events
- Consumed Events

Used across asynchronous workflows such as:

- Order Processing
- Inventory Reservation
- Payment Processing
- Analytics Aggregation
- Notification Delivery

## gRPC Metrics

Instrumented internal service-to-service communication.

Tracked metrics:

- Total gRPC Requests
- Failed gRPC Requests
- gRPC Request Duration

Current gRPC communication includes:

- Order Service → Product Service
- Order Service → Inventory Service
- Payment Service → Order Service

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

## Production Monitoring Capabilities

The observability stack provides visibility into:

- Service Availability
- API Performance
- Business KPIs
- Infrastructure Health
- Cache Efficiency
- Event-Driven Messaging
- Internal gRPC Communication
- Runtime Performance

---

# Services

## Service Communication

| Source | Destination | Protocol |
|---------|-------------|----------|
| API Gateway | All Services | REST |
| GraphQL Gateway | API Gateway | REST |
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

* Unified API Layer
* Aggregated Queries Across Microservices
* Product Search Aggregation
* Dashboard Aggregation
* Authentication Header Forwarding
* Request Orchestration

## User Service

Responsibilities:

* Registration
* Login
* Refresh Tokens
* RBAC
* User Management

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

# Notification System

The Notification Service consumes events from RabbitMQ and creates user notifications.

Supported Notifications:

- Order Created
- Payment Success
- Payment Failed

Features:

- Persistent Notification Storage
- Read / Unread Tracking
- Notification APIs
- Real-Time Delivery via WebSockets

---

# Analytics Dashboard

The Analytics Service aggregates:

- Total Revenue
- Total Orders
- Successful Payments
- Failed Payments
- Total Products

Metrics are updated asynchronously using RabbitMQ consumers.

Available APIs:

- GET /analytics/dashboard

Analytics is restricted to ADMIN users via RBAC.

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

## Production Build Support

Implemented:

* tsc-alias

to support TypeScript path alias resolution after compilation.

Examples:

```text
@controllers/*
@services/*
@repositories/*
@routes/*
```

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

### ORDER_EVENTS

Events:

* order.created
* order.cancelled

### PAYMENT_EVENTS

Events:

* payment.success
* payment.failed

### PRODUCT_EVENTS

Events:

* product.created
* product.updated

---

# Infrastructure Framework

The platform includes a shared infrastructure package used across all services.

Implemented Components:

* Infrastructure Bootstrap Framework
* Retry Framework
* Shared Redis Cache
* Shared RabbitMQ Messaging
* Shared Health Framework
* Shared Metrics Collection
* Shared Logger
* Shared Error Handling
* Shared gRPC Utilities
* Graceful Shutdown Framework

These components ensure consistent initialization, monitoring, communication, and shutdown behavior across all microservices.

---

# Technology Stack

## Backend

* Node.js
* TypeScript
* Express.js
- Prisma ORM
- PostgreSQL

## Databases

* PostgreSQL
* Redis
* Elasticsearch

## Messaging

* RabbitMQ

## APIs

* REST
* GraphQL
* gRPC

## Authentication

* JWT
* Refresh Tokens
* RBAC

## Real-Time Communication

- Socket.IO

## Validation

* Zod

## Logging

* Winston

## DevOps

* Docker
* Docker Compose

## Monitoring

- Prometheus
- Grafana

## Infrastructure Features:

* Shared RabbitMQ Connection Management
* Centralized Queue Configuration
* Shared Event Publishing
* Shared Event Consumption

---

# Folder Structure

```text
Distributed-Commerce-Platform/

├── api-gateway/
├── graphql-gateway/

├── services/
│   ├── user-service/
│   ├── product-service/
│   ├── cart-service/
│   ├── order-service/
│   ├── payment-service/
│   ├── inventory-service/
│   ├── search-service/
│   ├── analytics-service/
│   └── notification-service/

├── shared/
│   ├── bootstrap/
│   ├── cache/
│   ├── config/
│   ├── constants/
│   ├── enums/
│   ├── errors/
│   ├── grpc/
│   ├── health/
│   ├── messaging/
│   ├── metrics/
│   ├── middleware/
│   ├── shutdown/
|   └── utils/

├── tests/
│   ├── config/
│   ├── verification/
│   ├── workflows/
│   └── verify-system.ts

├── infrastructure/
├── observability/
└── scripts/
```

---

# Running The Project

## Environment Variables

Each service provides a `.env.example` file.

Before running the project, create the corresponding `.env` file.

Linux/macOS

```bash
cp services/product-service/.env.example services/product-service/.env
```

Windows PowerShell

```powershell
Copy-Item services/product-service/.env.example services/product-service/.env
```

Repeat this for every service before starting the platform.

## Install Dependencies

```bash
npm install
```

## Start Infrastructure

```bash
npm run infra:up
```

Starts:

* PostgreSQL
* Redis
* RabbitMQ
* Elasticsearch

## Docker Commands

Build Containers

```bash
docker compose build
```

Start Platform

```bash
docker compose up --build
```

Subsequent runs:

```bash
docker compose up
```

Stop Platform

```bash
docker compose down
```

Rebuild

```bash
docker compose up --build
```

## Start Development Environment

```bash
npm run dev
```

Starts:

* API Gateway
* GraphQL Gateway
* All Microservices
* Shared Package Watch Mode

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