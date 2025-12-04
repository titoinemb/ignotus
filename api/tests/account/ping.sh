#!/usr/bin/env bash
response=$(curl -s -X POST http://localhost:8080/ping \
  -H "Content-Type: application/json" \
  -H "Accept: application/json")
if [ "$(echo "$response" | jq -r '.message')" = "pong" ]; then
 echo "✅ test for LOGIN ACCOUNT"
else
  echo "❌ test for LOGIN ACCOUNT"
fi

echo $response