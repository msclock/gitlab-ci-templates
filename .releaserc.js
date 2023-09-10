const fs = require("fs");
const path = require("path");

var GITLAB_CI_FOLDER = ["jobs", "templates", "."];
var GITLAB_CI_FILES = [];

GITLAB_CI_FOLDER.forEach((dir) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
        if (file.endsWith(".gitlab-ci.yml")) {
            GITLAB_CI_FILES.push(path.join(dir, file));
        }
    });
});

module.exports = {
    plugins: [
        [
            "@semantic-release/commit-analyzer",
            {
                preset: "angular",
                releaseRules: [
                    { breaking: true, release: "major" },
                    { type: "feat", release: "minor" },
                    { type: "fix", release: "patch" },
                    { type: "style", release: "patch" },
                    { type: "refactor", release: "patch" },
                    { type: "perf", release: "patch" },
                    { type: "revert", release: "patch" },
                    { type: "docs", release: false },
                    { type: "chore", release: false },
                    { type: "test", release: false },
                ],
                parserOpts: {
                    noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
                },
            },
        ],
        [
            "@semantic-release/release-notes-generator",
            {
                preset: "angular",
                presetConfig: {
                    types: [
                        { type: "feat", section: "Features" },
                        { type: "fix", section: "Bug Fixes" },
                        { type: "style", section: "Style" },
                        { type: "refactor", section: "Refactor" },
                        { type: "perf", section: "Performance" },
                        { type: "revert", section: "Reverts" },
                        { type: "docs", hidden: true },
                        { type: "chore", hidden: true },
                        { type: "test", hidden: true },
                    ],
                },
            },
        ],
        [
            "@google/semantic-release-replace-plugin",
            {
                replacements: [
                    {
                        files: GITLAB_CI_FILES,
                        from: "(?<=(https://gitlab.com/msclock/gitlab-ci-templates/-/raw/)).+?(?=(/))",
                        to: "v${nextRelease.version}",
                    },
                    {
                        files: GITLAB_CI_FILES,
                        from: "(?:- local: )(.*)(?=(/.+))",
                        to: "- remote: https://gitlab.com/msclock/gitlab-ci-templates/-/raw/v${nextRelease.version}$1",
                    },
                ],
            },
        ],
        [
            "@semantic-release/changelog",
            {
                changelogFile: "CHANGELOG.md",
            },
        ],
        [
            "@semantic-release/git",
            {
                assets: [...GITLAB_CI_FILES, "CHANGELOG.md"],
                message:
                    "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
            },
        ],
        "@semantic-release/gitlab",
    ],
};
