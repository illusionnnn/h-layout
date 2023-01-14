<!--
 * @Description: 应用头部组件组件
 * @Author: Hedgehog96
 * @Date: 2022-05-07 16:34:02
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-14 21:43:10
-->
<template>
    <div class="h-base-header">
        <div class="h-base-header-area">
            <img
                src="../assets/imgs/logo.png"
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
            <el-button
                size="small"
                @click="handleFullScreen"
            >
                <i class="iconfont icon-h-quanping" />全屏
            </el-button>
            <el-button
                size="small"
                type="primary"
                @click="handleSave"
            >
                <i class="iconfont icon-h-baocun" />保存
            </el-button>
            <el-button
                size="small"
                type="danger"
                @click="handleCleanCache()"
            >
                <i class="iconfont icon-h-shanchu" />清除
            </el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import { useComponentsStore } from '@/store/components'

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
    background-color: $base-bg-color;
    border-bottom: 1.5px solid #e8e8e8;

    .h-base-header-area {
        display: flex;
        align-items: center;

        img {
            margin-right: 6px;
            height: 40px;
        }
    }

    .h-base-header-title {
        font-size: 18px;
    }

    .h-base-header-btns {
        margin-left: auto;
        display: flex;
        align-items: center;

        .el-icon,
        .iconfont {
            margin-right: 4px;
        }

        .iconfont {
            font-size: 12px;
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
