/*
 * @Description: 样式格式化配置文件
 * @Author: Hedgehog96
 * @Date: 2022-12-17 22:55:22
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-14 21:20:04
 */
module.exports = {
    extends: 'stylelint-config-standard',
    rules: {
        'indentation': 4,
        'number-leading-zero': 'never',
        'no-descending-specificity': null,
        'font-family-no-missing-generic-family-keyword': null,
        'selector-type-no-unknown': null,
        'at-rule-no-unknown': null,
        'no-duplicate-selectors': null,
        'no-empty-source':null,
        'selector-pseudo-class-no-unknown': [
            true,
            { 
                ignorePseudoClasses: ['global', 'deep']
            }
        ]
    }
}