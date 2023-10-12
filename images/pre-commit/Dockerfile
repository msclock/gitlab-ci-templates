# syntax=docker/dockerfile:1

FROM python:3.11-slim@sha256:c23277a76319a11520baf021a8d1dbf0597fe2db4154ab311f884c3d2e649d8d

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
    pip install --no-cache-dir pre-commit
EOF
