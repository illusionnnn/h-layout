<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-07-14 17:27:15
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-07-15 16:31:56
-->
<template>
    <el-form-item
        prop="uniqueKey"
        :rules="state.uniqueKeyRule"
    >
        <el-input
            v-model="state.$_uniqueKey"
            type="text"
        />
    </el-form-item>
</template>

<script setup lang="ts">
import { reactive, defineProps } from 'vue'
import { ElFormItem, ElInput } from 'element-plus'

const props = defineProps({
    uniqueKey: {
        type: String,
        default: ''
    }
})
const state = reactive({
    $_uniqueKey: props.uniqueKey,
    uniqueKeyRule: [{ required: true, message: '唯一标识不能为空' }],
})
</script>