# Release

Fully automated version management and package publishing on ci.

!!! info "semantic-release"
    [semantic-release](https://github.com/semantic-release/semantic-release) is a tool that automates the release process for software projects. It follows the principles of semantic versioning to determine the appropriate version number for each release based on the changes made to the codebase. This tool analyzes the commit history, detects the types of changes (e.g., bug fixes, new features, breaking changes), and automatically increments the version number accordingly. It also generates release notes based on the commit messages and publishes the release to the appropriate package registry or distribution channel. By automating the release process, semantic-release helps to ensure consistent versioning and eliminates the need for manual intervention, making it easier to maintain and distribute software projects.

## Usage

The following demonstrates how to publish release with semantic-release with gitlab CI environment painlessly and simply.

```yaml
stages:
  - release

include:
  - remote: https://gitlab.com/msclock/gitlab-ci-templates/-/raw/master/jobs/Release-General.gitlab-ci.yml

variables:
  # Post to run tag pipeline to trigger released pipeline
  RELEASE_POST_PIPELINE_TYPE: tag
```

More details can refer to related implementation.

- [templates/Release.gitlab-ci.yml](https://gitlab.com/msclock/gitlab-ci-templates/-/blob/master/templates/Release.gitlab-ci.yml)
- [jobs/Release-General.gitlab-ci.yml](https://gitlab.com/msclock/gitlab-ci-templates/-/blob/master/jobs/Release-General.gitlab-ci.yml)

## Release workflow

### General Release Workflow

The templates based on semantic-release. And Semantic-release recommends the following workflows:

- [Distribution channels](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/distribution-channels)
- [Maintenance release](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/maintenance-releases)
- [Pre-release](https://semantic-release.gitbook.io/semantic-release/recipes/release-workflow/pre-releases)
