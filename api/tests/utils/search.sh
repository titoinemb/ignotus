response4=$(curl -s -X GET http://localhost:8080/search \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"search": "F1"}')
if [ "$(echo "$response4" | jq -r '.message')" = "1" ]; then
  echo "✅ test for ITEM"
else
  echo "❌ test for ITEM"
fi

echo $response4