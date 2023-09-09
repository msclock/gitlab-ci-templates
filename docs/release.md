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

The following presents how to configure a release workflow with changelog file generated.

```bash
# Add release rc
cat >.releaserc<<'EOF'
{
  "plugins": [
    [
      "@semantic-release/commit-analyzer",
      {
        "preset": "angular",
        "releaseRules": [
          {
            "type": "style",
            "release": "patch"
          },
          {
            "type": "refactor",
            "release": "patch"
          },
          {
            "type": "perf",
            "release": "patch"
          },
          {
            "type": "revert",
            "release": "patch"
          }
        ]
      }
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        "preset": "angular",
        "presetConfig": {
          "types": [
            {
              "type": "style",
              "section": "Style"
            },
            {
              "type": "refactor",
              "section": "Refactor"
            },
            {
              "type": "perf",
              "section": "Performance"
            },
            {
              "type": "revert",
              "section": "Revert"
            }
          ]
        }
      }
    ],
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "CHANGELOG.md"
      }
    ],
    [
      "@semantic-release/git",
      {
        "assets": [
          "CHANGELOG.md"
        ],
        "message": "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}"
      }
    ],
    "@semantic-release/gitlab"
  ]
}
EOF

# Add gitlab ci for release
cat >.gitlab-ci.yml<<'EOF'
stages:
  - release

include:
  - remote: "https://gitlab.com/msclock/gitlab-ci-templates/raw/master/templates/common.yml"

# @Description release with semantic-release
release:
  stage: release
  extends:
    - .release
  variables:
    NPM_SOURCE: https://registry.npm.taobao.org
    RELEASE_EXTRA_PLUGINS: '@semantic-release/changelog @semantic-release/git'
  rules:
    - if: $CI_COMMIT_MESSAGE =~ /^(chore\(release\))/
      when: never
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
EOF
```

## Configuration

The available configuration variables can be set as CI/CD variables:

| Variable Name             | Description                                                                            | Default          |
|---------------------------|----------------------------------------------------------------------------------------|------------------|
| RELEASE_EXTRA_PLUGINS[^1] | Specifies the extra semantic-release plugins.                                          |                  |
| OVERRIDE_RELEASE          | If set to a non-empty value, override the release version when encountering conflicts. |                  |
| USING_PRESET_RELEASERC    | Specifies whether to use the preset releaserc.                                         |                  |
| NPM_SOURCE                | Specifies the NPM source.                                                              |                  |
| SEMANTIC_RELEASE_OPTIONS  | Specifies semantic-release options.                                                    |                  |
| GITLAB_PREFIX             | Specifies the gitlab api prefix.                                                       | '/api/v4'        |
| GITLAB_URL                | Specifies the gitlab instance.                                                         | '$CI_SERVER_URL' |

!!! note "Note"
    Preset releaserc is configured to run on the default branch CI_DEFAULT_BRANCH for release, the named branch `alpha` or `beta` for pre-release.

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

[^1]: Default plugins include semantic-release, @semantic-release/commit-analyzer, @semantic-release/release-notes-generator, and @semantic-release/gitlab.
