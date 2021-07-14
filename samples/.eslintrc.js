module.exports = {
  extends: ['../index.js', '../react', '../jsx-a11y', '../jest'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: require.resolve('./tsconfig.json'),
      },
    },
  ],
};
