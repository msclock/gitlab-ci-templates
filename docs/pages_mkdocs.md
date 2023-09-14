# pages-mkdocs

Deploy the mkdocs documentation to gitlab pages.

!!! info
    [MkDocs](https://www.mkdocs.org/) is a fast, simple and downright gorgeous static site generator that's geared towards building project documentation.

## Usage

Simply include the template in your `.gitlab-ci.yaml` configuration as below.

```yaml
stages:
  - test

include:
  - remote: https://gitlab.com/msclock/gitlab-ci-templates/-/raw/master/templates/Pages-Mkdocs.gitlab-ci.yml

# @Description deploy with mkdocs
pages:
  stage: deploy
  extends:
    - .pages-mkdocs
  variables:
    MKDOCS_EXTRA_PLUGINS: mkdocs-material mkdocs-git-revision-date-localized-plugin
  rules:
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
```

More details can refer to related implementation.

- [templates/Pages-Mkdocs.gitlab-ci.yml](https://gitlab.com/msclock/gitlab-ci-templates/-/raw/master/templates/Pages-Mkdocs.gitlab-ci.yml)
- [jobs/Pages-Mkdocs.gitlab-ci.yml](https://gitlab.com/msclock/gitlab-ci-templates/-/raw/master/jobs/Pages-Mkdocs.gitlab-ci.yml)
