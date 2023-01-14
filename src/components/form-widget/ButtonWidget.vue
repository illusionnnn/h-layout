<!--
 * @Description: 按钮组件
 * @Author: Hedgehog96
 * @Date: 2022-08-17 10:59:28
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-14 22:42:11
-->
<template>
    <el-button
        :type="props.elem.props.type"
        :size="props.elem.props.size"
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

<script setup lang="ts">
import { ElButton } from 'element-plus'

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
})

const handleClickEvent = () => {
    const fn = new Function(props.elem.event.onClick)
    fn()
}
</script>