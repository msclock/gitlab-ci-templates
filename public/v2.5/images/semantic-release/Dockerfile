# syntax=docker/dockerfile:1

FROM node:20-buster-slim@sha256:3f3849dc89f5f5e1b2d11211eab177289e9eca1296a8a149111260813271c549

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
EOF
