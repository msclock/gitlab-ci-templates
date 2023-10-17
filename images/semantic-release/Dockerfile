# syntax=docker/dockerfile:1

FROM node:20-buster-slim@sha256:25f465da7320394f6015b6e2539fa68b424a25c7b505c1ddffaaaa162a3f1512

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
EOF
