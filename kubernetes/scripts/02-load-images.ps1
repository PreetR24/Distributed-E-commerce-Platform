Write-Host "============================="
Write-Host "Loading Docker Images"
Write-Host "============================="

# ===========================================
# Application Images
# ===========================================

kind load docker-image distributed-commerce-platform-api-gateway:latest --name commerce-cluster
kind load docker-image distributed-commerce-platform-graphql-gateway:latest --name commerce-cluster

kind load docker-image distributed-commerce-platform-user-service:latest --name commerce-cluster
kind load docker-image distributed-commerce-platform-product-service:latest --name commerce-cluster
kind load docker-image distributed-commerce-platform-order-service:latest --name commerce-cluster
kind load docker-image distributed-commerce-platform-inventory-service:latest --name commerce-cluster
kind load docker-image distributed-commerce-platform-payment-service:latest --name commerce-cluster
kind load docker-image distributed-commerce-platform-notification-service:latest --name commerce-cluster
kind load docker-image distributed-commerce-platform-search-service:latest --name commerce-cluster
kind load docker-image distributed-commerce-platform-analytics-service:latest --name commerce-cluster
kind load docker-image distributed-commerce-platform-cart-service:latest --name commerce-cluster

# ===========================================
# Infrastructure Images
# ===========================================

kind load docker-image postgres:16 --name commerce-cluster
kind load docker-image redis:7 --name commerce-cluster
kind load docker-image rabbitmq:3-management --name commerce-cluster
kind load docker-image elasticsearch:8.13.4 --name commerce-cluster

# ===========================================
# Cluster Components
# ===========================================

kind load docker-image registry.k8s.io/metrics-server/metrics-server:v0.9.0 --name commerce-cluster
kind load docker-image registry.k8s.io/ingress-nginx/controller:v1.15.1 --name commerce-cluster
kind load docker-image registry.k8s.io/ingress-nginx/kube-webhook-certgen:v20250619-65c859f6 --name commerce-cluster

Write-Host ""
Write-Host "Images Loaded Successfully"