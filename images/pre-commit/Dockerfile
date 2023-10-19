# syntax=docker/dockerfile:1

FROM python:3.11-slim@sha256:d36d3fb6c859768ec62ac36ddc7397b5331d8dc05bc8823b3cac24f6ade97483

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
    pip install --no-cache-dir pre-commit
EOF
