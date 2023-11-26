# pages-mkdocs

Deploy the mkdocs documentation to gitlab pages.

!!! info
    [MkDocs](https://www.mkdocs.org/) is a fast, simple and downright gorgeous static site generator that's geared towards building project documentation.

## Usage

Include the template in the `.gitlab-ci.yaml` configuration as below.

```yaml
include:
  # Use master branch or version-specific template
  - remote: https://gitlab.com/msclock/gitlab-ci-templates/-/raw/master/jobs/Pages-Mkdocs.gitlab-ci.yml
  - remote: https://gitlab.com/msclock/gitlab-ci-templates/-/raw/master/templates/Stages.gitlab-ci.yml


variables:
  # Specifies whether to enable the review of mkdocs pages
  PAGES_MKDOCS_REVIEW_ENABLE: '1'

._pages_common: &pages_common
  variables:
    # Use mike to deploy mkdocs versioning docs.
    VERSION_DOCS: '1'
    MKDOCS_EXTRA_PLUGINS: mkdocs-material mkdocs-git-revision-date-localized-plugin

# @Description review deploy pages with mkdocs
pages:review:
  <<: *pages_common

# @Description deploy with mkdocs
pages:
  <<: *pages_common
```

Then, edit and configure your project mkdocs.yml to accommodate documentation.

More details can refer to related implementation.

- [templates/Pages-Mkdocs.gitlab-ci.yml](https://gitlab.com/msclock/gitlab-ci-templates/-/raw/master/templates/Pages-Mkdocs.gitlab-ci.yml)
- [jobs/Pages-Mkdocs.gitlab-ci.yml](https://gitlab.com/msclock/gitlab-ci-templates/-/raw/master/jobs/Pages-Mkdocs.gitlab-ci.yml)
