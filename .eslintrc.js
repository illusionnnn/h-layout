/*
 * @Description: 脚本格式化配置文件
 * @Author: Hedgehog96
 * @Date: 2022-12-17 21:04:17
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-14 22:05:11
 */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended'
    ],
    parser: 'vue-eslint-parser',
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: '@typescript-eslint/parser'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        // vue base
        'vue/no-unused-vars': [
            'error',
            {
                ignorePattern: '^_'
            }
        ],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/no-v-html': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/html-indent': ['error', 4],
        'vue/html-self-closing': 'off',
        'vue/max-attributes-per-line': 0,
        'vue/custom-event-name-casing': 0,
        'vue/eqeqeq': [2, 'always', { null: 'ignore' }],
        'vue/no-mutating-props': 0,
        // common
        'no-unused-vars': ['error', { args: 'none' }],
        semi: [2, 'never'],
        'semi-spacing': [
            2,
            {
                before: false,
                after: true
            }
        ],
        quotes: [
            2,
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],
        'comma-dangle': [2, 'never'],
        'comma-spacing': [
            2,
            {
                before: false,
                after: true
            }
        ],
        'comma-style': [2, 'last'],
        'arrow-parens': [2, 'as-needed'],
        'arrow-spacing': [
            2,
            {
                before: true,
                after: true
            }
        ],
        'jsx-quotes': 2,
        'no-async-promise-executor': 0,
        'space-before-function-paren': 0,
        'no-empty': 0,
        'spaced-comment': ['error', 'always'],
        'no-undef': 0,
        'indent': ['error', 4],
        // typescript
        '@typescript-eslint/no-explicit-any': 0
    }
}
