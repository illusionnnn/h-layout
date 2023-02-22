<!--
 * @Description: 输入框组件
 * @Author: Hedgehog96
 * @Date: 2022-07-06 11:46:39
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-21 15:30:59
-->
<template>
    <el-input
        v-model="inputValue"
        :type="inputType"
        :size="size"
        :rows="props.elem.props.type === 'textarea' ? props.elem.props.rows : null"
        :disabled="props.elem.props.disabled"
        :readonly="props.elem.props.readonly"
        :placeholder="props.elem.props.placeholder"
        :clearable="props.elem.props.clearable"
        :minlength="props.elem.props.minLength"
        :maxlength="props.elem.props.maxLength"
        :show-word-limit="props.elem.props.showWordLimit"
        :prefix-icon="props.elem.props.prefixIcon"
        :suffix-icon="props.elem.props.suffixIcon"
        @focus="handleFocusEvent"
        @input="handleInputEvent"
        @blur="handleBlurEvent"
        @change="handleChangeEvent"
    >
        <template
            v-if="props.elem.props.prependButton"
            #prepend
        >
            {{ props.elem.props.prepend }}
        </template>
        <template
            v-if="props.elem.props.appendButton"
            #append
        >
            {{ props.elem.props.append }}
        </template>
    </el-input>
</template>

<script setup lang="ts" name="InputWidget">
import { ref, computed } from 'vue'
import { useComponentSize } from '@/hooks'

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
})

const inputValue = ref(null)
const inputType = computed(() => {
    if (props.elem.props.type === 'number') {
        // chrome 浏览器兼容性问题
        return 'text'
    }
    return props.elem.props.type
})

const { computedSize } = useComponentSize()
const size = computedSize(props.elem)

const handleFocusEvent = (event: Event) => {
    const fn = new Function('event', props.elem.event.onFocus)
    fn(event)
}
const handleInputEvent = (value: string) => {
    const fn = new Function('value', props.elem.event.onInput)
    fn(value)
}
const handleBlurEvent = (event: Event) => {
    const fn = new Function('event', props.elem.event.onBlur)
    fn(event)
}
const handleChangeEvent =  (value: string) => {
    const fn = new Function('value', props.elem.event.onChange)
    fn(value)
}
</script>