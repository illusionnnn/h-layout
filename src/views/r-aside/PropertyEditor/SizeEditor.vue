<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-07-27 17:08:13
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-07-27 17:48:45
-->
<template>
    <el-form-item class="h-editor">
        <span class="h-editor-title">组件大小
        </span>
        <el-select v-model="props.elem.props.size">
            <el-option
                v-for="item in widgetSizes"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
    </el-form-item>
</template>

<script setup lang="ts">
import { defineProps }  from "vue";
import { ElFormItem, ElSelect } from "element-plus";

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
});
const widgetSizes = [
    { label: 'default', value: 'default' },
    { label: 'large', value: 'large' },
    { label: 'small', value: 'small' },
];
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
        margin-left: 21%;
        width: 65%;
    }
}
</style>