<!--
 * @Description: 组件大小组件
 * @Author: Hedgehog96
 * @Date: 2022-07-27 17:08:13
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-21 14:51:31
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="组件大小"
        >组件大小</span>
        <div class="h-editor-container">
            <template v-if="elem.size">
                <el-select v-model="elem.size" @change="handleChangeLayoutSize">
                    <el-option
                        v-for="item in widgetSizes"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </template>
            <template v-else>
                <el-select v-model="props.elem.props.size">
                    <el-option
                        v-for="item in widgetSizes"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </template>
        </div>
    </el-form-item>
</template>

<script setup lang="ts">
import { useComponentsStore } from '@/store/components'
import { LayoutComponentSize } from '@/config/interfaces'

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
})
const widgetSizes = [
    { label: 'default', value: 'default' },
    { label: 'large', value: 'large' },
    { label: 'small', value: 'small' }
]

const componentStore = useComponentsStore()
const handleChangeLayoutSize = (val: LayoutComponentSize) => {
    componentStore.setLayoutProperty('size', val)
}
</script>