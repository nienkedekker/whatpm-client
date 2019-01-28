module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 0,
    'import/extensions': 0,
    'no-alert': 0,
    'max-len': 0,
    'import/prefer-default-export': 0,
    'prefer-promise-reject-errors': 0,
    'no-underscore-dangle': 0,
    'func-names': 0,
    'no-return-assign': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
