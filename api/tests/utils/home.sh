response4=$(curl -s -X GET http://localhost:8080/home \
  -H "Content-Type: application/json" \
  -H "Accept: application/json")
if [ "$(echo "$response4" | jq -r '.message')" = "1" ]; then
  echo "✅ test for HOME"
else
  echo "❌ test for HOME"
fi

echo $response4