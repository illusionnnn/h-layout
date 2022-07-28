<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-07-28 15:08:37
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-07-28 15:11:06
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="只读"
        >只读</span>
        <div
            class="h-editor-container"
        >
            <el-switch v-model="props.elem.props.readonly" />
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
