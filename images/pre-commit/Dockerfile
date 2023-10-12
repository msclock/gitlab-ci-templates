# syntax=docker/dockerfile:1

FROM python:3.11-slim@sha256:1c6cf93e9d1c9ee3f54a230482628ba757a0c1ed8e9992c722afc5deba8768eb

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
    pip install --no-cache-dir pre-commit
EOF
