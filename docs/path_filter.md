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

## Configuration

The available configuration variables can be set as CI/CD variables:

| Variable Name       | Description                                         | Default |
|---------------------|-----------------------------------------------------|---------|
| WORKING_DIRECTORY   | The working directory for detecting changes.        | '.'     |
| REF                 | The branch to checkout.                             |         |
| BASE                | The base branch or HEAD.                            |         |
| FILTERS             | Specifies the filter rules. This is **required**.   |         |
| LIST_FILES          | Specifies the output format of the dotenv artifact. | none    |
| INITIAL_FETCH_DEPTH | Specifies the depth of the initial fetch.           | '100'   |
