When metrics is not working due to kube proxy
kubectl rollout restart daemonset/kube-proxy -n kube-system
kubectl rollout restart deployment/metrics-server -n kube-system