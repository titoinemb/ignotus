#!/usr/bin/env bash
set -euo pipefail   # arrête le script en cas d’erreur

# 1️⃣ Appel de l’API
response=$(curl -s -X POST http://localhost:8080/account/create \
  -H "Content-Type: application/json" \
  -H "Accept: application/json")
# 5️⃣ Affichage complet du JSON (pour le débogage)
echo "$response"