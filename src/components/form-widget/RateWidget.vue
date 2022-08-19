<!--
 * @Description: 评分
 * @Author: Hedgehog96
 * @Date: 2022-08-18 16:11:42
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-19 15:34:47
-->
<template>
    <el-rate
        v-model="rateValue"
        :max="props.elem.props.max"
        :size="props.elem.props.size"
        :disabled="props.elem.props.disabled"
        :allow-half="props.elem.props.allowHalf"
        :low-threshold="props.elem.props.lowThreshold"
        :show-text="props.elem.props.showText"
        :show-score="props.elem.props.showScore"
        :void-icon="props.elem.props.voidIcon"
        :disabled-void-icon="props.elem.props.disabledVoidIcon"
        @change="handleChangeEvent"
    />
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { ElRate } from 'element-plus';

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
});

const rateValue = ref(0);
const handleChangeEvent = (value: number) => {
    const fn = new Function('value', props.elem.event.onChange);
    fn(value);
};
</script>