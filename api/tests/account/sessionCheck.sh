#!/bin/sh
response3=$(curl -s -X GET http://localhost:8080/account/checksession \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"session": "VXNsNk4hpmaoIlg17ZZRM2CMXFbXsbnkegkYoCVcu3xTvm4E8K", "username": "frayn-chlorhydric-lateroposition"}')
if [ "$(echo "$response3" | jq -r '.message')" = "1" ]; then
  echo "✅ test for SESSION CHECKING ACCOUNT"
else
  echo "❌ test for SESSION CHECKING ACCOUNT"
fi