<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-07-21 16:51:59
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-07-21 18:25:45
-->
<template>
    <el-form-item
        prop="uniqueKey"
        class="h-editor"
    >
        <span class="h-editor-title">标签</span>
        <el-input
            v-model="state.$_label"
            type="text"
        />
    </el-form-item>
</template>

<script setup lang="ts">
import { reactive, defineProps }  from "vue";
import { ElFormItem, ElInput } from "element-plus";

const props = defineProps({
    label: {
        type: String,
        default: ""
    }
})
const state = reactive({
    $_label: props.label,
})
</script>

<style lang="scss" scoped>
.h-editor {
    margin-bottom: 16px;
    padding: 0 8px;

    :deep(.el-form-item__content) {
        margin-left: 0 !important;
    }

    .h-editor-title {
        width: 20%;
        font-size: 12px;
    }
    :deep(.el-input) {
        margin-left: 15%;
        width: 65%;
    }
}
</style>