<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-08-01 11:11:30
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-01 11:34:55
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="最大长度"
        >最大长度</span>
        <div
            class="h-editor-container"
        >
            <el-input
                v-model="maxLength"
                type="number"
                :min="1"
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

const maxLength = computed(({
    get() {
        return props.elem.props.maxLength;
    },
    set(newVal) {
        if (!newVal || isNaN(newVal)) {
            props.elem.props.maxLength = null;
        } else {
            props.elem.props.maxLength = Number.parseInt(newVal);
        }
    }
}));
</script>