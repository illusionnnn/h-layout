<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-08-19 15:27:34
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-19 15:30:19
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="禁用状态的未选择的Icon"
        >禁用状态的未选择的Icon</span>
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
    iconName: props.elem.props.disabledVoidIcon,
    visible: false,
});

const handleShowIcons = () => {
    state.visible = !state.visible;
};

const handleChangeIcon = (iconName: string) => {
    state.iconName = iconName;
    props.elem.props.disabledVoidIcon = iconName;
};

const handleClose = () => {
    state.visible = false;
};
</script>