/*
 * @Description: 全屏显示
 * @Author: Hedgehog96
 * @Date: 2023-01-11 15:06:08
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-30 17:12:58
 */
import { ref, getCurrentInstance } from 'vue'
import { FullScreenHTMLElement, DocumentCancelFullScreenHTMLElement } from '@/config/interfaces'

export const useFullscreen = () => {
    const isFullscreen = ref(false)
    const instance = getCurrentInstance()

    const toggle = () => {
        if (isFullscreen.value) {
            const elem = document as DocumentCancelFullScreenHTMLElement
            if (document.fullscreenElement) {
                if (elem.exitFullscreen) {
                    elem.exitFullscreen()
                } else if (elem.mozCancelFullscreen) {
                    elem.mozCancelFullscreen()
                } else if (elem.webkitCancelFullscreen) {
                    elem.webkitCancelFullscreen()
                }
            }
        } else {
            const elem = document.querySelector('html') as FullScreenHTMLElement
            if (elem.requestFullscreen) {
                elem.requestFullscreen()
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen()
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen()
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen()
            } else {
                instance?.appContext.config.globalProperties.$message.warning('使用该功能请配合最新版chrome浏览器食用')
            }
        }

        isFullscreen.value = !isFullscreen.value
    }

    return {
        isFullscreen,
        toggle
    }
}