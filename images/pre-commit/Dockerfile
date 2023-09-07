# syntax=docker/dockerfile:1

FROM python:3.11-slim@sha256:3ed2e301a71798d3b645dcc6cc6eb33cd4670a462d50fbad9700cd953ff897fa

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
    pip install --no-cache-dir pre-commit
EOF
