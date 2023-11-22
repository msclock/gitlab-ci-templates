# syntax=docker/dockerfile:1

FROM node:20-buster-slim@sha256:050917322f944bd3d42d5d654cb1f4865fe2680c9981e9197fcadea770bb6003

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
EOF
