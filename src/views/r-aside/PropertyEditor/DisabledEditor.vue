<!--
 * @Description: 禁用组件
 * @Author: Hedgehog96
 * @Date: 2022-07-28 15:03:14
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-08 17:44:48
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="禁用"
        >禁用</span>
        <div
            class="h-editor-container"
        >
            <el-switch v-model="props.elem.props.disabled" />
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