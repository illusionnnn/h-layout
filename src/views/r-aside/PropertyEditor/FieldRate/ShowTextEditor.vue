<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-08-19 15:13:34
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-19 15:14:14
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="显示辅助文字"
        >显示辅助文字</span>
        <div
            class="h-editor-container"
        >
            <el-switch v-model="props.elem.props.showText" />
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