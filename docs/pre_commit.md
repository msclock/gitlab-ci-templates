# pre-commit

This section verifies the `pre-commit` and applies automatic fixes, committing autofix changes back to the source branch.

## Usage

To include the template in the `.gitlab-ci.yaml` configuration, add the following code:

```yaml
include:
  - remote: "https://gitlab.com/msclock/gitlab-ci-templates/raw/main/jobs/pre-commit.yml"

# @Description check codebase with pre-commit
pre-commit:
  extends:
    - .pre-commit
  variables:
    PRE_COMMIT_DEDUPLICATE_MR_AND_BRANCH: "false"
    PRE_COMMIT_AUTO_FIX_BRANCH_ONLY: "true"
```

To enable auto-fixes, set the CI/CD variable `GITLAB_TOKEN` with a GitLab access token that has the `repository write` scope. A GitLab API token can be used, such as [project access tokens](https://docs.gitlab.com/ee/user/project/settings/project_access_tokens.html).

This template enables an extending job that runs in the `.pre` stage. However, at least one job should be set outside the `.pre` and `.post` stages.

## Configuration

The available configuration variables can be set as CI/CD variables:

| Variable Name                            | Description                                                                                | Default                                 |
|------------------------------------------|--------------------------------------------------------------------------------------------|-----------------------------------------|
| GITLAB_TOKEN                             | A GitLab API token with write access to the project. This is required for automatic fixes. |                                         |
| PRE_COMMIT_AUTO_FIX                      | Specifies whether to apply, commit, and push autofixes to the source branch                | 1                                       |
| PRE_COMMIT_SKIP_BRANCH_PIPELINE          | If set to a non-empty value, this disables the job for branch pipelines                    |                                         |
| PRE_COMMIT_SKIP_MR_PIPELINE              | If set to a non-empty value, this disables the job for merge request pipelines             |                                         |
| PRE_COMMIT_DEDUPLICATE_MR_AND_BRANCH[^1] | This prevents duplicating the pre-commit job on branch and MR pipelines.                   | "true"                                  |
| PRE_COMMIT_AUTO_FIX_BRANCH_ONLY          | If set to a non-empty value, this disables PRE_COMMIT_AUTOFIX for non-branch pipelines.    |                                         |
| PRE_COMMIT_AUTO_FIX_MR_ONLY              | If set to a non-empty value, this disables PRE_COMMIT_AUTOFIX for non-MR pipelines.        |                                         |
| MAKE_CHANGES_MSG                         | The message to include in the commit message.                                              | "style(ci): auto fixes from pre-commit" |
| MAKE_CHANGES_FINISH[^2]                      | Controls the exit behavior of the CI job.                                                  | "error"                                 |
| PRE_COMMIT_HOME                          | The pre-commit cache                                                                       | "$CI_PROJECT_DIR/.cache/.pre-commit"    |

By default, the template assumes that pipelines are being used for merge requests. If pipelines are not used for merge requests (branch pipelines only), unset `PRE_COMMIT_DEDUPLICATE_MR_AND_BRANCH` and set `PRE_COMMIT_AUTO_FIX_BRANCH_ONLY`.

## Practice

!!! info
    pre-commit is a powserful tool for checking code quality. But it is lack of reportibility and flexibility because of its plugin ecosystem that always depends on the capability of the plugin support. **So it is recommended to use plugins with a capability of fixible action**.

[^1]: If an MR is open, the job will only run in the MR pipeline.This assumes the project is using [Merge request pipelines](https://gitlab.com/ee/ci/pipelines/merge_request_pipelines.html).To disable, set this to any other value than the string `"true"`.
[^2]: Please refer to the details [MAKE_CHANGES_FINISH](make_changes.md#configuration).
