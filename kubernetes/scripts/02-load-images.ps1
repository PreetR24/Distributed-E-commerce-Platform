Write-Host "============================="
Write-Host "Loading Docker Images"
Write-Host "============================="

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

Write-Host ""
Write-Host "Images Loaded Successfully"