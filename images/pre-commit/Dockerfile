# syntax=docker/dockerfile:1

FROM alpine:latest

RUN <<-EOF
    apk update && apk add --no-cache bash python3 py3-pip git git-lfs
    pip install --no-cache-dir pre-commit
EOF

SHELL ["/bin/bash", "-c"]
