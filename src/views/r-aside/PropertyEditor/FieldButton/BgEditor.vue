<!--
 * @Description: 文字背景颜色组件
 * @Author: Hedgehog96
 * @Date: 2022-08-17 15:17:23
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-08 17:31:19
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="显示文字背景颜色"
        >显示文字背景颜色</span>
        <div
            class="h-editor-container"
        >
            <el-switch v-model="props.elem.props.bg" />
        </div>
    </el-form-item>
</template>

<script setup lang="ts">
const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
})
</script>