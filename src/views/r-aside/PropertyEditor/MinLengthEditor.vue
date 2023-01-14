<!--
 * @Description: 最小长度组件
 * @Author: Hedgehog96
 * @Date: 2022-08-01 11:11:30
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-14 22:37:41
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="最小长度"
        >最小长度</span>
        <div
            class="h-editor-container"
        >
            <el-input-number
                v-model="minLength"
                :min="0"
            />
        </div>
    </el-form-item>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ElFormItem, ElInputNumber } from 'element-plus'

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
})

const minLength = computed(({
    get() {
        return props.elem.props.minLength
    },
    set(newVal) {
        if (!newVal || isNaN(newVal)) {
            props.elem.props.minLength = null
        } else {
            props.elem.props.minLength = Number.parseInt(newVal)
        }
    }
}))
</script>