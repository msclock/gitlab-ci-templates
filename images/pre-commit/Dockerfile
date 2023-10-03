# syntax=docker/dockerfile:1

FROM python:3.11-slim@sha256:d6d9b7525ac9329b95eea521214f020e79f2eac0456f54a974f20051bc019bb8

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
    pip install --no-cache-dir pre-commit
EOF
