<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-08-09 16:41:11
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-09 16:41:39
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="onChange"
        >onChange</span>
        <div class="h-editor-container">
            <el-button
                type="primary"
                @click.stop="handleShowEditor"
            >
                编写代码
            </el-button>
        </div>
    </el-form-item>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";
import { ElFormItem, ElButton } from "element-plus";

const emits = defineEmits(['show']);

const handleShowEditor = () => {
    emits('show', 'onChange');
};
</script>

<style lang="scss" scoped>
    .el-button--small{
        width: 100%;
    }
</style>