module.exports = {
  branches: "main",
  repositoryUrl: "https://github.com/paulAlexSerban/web-portal--university-website",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
      },
    ],
    ["@semantic-release/changelog", { changelogFile: "wiki/CHANGELOG.md" }],
    [
      "@semantic-release/git",
      {
        assets: ["wiki/CHANGELOG.md", "package.json"],
        message:
          "chore(release): version ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
