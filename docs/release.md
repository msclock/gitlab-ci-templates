# semantic-release

Fully automated version management and package publishing on ci.

!!! info "semantic-release"
    [semantic-release](https://github.com/semantic-release/semantic-release) is a tool that automates the release process for software projects. It follows the principles of semantic versioning to determine the appropriate version number for each release based on the changes made to the codebase. This tool analyzes the commit history, detects the types of changes (e.g., bug fixes, new features, breaking changes), and automatically increments the version number accordingly. It also generates release notes based on the commit messages and publishes the release to the appropriate package registry or distribution channel. By automating the release process, semantic-release helps to ensure consistent versioning and eliminates the need for manual intervention, making it easier to maintain and distribute software projects.

## Usage

The following demonstrates how to publish release with semantic-release with gitlab CI environment painlessly and simply.

```yaml
stages:
  - release

include:
  - remote: https://gitlab.com/msclock/gitlab-ci-templates/-/raw/master/templates/Release.gitlab-ci.yml

# @Description release with semantic-release
release:
  stage: release
  extends:
    - .release
```

More detail can be found in related implementation.

- [.release template](https://gitlab.com/msclock/gitlab-ci-templates/-/raw/master/templates/Release.gitlab-ci.yml)
- [semantic_release job](https://gitlab.com/msclock/gitlab-ci-templates/-/raw/master/jobs/Release-General.gitlab-ci.yml)

## Release workflow

### No Changes on repository

This is the preset releaserc with the .release template including the default plugins[^1], so no changes are made to the repository. What needs to be done is to write the steps on the tag created and attach assets to the release created by semantic-release.

Attach assets to the release created by semantic-release can refer to the following:

```yaml
attach-to-release:
  stage: release
  image: curlimages/curl:latest
  variables:
    ARTIFACT_PATH: xxx.tar.gz
  script:
    - |
      RELEASE_ID=$(curl --header "PRIVATE-TOKEN: $CI_JOB_TOKEN" \
                    "$CI_API_V4_URL/projects/$CI_PROJECT_ID/releases?tag_name=$CI_COMMIT_TAG" | \
                    jq -r '.[0].id')

      ASSET_LINK=$(curl --header 'Content-Type: application/json' \
                    --request PUT --data "{\"milestones\": [\"$CI_COMMIT_TAG\"]}" \
                    --header "PRIVATE-TOKEN: $CI_JOB_TOKEN" \
                    --form "file=@$ARTIFACT_PATH" \
                    "$CI_API_V4_URL/projects/$CI_PROJECT_ID/releases/$RELEASE_ID/assets/links" | \
                    jq -r '.markdown')

      echo "Add asset $ARTIFACT_PATH with a attachment link $ASSET_LINK to $RELEASE_ID"
  artifacts:
    paths:
      - $ARTIFACT_PATH
  only:
    - tags
```

Also, [release-cli](https://docs.gitlab.com/ee/user/project/releases/release_cli.html) from gitlab can be used to update the release that is used by the [example](https://gitlab.com/gitlab-org/release-cli/-/tree/master/docs/examples/release-assets-as-generic-package/).
