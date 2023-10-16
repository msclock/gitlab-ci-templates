# syntax=docker/dockerfile:1

FROM node:20-buster-slim@sha256:17c6a51ce5f58331f415b52c14c4ae6be1f8eefcb19d190a886a727669b95b37

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
EOF
