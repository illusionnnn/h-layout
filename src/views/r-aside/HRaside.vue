<!--
 * @Description: 右侧区域
 * @Author: Hedgehog96
 * @Date: 2022-05-09 14:22:35
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-15 18:53:07
-->
<template>
    <div class="h-aside-r">
        <el-tabs
            v-model="fieldsConfigStore.tabName"
            class="h-aside-tabs"
            stretch
            @tab-click="handleTabClick"
        >
            <el-tab-pane label="组件配置" name="c">
                <template #label>
                    <span class="h-aside-tabs-label">
                        <i class="iconfont icon-h-jichupeizhi" />
                        <span>组件配置</span>
                    </span>
                </template>
                <h-component-config />
            </el-tab-pane>
            <el-tab-pane label="页面配置" name="l">
                <template #label>
                    <span class="h-aside-tabs-label">
                        <i class="iconfont icon-h-xitongpeizhi" />
                        <span>页面配置</span>
                    </span>
                </template>
                <h-layout-config />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup lang="ts">
import type { TabsPaneContext } from 'element-plus'
import { useFieldsConfigStore } from '@/store/fieldsConfig'
import HComponentConfig from './HComponentConfig.vue'
import HLayoutConfig from './HLayoutConfig.vue'

type Tab = 'c' | 'l'

const fieldsConfigStore = useFieldsConfigStore()
const handleTabClick = (tab: TabsPaneContext) => {
    fieldsConfigStore.changeTabName((tab.paneName as Tab))
}
</script>

<style lang="scss" scoped>
.h-aside-r {
    height: 100%;

    :deep(.el-tabs--border-card>.el-tabs__content) {
        padding: 0;
    }

    :deep(.h-aside-tabs) {
        height: calc(100% - 2px);
        border: none;

        @include background_color('bg');
    }

    :deep(.el-tabs__content) {
        height: calc(100% - 40px);
    }

    :deep(.el-tab-pane) {
        height: 100%;
        overflow-y: auto;
    }

    :deep(.iconfont) {
        margin-right: 4px;
        vertical-align: bottom;
    }
}
</style>
