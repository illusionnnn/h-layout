<!--
 * @Description: 预览组件
 * @Author: Hedgehog96
 * @Date: 2022-08-27 17:59:59
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-22 14:38:39
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
                    <template
                        v-for="comp in componentsStore.components"
                        :key="comp.id"
                    >
                        <base-container
                            v-if="comp.label === 'Grid'"
                            :elem="comp"
                        >
                            <component
                                :is="comp.widget"
                                :elem="comp"
                            ></component>
                        </base-container>

                        <base-component
                            v-else
                            :elem="comp"
                        >
                            <component
                                :is="comp.widget"
                                :elem="comp"
                            ></component>
                        </base-component>
                    </template>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import BaseContainer from './BaseContainer.vue'
import BaseComponent from './BaseComponent.vue'

import { useComponentsStore } from '@/store/components'

const props = defineProps({
    visible: {
        type: Boolean,
        default: false,
        required: true
    }
})
const emits = defineEmits(['close'])
const state = reactive({
    visible: false,
    reload: 0,
    components: []
})
const componentsStore = useComponentsStore()

watch(() => props.visible, val => {
    state.reload++
    state.visible = val
})

const handleClose = () => {
    state.visible = false
    emits('close')
}
</script>

<style lang="scss" scoped>
.preview-dialog {
    :deep(.el-dialog__body) {
        word-break: normal;

        .el-row,
        .el-col {
            outline: none !important;
        }
    }
}
</style>