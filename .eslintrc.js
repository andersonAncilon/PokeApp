module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    semi: ['error', 'never'],
    'no-var': ['error'],

    'react/jsx-no-duplicate-props': ['error'],
    'react/jsx-no-undef': ['error'],
    'react/jsx-uses-react': ['error'],
    'react/jsx-uses-vars': ['error'],
    'react/no-danger': ['error'],
    'react/no-deprecated': ['error'],
    'react/no-direct-mutation-state': ['error'],
    'react/prefer-es6-class': ['error', 'always'],
    'react/prop-types': ['error', { ignore: ['children'] }],
    'react/react-in-jsx-scope': ['error'],
    'react/require-render-return': ['error'],

    '@typescript-eslint/ban-types': 1,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-empty-function': 1,
    '@typescript-eslint/no-var-requires': 1,
    '@typescript-eslint/explicit-module-boundary-types': 1,
    '@typescript-eslint/no-empty-interface': 1,
    'no-case-declarations': 1,
    'react/jsx-key': 1,

    'react-hooks/exhaustive-deps': 0,
    'no-prototype-builtins': 1,
  },
};
