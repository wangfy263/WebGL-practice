module.exports = {
  globals: {},
  extends: 'eslint-config-sprite',
  plugins: ['html'],
  rules: {
    complexity: ['warn', 25],
    'import/prefer-default-export': 'off',
    'object-curly-spacing': 'off',
    'no-param-reassign': 'off',

    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'prefer-promise-reject-errors': 'off',
    'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],
    'arrow-parens': ['error', 'as-needed'],
    'no-console': ['error', { allow: ['log', 'warn', 'error'] }],
    'comma-dangle': 'off',
    'max-len': ['error', 150],
    'object-curly-newline': [
      'error',
      {
        ObjectPattern: { multiline: true },
      },
    ],
    'vue/no-use-v-if-with-v-for': [
      'off',
      {
        allowUsingIterationVar: false,
      },
    ],
    // 'space-before-function-paren': ['error', 'never'],

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'linebreak-style': ["error", "unix"],
    'linebreak-style': ['off', 'windows'],
    'vue/no-multiple-template-root': 'off',
    'no-eval': 'off',
    'func-names': 'off',
    'consistent-return': 'off',
    'vue/no-mutating-props': 'off',
    'vue/valid-v-for': 'off',
  },
};
