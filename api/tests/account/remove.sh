#!/bin/sh

response=$(curl -s -X DELETE http://localhost:8080/account/delete \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"session": "CukNurEkn78F7DQVGPAZFaI1mVeDS3f3J5Aik7hjgBagpU7Ko4", "username": "prostatitis-misbill-Coronus"}')
if [ "$(echo "$response7" | jq -r '.message')" = "1" ]; then
  echo "✅ test for REMOVE ACCOUNT"
else
  echo "❌ test for REMOVE ACCOUNT"
fi

echo "$response"