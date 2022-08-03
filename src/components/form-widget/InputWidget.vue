<!--
 * @Description: 输入框
 * @Author: Hedgehog96
 * @Date: 2022-07-06 11:46:39
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-03 16:43:58
-->
<template>
    <el-input
        v-model="inputValue"
        :type="inputType"
        :size="props.elem.props.size"
        :disabled="props.elem.props.disabled"
        :readonly="props.elem.props.readonly"
        :placeholder="props.elem.props.placeholder"
        :clearable="props.elem.props.clearable"
        :minlength="props.elem.props.minLength"
        :maxlength="props.elem.props.maxLength"
        :show-word-limit="props.elem.props.showWordLimit"
        :prefix-icon="props.elem.props.prefixIcon"
        :suffix-icon="props.elem.props.suffixIcon"
    >
        <template
            v-if="props.elem.props.prependButton"
            #prepend
        >
            {{ props.elem.props.prepend }}
        </template>
        <template
            v-if="props.elem.props.appendButton"
            #append
        >
            {{ props.elem.props.append }}
        </template>
    </el-input>
</template>

<script setup lang="ts">
import { defineProps, ref, computed } from "vue";
import { ElInput } from "element-plus";

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
});

const inputValue = ref(null);
const inputType = computed(() => {
    if (props.elem.props.type === "number") {
        // chrome 浏览器兼容性问题
        return "text";
    }
    return props.elem.props.type;
});
</script>