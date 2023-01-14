<!--
 * @Description: focus事件编辑按钮
 * @Author: Hedgehog96
 * @Date: 2022-08-04 14:23:57
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-14 22:21:00
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="onFocus"
        >onFocus</span>
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
import { defineEmits } from 'vue'
import { ElFormItem, ElButton } from 'element-plus'

const emits = defineEmits(['show'])

const handleShowEditor = () => {
    emits('show', 'onFocus')
}
</script>

<style lang="scss" scoped>
    .el-button--small {
        width: 100%;
    }
</style>
