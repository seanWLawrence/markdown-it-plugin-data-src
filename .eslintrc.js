module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:flowtype/recommended'],
  plugins: ['flowtype', 'jest'],
  rules: {
    'linebreak-style': ['warn', 'unix'],
    'valid-jsdoc': 'error',
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
      },
    ],
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'warn',
    'jest/no-identical-title': 'warn',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'warn',
  },
};
