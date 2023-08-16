## gitlab-ci-templates

Templates for GitLab CI

You can include these in your project using the `include:` key, or simply by copying the files into your own projects.

## Available templates

### pre-commit

Verifies your `pre-commit`, applies automatic fixes, and commits autofix changes back to the source branch.

#### Usage

Simply include the template in your `.gitlab-ci.yaml` configuration.

```yaml
include:
  - remote: "https://gitlab.com/gitlab-aux/gitlab-ci-templates/raw/main/jobs/pre-commit.yml"

# @Description check codebase with pre-commit
pre-commit:
  extends:
    - .pre-commit
  variables:
    PRE_COMMIT_DEDUPLICATE_MR_AND_BRANCH: "false"
    PRE_COMMIT_AUTO_FIX_BRANCH_ONLY: "true"

```

Use pre-commit on a proxy

```yaml
include:
  - remote: "https://gitlab.com/gitlab-aux/gitlab-ci-templates/raw/main/jobs/pre-commit.yml"

# @Description check codebase with pre-commit
pre-commit:
  extends:
    - .pre-commit
    - .proxy_backend
  variables:
    PRE_COMMIT_DEDUPLICATE_MR_AND_BRANCH: "false"
    PRE_COMMIT_AUTO_FIX_BRANCH_ONLY: "true"
    # Set your proxy subscribe here
    CLASH_PROXY_SUB: "your clash subscribe"
```

To enable auto-fixes, you'll need to set the CI/CD variable `PRE_COMMIT_ACCESS_TOKEN` with an GitLab access token with `repository write` scope. A convenient way to do this is using [project access tokens](https://docs.gitlab.com/ee/user/project/settings/project_access_tokens.html) but any GitLab API token will work.


This template will include a job `pre-commit` which runs in the `.pre` stage.

**Configuration:**

There are several configurations available, which you can apply by setting CI/CD variables. The available configuration variables are as follows:

| Variable Name                        | Description                                                                                                                                                                                                                                                                                                                 | Default |
|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| PRE_COMMIT_ACCESS_TOKEN              | A GitLab API token with write access to the project. Required for automatic fixes.                                                                                                                                                                                                                                          |         |
| PRE_COMMIT_AUTO_FIX                  | Whether to apply, commit, and push autofixes to the source branch                                                                                                                                                                                                                                                           | 1       |
| PRE_COMMIT_SKIP_BRANCH_PIPELINE      | If set to a non-empty value, disables the job for branch pipelines                                                                                                                                                                                                                                                          |         |
| PRE_COMMIT_SKIP_MR_PIPELINE          | If set to a non-empty value, disables the job for merge request pipelines                                                                                                                                                                                                                                                   |         |
| PRE_COMMIT_DEDUPLICATE_MR_AND_BRANCH | Don't duplicate the pre-commit job on branch and MR pipelines. If an MR is open, the job will only run in the MR pipeline.<br>This assumes your project is using [Merge request pipelines](https://gitlab.com/ee/ci/pipelines/merge_request_pipelines.html)<br>To disable, set to any other value than the string `"true"`. | "true"  |
| PRE_COMMIT_AUTO_FIX_BRANCH_ONLY      | If set to a non-empty value, PRE_COMMIT_AUTOFIX will be disabled for non-branch pipelines.                                                                                                                                                                                                                                  |         |
| PRE_COMMIT_AUTO_FIX_MR_ONLY          | If set to a non-empty value, PRE_COMMIT_AUTOFIX will be disabled for non-MR pipelines.                                                                                                                                                                                                                                      |         |

By default, the template assumes you are using pipelines for merge requests. If you are not using pipelines for merge requests (branch pipelines only), consider unsetting `PRE_COMMIT_DEDUPLICATE_MR_AND_BRANCH` and setting `PRE_COMMIT_AUTO_FIX_BRANCH_ONLY`.

### devcontainer

Using devcontainer/cli makes it easy to integrate devcontainer into a CI environment.

#### Usage

Simply include the template in your `.gitlab-ci.yaml` configuration as below.

```yaml
include:
  - remote: "https://gitlab.com/gitlab-aux/gitlab-ci-templates/raw/main/templates/common.yml"

# @Description devcontainer build
devcontainer_build:
  extends:
    - .devcontainer_build
  variables:
    IMAGE_NAME: "" # the quilified image name
    PUSH: "" # if push to registry
    PLATFORM: "" # build for some platform
    SUB_FOLDER: "." # .devcontainer folder or .devconntainer.json path
```

### act

Use act to bridge github actions into gitlab runner CI environment.

#### Usage

Simply include the template in your `.gitlab-ci.yaml` configuration as below.

```yaml
include:
  - remote: "https://gitlab.com/gitlab-aux/gitlab-ci-templates/raw/main/templates/common.yml"

# @Description act
act:
  extends:
    - .act
  script:
    - |
      act -j <job-id>
```

**Example:**

The following demonstrates how to bridge github actions into gitlab CI environment painlessly and simply.

```bash
# Clone example repoository
git clone https://github.com/microsoft/vscode-remote-try-rust && cd vscode-remote-try-rust
# Add gitlab action job for pre-build rust image
cat >>.github/workflows/pre-build.yml<<'EOF'
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
          imageName: <your dockerhub organization>/rust
          cacheFrom: <your dockerhub organization>/rust
          push: always
          runCmd: cargo run
EOF

# Add gitlab ci for pre-build rust image
cat >>.gitlab-ci.yml<<EOF
stages:
  - prepare

include:
  - remote: "https://gitlab.com/gitlab-aux/gitlab-ci-templates/raw/main/templates/common.yml"

# @Description pre-build rust image and push to docker.io
act:
  stage: prepare
  extends:
    - .act
  script:
    - |
      # Pass the secrets of docker authentication by github action job build
      act -j build -v -s DOCKER_REGISTRY_ID=<your dockerhub id> -s DOCKER_REGISTRY_PASS=<your dockerhub password>
EOF
```

### semantic-release

Fully automated version management and package publishing on ci.

#### Usage

The following demonstrates how to publish release with semantic-release with gitlab CI environment painlessly and simply.

```yaml
stages:
  - release

include:
  - remote: "https://gitlab.com/gitlab-aux/gitlab-ci-templates/raw/main/templates/common.yml"

# @Description release with semantic-release
release:
  stage: release
  extends:
    - .release
```
