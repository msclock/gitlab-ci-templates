# pages-mkdocs

Deploy the mkdocs documentation to gitlab pages.

## Usage

Simply include the template in your `.gitlab-ci.yaml` configuration as below.

```yaml
stages:
  - test

include:
  - remote: "https://gitlab.com/msclock/gitlab-ci-templates/raw/main/templates/common.yml"

# @Description deploy with mkdocs
# This is the current project configuration for mkdocs
pages:
  stage: deploy
  extends:
    - .pages-mkdocs
  variables:
    MKDOCS_EXTRA_PLUGINS: mkdocs-material mkdocs-git-revision-date-localized-plugin
  rules:
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
```

## Configuration

The available configuration variables can be set as CI/CD variables:

| Variable Name        | Description                                          | Default                    |
|----------------------|------------------------------------------------------|----------------------------|
| GITLAB_TOKEN         | A GitLab API token with write access to the project. |                            |
| PIP_CACHE_DIR        | The pip cache                                        | $CI_PROJECT_DIR/.cache/pip |
| PAGES_BRANCH         | The branch to deploy when enable the VRESION_DOCS.   | gl-pages                   |
| VRESION_DOCS         | Specifies whether to use mike to deploy mkdocs docs. |                            |
| MKDOCS_EXTRA_PLUGINS | Specifies the extra mkdocs plugins.                  |                            |
