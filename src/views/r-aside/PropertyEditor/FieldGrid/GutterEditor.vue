<!--
 * @Description: 栅格间隔组件
 * @Author: Hedgehog96
 * @Date: 2023-02-21 16:16:55
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-21 18:04:19
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="栅格间隔"
        >栅格间隔</span>
        <div class="h-editor-container">
            <el-input-number
                v-model="props.elem.props.gutter"
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