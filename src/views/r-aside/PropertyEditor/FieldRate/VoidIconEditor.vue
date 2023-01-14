<!--
 * @Description: 未被选中的Icon组件
 * @Author: Hedgehog96
 * @Date: 2022-08-19 15:22:09
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-14 22:33:01
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="未被选中的Icon"
        >未被选中的Icon</span>
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
    iconName: props.elem.props.voidIcon,
    visible: false
})

const handleShowIcons = () => {
    state.visible = !state.visible
}

const handleChangeIcon = (iconName: string) => {
    state.iconName = iconName
    props.elem.props.voidIcon = iconName
}

const handleClose = () => {
    state.visible = false
}
</script>