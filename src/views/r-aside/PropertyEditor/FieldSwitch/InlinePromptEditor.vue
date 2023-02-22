<!--
 * @Description: 呈现文本的第一个字符组件
 * @Author: Hedgehog96
 * @Date: 2022-08-18 10:38:14
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-08 17:33:34
-->
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="呈现文本的第一个字符"
        >呈现文本的第一个字符</span>
        <div
            class="h-editor-container"
        >
            <el-switch v-model="props.elem.props.inlinePrompt" />
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