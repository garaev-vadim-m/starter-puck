module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true, // https://eslint.vuejs.org/user-guide/#compiler-macros-such-as-defineprops-and-defineemits-generate-no-undef-warnings
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // console.log\console.error относятся к откладке и не должны попадать в production по умолчанию, кроме режима отладки.
    // ошибки могут логироваться в bug tracker, например sentry или показываться в интерфейсе.
    'no-console': 'error',
    'no-debugger': 'warn',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'prefer-const': 'error',
    'no-var': 'error',

    '@typescript-eslint/no-unused-vars': ['error', { args: 'after-used' }], // https://eslint.org/docs/rules/no-unused-vars#args
    '@typescript-eslint/no-empty-function': 'error',

    'vue/multi-word-component-names': 'off',
    'vue/no-unused-components': 'error',
    'vue/no-unused-vars': 'error',
    'vue/no-reserved-component-names': 'off', // временно выключено
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      { registeredComponentsOnly: false, ignores: ['component'] },
    ], // https://eslint.vuejs.org/rules/component-name-in-template-casing.html

    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};
