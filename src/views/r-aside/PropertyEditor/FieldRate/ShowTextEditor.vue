<!--
 * @Description: 显示辅助文字组件
 * @Author: Hedgehog96
 * @Date: 2022-08-19 15:13:34
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-08 17:33:06
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="显示辅助文字"
        >显示辅助文字</span>
        <div
            class="h-editor-container"
        >
            <el-switch v-model="props.elem.props.showText" />
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