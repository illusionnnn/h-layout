<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-08-04 14:23:57
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-08 00:29:00
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
            <el-alert
                :title="elem.uniqueKey + '.onFocus (event) {'"
                type="info"
                :closable="false"
            />
            <code-editor
                ref="codeEditorRef"
                :model-value="state.code"
            />
            <el-alert
                title="}"
                type="info"
                :closable="false"
            />
            <template #footer>
                <span class="event-dialog-footer">
                    <el-button
                        size="default"
                        @click="handleClose"
                    >
                        取消
                    </el-button>
                    <el-button
                        type="primary"
                        size="default"
                        @click="handleSaveEvent"
                    >
                        保存
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </el-form-item>
</template>

<script setup lang="ts">
import { defineProps, reactive, ref } from "vue";
import { ElFormItem, ElButton, ElDialog, ElAlert } from "element-plus";
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
const codeEditorRef = ref('');

const handleShowCode = () => {
    state.showCode = !state.showCode;
};

const handleClose = () => {
    state.showCode = false;
};

const handleSaveEvent = () => {
    // const codeHints = (codeEditorRef.value as any).getEditorAnnotations();
    // console.log(codeHints);
    props.elem.event.onFocus = state.code;
    state.showCode = false;
};
</script>

<style lang="scss" scoped>
    .el-button--small{
        width: 100%;
    }
</style>
