/*
 * @Description: 切换主题
 * @Author: Hedgehog96
 * @Date: 2023-01-11 15:06:08
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-15 21:29:38
 */
export function useDark({ selector = 'html', theme = 'light' }) {
    const node = document.querySelector(selector)
    node?.setAttribute('class', theme)
}