# Devcontainer

The Devcontainer CLI is a command-line tool that simplifies the management of development containers for projects. It enables quick setup and configuration of containerized development environments, ensuring consistent and reproducible environments across different machines and teams. The CLI allows definition of tools, dependencies, and configurations in a single file, facilitating easy provisioning of the same development environment with minimal effort. Using devcontainer/cli makes it easy to integrate devcontainer into a CI environment.

## Usage

Simply include the template in the `.gitlab-ci.yaml` configuration as below.

```yaml
include:
  - remote: https://gitlab.com/msclock/gitlab-ci-templates/-/raw/master/templates/Devcontainer.gitlab-ci.yml

# @Description devcontainer build
devcontainer_build:
  extends:
    - .devcontainer::build
  variables:
    IMAGE_NAME: "" # the quilified image name
    PUSH: "" # if push to registry
    PLATFORM: "" # build for some platform
    SUB_FOLDER: "." # .devcontainer folder or .devconntainer.json path

# Or # @Description make the use of devcontainer in custom job
.devcontainer::custom:
  extends:
    - .devcontainer
  script:
    - |
      echo "Below is the custom script"
```

More details can refer to related implementation.

- [templates/Devcontainer.gitlab-ci.yml](https://gitlab.com/msclock/gitlab-ci-templates/-/blob/master/templates/Devcontainer.gitlab-ci.yml)
