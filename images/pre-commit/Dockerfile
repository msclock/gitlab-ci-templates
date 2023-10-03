# syntax=docker/dockerfile:1

FROM python:3.11-slim@sha256:8fcf215ec209b0cba4048197d3a78544faa69561b03a35528899fd9b93fe2990

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
    pip install --no-cache-dir pre-commit
EOF
