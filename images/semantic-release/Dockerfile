# syntax=docker/dockerfile:1

FROM node:20-buster-slim@sha256:10400f41ebd091b86a555451e94943f75533d55836419077c6bf9439e0b6fb9c

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
EOF
