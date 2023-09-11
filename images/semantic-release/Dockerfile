# syntax=docker/dockerfile:1

FROM node:20-buster-slim@sha256:ac8266bc02cbb93d91a3a81badc0d90d9652d581394201d8d45b4558e59431c5

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
EOF
