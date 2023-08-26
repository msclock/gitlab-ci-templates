# devcontainer

The Devcontainer CLI is a command-line tool that simplifies the management of development containers for projects. It enables quick setup and configuration of containerized development environments, ensuring consistent and reproducible environments across different machines and teams. The CLI allows definition of tools, dependencies, and configurations in a single file, facilitating easy provisioning of the same development environment with minimal effort. Using devcontainer/cli makes it easy to integrate devcontainer into a CI environment.

## Usage

Simply include the template in the `.gitlab-ci.yaml` configuration as below.

```yaml
include:
  - remote: "https://gitlab.com/msclock/gitlab-ci-templates/raw/main/templates/common.yml"

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

## Configuration

The available configuration variables can be set as CI/CD variables:

| Variable Name | Description                                                                          | Default |
|---------------|--------------------------------------------------------------------------------------|---------|
| IMAGE_NAME    | Specifies the quilified image name such as docker.io/name:tag. This is **Required**. |         |
| PUSH          | If set to a non-empty value, push the image to dockerhub.                            |         |
| PLATFORM      | Specifies the build target image platform.                                           |         |
| SUB_FOLDER    | Specifies .devcontainer folder or .devconntainer.json path.                          |         |
