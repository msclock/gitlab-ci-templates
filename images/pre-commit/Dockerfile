# syntax=docker/dockerfile:1

FROM python:3.11-slim@sha256:cfd7ed5c11a88ce533d69a1da2fd932d647f9eb6791c5b4ddce081aedf7f7876

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
    pip install --no-cache-dir pre-commit
EOF
