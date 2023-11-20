# syntax=docker/dockerfile:1

FROM node:20-buster-slim@sha256:973c7d99539aa3ec40aed4e5d29484ff130bdb706dac09a7d673317c483b89b2

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
EOF
