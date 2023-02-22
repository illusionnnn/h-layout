<!--
 * @Description: 栅格列右移栅格数组件
 * @Author: Hedgehog96
 * @Date: 2023-02-10 18:45:06
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-22 11:04:28
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="右移栅格数"
        >右移栅格数</span>
        <div class="h-editor-container">
            <el-input-number
                v-model="props.elem.props.push"
                :min="0"
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
