# syntax=docker/dockerfile:1

FROM python:3.9-slim

RUN <<-EOF
    apt update && apt install -y --no-install-recommends git git-lfs 
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
    pip install --no-cache-dir pre-commit
EOF
