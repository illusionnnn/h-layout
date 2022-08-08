<!--
 * @Description: 组件配置组件
 * @Author: Hedgehog96
 * @Date: 2022-05-11 14:08:14
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-08 16:43:52
-->
<template>
    <div
        v-if="Object.keys(state.currentElem).length"
        class="h-component-config"
    >
        <el-form
            size="small"
            class="h-component-config-form"
            @submit.prevent
        >
            <el-collapse
                v-model="state.activeNames"
            >
                <el-collapse-item
                    title="常见属性"
                    name="common"
                >
                    <template
                        v-for="(editorName, propName) in COMMON_PROPERTIES"
                        :key="propName"
                    >
                        <component
                            :is="getPropEditor(propName, editorName)"
                            v-if="hasPropEditor(editorName)"
                            :elem="state.currentElem"
                        />
                    </template>
                </el-collapse-item>
                <el-collapse-item
                    title="高级属性"
                    name="advanced"
                >
                    <template
                        v-for="(editorName, propName) in ADVANCED_PROPERTIES"
                        :key="propName"
                    >
                        <component
                            :is="getPropEditor(propName, editorName)"
                            v-if="hasPropEditor(editorName)"
                            :elem="state.currentElem"
                        />
                    </template>
                </el-collapse-item>
                <el-collapse-item
                    title="事件属性"
                    name="event"
                >
                    <template
                        v-for="(editorName, propName) in EVENT_PROPERTIES"
                        :key="propName"
                    >
                        <component
                            :is="getPropEditor(propName, editorName)"
                            v-if="hasPropEditor(editorName)"
                            :elem="state.currentElem"
                            :show-editor="state.showEditor"
                            @show="handleShowEditor"
                        />
                    </template>
                </el-collapse-item>
            </el-collapse>
        </el-form>

        <el-dialog
            v-model="state.showEditor"
            title="事件处理"
            :before-close="handleClose"
        >
            <el-alert
                :title="state.currentElem.uniqueKey + '.onFocus (event) {'"
                type="info"
                :closable="false"
            />
            <code-editor
                ref="codeEditorRef"
                :model-value="state.code"
                @update="handleCodeUpdate"
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
    </div>
</template>

<script setup lang="ts">
import { inject, reactive, ref, defineAsyncComponent, getCurrentInstance } from "vue";
import { ElForm, ElButton, ElDialog, ElAlert } from "element-plus";
import CodeEditor from "@/components/CodeEditor.vue";
import { ComponentConfig } from "@/config/interfaces";
import widgetProperties from "@/config/propertyRegister";
import PropertyEditor from "./PropertyEditor/index";

const { COMMON_PROPERTIES, ADVANCED_PROPERTIES, EVENT_PROPERTIES } = widgetProperties;
const EVENT_BUS: any = inject("eventBus");
EVENT_BUS.on("clickComponent", (elem: ComponentConfig) => {
    state.currentElem = elem;
});

const state: { currentElem: any, activeNames: string, code: string; showEditor: boolean } = reactive({
    currentElem: {},
    activeNames: "common",
    code: '',
    showEditor: false
});
const codeEditorRef = ref('');
const instance = getCurrentInstance();

const getPropEditor = (propName: string, editorName: string) => {
    if (propName === "uniqueKey") {
        return PropertyEditor.UniqueKeyEditor;
    }

    if (state.currentElem.component.props[propName]) {
        const path = `./PropertyEditor/${editorName}.vue`;
        const components = import.meta.glob("./PropertyEditor/*.vue");
        return defineAsyncComponent(components[path]);
    }
    else if (propName === "minLength") {
        return PropertyEditor.MinLengthEditor;
    }
    else if (propName === "maxLength") {
        return PropertyEditor.MaxLengthEditor;
    }
    else if (propName === "prependButton") {
        return PropertyEditor.PrependButtonEditor;
    }
    else if (propName === "prepend") {
        return PropertyEditor.PrependEditor;
    }
    else if (propName === "appendButton") {
        return PropertyEditor.AppendButtonEditor;
    }
    else if (propName === "append") {
        return PropertyEditor.AppendEditor;
    }

    else if (propName === "onFocus") {
        return PropertyEditor.OnFocusEditor;
    }
    else {
        return null;
    }
};
const hasPropEditor = (editorName: string) => {
    if (!editorName) {
        return false;
    }
    return true;
};
const handleShowEditor = () => {
    state.code = state.currentElem.event.onFocus;
    state.showEditor = !state.showEditor;

    // XXX: 切换组件后， ace 不更新问题
    codeEditorRef.value && (codeEditorRef.value as any).setEditorValue(state.currentElem.event.onFocus);
};
const handleClose = () => {
    state.showEditor = false;
};
const handleCodeUpdate = (code: string) => {
    state.code = code;
}; 
const handleSaveEvent = () => {
    const annotations = (codeEditorRef.value as any).getEditorAnnotations();
    let syntaxErrorFlag = false;

    if (annotations && annotations.length > 0) {
        annotations.forEach((annotation: any) => {
            if (annotation.type === 'error') {
                syntaxErrorFlag = true;
            }
        });
        if (syntaxErrorFlag) {
            instance?.appContext.config.globalProperties.$message.error('代码格式错误');
            return;
        }
    }

    state.currentElem.event.onFocus = state.code;
    state.showEditor = false;
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
    }
</style>
