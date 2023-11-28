# Rules

Using rules template facilitates the rules and workflow writing.

## Usage

Here presents the usage of rules template to write a workflow.

```yaml
include:
  - remote: https://gitlab.com/msclock/gitlab-ci-templates/-/raw/master/templates/Rules.gitlab-ci.yml

.workflow:
  extends:
    - .rules
  workflow:
    rules:
      # enable open MR pipeline
      - !reference [.workflow, Merge Request]
      # avoid mr and branch duplication pipeline
      - !reference [.workflow, Avoid MR Duplication Pipeline]
      # enable branch pipeline
      - !reference [.workflow, Branch]
      # enable release tag pipeline
      - !reference [.workflow, Release]
      # enable prerelease tag pipeline
      - !reference [.workflow, Prerelease]

workflow: !reference [.workflow, workflow]
```

More details can refer to related implementation.

- [templates/Rules.gitlab-ci.yml](https://gitlab.com/msclock/gitlab-ci-templates/-/blob/master/templates/Rules.gitlab-ci.yml)
