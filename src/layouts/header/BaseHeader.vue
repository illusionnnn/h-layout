<!--
 * @Description: 应用头部组件组件
 * @Author: Hedgehog96
 * @Date: 2022-05-07 16:34:02
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-17 14:40:21
-->
<template>
    <div class="h-base-header">
        <div class="h-base-header-area">
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
            <SwicthDark />
            <el-button
                text
                @click="toggle"
            >
                <i :class="['iconfont', isFullscreen ? 'icon-h-suoxiao' : 'icon-h-quanping']" />
                {{ isFullscreen ? '缩小' : '全屏' }}
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
                @click="handleCleanCache"
            >
                <i class="iconfont icon-h-shanchu" />清除
            </el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import { useComponentsStore } from '@/store/components'
import { useFullscreen } from '@/hooks'
import SwicthDark from '@/components/SwitchDark.vue'

const instance = getCurrentInstance()
const { isFullscreen, toggle } = useFullscreen()

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
        box-shadow: inset 0 -7px 0 $base-color;
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
