# syntax=docker/dockerfile:1

FROM python:3.11-slim@sha256:1bc6a3e9356d64ea632791653bc71a56340e8741dab66434ab2739ebf6aed29d

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
    pip install --no-cache-dir pre-commit
EOF
