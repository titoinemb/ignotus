#!/bin/sh

response=$(curl -s -X POST http://localhost:8080/account/login \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"username": "Scottish-irish-peahens-accolades", "password": [
      "4^_Em<P4)*",
      "7vg:mUJCf!",
      "DD^Nt<Y3lA",
      "aq8GBYqH9)",
      "69%G3)uh?X",
      "8*A,)}?n&F",
      "@w_]nb628H",
      "-39d%Q3VaN",
      "yg{BC2Nn]$",
      "*Elqr3[EaC",
      "OUD-2VJ>}Z",
      "n+]3CYeh$k"
    ]}')
if [ "$(echo "$response" | jq -r '.message')" = "1" ]; then
 echo "✅ test for LOGIN ACCOUNT"
else
  echo "❌ test for LOGIN ACCOUNT"
fi

echo $response
# Scottish-irish-peahens-accolades
# 4^_Em<P4)* 7vg:mUJCf! DD^Nt<Y3lA aq8GBYqH9) 69%G3)uh?X 8*A,)}?n&F @w_]nb628H -39d%Q3VaN yg{BC2Nn]$ *Elqr3[EaC OUD-2VJ>}Z n+]3CYeh$k