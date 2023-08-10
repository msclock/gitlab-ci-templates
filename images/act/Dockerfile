# syntax=docker/dockerfile:1

FROM docker:latest

RUN <<-EOF
    apk update && apk add --no-cache bash git git-lfs
    wget -O - https://raw.githubusercontent.com/nektos/act/master/install.sh | sh -s - -b /usr/local/bin
EOF

COPY <<-EOF /root/.actrc
    -P ubuntu-latest=catthehacker/ubuntu:act-latest
    -P ubuntu-22.04=catthehacker/ubuntu:act-22.04
    -P ubuntu-20.04=catthehacker/ubuntu:act-20.04
    -P ubuntu-18.04=catthehacker/ubuntu:act-18.04
EOF

SHELL ["/bin/bash", "-c"]
