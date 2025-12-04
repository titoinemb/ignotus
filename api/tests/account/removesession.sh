response5=$(curl -s -X DELETE http://localhost:8080/account/removesession \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"session": "VXNsNk4hpmaoIlg17ZZRM2CMXFbXsbnkegkYoCVcu3xTvm4E8K", "username": "frayn-chlorhydric-lateroposition", "sessionid": "0"}')
if [ "$(echo "$response5" | jq -r '.message')" = "1" ]; then
  echo "✅ test for REMOVE SESSION"
else
  echo "❌ test for REMOVE SESSION"
fi
