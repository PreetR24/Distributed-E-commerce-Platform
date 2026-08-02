param(
    [Parameter(Mandatory = $true)]
    [string]$Service
)

$ProjectRoot = Resolve-Path "$PSScriptRoot\..\.."
Set-Location $ProjectRoot

$cluster = "commerce-cluster"

$Projects = @{
    "api-gateway"          = ".\api-gateway"
    "graphql-gateway"      = ".\graphql-gateway"
    "user-service"         = ".\services\user-service"
    "product-service"      = ".\services\product-service"
    "cart-service"         = ".\services\cart-service"    
    "order-service"        = ".\services\order-service"
    "inventory-service"    = ".\services\inventory-service"
    "payment-service"      = ".\services\payment-service"
    "notification-service" = ".\services\notification-service"
    "search-service"       = ".\services\search-service"
    "analytics-service"    = ".\services\analytics-service"
}

if (-not $Projects.ContainsKey($Service)) {
    Write-Host "Unknown service: $Service" -ForegroundColor Red
    exit 1
}

Write-Host "Building $Service..." -ForegroundColor Cyan

docker build `
    -f "$($Projects[$Service])\Dockerfile" `
    -t "distributed-commerce-platform-$($Service):latest" `
    .

if ($LASTEXITCODE -ne 0) {
    Write-Host "Docker build failed." -ForegroundColor Red
    exit 1
}

Write-Host "Loading image into Kind..." -ForegroundColor Cyan

kind load docker-image `
    "distributed-commerce-platform-$($Service):latest" `
    --name $cluster

if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to load image into Kind." -ForegroundColor Red
    exit 1
}

Write-Host "Restarting Deployment..." -ForegroundColor Cyan

kubectl rollout restart deployment/$Service -n dcp

kubectl rollout status deployment/$Service -n dcp

Write-Host ""
Write-Host "$Service updated successfully!" -ForegroundColor Green