<!--
 * @Description: 开关
 * @Author: Hedgehog96
 * @Date: 2022-08-18 10:25:43
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-18 16:12:04
-->
<template>
    <el-switch
        v-model="swicthValue"
        :disabled="props.elem.props.disabled"
        :size="props.elem.props.size"
        :width="props.elem.props.width"
        :inline-prompt="props.elem.props.inlinePrompt"
        :active-icon="props.elem.props.activeIcon"
        :inactive-icon="props.elem.props.inActiveIcon"
        :active-text="props.elem.props.activeText"
        :inactive-text="props.elem.props.inActiveText"
        @change="handleChangeEvent"
    />
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { ElSwitch } from "element-plus";

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
});

const swicthValue = ref(false);
const handleChangeEvent =  (value: string | number | boolean) => {
    const fn = new Function('value', props.elem.event.onChange);
    fn(value);
};
</script>