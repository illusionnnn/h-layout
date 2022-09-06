<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-05-11 14:09:42
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-09-05 17:31:16
-->
<template>
    <div class="h-layout-config">
        <el-form
            size="small"
            class="h-layout-config-form"
            @submit.prevent
        >
            <el-collapse
                v-model="state.activeNames"
            >
                <el-collapse-item
                    title="基础属性"
                    name="base"
                >
                    <HiddenEditor
                        :is-layout-hidden="true"
                        :elem="state.layout"
                    />
                </el-collapse-item>
            </el-collapse>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { ElForm, ElCollapse, ElCollapseItem } from "element-plus";
import HiddenEditor from "./PropertyEditor/HiddenEditor.vue";

const state = reactive({
    activeNames: 'base',
    layout: {
        hidden: false
    }
});
</script>

<style lang="scss" scoped>
    .h-layout-config {
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
    }
</style>
