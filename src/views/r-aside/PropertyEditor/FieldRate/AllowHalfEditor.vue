<!--
 * @Description: 半选组件
 * @Author: Hedgehog96
 * @Date: 2022-08-18 16:32:19
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-08 17:32:39
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="允许半选"
        >允许半选</span>
        <div
            class="h-editor-container"
        >
            <el-switch v-model="props.elem.props.allowHalf" />
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