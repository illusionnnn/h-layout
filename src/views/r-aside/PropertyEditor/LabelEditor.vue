<!--
 * @Description: 标签组件
 * @Author: Hedgehog96
 * @Date: 2022-07-21 16:51:59
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-08 17:26:28
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="标签"
        >标签</span>
        <div
            class="h-editor-container"
        >
            <el-input
                v-model="props.elem.label"
                type="text"
                disabled
            />
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
