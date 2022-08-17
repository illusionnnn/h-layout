<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-08-17 15:19:35
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-17 15:30:32
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="链接按钮"
        >链接按钮</span>
        <div
            class="h-editor-container"
        >
            <el-switch v-model="props.elem.props.link" />
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