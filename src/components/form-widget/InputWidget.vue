<!--
 * @Description: 输入框
 * @Author: Hedgehog96
 * @Date: 2022-07-06 11:46:39
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-07-27 14:40:05
-->
<template>
    <el-input
        v-model="inputValue"
        :type="inputType"
        :size="props.options.size"
        :disabled="props.options.disabled"
        :readonly="props.options.readonly"
        :maxlength="props.options.maxlength"
        :clearable="props.options.clearable"
        :placeholder="props.options.placeholder"
        :prefix-icon="props.options.prefixIcon"
        :suffix-icon="props.options.suffixIcon"
        :show-password="props.options.showPassword"
        :show-word-limit="props.options.showWordLimit"
    />
</template>

<script setup lang="ts">
import { defineProps, ref, computed } from "vue";
import { ElInput } from "element-plus";
import { InputProps } from "@/config/interfaces";

const props = defineProps<{
    options: InputProps
}>();

const inputValue = ref(null);
const inputType = computed(() => {
    if (props.options.type === "number") {
        // chrome 浏览器兼容性问题
        return "text";
    }
    return props.options.type;
});
</script>