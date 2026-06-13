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

### WebSockets

Implemented for:

- Real-time notifications

Used for:

- Order notifications
- Payment notifications
- Live user updates

---

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

# Health Monitoring

Every service exposes:

GET /health

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

## Real-Time Communication

- Socket.IO

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

---

## Verify Entire Platform

```bash
npm run verify-system
```

Expected Output:
```bash

- All Services Healthy
- RabbitMQ
- Redis
- Elasticsearch
- PostgreSQL

- Category Created
- Product Created
- Inventory Created
- Order Created
- Payment Successful
- Notification Generated
- Analytics Updated

- SYSTEM VERIFICATION PASSED
```