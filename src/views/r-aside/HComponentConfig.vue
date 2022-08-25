<!--
 * @Description: 组件配置组件
 * @Author: Hedgehog96
 * @Date: 2022-05-11 14:08:14
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-25 15:20:44
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
                            v-if="hasPropEditor(propName)"
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
                            v-if="hasPropEditor(propName)"
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
                            v-if="hasPropEditor(propName)"
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
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :before-close="handleClose"
        >
            <el-alert
                :title="state.currentElem.uniqueKey + `.${state.currentEventName} (${eventsParamMap[state.currentEventName]}) {`"
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
import componentsConfig from "@/config/components";
import widgetProperties from "@/config/propertyRegister";
import PropertyEditor from "./PropertyEditor/index";
import EventEditor from "./EventEditor/index";

const { COMMON_PROPERTIES, ADVANCED_PROPERTIES, EVENT_PROPERTIES } = widgetProperties;
const EVENT_BUS: any = inject("eventBus");
EVENT_BUS.on("clickComponent", (elem: ComponentConfig) => {
    state.currentElem = elem;
});

const state: {
    currentElem: any, activeNames: string,
    code: string, currentEventName: string,
    showEditor: boolean
    } = reactive({
        activeNames: "common",
        code: '',
        currentEventName: '',
        showEditor: false,
        currentElem: {},
    });
const codeEditorRef = ref('');
const instance = getCurrentInstance();
const eventsParamMap = {
    onFocus: 'event',
    onInput: 'value',
    onBlur: 'event',
    onChange: 'value',
    onClick: '',
};

const getPropEditor = (propName: string, editorName: string) => {
    if (propName === "uniqueKey") {
        return PropertyEditor.UniqueKeyEditor;
    }

    if (state.currentElem.label === 'Button') {
        if (propName === 'type') {
            return PropertyEditor.ButtonTypeEditor;
        }
        else if (propName === 'plain') {
            return PropertyEditor.ButtonPlainEditor;
        }
        else if (propName === 'text') {
            return PropertyEditor.ButtonTextEditor;
        }
        else if (propName === 'bg') {
            return PropertyEditor.ButtonBgEditor;
        }
        else if (propName === 'link') {
            return PropertyEditor.ButtonLinkEditor;
        }
        else if (propName === 'round') {
            return PropertyEditor.ButtonRoundEditor;
        }
        else if (propName === 'circle') {
            return PropertyEditor.ButtonCircleEditor;
        }
        else if (propName === 'buttonIcon') {
            return PropertyEditor.ButtonIconEditor;
        }
    }

    if (state.currentElem.label === 'Switch') {
        if (propName === 'inlinePrompt') {
            return PropertyEditor.SwicthInlinePromptEditor;
        }
        else if (propName === 'width') {
            return PropertyEditor.SwitchWidthEditor;
        }
        else if (propName === 'activeIcon') {
            return PropertyEditor.SwitchActiveIconEditor;
        }
        else if (propName === 'inActiveIcon') {
            return PropertyEditor.SwitchInActiveIconEditor;
        }
        else if (propName === 'activeText') {
            return PropertyEditor.SwitchActiveTextEditor;
        }
        else if (propName === 'inActiveText') {
            return PropertyEditor.SwitchInActiveTextEditor;
        }
    }

    if (state.currentElem.label === 'Rate') {
        if (propName === 'allowHalf') {
            return PropertyEditor.RateAllowHalfEditor;
        }
        else if (propName === 'lowThreshold') {
            return PropertyEditor.RateLowThresholdEditor;
        }
        else if (propName === 'highThreshold') {
            return PropertyEditor.RateHighThresholdEditor;
        }
        else if (propName === 'showText') {
            return PropertyEditor.RateShowTextEditor;
        }
        else if (propName === 'showScore') {
            return PropertyEditor.RateShowScoreEditor;
        }
        else if (propName === 'voidIcon') {
            return PropertyEditor.RateVoidIconEditor;
        }
        else if (propName === 'disabledVoidIcon') {
            return PropertyEditor.RateDisabledVoidIconEditor;
        }
    }

    if (state.currentElem.label === 'Text') {
        if (propName === 'textContent') {
            return PropertyEditor.TextContentEditor;
        }
    }

    if (state.currentElem.label === 'Radio' || state.currentElem.label === 'Checkbox') {
        if (propName === 'buttonStyle') {
            return PropertyEditor.RadioButtonStyleEditor;
        }
        else if (propName === 'border') {
            return PropertyEditor.RadioBorderEditor;
        }
    }

    if (state.currentElem.component.props[propName]) {
        const path = `./PropertyEditor/${editorName}.vue`;
        const components = import.meta.glob("./PropertyEditor/*.vue");
        return defineAsyncComponent(components[path]);
    }
    else if (propName === "max") {
        return PropertyEditor.MaxEditor;
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
    else if (propName === "rows") {
        return PropertyEditor.RowsEditor;
    }
    else if (propName === "hidden") {
        return PropertyEditor.HiddenEditor;
    }
    else if (propName === "optionItems") {
        return PropertyEditor.OptionItemsEditor;
    }

    else if (propName === "onFocus") {
        return EventEditor.OnFocusEditor;
    }
    else if (propName === "onInput") {
        return EventEditor.OnInputEditor;
    }
    else if (propName === "onBlur") {
        return EventEditor.OnBlurEditor;
    }
    else if (propName === "onChange") {
        return EventEditor.OnChangeEditor;
    }
    else if (propName === "onClick") {
        return EventEditor.OnClickEditor;
    }
    else {
        return null;
    }
};
const hasPropEditor = (propName: string) => {
    if (propName === 'uniqueKey' || propName === 'label') {
        return true;
    }
    
    let showFlag = true;
    let c: any = {};
    const _componentsConfig = [];
    _componentsConfig.push(...componentsConfig[0].components);
    _componentsConfig.push(...componentsConfig[1].components);
    _componentsConfig.map((_c: ComponentConfig) => {
        if(_c.title === state.currentElem.title) {
            c = _c;
            return;
        }
    });

    if (propName.startsWith('on')) {
        if (c.event[propName] === undefined) {
            showFlag = false;
        }
    } else {
        if (c.props[propName] === undefined) {
            showFlag = false;
        }
    }

    // XXX: 文本域不显示类型
    if (propName === 'type' && state.currentElem.title === '多行输入') {
        return false;
    }
    return showFlag;
};
const handleShowEditor = (eventName: string) => {
    state.code = state.currentElem.event[eventName];
    state.currentEventName = eventName;
    state.showEditor = !state.showEditor;

    // XXX: 切换组件后， ace 不更新问题
    codeEditorRef.value && (codeEditorRef.value as any).setEditorValue(state.currentElem.event[state.currentEventName]);
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

    state.currentElem.event[state.currentEventName] = state.code;
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
