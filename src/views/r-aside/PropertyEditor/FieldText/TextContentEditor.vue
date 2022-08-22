<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-08-22 10:46:47
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-22 10:48:24
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="静态文本"
        >静态文本</span>
        <div
            class="h-editor-container"
        >
            <el-input v-model="props.elem.props.textContent" />
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