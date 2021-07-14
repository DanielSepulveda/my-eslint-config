const fs = require('fs');
const path = require('path');

const tsConfigPath = fs.existsSync('tsconfig.json')
  ? path.resolve('tsconfig.json')
  : undefined;

module.exports = {
  extends: ['standard-with-typescript', 'prettier'],

  env: {
    browser: true,
    node: true,
    es2021: true,
  },

  overrides: [
    {
      files: '**/*.ts?(x)',
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        project: tsConfigPath,
      },
      rules: {
        // Standard with typescript overrides
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],

  rules: {},
};
