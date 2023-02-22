<!--
 * @Description: 隐藏字段标签组件
 * @Author: Hedgehog96
 * @Date: 2022-08-22 11:28:51
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-21 14:26:56
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="隐藏字段标签"
        >隐藏字段标签</span>
        <div
            class="h-editor-container"
        >
            <el-switch
                :model-value="props.elem.props.hidden"
                @change="handleChange"
            />
        </div>
    </el-form-item>
</template>

<script setup lang="ts">
const props = defineProps({
    isLayoutHidden: {
        type: Boolean,
        default: false
    },
    elem: {
        type: Object,
        default: () => Object
    }
})

const handleChange = (value: number | string | boolean) => {
    props.elem.props.hidden = Boolean(value)
}
</script>