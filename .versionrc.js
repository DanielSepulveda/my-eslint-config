module.exports = {
  types: [
    { type: "feat", section: "🚀 Features" },
    { type: "fix", section: "🐛 Bug Fixes" },
    { type: "chore", hidden: "📋 Chores" },
    { type: "docs", hidden: true },
    { type: "style", hidden: true },
    { type: "refactor", hidden: true },
    { type: "perf", hidden: true },
    { type: "test", hidden: true },
  ],
  releaseCommitMessageFormat: "chore(release): 🔖 {{currentTag}}",
};
