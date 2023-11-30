# syntax=docker/dockerfile:1

FROM python:3.11-slim@sha256:23f52205321f806c2cc742cefbf837e0d25101388c043e860c7817985230565c

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
    pip install --no-cache-dir pre-commit
EOF
