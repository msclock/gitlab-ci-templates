# path-filter

Detect the changes of files on codebase.

## Usage

Simply include the template in your `.gitlab-ci.yaml` configuration as below.

```yaml
stages:
  - test

include:
  - remote: https://gitlab.com/msclock/gitlab-ci-templates/-/raw/master/templates/Path-Filter.gitlab-ci.yml

detect:
  extends:
    - .path-filter
  stage: test
  variables:
    FILTERS: |
      {
        "images": [
          "images/.*.json",
          "images/.*Dockerfile"
        ],
        "templates": [
          "templates/.*.yml"
        ]
      }

downstream_job:
  needs:
    - detect
  stage: test
  script:
    - echo "$raw_all_changes_output"
    - echo "$all_changes_output"
    - echo "$images"
    - echo "$templates"
```

More details can refer to related implementation.

- [templates/Path-Filter.gitlab-ci.yml](https://gitlab.com/msclock/gitlab-ci-templates/-/raw/master/templates/Path-Filter.gitlab-ci.yml)
