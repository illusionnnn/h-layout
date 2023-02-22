<!--
 * @Description: 后置内容组件
 * @Author: Hedgehog96
 * @Date: 2022-08-03 16:34:21
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-14 22:36:17
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="后置内容"
        >后置内容</span>
        <div class="h-editor-container">
            <el-input
                v-model="props.elem.props.append"
                type="text"
            />
        </div>
    </el-form-item>
</template>

<script setup lang="ts">
const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
})
</script>