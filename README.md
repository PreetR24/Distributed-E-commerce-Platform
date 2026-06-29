![Build](https://github.com/PreetR24/Distributed-E-commerce-Platform/actions/workflows/build.yml/badge.svg)

![Docker](https://github.com/PreetR24/Distributed-E-commerce-Platform/actions/workflows/docker.yml/badge.svg)

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
- Dockerized Development Environment
- GitHub Actions CI Pipeline

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

## Cart Service

Responsibilities:

* Redis Cart Storage
* Cart Operations

## Order Service

Responsibilities:

* Order Lifecycle
* SAGA Coordination
* gRPC Product Lookup

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

# Observability & Monitoring

## Observability Stack

Implemented production-style observability using:

* Prometheus
* Grafana
* PromQL
* Custom Metrics
* Business KPI Monitoring
* Infrastructure Monitoring

## Metrics Collection

### API Metrics

Collected automatically across all services:

* HTTP Request Count
* Request Duration
* Response Status Codes
* Route-Level Metrics

### Business Metrics

Implemented custom commerce metrics:

* Orders Created
* Successful Payments
* Failed Payments

### Infrastructure Metrics

Implemented infrastructure visibility for:

* Redis Cache Hits
* Redis Cache Misses
* RabbitMQ Events Published
* RabbitMQ Events Consumed

## Metrics Endpoints

Every service exposes:

```http
GET /metrics
```

Services monitored:

* API Gateway
* User Service
* Product Service
* Cart Service
* Order Service
* Payment Service
* Inventory Service
* Search Service
* Analytics Service
* Notification Service

## Prometheus

Configured centralized metrics collection from all platform services.

Provides:

* Service Monitoring
* Infrastructure Monitoring
* Business Monitoring

## Grafana

Created centralized dashboards for:

### API Monitoring

* Request Volume
* Request Rate
* Top Routes

### Business Monitoring

* Orders Created
* Successful Payments
* Failed Payments

### Infrastructure Monitoring

* Redis Cache Performance
* RabbitMQ Throughput

### Service Monitoring

* Service Availability
* Health Status

## Production Monitoring Concepts

Implemented:

* Metrics Instrumentation
* Request Monitoring
* Business KPI Tracking
* Infrastructure Visibility
* Service Health Monitoring
* Dashboarding
* PromQL Querying

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