module.exports = {
  extends: ['standard-jsx', 'standard-react'],

  env: {
    browser: true,
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  plugins: ['react', 'react-hooks'],

  rules: {
    // React + JSX rules
    'react/display-name': ['error', { ignoreTranspilerName: false }],
    'react/no-unknown-property': 'error',
    'react/react-in-jsx-scope': 'error',
    'jsx-quotes': ['error', 'prefer-double'],

    // Hooks rules
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },

  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'react/jsx-filename-extension': [
          'error',
          { extensions: ['.ts', '.tsx'] },
        ],
        'react/prop-types': 'off', // Prefer types over proptypes when using TS
      },
    },
  ],
};
