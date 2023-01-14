<!--
 * @Description: 分割线组件
 * @Author: Hedgehog96
 * @Date: 2022-08-25 21:37:32
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-14 22:42:17
-->
<template>
    <template v-if="props.elem.props.showText">
        <el-divider
            :content-position="props.elem.props.contentPosition"
            :border-style="props.elem.props.borderStyle"
        >
            {{ props.elem.props.textContent }}
        </el-divider>
    </template>
    <template v-else>
        <el-divider :border-style="props.elem.props.borderStyle" />
    </template>
</template>

<script setup lang="ts">
import { ElDivider } from 'element-plus'

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
})
</script>

<style lang="scss" scoped>
    .el-divider {
        margin: 0;
    }
</style>