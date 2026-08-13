Write-Host "Deleting Namespace..."

kubectl delete namespace dcp --ignore-not-found

Write-Host "Done."