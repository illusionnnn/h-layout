<!--
 * @Description: 添加前置内容组件
 * @Author: Hedgehog96
 * @Date: 2022-08-03 16:40:41
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-14 22:39:30
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="添加前置内容"
        >添加前置内容</span>
        <div
            class="h-editor-container"
        >
            <el-switch v-model="props.elem.props.prependButton" />
        </div>
    </el-form-item>
</template>

<script setup lang="ts">
import { ElFormItem, ElSwitch } from 'element-plus'

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
})
</script>