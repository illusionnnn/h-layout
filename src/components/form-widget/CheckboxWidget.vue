<!--
 * @Description: 多选框
 * @Author: Hedgehog96
 * @Date: 2022-08-25 14:59:12
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-25 21:35:35
-->
<template>
    <el-checkbox-group
        v-model="checkboxValue"
        :disabled="props.elem.props.disabled"
        :max="props.elem.props.max"
        @change="handleChangeEvent"
    >
        <template v-if="!props.elem.props.buttonStyle">
            <el-checkbox
                v-for="(item, idx) in props.elem.props.optionItems"
                :key="idx"
                :label="item.label"
                :size="props.elem.props.size"
                :border="props.elem.props.border"
            >
                {{ item.text }}
            </el-checkbox>
        </template>
        <template v-else>
            <el-checkbox-button
                v-for="(item, idx) in props.elem.props.optionItems"
                :key="idx"
                :label="item.label"
                :size="props.elem.props.size"
            >
                {{ item.text }}
            </el-checkbox-button>
        </template>
    </el-checkbox-group>
</template>

<script setup lang="ts">
import { defineProps, ref, watch } from 'vue';
import { ElCheckboxGroup, ElCheckbox, ElCheckboxButton, CheckboxValueType } from 'element-plus';

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
});

let checkboxValue = ref(['checkbox1']);
watch(() => props.elem.props.optionItems, (newVal) => {
    checkboxValue.value = newVal[0].label;
});

const handleChangeEvent = (value: CheckboxValueType[]) => {
    const fn = new Function('value', props.elem.event.onChange);
    fn(value);
};
</script>