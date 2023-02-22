<!--
 * @Description: 栅格列宽度组件
 * @Author: Hedgehog96
 * @Date: 2023-02-10 18:45:06
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-22 11:01:35
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="栅格列宽度"
        >栅格列宽度</span>
        <div class="h-editor-container">
            <el-input-number
                v-model="props.elem.props.span"
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
