module.exports = {
  branches: ["main", "next"],
  npmPublish: true,
  dryRun: false,
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git",
  ],
};
