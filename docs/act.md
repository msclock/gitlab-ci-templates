# act (Experimental)

Act is a tool that allows local execution of GitHub Actions workflows. It creates a Docker container to simulate the GitHub Actions runner environment, enabling developers to test and debug workflows without committing and pushing code. Use act to bridge github actions into gitlab runner CI environment.

!!! warning
    This is an experimental feature.

## Usage

Simply include the template in the `.gitlab-ci.yaml` configuration as below.

```yaml
include:
  - remote: "https://gitlab.com/msclock/gitlab-ci-templates/raw/main/templates/common.yml"

# @Description act
act:
  extends:
    - .act
  script:
    - |
      act -j <job-id>
```

The following demonstrates how to bridge github actions into gitlab CI environment painlessly and simply.

```bash
# Clone example repoository
git clone https://github.com/microsoft/vscode-remote-try-rust && cd vscode-remote-try-rust

# Add gitlab action job for pre-build rust image
cat >.github/workflows/pre-build.yml<<'EOF'
name: pre-rust-image-build
on:
  pull_request:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:

      - name: Checkout (GitHub)
        uses: actions/checkout@v3
      - name: Login to DockerHub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_REGISTRY_ID }}
          password: ${{ secrets.DOCKER_REGISTRY_PASS }}
      - name: Pre-build image and run cargo run in dev container
        uses: devcontainers/ci@v0.3
        with:
          imageName: <dockerhub organization>/rust
          cacheFrom: <dockerhub organization>/rust
          push: always
          runCmd: cargo run
EOF

# Add gitlab ci for pre-build rust image
cat >.gitlab-ci.yml<<EOF
stages:
  - prepare

include:
  - remote: "https://gitlab.com/msclock/gitlab-ci-templates/raw/main/templates/common.yml"

# @Description pre-build rust image and push to docker.io
act:
  stage: prepare
  extends:
    - .act
  script:
    - |
      # Pass the secrets of docker authentication by github action job build
      act -j build -v -s DOCKER_REGISTRY_ID=<dockerhub id> -s DOCKER_REGISTRY_PASS=<dockerhub password>
EOF
```

## Configuration

No configuration is required at the moment.
