<!--
 * @Description: 文字按钮组件
 * @Author: Hedgehog96
 * @Date: 2022-08-17 15:13:30
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-08 17:31:50
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="文字按钮"
        >文字按钮</span>
        <div
            class="h-editor-container"
        >
            <el-switch v-model="props.elem.props.text" />
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