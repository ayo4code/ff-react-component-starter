module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [require.resolve('ff-lint-config/dist/eslint-config-react')],
  rules: {
    '@typescript-eslint/no-unused-vars': 1,
  },
}
