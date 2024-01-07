# syntax=docker/dockerfile:1

FROM node:20-buster-slim@sha256:d0acb10d0062944abd19d56d79f4953de6bba167b04c961c6eba6054fbc4990c

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
EOF
