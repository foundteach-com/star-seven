#!/bin/bash
API_URL="http://localhost:3001"

echo "1. Registering new user (admin)..."
curl -X POST $API_URL/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@example.com", "password": "password123", "role": "ADMIN", "name": "Admin User"}'

echo -e "\n\n2. Logging in..."
LOGIN_RESPONSE=$(curl -s -X POST $API_URL/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@example.com", "password": "password123"}')

echo "Response: $LOGIN_RESPONSE"

TOKEN=$(echo $LOGIN_RESPONSE | grep -o '"access_token":"[^"]*' | grep -o '[^"]*$')

if [ -z "$TOKEN" ]; then
  echo -e "\n❌ Login failed!"
  exit 1
else
  echo -e "\n✅ Login successful! Token: $TOKEN"
fi
