<!--
 * @Description: 按钮组件
 * @Author: Hedgehog96
 * @Date: 2022-08-17 10:59:28
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-21 15:27:33
-->
<template>
    <el-button
        :type="props.elem.props.type"
        :size="size"
        :plain="props.elem.props.plain"
        :text="props.elem.props.text"
        :bg="props.elem.props.bg"
        :link="props.elem.props.link"
        :round="props.elem.props.round"
        :circle="props.elem.props.circle"
        :icon="props.elem.props.buttonIcon"
        :disabled="props.elem.props.disabled"
        @click="handleClickEvent"
    >
        {{ props.elem.props.label }}
    </el-button>
</template>

<script setup lang="ts" name="ButtonWidget">
import { useComponentSize } from '@/hooks'

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
})

const { computedSize } = useComponentSize()
const size = computedSize(props.elem)

const handleClickEvent = () => {
    const fn = new Function(props.elem.event.onClick)
    fn()
}
</script>