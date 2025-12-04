response4=$(curl -s -X POST http://localhost:8080/item \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"table": "movies", "id": "69309a79113af24d4bcb2381"}')
if [ "$(echo "$response4" | jq -r '.message')" = "1" ]; then
  echo "✅ test for ITEM"
else
  echo "❌ test for ITEM"
fi

echo $response4