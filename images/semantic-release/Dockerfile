# syntax=docker/dockerfile:1

FROM node:20-buster-slim@sha256:9cfd6fc00b22f317ed0fd8d07ac4091f6d36beb452602524e9041bed1edbbf98

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
EOF
