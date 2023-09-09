# make_changes

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

## Configuration

The available configuration variables can be set as CI/CD variables:

| Variable Name       | Description                                                                                                             | Default |
|---------------------|-------------------------------------------------------------------------------------------------------------------------|---------|
| MAKE_CHANGES_MSG    | Allows customization of the commit message. This is **Required**.                                                       |         |
| MAKE_CHANGES_FINISH | Controls the exit behavior[^1] of the CI job.                                                                           |         |
| MAKE_CHANGES_ON_PR  | When set, creates a temporary branch and pushes the changes to it, along with creating a merge request for code review. |         |
| DETECT_CHANGES_ADD  | Controls if the added files are detected as changes.                                                                    | 1       |

[^1]: `skip`: the current pipeline will be skipped. `error`: exits code 1. Leave blank to exits 0.
