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

  settings: {
    'import/ignore': ['node_modules', '.json$', '.(scss|less|css|styl)$'],
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

  rules: {
    // Import plugin overrides
    'import/newline-after-import': 'error',
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before', // Prefer react as first import
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
