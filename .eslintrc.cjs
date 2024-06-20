module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  parserOptions: {
    ecmaVersion: 2022, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    localStorage: true,
    sessionStorage: true,
    setTimeout: true,
    clearTimeout: true,
    process: true,
    window: true,
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  env: {
    jest: true, // Adds Jest global variables
    browser: true, // Browser global variables like window and document
    node: true, // Node.js global variables and Node.js scoping
    es6: true, // Enable all ECMAScript 6 features except for modules
  },
  extends: [
    'eslint:recommended', // Uses the recommended rules from ESLint
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:import/errors', // Uses the recommended rules from eslint-plugin-import
    'plugin:import/warnings', // Uses the recommended rules from eslint-plugin-import
    'plugin:import/typescript', // Ensures TypeScript files are linted correctly
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. Displays prettier errors as ESLint errors.
    'prettier', // Enables eslint-config-prettier to disable conflicting rules
  ],
  rules: {
    'import/export': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        tabWidth: 2,
        endOfLine: 'auto',
      },
    ],
    'react/no-unescaped-entities': 'off',
    'no-extra-boolean-cast': 'off',
    'no-unused-vars': 'error',
    'import/no-unresolved': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react.*?',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
