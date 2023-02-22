<!--
 * @Description: 评分组件
 * @Author: Hedgehog96
 * @Date: 2022-08-18 16:11:42
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-21 15:34:38
-->
<template>
    <el-rate
        v-model="rateValue"
        :max="props.elem.props.max"
        :size="size"
        :disabled="props.elem.props.disabled"
        :allow-half="props.elem.props.allowHalf"
        :low-threshold="props.elem.props.lowThreshold"
        :show-text="props.elem.props.showText"
        :show-score="props.elem.props.showScore"
        :void-icon="props.elem.props.voidIcon"
        :disabled-void-icon="props.elem.props.disabledVoidIcon"
        @change="handleChangeEvent"
    />
</template>

<script setup lang="ts" name="RateWidget">
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

const rateValue = ref(0)
const handleChangeEvent = (value: number) => {
    const fn = new Function('value', props.elem.event.onChange)
    fn(value)
}
</script>