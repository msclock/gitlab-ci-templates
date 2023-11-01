# syntax=docker/dockerfile:1

FROM node:20-buster-slim@sha256:11efdfc01506ac049c33b0f615a7ca84225ce812d93c66be735b6fce44a86fda

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
EOF
