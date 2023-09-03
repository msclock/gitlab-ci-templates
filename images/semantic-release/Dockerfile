# syntax=docker/dockerfile:1

FROM node:20-buster-slim@sha256:0a813cfd8330270922f4c027de285427d74906b523227a85a031436e78342909

RUN <<-EOF
    apt update && apt install -y --no-install-recommends \
        apt-transport-https \
        ca-certificates \
        git \
        git-lfs \
        curl
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
EOF
