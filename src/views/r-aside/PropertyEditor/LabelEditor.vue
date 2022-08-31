<!-- eslint-disable vue/no-mutating-props -->
<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-07-21 16:51:59
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-31 14:17:45
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="标签"
        >标签</span>
        <div
            class="h-editor-container"
        >
            <el-input
                v-model="props.elem.label"
                type="text"
                disabled
            />
        </div>
    </el-form-item>
</template>

<script setup lang="ts">
import { defineProps }  from "vue";
import { ElFormItem, ElInput } from "element-plus";

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    },
});
</script>
