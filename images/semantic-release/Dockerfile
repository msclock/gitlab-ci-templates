# syntax=docker/dockerfile:1

FROM node:20-buster-slim@sha256:37c7b00d74439eadc91d05ead1b54dd4ff9f12b1496c0df6523f3c306ae11fe6

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
EOF
