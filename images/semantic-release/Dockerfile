# syntax=docker/dockerfile:1

FROM node:20-buster-slim@sha256:88344327fc9ca435b2cdb2fa95d64f9525924811476ec5af7fa1e3e965f4271c

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
EOF
