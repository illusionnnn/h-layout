<!--
 * @Description: 打开时的文字描述组件
 * @Author: Hedgehog96
 * @Date: 2022-08-18 14:45:59
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-08 17:33:21
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="打开时的文字描述"
        >打开时的文字描述</span>
        <div
            class="h-editor-container"
        >
            <el-input v-model="props.elem.props.activeText" />
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