# syntax=docker/dockerfile:1

FROM node:20-buster-slim@sha256:39212e638e87c9886413a44d452d860fc35ca63ca4cf9485ea278c9418ee50db

RUN <<-EOF
    apt update && apt install -y --no-install-recommends apt-transport-https \
        ca-certificates \
        curl \
        git \
        git-lfs
    rm -f /var/cache/apt/archives/*.deb /var/cache/apt/archives/partial/*.deb /var/cache/apt/*.bin || true
EOF
