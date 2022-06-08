/*
 * @Description:
 * @Author: Hedgehog96
 * @Date: 2022-05-09 14:46:15
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-08 15:37:49
 */
module.exports = {
  printWidth: 120,
  tabWidth: 4,
  tabs: true,
  semi: false,
  singleQuote: true,
  quoteProps: "as-needed",
  bracketSpacing: true,
  htmlWhitespaceSensitivity: "ignore",
  trailingComma: "none",
  useTabs: true,
  rangeStart: 0,
  proseWrap: "always",
  // endOfLine: 'lf',
  "max-lines-per-function": [
    2,
    { max: 320, skipComments: true, skipBlankLines: true },
  ], // 每个函数最大行数
};
