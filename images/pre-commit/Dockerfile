# syntax=docker/dockerfile:1

FROM python:3.11-slim@sha256:94d0ecae9d4407bc8f4d02627c02a4174cbc03073bdba48cd9615507056268ba

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
    pip install --no-cache-dir pre-commit
EOF
