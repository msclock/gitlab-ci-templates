# syntax=docker/dockerfile:1

FROM node:20-buster-slim@sha256:b46831a79b7bd8d8d38b2bd50273b7611f0e168c840a97a1137a0cf243850086

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
EOF
