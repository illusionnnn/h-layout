<!--
 * @Description: 组件配置组件
 * @Author: Hedgehog96
 * @Date: 2022-05-11 14:08:14
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-07-15 18:06:34
-->
<template>
    <div
        v-if="Object.keys(state.currentElem).length"
        class="h-component-config"
    >
        <el-form
            size="small"
            label-position="left"
            label-width="120px"
            class="h-component-config-form"
            @submit.prevent
        >
            <el-collapse v-model="state.activeNames">
                <el-collapse-item
                    title="常见属性"
                    name="common"
                >
                    <template v-for="(editorName, propName) in COMMON_PROPERTIES">
                        <component
                            :is="getPropEditor(propName, editorName)"
                            v-if="hasPropEditor(propName, editorName)"
                            :key="propName"
                        />
                    </template>
                    <!-- <div class="h-component-config-item">
                        <span class="h-component-config-item-title">唯一名称</span><el-input
                            v-model="state.currentElem.uniqueKey"
                            size="small"
                        />
                    </div>
                    <div class="h-component-config-item">
                        <span class="h-component-config-item-title">标签</span><el-input
                            v-model="state.currentElem.label"
                            size="small"
                        />
                    </div>
                    <div class="h-component-config-item">
                        <span class="h-component-config-item-title">占位内容</span><el-input
                            v-model="state.currentElem.props.placeholder"
                            size="small"
                        />
                    </div> -->
                </el-collapse-item>
            </el-collapse>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { inject, reactive } from "vue";
import { ElForm } from "element-plus";
import widgetProperties from '@/config/propertyRegister';
import { ComponentConfig } from "@/config/interfaces";

const { COMMON_PROPERTIES } = widgetProperties
const EVENT_BUS: any = inject("eventBus");

const state: { currentElem: any, activeNames: string } = reactive({
    currentElem: {},
    activeNames: "common",
});

EVENT_BUS.on("clickComponent", (elem: ComponentConfig) => {
    state.currentElem = elem;
});

const getPropEditor = (propName: string, editorName: string) => {
    // TODO
};
const hasPropEditor = (propName: string, editorName: string) => {
    // TODO
    return false;
};
</script>

<style lang="scss" scoped>
.h-component-config {
    height: 100%;
    overflow-y: auto;

    :deep(.el-collapse) {
        border-top: none;
    }
    :deep(.el-collapse-item) {
        & > div {
            border-top: 1px solid #fff !important;
        }

        .el-collapse-item__content {
            padding-bottom: 0;
        }
    }
    :deep(.el-collapse-item__header) {
        padding-left: 8px;
        font-size: 16px;
    }

    .h-component-config-item {
        // display: flex;
        // align-items: center;
        margin-bottom: 10px;
        padding: 0 8px;

        .h-component-config-item-title {
            // width: 80px;
            font-size: 12px;
        }

        .el-input {
            // flex: 1;
            // padding-left: 8px;
        }
    }
}
</style>
