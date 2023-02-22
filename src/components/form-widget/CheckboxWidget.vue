<!--
 * @Description: 多选框组件
 * @Author: Hedgehog96
 * @Date: 2022-08-25 14:59:12
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-21 15:30:02
-->
<template>
    <el-checkbox-group
        v-model="checkboxValue"
        :disabled="props.elem.props.disabled"
        :max="props.elem.props.max"
        @change="handleChangeEvent"
    >
        <template v-if="!props.elem.props.buttonStyle">
            <el-checkbox
                v-for="(item, idx) in props.elem.props.optionItems"
                :key="idx"
                :label="item.label"
                :size="size"
                :border="props.elem.props.border"
            >
                {{ item.text }}
            </el-checkbox>
        </template>
        <template v-else>
            <el-checkbox-button
                v-for="(item, idx) in props.elem.props.optionItems"
                :key="idx"
                :label="item.label"
                :size="size"
            >
                {{ item.text }}
            </el-checkbox-button>
        </template>
    </el-checkbox-group>
</template>

<script setup lang="ts" name="CheckboxWidget">
import { ref, watch } from 'vue'
import { CheckboxValueType } from 'element-plus'
import { useComponentSize } from '@/hooks'

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
})

let checkboxValue = ref(['checkbox1'])
watch(() => props.elem.props.optionItems, newVal => {
    checkboxValue.value = newVal[0].label
})

const { computedSize } = useComponentSize()
const size = computedSize(props.elem)

const handleChangeEvent = (value: CheckboxValueType[]) => {
    const fn = new Function('value', props.elem.event.onChange)
    fn(value)
}
</script>