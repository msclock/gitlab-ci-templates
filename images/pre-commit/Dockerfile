# syntax=docker/dockerfile:1

FROM python:3.11-slim@sha256:637774748f62b832dc11e7b286e48cd716727ed04b45a0322776c01bc526afc3

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
    pip install --no-cache-dir pre-commit
EOF
