# syntax=docker/dockerfile:1

FROM python:3.11-slim@sha256:cc758519481092eb5a4a5ab0c1b303e288880d59afc601958d19e95b300bc86b

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
    pip install --no-cache-dir pre-commit
EOF
