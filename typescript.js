const pkgJsonContains = require('./utils').pkgJsonContains;

const usesReact = pkgJsonContains('react');

const config = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'default-case': 'off',
        'no-dupe-class-members': 'off',
        'no-undef': 'off',

        // Add TypeScript specific rules (and turn off ESLint equivalents)
        '@typescript-eslint/consistent-type-assertions': 'warn',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'warn',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'warn',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'warn',
          {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false,
          },
        ],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          { argsIgnorePattern: '^_' },
        ],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'warn',

        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/method-signature-style': ['warn', 'property'],
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/ban-types': 'warn',
        '@typescript-eslint/ban-tslint-comment': [
          'error',
          {
            'ts-ignore': 'allow-with-description',
          },
        ],
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-parameter-properties': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
      },
    },
  ],
};

if (usesReact) {
  config.rules = {
    ...config.rules,
    'react/prop-types': 'off',
  };
}

module.exports = config;
