# syntax=docker/dockerfile:1

FROM python:3.11-slim@sha256:a9f8b340792f0d3f991427dde0e0aa231500d2d5e4c02346fd2bff549189b758

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
    pip install --no-cache-dir pre-commit
EOF
