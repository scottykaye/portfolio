module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // 'plugin:@next/next/recommended',
    'next/core-web-vitals',
    'eslint:recommended',
    'next',
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'prefer-const': 'error',
    'import/prefer-default-export': 'off',
    'react/jsx-no-bind': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-restricted-exports': 'off',
    'react/no-unescaped-entities': 'off',
    'react/destructuring-assignment': 'off',
    'max-len': 'off',
    'import/extensions': 'off',
    'react/button-has-type': 'off',
    'react/require-default-props': 'off',
  },
};
