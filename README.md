# gitlab-ci-templates

Templates for GitLab CI

You can include these in your project using the `include:` key, or simply by copying the files into your own projects.

# Available templates

## pre-commit-proxy.yaml

**This template is in alpha development**. Please report any issues to this repository.

Verifies your `pre-commit`, applies automatic fixes, and commits autofix changes back to the source branch.


**Basic usage:**

Simply include the template in your `.gitlab-ci.yaml` configuration.
```yaml
include:
  - remote: "https://gitlab.com/gitlab-aux/gitlab-ci-templates/raw/main/templates/pre-commit.yaml"

# Or need a proxy on pre-commit
include:
  - remote: "https://gitlab.com/gitlab-aux/gitlab-ci-templates/raw/main/templates/pre-commit-proxy.yaml"

pre-commit:
  variables:
    # Set your proxy subscribe based on clash
    CLASH_PROXY_SUB: "https://ghproxy.com/https://raw.githubusercontent.com/ripaojiedian/freenode/main/clash"
```

To enable auto-fixes, you'll need to set the CI/CD variable `PRE_COMMIT_ACCESS_TOKEN` with an GitLab access token with `repository write` scope. A convenient way to do this is using [project access tokens](https://docs.gitlab.com/ee/user/project/settings/project_access_tokens.html) but any GitLab API token will work.


This template will include a job `pre-commit` which runs in the `.pre` stage. 

**Configuration:**

There are several configurations available, which you can apply by setting CI/CD variables. The available configuration variables are as follows:

| Variable Name                        | Description                                                                                                                                                                                                                                                                                                                 | Default |
|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| PRE_COMMIT_ACCESS_TOKEN              | A GitLab API token with write access to the project. Required for automatic fixes.                                                                                                                                                                                                                                          |         |
| PRE_COMMIT_AUTO_FIX                  | Whether to apply, commit, and push autofixes to the source branch                                                                                                                                                                                                                                                           | 1       |
| PRE_COMMIT_DEBUG                     | If set to a non-empty value, enables bash debug mode for the job (make sure your token is masked!)                                                                                                                                                                                                                          |         |
| PRE_COMMIT_SKIP_BRANCH_PIPELINE      | If set to a non-empty value, disables the job for branch pipelines                                                                                                                                                                                                                                                          |         |
| PRE_COMMIT_SKIP_MR_PIPELINE          | If set to a non-empty value, disables the job for merge request pipelines                                                                                                                                                                                                                                                   |         |
| PRE_COMMIT_DEDUPLICATE_MR_AND_BRANCH | Don't duplicate the pre-commit job on branch and MR pipelines. If an MR is open, the job will only run in the MR pipeline.<br>This assumes your project is using [Merge request pipelines](https://gitlab.com/ee/ci/pipelines/merge_request_pipelines.html)<br>To disable, set to any other value than the string `"true"`. | "true"  |
| PRE_COMMIT_AUTO_FIX_BRANCH_ONLY      | If set to a non-empty value, PRE_COMMIT_AUTOFIX will be disabled for non-branch pipelines.                                                                                                                                                                                                                                  |         |
| PRE_COMMIT_AUTO_FIX_MR_ONLY          | If set to a non-empty value, PRE_COMMIT_AUTOFIX will be disabled for non-MR pipelines.                                                                                                                                                                                                                                      |         |

By default, the tempalte assumes you are using pipelines for merge requests. If you are not using pipelines for merge requests (branch pipelines only), consider unsetting `PRE_COMMIT_DEDUPLICATE_MR_AND_BRANCH` and setting `PRE_COMMIT_AUTO_FIX_BRANCH_ONLY`.

