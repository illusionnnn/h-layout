<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-08-18 16:16:55
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-19 15:45:41
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="最大值"
        >最大值</span>
        <div
            class="h-editor-container"
        >
            <el-input-number
                v-model="maxValue"
                :max="props.elem.props.$_max ? props.elem.props.$_max : Infinity"
                :min="1"
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

const maxValue = computed(({
    get() {
        return props.elem.props.max;
    },
    set(newVal) {
        if ((newVal === undefined) || (newVal === null) || isNaN(newVal)) {
            props.elem.props.max = null;
        } else {
            props.elem.props.max = Number.parseInt(newVal);
        }
    }
}));
</script>