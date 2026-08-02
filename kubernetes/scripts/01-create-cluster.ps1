Write-Host "============================="
Write-Host "Creating Kind Cluster"
Write-Host "============================="

kind create cluster --name commerce-cluster --config .\kind-config.yaml

kubectl cluster-info

kubectl get nodes