# syntax=docker/dockerfile:1

FROM python:3.11-slim@sha256:110609b2b904da7fb1226a92b6c02af5d6d599c5993f6194d1366d0d6a8a8295

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
    pip install --no-cache-dir pre-commit
EOF
