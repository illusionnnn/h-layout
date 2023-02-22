<!--
 * @Description: 开关组件
 * @Author: Hedgehog96
 * @Date: 2022-08-18 10:25:43
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-21 15:34:56
-->
<template>
    <el-switch
        v-model="swicthValue"
        :disabled="props.elem.props.disabled"
        :size="size"
        :width="props.elem.props.width"
        :inline-prompt="props.elem.props.inlinePrompt"
        :active-icon="props.elem.props.activeIcon"
        :inactive-icon="props.elem.props.inActiveIcon"
        :active-text="props.elem.props.activeText"
        :inactive-text="props.elem.props.inActiveText"
        @change="handleChangeEvent"
    />
</template>

<script setup lang="ts" name="SwitchWidget">
import { ref } from 'vue'
import { useComponentSize } from '@/hooks'

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
})

const { computedSize } = useComponentSize()
const size = computedSize(props.elem)

const swicthValue = ref(false)
const handleChangeEvent =  (value: string | number | boolean) => {
    const fn = new Function('value', props.elem.event.onChange)
    fn(value)
}
</script>