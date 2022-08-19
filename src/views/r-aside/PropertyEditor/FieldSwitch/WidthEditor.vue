<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-08-18 10:49:20
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-19 15:40:35
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="宽度"
        >宽度</span>
        <div
            class="h-editor-container"
        >
            <el-input-number
                v-model="width"
                :min="0"
            />
        </div>
    </el-form-item>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { ElFormItem, ElInputNumber } from "element-plus";

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    },
});

const width = computed(({
    get() {
        return props.elem.props.width;
    },
    set(newVal) {
        if (!newVal || isNaN(newVal)) {
            props.elem.props.width = null;
        } else {
            props.elem.props.width = Number.parseInt(newVal);
        }
    }
}));
</script>