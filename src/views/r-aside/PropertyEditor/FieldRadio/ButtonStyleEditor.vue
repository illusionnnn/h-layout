<!--
 * @Description: 显示为按钮组件
 * @Author: Hedgehog96
 * @Date: 2022-08-22 15:34:56
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-08 17:32:32
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="显示为按钮"
        >显示为按钮</span>
        <div
            class="h-editor-container"
        >
            <el-switch v-model="props.elem.props.buttonStyle" />
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