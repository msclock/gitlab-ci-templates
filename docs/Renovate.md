# Renovate

Automated dependency updates. Multi-platform and multi-language.

!!! info "Renovate"
    [renovate](https://github.com/apps/renovate) uses automatic pull requests to keep source code dependencies up to date. It will scan package manager repositories such as npm yarn bundler composer go modules pip pipenv poetry maven gradle dockerfile k 8 s and many more and submit pull requests with updated versions whenever found.

## Usage

Create a repository and use remote includes to use these templates on self-hosted gitlab instances. Refer to GitLab [include](https://docs.gitlab.com/ee/ci/yaml/includes.html) samples for more information.

```yaml
include:
- remote: https://gitlab.com/msclock/gitlab-ci-templates/-/raw/master/jobs/Renovate.gitlab-ci.yml
```

### Configure the Schedule

Add a schedule (`CI / CD` > `Schedules`) to run Renovate regularly.
A good practise is to run it hourly. The following runs Renovate on the third minute every hour: `3 * * * *`.
Because the default pipeline only runs on schedules, you need to use the play button of schedule to trigger a manual run.

More details can refer to related implementation.

- [jobs/Renovate.gitlab-ci.yml](https://gitlab.com/msclock/gitlab-ci-templates/-/blob/master/jobs/Renovate.gitlab-ci.yml)
