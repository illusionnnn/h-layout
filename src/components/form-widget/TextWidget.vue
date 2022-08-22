<!--
 * @Description: 静态文本
 * @Author: Hedgehog96
 * @Date: 2022-08-22 10:28:25
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-22 10:42:14
-->
<template>
    <div class="static-text">
        {{ props.elem.props.textContent }}
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
});
</script>