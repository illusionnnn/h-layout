<!--
 * @Description: 静态文本组件
 * @Author: Hedgehog96
 * @Date: 2022-08-22 10:28:25
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-21 11:12:23
-->
<template>
    <div class="static-text">
        {{ props.elem.props.textContent }}
    </div>
</template>

<script setup lang="ts" name="TextWidget">
const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
})
</script>