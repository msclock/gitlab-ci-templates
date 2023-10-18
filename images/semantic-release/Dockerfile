# syntax=docker/dockerfile:1

FROM node:20-buster-slim@sha256:4dff6bf898edc18bff318ccbdf27a755e998fa2b195d02287204db15a2b34b5b

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
EOF
