<!--
 * @Description: 显示字数统计组件
 * @Author: Hedgehog96
 * @Date: 2022-07-28 15:08:37
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-14 22:39:58
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="显示字数统计"
        >显示字数统计</span>
        <div
            class="h-editor-container"
        >
            <el-switch v-model="props.elem.props.showWordLimit" />
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
