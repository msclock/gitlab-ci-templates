# syntax=docker/dockerfile:1

FROM node:20-buster-slim@sha256:37ee73cccdf34a6f68782323b11645fc21abdd421b3814401ddc88be04e00103

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
EOF
