<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-08-18 14:45:59
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-18 14:50:08
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="打开时的文字描述"
        >打开时的文字描述</span>
        <div
            class="h-editor-container"
        >
            <el-input v-model="props.elem.props.activeText" />
        </div>
    </el-form-item>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { ElFormItem, ElInput } from "element-plus";

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    },
});
</script>