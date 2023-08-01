# syntax=docker/dockerfile:1

FROM docker:latest

RUN <<-EOF
    set -x
    apk update && apk add --no-cache bash npm nodejs git git-lfs
    npm install -g @devcontainers/cli
    npm cache clean --force
EOF

SHELL ["/bin/bash", "-c"]
