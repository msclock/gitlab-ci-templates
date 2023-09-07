# syntax=docker/dockerfile:1

FROM python:3.11-slim@sha256:797bc8c5c7b5a9b6e7d73ce8b1c7d87c38ed5d53ec397341a32d80a6763ede32

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
    pip install --no-cache-dir pre-commit
EOF
