#!/usr/bin/env bash
response3=$(curl -s -X POST http://localhost:8080/account/wishlist/remove \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"session": "6rNN82m8ZFxoxWHXXpsjjp3gsdhNyd7YNC2LsDgqnqqotMRKFb", "username": "Scottish-irish-peahens-accolades", "data": {"table": "movies", "id": "169309a7a113af24d4bcb2382"}}')

if [ "$(echo "$response3" | jq -r '.message')" = "1" ]; then
  echo "✅ test for REMOVE ITEM IN WISHLIST"
else
  echo "❌ test for REMOVE ITEM IN WISHLIST"
fi

echo $response3