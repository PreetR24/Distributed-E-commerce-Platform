Write-Host ""
Write-Host "============================="
Write-Host "Deploying Kubernetes Resources"
Write-Host "============================="

Write-Host ""
Write-Host "Namespace..."
kubectl apply -f .\namespaces

Write-Host ""
Write-Host "Storage..."
kubectl apply -f .\storage\

Write-Host ""
Write-Host "ConfigMaps..."
kubectl apply -f .\config\

Write-Host ""
Write-Host "Secrets..."
kubectl apply -f .\secrets\

Write-Host ""
Write-Host "Infrastructure..."
kubectl apply -k .\infrastructure\postgres\
kubectl apply -k .\infrastructure\redis\
kubectl apply -k .\infrastructure\rabbitmq\
kubectl apply -k .\infrastructure\elasticsearch\

Write-Host ""
Write-Host "Waiting for Infrastructure..."

kubectl rollout status statefulset/postgres -n dcp
kubectl rollout status statefulset/redis -n dcp
kubectl rollout status statefulset/rabbitmq -n dcp
kubectl rollout status statefulset/elasticsearch -n dcp

Write-Host ""
Write-Host "Microservices..."
kubectl apply -k .\services\user-service
kubectl apply -k .\services\product-service
kubectl apply -k .\services\cart-service
kubectl apply -k .\services\inventory-service
kubectl apply -k .\services\order-service
kubectl apply -k .\services\payment-service
kubectl apply -k .\services\search-service
kubectl apply -k .\services\analytics-service
kubectl apply -k .\services\notification-service

Write-Host ""
Write-Host "Gateways..."
kubectl apply -k .\gateway\api-gateway
kubectl apply -k .\gateway\graphql-gateway

Write-Host ""
Write-Host "===================================="
Write-Host "Deployment Completed Successfully"
Write-Host "===================================="

kubectl get pods -n dcp