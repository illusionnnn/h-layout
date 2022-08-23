<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-08-22 14:31:48
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-23 16:29:40
-->
<template>
    <el-radio-group
        v-model="radioValue"
        :disabled="props.elem.props.disabled"
        @change="handleChangeEvent"
    >
        <template v-if="!props.elem.props.buttonStyle">
            <el-radio
                v-for="(item, idx) in props.elem.props.optionItems"
                :key="idx"
                :label="item.label"
                :size="props.elem.props.size"
                :border="props.elem.props.border"
            >
                {{ item.text }}
            </el-radio>
        </template>
        <template v-else>
            <el-radio-button
                v-for="(item, idx) in props.elem.props.optionItems"
                :key="idx"
                :label="item.label"
                :size="props.elem.props.size"
            >
                {{ item.text }}
            </el-radio-button>
        </template>
    </el-radio-group>
</template>

<script setup lang="ts">
import { defineProps, ref, watch } from 'vue';
import { ElRadioGroup, ElRadio, ElRadioButton } from 'element-plus';

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
});

let radioValue = ref('radio1');
watch(() => props.elem.props.optionItems, (newVal) => {
    radioValue.value = newVal[0].label;
});

const handleChangeEvent = (value: number | string | boolean) => {
    const fn = new Function('value', props.elem.event.onChange);
    fn(value);
};
</script>