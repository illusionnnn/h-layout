<!--
 * @Description: 尾部Icon组件
 * @Author: Hedgehog96
 * @Date: 2022-08-01 11:11:30
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-14 22:40:13
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="尾部Icon"
        >尾部Icon</span>
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
import IconsDialog from '@/components/IconsDialog.vue'

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
})

const state = reactive({
    iconName: props.elem.props.suffixIcon,
    visible: false
})

const handleShowIcons = () => {
    state.visible = !state.visible
}

const handleChangeIcon = (iconName: string) => {
    state.iconName = iconName
    props.elem.props.suffixIcon = iconName
}

const handleClose = () => {
    state.visible = false
}
</script>