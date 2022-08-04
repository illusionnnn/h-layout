<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-08-04 14:23:57
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-04 16:13:10
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="onFocus"
        >onFocus</span>
        <div class="h-editor-container">
            <el-button
                type="primary"
                @click.stop="handleShowCode"
            >
                编写代码
            </el-button>
        </div>
        <el-dialog
            v-model="state.showCode"
            title="事件处理"
            :before-close="handleClose"
        >
            <code-editor :model-value="state.code" />
        </el-dialog>
    </el-form-item>
</template>

<script setup lang="ts">
import { defineProps, reactive } from "vue";
import { ElFormItem, ElButton, ElDialog } from "element-plus";
import CodeEditor from "@/components/CodeEditor.vue";

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
});

const state = reactive({
    showCode: false,
    code: props.elem.event.onFocus
});

const handleShowCode = () => {
    state.showCode = !state.showCode;
};

const handleClose = () => {
    state.showCode = false;
};
</script>

<style lang="scss" scoped>
    .el-button--small {
        width: 100%;
    }
</style>