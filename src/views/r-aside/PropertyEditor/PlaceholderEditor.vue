<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-07-28 16:19:58
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-07-28 16:21:05
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="占位内容"
        >占位内容</span>
        <div
            class="h-editor-container"
        >
            <el-input
                v-model="props.elem.props.placeholder"
                type="text"
            />
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
