<!--
 * @Description: 组件大小组件
 * @Author: Hedgehog96
 * @Date: 2022-07-27 17:08:13
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-14 22:40:06
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="组件大小"
        >组件大小</span>
        <div class="h-editor-container">
            <el-select v-model="props.elem.props.size">
                <el-option
                    v-for="item in widgetSizes"
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
const widgetSizes = [
    { label: 'default', value: 'default' },
    { label: 'large', value: 'large' },
    { label: 'small', value: 'small' }
]
</script>