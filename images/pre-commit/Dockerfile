# syntax=docker/dockerfile:1

FROM python:3.11-slim@sha256:fda05d00fc47a4133a1b65bdd89007facf4ec0fa5fb737a35652699b18029830

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
    pip install --no-cache-dir pre-commit
EOF
