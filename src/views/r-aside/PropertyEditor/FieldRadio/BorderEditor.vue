<!--
 * @Description: 显示边框组件
 * @Author: Hedgehog96
 * @Date: 2022-08-22 15:43:36
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-08 17:32:28
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="显示边框"
        >显示边框</span>
        <div
            class="h-editor-container"
        >
            <el-switch v-model="props.elem.props.border" />
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