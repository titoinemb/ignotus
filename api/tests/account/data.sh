#!/usr/bin/env bash
response4=$(curl -s -X GET http://localhost:8080/account/datas \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"session": "6rNN82m8ZFxoxWHXXpsjjp3gsdhNyd7YNC2LsDgqnqqotMRKFb", "username": "Scottish-irish-peahens-accolades"}')
if [ "$(echo "$response4" | jq -r '.message')" = "1" ]; then
  echo "✅ test for ACCOUNT DATA"
else
  echo "❌ test for ACCOUNT DATA"
fi

echo $response4