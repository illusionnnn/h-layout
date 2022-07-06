<!--
 * @Description: 组件配置组件
 * @Author: Hedgehog96
 * @Date: 2022-05-11 14:08:14
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-07-06 11:14:18
-->
<template>
    <div
        v-if="Object.keys(state.currentElem).length"
        class="h-component-config"
    >
        <el-collapse v-model="state.activeNames">
            <el-collapse-item
                title="常用属性"
                name="common"
            >
                <div
                    v-if="state.currentElem.uniqueKey"
                    class="h-component-config-item"
                >
                    <span class="h-component-config-item-title">唯一名称</span><el-input
                        v-model="state.currentElem.uniqueKey"
                        size="small"
                    />
                </div>
                <div
                    v-if="state.currentElem.name"
                    class="h-component-config-item"
                >
                    <span class="h-component-config-item-title">标签</span><el-input
                        v-model="state.currentElem.name"
                        size="small"
                    />
                </div>
                <div
                    v-if="state.currentElem.props.modelValue"
                    class="h-component-config-item"
                >
                    <span class="h-component-config-item-title">值</span><el-input
                        v-model="state.currentElem.props.modelValue"
                        size="small"
                    />
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script setup lang="ts">
import { defineProps, inject, reactive, toRefs } from "vue";
import { ElInput } from "element-plus";
import { ComponentConfig } from "@/config/interfaces";

defineProps({
    uniqueKey: {
        type: String,
        default: "",
    },
    name: {
        type: String,
        default: "",
    },
});

const state: { currentElem: any, activeNames: string } = reactive({
    currentElem: {},
    activeNames: "common",
});

const EVENT_BUS: any = inject("eventBus");
EVENT_BUS.on("clickComponent", (elem: ComponentConfig) => {
    state.currentElem = elem;
});
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
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        padding: 0 8px;

        .h-component-config-item-title {
            font-size: 12px;
        }

        .el-input {
            flex: 1;
            padding-left: 8px;
        }
    }
}
</style>
