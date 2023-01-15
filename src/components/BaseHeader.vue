<!--
 * @Description: 应用头部组件组件
 * @Author: Hedgehog96
 * @Date: 2022-05-07 16:34:02
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-15 21:33:55
-->
<template>
    <div class="h-base-header">
        <div class="h-base-header-area">
            <img
                src="@/assets/imgs/logo.png"
                alt="logo"
            >
            <span class="h-base-header-title">h-layout</span>
        </div>
        <div class="h-base-header-btns">
            <a
                title="Github"
                href="https://github.com/Hedgehog96/h-layout"
                target="_blank"
            >
                <i class="iconfont icon-h-github" />Github
            </a>
            <el-switch
                class="h-theme-swicth"
                v-model="isDarkTheme"
                inline-prompt
                :active-icon="Moon"
                :inactive-icon="Sunny"
                @click="handleThemeChange"
            />
            <el-button
                text
                @click="handleFullScreen"
            >
                <i class="iconfont icon-h-quanping" />全屏
            </el-button>
            <el-button
                text
                type="primary"
                @click="handleSave"
            >
                <i class="iconfont icon-h-baocun" />保存
            </el-button>
            <el-button
                text
                type="danger"
                @click="handleCleanCache()"
            >
                <i class="iconfont icon-h-shanchu" />清除
            </el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
import { Sunny, Moon } from '@element-plus/icons-vue'
import { useComponentsStore } from '@/store/components'
import { useThemeStore } from '@/store/theme'
import { useDark } from '@/hooks'
import { Theme } from '@/config/interfaces'

interface FullScreenHTMLElement extends HTMLElement {
  mozRequestFullScreen?: () => void;
  msRequestFullscreen?: () => void;
  webkitRequestFullscreen?: () => void;
}
const instance = getCurrentInstance()

const handleFullScreen = () => {
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

const themeStore = useThemeStore()
const isDarkTheme = ref(themeStore.theme === 'dark' ? true : false)
useDark({ theme: themeStore.theme })

const handleThemeChange = () => {
    let _theme = isDarkTheme.value ? 'dark' : 'light'
    useDark({ theme: _theme })
    themeStore.changeTheme((_theme as Theme))
}

const componentsStore = useComponentsStore()
const handleSave = () => componentsStore.save()
const handleCleanCache = () => {
    window.localStorage.clear()
    instance?.appContext.config.globalProperties.$message.success('缓存已清除')
}
</script>

<style lang="scss" scoped>
.h-base-header {
    height: 40px;
    padding: 0 10px;
    display: flex;
    align-items: center;

    @include background_color('bg');

    border-bottom: 1.5px solid;

    @include border_bottom_color('headerBmColor');

    .h-base-header-area {
        display: flex;
        align-items: center;

        img {
            margin-right: 10px;
            height: 30px;
        }
    }

    .h-base-header-title {
        font-size: 18px;
    }

    .h-theme-swicth {
        margin: 0 18px;
    }

    .h-base-header-btns {
        margin-left: auto;
        display: flex;
        align-items: center;

        .el-icon,
        .iconfont {
            margin-right: 4px;
        }

        a {
            margin-right: 10px;
            color: #409eff;
            text-decoration: none;
            font-size: 14px;

            .iconfont {
                font-size: 16px;
            }
        }
    }
}
</style>
