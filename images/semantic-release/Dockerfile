# syntax=docker/dockerfile:1

FROM node:20-buster-slim@sha256:6d887870e66c5766ac4b347d654a60d143454f1e18ede78fb68f1a636ee18d86

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
EOF
