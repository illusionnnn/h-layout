<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-07-14 17:27:15
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-07-27 17:16:14
-->
<template>
    <el-form-item
        class="h-editor"
    >
        <span class="h-editor-title">唯一标识</span>
        <el-input
            v-model="props.elem.uniqueKey"
            type="text"
        />
    </el-form-item>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { ElFormItem, ElInput } from "element-plus";

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
});
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