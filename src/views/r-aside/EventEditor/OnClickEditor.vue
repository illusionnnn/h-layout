<!--
 * @Description: click事件编辑按钮
 * @Author: Hedgehog96
 * @Date: 2022-08-17 15:32:53
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-14 22:56:09
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="onClick"
        >onClick</span>
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
import { ElFormItem, ElButton } from 'element-plus'

const emits = defineEmits(['show'])

const handleShowEditor = () => {
    emits('show', 'onClick')
}
</script>

<style lang="scss" scoped>
    .el-button--small {
        width: 100%;
    }
</style>