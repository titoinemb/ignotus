#!/bin/sh

response=$(curl -s -X DELETE http://localhost:8080/account/edit \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"session":"VXNsNk4hpmaoIlg17ZZRM2CMXFbXsbnkegkYoCVcu3xTvm4E8K","username":"frayn-chlorhydric-lateroposition","datas":{"langue":"fr","cc":null,"skip":{"intro":true,"outro":true},"kidsmod":{"actif":false,"max":{"$numberLong":"7"}},"quality":"1080p"}}')

if [ "$(echo "$response" | jq -r '.message')" = "1" ]; then
  echo "✅ test for EDIT ACCOUNT"
else
  echo "❌ test for EDIT ACCOUNT"
fi

echo $response