<!--
 * @Description: 按钮Icon组件
 * @Author: Hedgehog96
 * @Date: 2022-08-17 15:32:04
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-14 22:45:06
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="按钮Icon"
        >按钮Icon</span>
        <div
            class="h-editor-container"
        >
            <el-input
                v-model="state.iconName"
                type="text"
                readonly
                @click.stop="handleShowIcons"
            />
        </div>
        <icons-dialog
            :icon-name="''"
            :visible="state.visible"
            @update="handleChangeIcon"
            @close="handleClose"
        />
    </el-form-item>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { ElFormItem, ElInput } from 'element-plus'
import IconsDialog from '@/components/IconsDialog.vue'

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
})

const state = reactive({
    iconName: props.elem.props.buttonIcon,
    visible: false
})

const handleShowIcons = () => {
    state.visible = !state.visible
}

const handleChangeIcon = (iconName: string) => {
    state.iconName = iconName
    props.elem.props.buttonIcon = iconName
}

const handleClose = () => {
    state.visible = false
}
</script>