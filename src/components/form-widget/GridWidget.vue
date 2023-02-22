<!--
 * @Description: 栅格组件
 * @Author: Hedgehog96
 * @Date: 2023-02-10 11:46:39
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-21 11:11:04
-->
<template>
    <el-row
        :class="selected && 'selected'"
        @click="handleClickComponent(props.elem as ComponentNode)"
    >
        <template v-for="col in props.elem.cols" :key="col.id">
            <grid-col-widget :elem="col"></grid-col-widget>
        </template>
    </el-row>
</template>

<script setup lang="ts" name="GridWidget">
import { inject } from 'vue'
import { useFieldsConfigStore } from '@/store/fieldsConfig'
import { useComponentsStore } from '@/store/components'
import { ComponentNode } from '@/config/interfaces'
import GridColWidget from './GridColWidget.vue'

const props = defineProps({
    selected: {
        type: Boolean,
        default: () => false
    },
    elem: {
        type: Object,
        default: () => Object
    }
})

const fieldsConfigStore = useFieldsConfigStore()
const componentStore = useComponentsStore()
const eventBus: any = inject('eventBus')

const handleClickComponent = (c: ComponentNode) => {
    eventBus.emit('changeComponentId', c.id)
    eventBus.emit('clickComponent', c)
    componentStore.changeId(c.id)
    fieldsConfigStore.changeTabName('c')
}
</script>

<style lang="scss" scoped>
.el-row {
    min-height: 50px;
    padding: 6px 4px;
    outline: 1px dashed #ccc;

    &.selected {
        outline: 2px dashed $base-color;
    }
}
</style>