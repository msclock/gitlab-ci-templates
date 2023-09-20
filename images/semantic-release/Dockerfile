# syntax=docker/dockerfile:1

FROM node:20-buster-slim@sha256:7335a8fbad9037dcdd1cc7f9581aa71fe2914c6921c88cf759556885231c3e91

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
EOF
