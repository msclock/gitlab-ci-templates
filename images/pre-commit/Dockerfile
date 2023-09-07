# syntax=docker/dockerfile:1

FROM python:3.11-slim@sha256:0593057b0df53babbbd6c2138b5059a6a9d124ea7ca09700d98e10a8a83019cb

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
    pip install --no-cache-dir pre-commit
EOF
