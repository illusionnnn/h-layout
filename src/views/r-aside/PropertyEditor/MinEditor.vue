<!--
 * @Description: 最小值组件
 * @Author: Hedgehog96
 * @Date: 2022-08-01 11:03:55
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-14 22:37:36
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="最小值"
        >最小值</span>
        <div
            class="h-editor-container"
        >
            <el-input v-model="minValue" />
        </div>
    </el-form-item>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
})

const minValue = computed(({
    get() {
        return props.elem.props.min
    },
    set(newVal) {
        if ((newVal === undefined) || (newVal === null) || isNaN(newVal)) {
            props.elem.props.min = null
        } else {
            props.elem.props.min = Number.parseInt(newVal)
        }
    }
}))
</script>
