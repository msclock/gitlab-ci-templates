# syntax=docker/dockerfile:1

FROM python:3.11-slim@sha256:54382be9d1d8a0e042e17b123485830f896d81414288d5a755dde9bec71b1a84

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
    pip install --no-cache-dir pre-commit
EOF
