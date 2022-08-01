<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-08-01 11:11:30
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-01 11:32:17
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="最小长度"
        >最小长度</span>
        <div
            class="h-editor-container"
        >
            <el-input
                v-model="minLength"
                type="number"
                :min="0"
            />
        </div>
    </el-form-item>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { ElFormItem, ElInput } from "element-plus";

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    },
});

const minLength = computed(({
    get() {
        return props.elem.props.minLength;
    },
    set(newVal) {
        if (!newVal || isNaN(newVal)) {
            props.elem.props.minLength = null;
        } else {
            props.elem.props.minLength = Number.parseInt(newVal);
        }
    }
}));
</script>