const fs = require("fs");
const path = require("path");

const GITLAB_CI_FOLDER = ["."];
const GITLAB_CI_FILES = [];

/**
 * Traverses a directory recursively and collects paths to all ".gitlab-ci.yml" files.
 *
 * @param {string} dir - The directory to traverse.
 * @return {void} - This function does not return a value.
 */
function traverseDirectory(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      // Recursively traverse subdirectories.
      traverseDirectory(filePath);
    } else if (file.endsWith(".gitlab-ci.yml")) {
      GITLAB_CI_FILES.push(filePath);
    }
  });
}

GITLAB_CI_FOLDER.forEach((dir) => {
  traverseDirectory(dir);
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
          { type: "chore", scope: "deps", release: "patch" },
          { type: "build", release: false },
          { type: "ci", release: false },
          { type: "docs", release: false },
          { type: "test", release: false },
        ],
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
        },
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            { type: "feat", section: "Features" },
            { type: "fix", section: "Bug Fixes" },
            { type: "style", section: "Style" },
            { type: "refactor", section: "Refactor" },
            { type: "perf", section: "Performance" },
            { type: "revert", section: "Reverts" },
            { type: "chore", scope: "deps", section: "Dependencies" },
            { type: "chore", section: "Chores" },
            { type: "build", section: "Build" },
            { type: "ci", section: "CI" },
            { type: "docs", section: "Docs" },
            { type: "test", section: "Tests" },
          ],
        },
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
        },
      },
    ],
    [
      "semantic-release-replace-plugin",
      {
        replacements: [
          {
            files: GITLAB_CI_FILES,
            from: "(?<=(https://gitlab.com/msclock/gitlab-ci-templates/-/raw/)).+?(?=(/))",
            to: "v${nextRelease.version}",
          },
          {
            files: GITLAB_CI_FILES,
            from: "(?:- local: /)(.*)(?=(/.+))",
            to: "- remote: https://gitlab.com/msclock/gitlab-ci-templates/-/raw/v${nextRelease.version}/$1",
          },
        ],
      },
    ],
    ["@semantic-release/changelog", { changelogFile: "CHANGELOG.md", }],
    [
      "@semantic-release/git",
      {
        assets: [...GITLAB_CI_FILES, "CHANGELOG.md"],
        message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    "@semantic-release/gitlab",
  ],
};
