# syntax=docker/dockerfile:1

FROM node:20-buster-slim@sha256:a0a61787d8a3e68bcaa7182fa7f7e4964a29c8c35823d0aeea5feab0fc53402c

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
EOF
