# syntax=docker/dockerfile:1

FROM ghcr.io/dreamacro/clash-premium:latest

RUN <<-EOF
    apk update && apk add --no-cache bash
EOF

EXPOSE 7890

SHELL ["/bin/bash", "-c"]
