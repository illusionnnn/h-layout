/*
 * @Description: 切换主题
 * @Author: Hedgehog96
 * @Date: 2023-01-11 15:06:08
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-30 00:06:34
 */
import { computed } from 'vue'
import { useThemeStore } from '@/store/theme'
import { Theme } from '@/config/interfaces'

export const useTheme = () => {
    const themeStore = useThemeStore()
    const theme = computed<Theme>(() => themeStore.theme)

    // 切换暗黑模式
    const switchDark = () => {
        const html = document.querySelector('html') as HTMLElement
        
        if (theme.value === 'dark') html.setAttribute('class', 'dark')
        else html.setAttribute('class', 'light')
        themeStore.changeTheme(theme.value)
    }

    // 初始化 theme 配置
    const initTheme = () => {
        switchDark()
    }

    return {
        initTheme,
        switchDark
    }
}