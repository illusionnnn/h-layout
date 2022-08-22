<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-08-22 11:28:51
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-22 11:33:52
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="隐藏字段标签"
        >隐藏字段标签</span>
        <div
            class="h-editor-container"
        >
            <el-switch v-model="props.elem.props.hidden" />
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