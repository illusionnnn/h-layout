<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-08-18 11:28:42
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-18 14:49:17
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="打开时Icon"
        >打开时Icon</span>
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
import { defineProps, reactive } from 'vue';
import { ElFormItem, ElInput } from "element-plus";
import IconsDialog from '@/components/IconsDialog.vue';

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    },
});

const state = reactive({
    iconName: props.elem.props.activeIcon,
    visible: false,
});

const handleShowIcons = () => {
    state.visible = !state.visible;
};

const handleChangeIcon = (iconName: string) => {
    state.iconName = iconName;
    props.elem.props.activeIcon = iconName;
};

const handleClose = () => {
    state.visible = false;
};
</script>