# Sphinx

Deploy the versioned sphinx documentation to gitlab pages.

!!! info
    [Sphinx](https://www.sphinx-doc.org/) makes it easy to create intelligent and beautiful documentation..

## Usage

Include the template in the `.gitlab-ci.yaml` configuration as below.

```yaml
include:
  # Use master branch or version-specific template
  - remote: https://gitlab.com/msclock/gitlab-ci-templates/-/raw/master/jobs/Pages-Sphinx.gitlab-ci.yml
  - remote: https://gitlab.com/msclock/gitlab-ci-templates/-/raw/master/templates/Stages.gitlab-ci.yml


variables:
  # Specifies whether to enable the review of mkdocs pages
  PAGES_SPHINX_REVIEW_ENABLE: '1'

._pages_common: &pages_common
  variables:
    # Use mike to deploy sphinx versioning docs.
    VERSION_DOCS: '1'
    EXTRA_PLUGINS: furo myst_parser sphinx-copybutton

# @Description review deploy pages
pages:review:
  <<: *pages_common

# @Description deploy pages
pages:
  <<: *pages_common
```

Then, edit and configure your project docs/conf.py to accommodate documentation.

More details can refer to related implementation.

- [templates/Pages-Sphinx.gitlab-ci.yml](https://gitlab.com/msclock/gitlab-ci-templates/-/blob/master/templates/Pages-Sphinx.gitlab-ci.yml)
- [jobs/Pages-Sphinx.gitlab-ci.yml](https://gitlab.com/msclock/gitlab-ci-templates/-/blob/master/jobs/Pages-Sphinx.gitlab-ci.yml)
