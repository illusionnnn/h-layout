<!--
 * @Description: 左侧组件选择组件
 * @Author: Hedgehog96
 * @Date: 2022-05-09 14:22:35
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-16 10:14:39
-->
<template>
    <div class="h-aside-l">
        <el-tabs
            v-model="currentTabName"
            class="h-aside-tabs"
            stretch
            @tab-click="handleTabClick"
        >
            <el-tab-pane label="组件库" name="c">
                <template #label>
                    <span class="h-aside-tabs-label">
                        <i class="iconfont icon-h-kucunliang" />
                        <span>组件库</span>
                    </span>
                </template>
                <h-components />
            </el-tab-pane>
            <el-tab-pane label="模板" name="s">
                <template #label>
                    <span class="h-aside-tabs-label">
                        <i class="iconfont icon-h-mobanguanli" />
                        <span>模板</span>
                    </span>
                </template>
                <h-settings />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import HComponents from './HComponents.vue'
import HSettings from './HSettings.vue'

type Tab = 'c' | 's'

const currentTabName = ref<Tab>('c')
const handleTabClick = (tab: TabsPaneContext) => {
    currentTabName.value = (tab.paneName as Tab)
}
</script>

<style lang="scss" scoped>
.h-aside-l {
    height: 100%;

    :deep(.el-tabs--border-card>.el-tabs__content) {
        padding: 0;
    }

    :deep(.h-aside-tabs) {
        height: calc(100% - 2px);
        border: none;

        @include background_color('bg');
    }

    :deep(.el-tabs__header) {
        margin: 0;
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
