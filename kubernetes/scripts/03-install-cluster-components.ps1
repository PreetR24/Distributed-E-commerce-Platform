Write-Host ""
Write-Host "==========================================="
Write-Host "Installing Cluster Components"
Write-Host "==========================================="

# ===========================================
# Metrics Server
# ===========================================

Write-Host ""
Write-Host "Installing Metrics Server..."

kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml

Write-Host ""
Write-Host "Configuring Metrics Server..."

# kubectl patch deployment metrics-server `
#     -n kube-system `
#     --type=strategic `
#     -p '{"spec":{"template":{"spec":{"containers":[{"name":"metrics-server","args":["--cert-dir=/tmp","--secure-port=10250","--kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname","--kubelet-use-node-status-port","--metric-resolution=15s","--kubelet-insecure-tls"]}]}}}}'

kubectl apply -f .\scrpits\metrics-server.yaml

Write-Host ""
Write-Host "Waiting for Metrics Server..."

kubectl rollout status deployment/metrics-server -n kube-system

Write-Host ""
Write-Host "Verifying Metrics Server..."

kubectl get pods -n kube-system | findstr metrics-server

kubectl top nodes

# ===========================================
# NGINX Ingress Controller
# ===========================================

Write-Host ""
Write-Host "Installing NGINX Ingress Controller..."

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml

Write-Host ""
Write-Host "Waiting for NGINX Ingress Controller..."

kubectl rollout status deployment/ingress-nginx-controller -n ingress-nginx

Write-Host ""
Write-Host "Verifying NGINX Ingress Controller..."

kubectl get pods -n ingress-nginx

kubectl get svc -n ingress-nginx

kubectl get ingressclass

# ===========================================
# Hosts File Reminder
# ===========================================

Write-Host ""
Write-Host "=============================================="
Write-Host "MANUAL STEP REQUIRED (One-Time Only)"
Write-Host "=============================================="
Write-Host ""
Write-Host "Open the following file as Administrator:"
Write-Host "C:\Windows\System32\drivers\etc\hosts"
Write-Host ""
Write-Host "Ensure it contains:"
Write-Host "127.0.0.1 commerce.local"
Write-Host ""
Write-Host "Then verify:"
Write-Host "ping commerce.local"
Write-Host ""

Write-Host ""
Write-Host "==========================================="
Write-Host "Cluster Components Installed Successfully"
Write-Host "==========================================="