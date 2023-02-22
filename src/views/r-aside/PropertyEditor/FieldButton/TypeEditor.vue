<!--
 * @Description: 显示类型组件
 * @Author: Hedgehog96
 * @Date: 2022-08-17 14:57:39
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-08 17:31:55
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="显示类型"
        >显示类型</span>
        <div
            class="h-editor-container"
        >
            <el-select v-model="props.elem.props.type">
                <el-option
                    label="default"
                    value=""
                />
                <el-option
                    label="primary"
                    value="primary"
                />
                <el-option
                    label="success"
                    value="success"
                />
                <el-option
                    label="warning"
                    value="warning"
                />
                <el-option
                    label="danger"
                    value="danger"
                />
                <el-option
                    label="info"
                    value="info"
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
</script>