# semantic-release

Fully automated version management and package publishing on ci.

Semantic-release is a tool that automates the release process for software projects. It follows the principles of semantic versioning to determine the appropriate version number for each release based on the changes made to the codebase. This tool analyzes the commit history, detects the types of changes (e.g., bug fixes, new features, breaking changes), and automatically increments the version number accordingly. It also generates release notes based on the commit messages and publishes the release to the appropriate package registry or distribution channel. By automating the release process, semantic-release helps to ensure consistent versioning and eliminates the need for manual intervention, making it easier to maintain and distribute software projects.

## Usage

The following demonstrates how to publish release with semantic-release with gitlab CI environment painlessly and simply.

```yaml
stages:
  - release

include:
  - remote: "https://gitlab.com/msclock/gitlab-ci-templates/raw/main/templates/common.yml"

# @Description release with semantic-release
release:
  stage: release
  extends:
    - .release
```

The following demonstrates how to configure a release workflow with changelog file generated.

```bash
# Add release rc
cat >.releaserc<<'EOF'
{
    "branches":[
        "main",
        {
            "name": "alpha",
            "prerelease": true
        },
        {
            "name": "beta",
            "prerelease": true
        }
    ],
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/changelog",
            {
                "changelogFile": "CHANGELOG.md"
            }
        ],
        "@semantic-release/gitlab",
        [
            "@semantic-release/git",
            {
                "assets": [
                    "CHANGELOG.md"
                ],
                "message": "chore(release): ${nextRelease.version} \n\n${nextRelease.notes}"
            }
        ]
    ]
}
EOF

# Add gitlab ci for release
cat >.gitlab-ci.yml<<'EOF'
stages:
  - release

include:
  - remote: "https://gitlab.com/msclock/gitlab-ci-templates/raw/main/templates/common.yml"

# @Description release with semantic-release
release:
  stage: release
  extends:
    - .release
  variables:
    NPM_SOURCE: https://registry.npm.taobao.org
    RELEASE_EXTRA_PLUGINS: @semantic-release/changelog @semantic-release/git
EOF
```

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
    Preset releaserc is configured to run on the branch CI_DEFAULT_BRANCH for release, the named branch `alpha` or `beta` for pre-release.

[^1]: Default plugins include semantic-release, @semantic-release/release-notes-generator, @semantic-release/gitlab, and @semantic-release/changelog.
