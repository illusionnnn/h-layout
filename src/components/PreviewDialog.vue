<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-08-27 17:59:59
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-28 16:47:53
-->
<template>
    <div
        class="preview-dialog"
    >
        <el-dialog
            v-model="state.visible"
            title="页面预览"
            :before-close="handleClose"
        >
            <template v-if="!componentsStore.components.length">
                <div style="text-align: center;">
                    暂无组件
                </div>
            </template>
            <template
                v-else
            >
                <div :key="state.reload">
                    <base-component
                        v-for="comp in componentsStore.components"
                        :key="comp.id"
                        :elem="comp"
                    >
                        <input-widget
                            v-if="comp.label === 'Input'"
                            :elem="comp"
                        />
                        <button-widget
                            v-else-if="comp.label === 'Button'"
                            :elem="comp"
                        />
                        <switch-widget
                            v-else-if="comp.label === 'Switch'"
                            :elem="comp"
                        />
                        <rate-widget
                            v-else-if="comp.label === 'Rate'"
                            :elem="comp"
                        />
                        <text-widget
                            v-else-if="comp.label === 'Text'"
                            :elem="comp"
                        />
                        <radio-widget
                            v-else-if="comp.label === 'Radio'"
                            :elem="comp"
                        />
                        <checkbox-widget
                            v-else-if="comp.label === 'Checkbox'"
                            :elem="comp"
                        />
                        <divider-widget
                            v-else-if="comp.label === 'Divider'"
                            :elem="comp"
                        />
                    </base-component>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, reactive, watch } from 'vue';
import { ElDialog } from 'element-plus';
import BaseComponent from "./BaseComponent.vue";
import _ from "./form-widget";

import { useComponentsStore } from "@/store/components";

const props = defineProps({
    visible: {
        type: Boolean,
        default: false,
        required: true
    }
});
const emits = defineEmits(['close']);
const state = reactive({
    visible: false,
    reload: 0,
    components: []
});
const componentsStore = useComponentsStore();

watch(() => props.visible, (val) => {
    state.reload++;
    state.visible = val;
});

const handleClose = () => {
    state.visible = false;
    emits('close');
};
</script>

<style lang="scss" scoped>
.preview-dialog {
    :deep(.el-dialog__body) {
        word-break: normal;
    }
}
</style>