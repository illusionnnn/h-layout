<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-08-03 16:34:21
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-03 16:37:06
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="后置内容"
        >后置内容</span>
        <div class="h-editor-container">
            <el-input
                v-model="props.elem.props.append"
                type="text"
            />
        </div>
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