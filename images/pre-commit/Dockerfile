# syntax=docker/dockerfile:1

FROM python:3.11-slim@sha256:d11b9bd5e49ea7401753d78f4d3b56f3aec952b85b49bcae88981f0452818e0b

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
    pip install --no-cache-dir pre-commit
EOF
