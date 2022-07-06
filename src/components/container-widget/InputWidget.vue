<!--
 * @Description: 输入框
 * @Author: Hedgehog96
 * @Date: 2022-07-06 11:46:39
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-07-06 16:37:46
-->
<template>
    <el-input
        v-model="value"
        :disabled="props.options.disabled"
        :readonly="props.options.readonly"
        :maxlength="props.options.maxlength"
    />
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { ElInput } from "element-plus";

const props = defineProps({
    options: {
        type: Object,
        default: () => ({
            type: 'text'
        })
    }
})

const value = ref(null)
</script>