<!--
 * @Description: 关闭时的文字描述组件
 * @Author: Hedgehog96
 * @Date: 2022-08-18 14:55:45
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-14 22:45:28
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="关闭时的文字描述"
        >关闭时的文字描述</span>
        <div
            class="h-editor-container"
        >
            <el-input v-model="props.elem.props.inActiveText" />
        </div>
    </el-form-item>
</template>

<script setup lang="ts">
import { ElFormItem, ElInput } from 'element-plus'

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
})
</script>