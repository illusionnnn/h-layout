<!--
 * @Description: 低分界限值组件
 * @Author: Hedgehog96
 * @Date: 2022-08-18 16:41:37
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-14 22:32:42
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="低分界限值"
        >低分界限值</span>
        <div
            class="h-editor-container"
        >
            <el-input-number
                v-model="lowThreshold"
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

const lowThreshold = computed(({
    get() {
        return props.elem.props.lowThreshold
    },
    set(newVal) {
        if (!newVal || isNaN(newVal)) {
            props.elem.props.lowThreshold = 2
        } else {
            props.elem.props.lowThreshold = Number.parseInt(newVal)
        }
    }
}))
</script>