<!--
 * @Description: 显示当前分数组件
 * @Author: Hedgehog96
 * @Date: 2022-08-19 15:18:01
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-08 17:33:01
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="显示当前分数"
        >显示当前分数</span>
        <div
            class="h-editor-container"
        >
            <el-switch v-model="props.elem.props.showScore" />
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