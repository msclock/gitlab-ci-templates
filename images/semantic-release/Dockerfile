# syntax=docker/dockerfile:1

FROM node:20-buster-slim@sha256:99ba7333fceeea4c8aae4f737e5ba6ca33069ad3808620afc458b6297233a338

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
EOF
