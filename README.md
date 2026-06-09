# Distributed Commerce Platform

A distributed microservices-based commerce platform built with Node.js, TypeScript, PostgreSQL, Redis, RabbitMQ, Elasticsearch, GraphQL, and gRPC.

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

Rather than focusing on frontend development, the project emphasizes scalable backend architecture and real-world engineering practices.

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
* Shared Package Architecture
* Service Isolation
* Database Per Service Pattern
* Middleware Architecture
* Event-Driven Architecture

---

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

Implemented between:

* Order Service
* Product Service

Used for:

* Internal service communication
* Fast product lookup
* Protocol Buffer contracts

### RabbitMQ

Used for:

* Async workflows
* SAGA communication
* Analytics aggregation
* Search indexing

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

---

## Redis

Used for:

* Product caching
* Cart storage
* Fast data retrieval
* Cache invalidation

---

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

---

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

---

# Services

## API Gateway

Responsibilities:

* Authentication
* Authorization forwarding
* Rate limiting
* Request logging
* Routing

---

## GraphQL Gateway

Responsibilities:

* Unified API layer
* Aggregated queries
* Service orchestration

---

## User Service

Responsibilities:

* Registration
* Login
* Refresh Tokens
* RBAC
* User Management

---

## Product Service

Responsibilities:

* Product Management
* Category Management
* Redis Caching
* gRPC Server

---

## Cart Service

Responsibilities:

* Redis Cart Storage
* Cart Operations

---

## Order Service

Responsibilities:

* Order Lifecycle
* SAGA Coordination
* gRPC Product Lookup

---

## Payment Service

Responsibilities:

* Payment Processing
* Idempotency Handling
* Payment Events
* SAGA Integration

---

## Inventory Service

Responsibilities:

* Inventory Tracking
* Stock Management

---

## Search Service

Responsibilities:

* Elasticsearch Integration
* Product Search
* Autocomplete
* CQRS Read Model

---

## Analytics Service

Responsibilities:

* Revenue Aggregation
* Payment Metrics
* Product Metrics
* Dashboard APIs

---

## Notification Service

Responsibilities:

* Event-Based Notifications
* Future Email/SMS Integration

---

# Analytics Dashboard

The Analytics Service aggregates:

* Total Revenue
* Total Orders
* Successful Payments
* Failed Payments
* Total Products

Metrics are updated asynchronously using RabbitMQ consumers.

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

# Technology Stack

## Backend

* Node.js
* TypeScript
* Express.js

---

## Databases

* PostgreSQL
* Redis
* Elasticsearch

---

## Messaging

* RabbitMQ

---

## APIs

* REST
* GraphQL
* gRPC

---

## Authentication

* JWT
* Refresh Tokens
* RBAC

---

## Validation

* Zod

---

## Logging

* Winston

---

## Infrastructure

* Docker
* Docker Compose

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
├── infrastructure/
├── observability/
└── scripts/
```

---

# Running The Project

## Install Dependencies

```bash
npm install
```

---

## Start Infrastructure

```bash
npm run infra:up
```

Starts:

* PostgreSQL
* Redis
* RabbitMQ
* Elasticsearch

---

## Start Development Environment

```bash
npm run dev
```

Starts:

* API Gateway
* GraphQL Gateway
* All Microservices
* Shared Package Watch Mode