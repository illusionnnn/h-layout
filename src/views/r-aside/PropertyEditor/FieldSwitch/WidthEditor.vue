<!--
 * @Description: 宽度组件
 * @Author: Hedgehog96
 * @Date: 2022-08-18 10:49:20
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-14 22:35:53
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="宽度"
        >宽度</span>
        <div
            class="h-editor-container"
        >
            <el-input-number
                v-model="width"
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

const width = computed(({
    get() {
        return props.elem.props.width
    },
    set(newVal) {
        if (!newVal || isNaN(newVal)) {
            props.elem.props.width = null
        } else {
            props.elem.props.width = Number.parseInt(newVal)
        }
    }
}))
</script>