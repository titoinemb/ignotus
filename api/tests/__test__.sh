#!/bin/sh

if ! command -v jq > /dev/null; then
  echo "❌ jq n'est pas installé. Veuillez l'installer pour parse les réponses JSON."
  exit 1
fi
