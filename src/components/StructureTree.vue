<!--
 * @Description: 页面结构组件
 * @Author: Hedgehog96
 * @Date: 2022-08-11 10:52:21
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-21 17:33:07
-->
<template>
    <el-drawer
        class="h-structure-drawer"
        :model-value="props.open"
        direction="ltr"
        size="15%"
        :before-close="handleClose"
    >
        <template #header="{ titleId }">
            <h4 :id="titleId">组件结构树</h4>
        </template>
        <el-tree
            :key="props.nodeKey"
            default-expand-all
            node-key="uniqueKey"
            empty-text="暂无组件"
            :props="defaultProps"
            :data="data"
            :highlight-current="true"
            :current-node-key="props.nodeKey"
            @node-click="handleNodeClick"
        />
    </el-drawer>
</template>

<script setup lang="ts">
import { ref, inject, watch } from 'vue'
import { cloneDeep } from 'lodash-es'
import { useComponentsStore } from '@/store/components'
import { ComponentNode } from '@/config/interfaces'

const props = defineProps({
    open: {
        type: Boolean,
        default: false
    },
    nodeKey: {
        type: String,
        default: ''
    }
})
const emits = defineEmits(['close'])
const eventBus: any = inject('eventBus')
const componentsStore = useComponentsStore()
const defaultProps = {
    children: 'children',
    label: 'uniqueKey'
}
const data = ref<ComponentNode[]>([])

watch(
    () => componentsStore.components,
    (newVal: ComponentNode[]) => {
        data.value = cloneDeep(newVal)
        data.value.forEach((c: ComponentNode) => {
            handleConvertCols(c)
        })
    },
    { deep: true }
)

const handleClose = (done: () => void) => {
    done()
    emits('close')
}

const handleNodeClick = (c: ComponentNode) => {
    componentsStore.changeId(c.id)
    eventBus.emit('changeComponentId', c.id)
    eventBus.emit('clickComponent', c)
}

const handleConvertCols = (cs: any) => {
    if (cs.cols && cs.cols.length) {
        cs.children = cs.cols
        delete cs.cols

        cs.children
        && cs.children.length
        && cs.children.forEach((c: ComponentNode) => {
            handleConvertCols(c)
        })
    }
}
</script>
