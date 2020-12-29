
module.exports = {
  extends: [
    'airbnb-typescript',
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: [".*.js", "*.config.js"],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/prop-types': 'off',
    'semi': 'error',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', {
      "multiline": {
        "delimiter": "semi",
        "requireLast": true
      },
      "singleline": {
        "delimiter": "semi",
        "requireLast": false
      }
    }]
  },
};