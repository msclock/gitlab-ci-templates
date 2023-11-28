# Make Changes

This GitLab CI template, named .make_changes, is designed to automate changes made to a codebase. This template automates the process of making changes to a codebase and provides flexibility through configurable parameters to adapt to different CI/CD workflows.

## Usage

Simply include the template in the `.gitlab-ci.yaml` configuration as below.

```yaml
include:
  - remote: https://gitlab.com/msclock/gitlab-ci-templates/-/raw/master/templates/Make-Changes.gitlab-ci.yml

# @Description make changes
make_changes_to_codebase:
  extends:
    - .make_changes
  variables:
    MAKE_CHANGES_MSG: 'ci: automated commit changes from CI job'
    MAKE_CHANGES_ON_PR: '1'
    MAKE_CHANGES_FINISH: ''
  script:
    - |
      echo "Make changes" >> README.md
    - !reference [.make_changes, script]
```


More details can refer to related implementation.

- [templates/Make-Changes.gitlab-ci.yml](https://gitlab.com/msclock/gitlab-ci-templates/-/raw/master/templates/Make-Changes.gitlab-ci.yml)
