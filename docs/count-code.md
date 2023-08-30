# count_code

Using cloc counts the number of lines of code.

!!! info cloc
    [cloc](https://github.com/AlDanial/cloc) is a command-line tool used for counting lines of code in source files. It analyzes source code files and reports the number of blank lines, comment lines, and actual code lines.

## Usage

Include the template in your `.gitlab-ci.yaml` configuration as below.

```yaml
stages:
  - test

include:
  - remote: "https://gitlab.com/msclock/gitlab-ci-templates/raw/main/templates/common.yml"

# @Description count codes
count_code:
  stage: test
  extends:
    - .count-code
```

## Configuration

No configuration is required at the moment.
