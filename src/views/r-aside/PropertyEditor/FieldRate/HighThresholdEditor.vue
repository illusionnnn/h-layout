<!--
 * @Description: 高分界限值组件
 * @Author: Hedgehog96
 * @Date: 2022-08-18 16:48:11
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-14 22:32:28
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="高分界限值"
        >高分界限值</span>
        <div
            class="h-editor-container"
        >
            <el-input-number
                v-model="highThreshold"
                :min="1"
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

const highThreshold = computed(({
    get() {
        return props.elem.props.highThreshold
    },
    set(newVal) {
        if (!newVal || isNaN(newVal)) {
            props.elem.props.highThreshold = 4
        } else {
            props.elem.props.highThreshold = Number.parseInt(newVal)
        }
    }
}))
</script>