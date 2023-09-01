# code-count

Using cloc counts the number of lines of code.

!!! info cloc
    [cloc](https://github.com/AlDanial/cloc) is a command-line tool used for counting lines of code in source files. It analyzes source code files and reports the number of blank lines, comment lines, and actual code lines.

## Usage

**Code Count** is from the repository [gitlab-ci-utils-templates](https://gitlab.com/msclock/gitlab-ci-utils-templates).

```yaml
include:
  - project: msclock/gitlab-ci-utils-templates
    ref: master
    file:
      - /templates/Stages.gitlab-ci.yml
      - /jobs/Code-Count.gitlab-ci.yml
```

## Configuration

No configuration is required at the moment.
