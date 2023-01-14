<!--
 * @Description: 可清除组件
 * @Author: Hedgehog96
 * @Date: 2022-07-28 16:24:35
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-14 22:36:24
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="可清除"
        >可清除</span>
        <div
            class="h-editor-container"
        >
            <el-switch v-model="props.elem.props.clearable" />
        </div>
    </el-form-item>
</template>

<script setup lang="ts">
import { ElFormItem, ElSwitch } from 'element-plus'

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
})
</script>
