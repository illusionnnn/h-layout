<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-08-22 15:43:36
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-22 15:44:03
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="显示边框"
        >显示边框</span>
        <div
            class="h-editor-container"
        >
            <el-switch v-model="props.elem.props.border" />
        </div>
    </el-form-item>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { ElFormItem, ElSwitch } from "element-plus";

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    },
});
</script>