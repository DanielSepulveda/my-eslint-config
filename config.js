const fs = require('fs');
const path = require('path');

const tsConfigPath = path.resolve('tsconfig.json');

module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  rules: {},
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        project: tsConfig,
      },
      plugins: ['@typescript-eslint'],
      rules: {},
    },
  ],
};
