# syntax=docker/dockerfile:1

FROM node:20-buster-slim@sha256:afd2daa02c3244e0eedc12cca85d30035d8e751d783883d3148418d180e18f49

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
EOF
