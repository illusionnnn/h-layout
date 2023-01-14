<!--
 * @Description: 行数组件
 * @Author: Hedgehog96
 * @Date: 2022-08-10 16:04:10
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-14 22:39:53
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="行数"
        >行数</span>
        <div class="h-editor-container">
            <el-input-number
                v-model="props.elem.props.rows"
            />
        </div>
    </el-form-item>
</template>

<script setup lang="ts">
import { ElFormItem, ElInputNumber } from 'element-plus'

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
})
</script>