#!/bin/sh

echo "Injecting environment variables into env.js..."
envsubst < /usr/share/nginx/html/assets/env.js > /usr/share/nginx/html/assets/env.js

exec "$@"
echo "Starting Nginx..."