<!--
 * @Description: 分隔符样式组件
 * @Author: Hedgehog96
 * @Date: 2022-08-25 22:00:04
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-08 17:32:15
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="设置分隔符样式"
        >设置分隔符样式</span>
        <div class="h-editor-container">
            <el-select v-model="props.elem.props.borderStyle">
                <el-option
                    v-for="item in widgetBorderStyle"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </el-select>
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
const widgetBorderStyle = [
    { label: 'solid', value: 'solid' },
    { label: 'dashed', value: 'dashed' },
    { label: 'dotted', value: 'dotted' },
    { label: 'double', value: 'double' }
]
</script>