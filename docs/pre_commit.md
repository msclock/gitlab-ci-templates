# pre-commit

This section verifies the `pre-commit` and applies automatic fixes, committing autofix changes back to the source branch.

## Usage

To include the template in the `.gitlab-ci.yaml` configuration, add the following code:

```yaml
include:
  - remote: https://gitlab.com/msclock/gitlab-ci-templates/-/raw/master/jobs/Pre-Commit.gitlab-ci.yml
```

To enable auto-fixes, set the CI/CD variable `GITLAB_TOKEN` with a GitLab access token that has the `repository write` scope. A GitLab API token can be used, such as [project access tokens](https://docs.gitlab.com/ee/user/project/settings/project_access_tokens.html).

This template enables an extending job that runs in the `.pre` stage. However, at least one job should be set outside the `.pre` and `.post` stages.

More details can refer to related implementation.

- [jobs/Pre-Commit.gitlab-ci.yml](https://gitlab.com/msclock/gitlab-ci-templates/-/raw/master/jobs/Pre-Commit.gitlab-ci.yml)

## Practice

!!! info
    pre-commit is a powserful tool for checking code quality. But it is lack of reportibility and flexibility because of its plugin ecosystem that always depends on the capability of the plugin support. **So it is recommended to use plugins with a capability of fixible action**.
