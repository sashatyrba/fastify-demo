/* eslint-disable-next-line no-undef */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest', 'jsx-a11y'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/all',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
}
