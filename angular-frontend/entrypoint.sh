#!/bin/sh

# Set default if env var not passed
: "${API_BASE_URL:=http://localhost:8888/api}"

# Inject environment variables into a config file for AngularJS to use
cat <<EOF > /usr/share/nginx/html/config.json
{
  "API_BASE_URL": "${API_BASE_URL}"
}
EOF

# Optional: You can echo the config for debug/logging
echo "Generated config.json with API_BASE_URL=${API_BASE_URL}"

# Start nginx in the foreground
exec nginx -g "daemon off;"
