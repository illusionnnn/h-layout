/*
 * @Description: 页面主题
 * @Author: Hedgehog96
 * @Date: 2023-01-15 19:44:34
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-29 23:55:57
 */
import { defineStore } from 'pinia'
import { useStorage } from '@/hooks'
import { Theme } from '@/config/interfaces'

const stroage = useStorage('local')

export const useThemeStore = defineStore('theme', {
    state: (): { theme: Theme } => {
        const _theme: Theme = (stroage.get('theme') as Theme) || 'light'
        return { theme: _theme }
    },

    actions: {
        changeTheme(val: Theme) {
            this.theme = val

            stroage.set('theme', val)
        }
    }
})
