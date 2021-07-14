module.exports = {
  extends: ['../index.js'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: require.resolve('./.tsconfig.json'),
      },
    },
  ],
};
