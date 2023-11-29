# syntax=docker/dockerfile:1

FROM buildpack-deps:jammy-curl

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        git \
        git-lfs \
        jq
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
EOF
