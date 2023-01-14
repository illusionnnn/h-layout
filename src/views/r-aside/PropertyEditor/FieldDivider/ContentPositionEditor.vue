<!--
 * @Description: 自定义分隔线内容位置组件
 * @Author: Hedgehog96
 * @Date: 2022-08-25 21:44:49
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-14 22:31:54
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="自定义分隔线内容的位置"
        >自定义分隔线内容的位置</span>
        <div class="h-editor-container">
            <el-select v-model="props.elem.props.contentPosition">
                <el-option
                    v-for="item in widgetContentPosition"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </el-select>
        </div>
    </el-form-item>
</template>

<script setup lang="ts">
import { ElFormItem, ElSelect } from 'element-plus'

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
})
const widgetContentPosition = [
    { label: 'center', value: 'center' },
    { label: 'left', value: 'left' },
    { label: 'right', value: 'right' }
]
</script>
