<!--
 * @Description: 唯一标识组件
 * @Author: Hedgehog96
 * @Date: 2022-07-14 17:27:15
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-08 17:34:53
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="唯一标识"
        >唯一标识</span>
        <div class="h-editor-container">
            <el-input
                v-model="props.elem.uniqueKey"
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
