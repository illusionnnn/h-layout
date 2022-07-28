<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-07-28 17:38:19
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-07-28 17:38:41
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
                    label="text"
                    value="text"
                />
                <el-option
                    label="password"
                    value="password"
                />
            </el-select>
        </div>
    </el-form-item>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { ElFormItem, ElSelect } from "element-plus";

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    },
});
</script>
