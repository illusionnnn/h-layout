<!--
 * @Description: 单选框组件
 * @Author: Hedgehog96
 * @Date: 2022-08-22 14:31:48
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-21 15:31:45
-->
<template>
    <el-radio-group
        v-model="radioValue"
        :disabled="props.elem.props.disabled"
        @change="handleChangeEvent"
    >
        <template v-if="!props.elem.props.buttonStyle">
            <el-radio
                v-for="(item, idx) in props.elem.props.optionItems"
                :key="idx"
                :label="item.label"
                :size="size"
                :border="props.elem.props.border"
            >
                {{ item.text }}
            </el-radio>
        </template>
        <template v-else>
            <el-radio-button
                v-for="(item, idx) in props.elem.props.optionItems"
                :key="idx"
                :label="item.label"
                :size="size"
            >
                {{ item.text }}
            </el-radio-button>
        </template>
    </el-radio-group>
</template>

<script setup lang="ts" name="RadioWidget">
import { ref, watch } from 'vue'
import { useComponentSize } from '@/hooks'

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
})

let radioValue = ref('radio1')
watch(
    () => props.elem.props.optionItems, newVal => {
        radioValue.value = newVal[0].label
    },
    { deep: true }
)

const { computedSize } = useComponentSize()
const size = computedSize(props.elem)

const handleChangeEvent = (value: number | string | boolean) => {
    const fn = new Function('value', props.elem.event.onChange)
    fn(value)
}
</script>