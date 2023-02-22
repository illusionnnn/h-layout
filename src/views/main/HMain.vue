<!--
 * @Description: 主拖曳区域
 * @Author: Hedgehog96
 * @Date: 2022-05-09 17:24:21
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-22 17:54:18
-->
<template>
    <div class="h-main">
        <h-draggable
            :component-id="currentComponentId"
            :components="components"
            @change-component-id="handleChangeComponetId"
        />
        <div
            v-if="!components.length"
            class="h-main-tip"
        >
            请从左侧列表中选择一个组件, 然后用鼠标拖动组件放置于此处
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import { storeToRefs } from 'pinia'
import { useComponentsStore } from '@/store/components'
import { ComponentNode } from '@/config/interfaces'

const componentsStore = useComponentsStore()
const { components } = storeToRefs(componentsStore)
const eventBus: any = inject('eventBus')
const currentComponentId = ref(-1)

const handleChangeComponetId = (id: number) => {
    currentComponentId.value = id
}

type DeleteParams = [number, string]
const handleDeleteComponent = (p: DeleteParams) => {
    const [id, path] = p
    if (path && path.includes('Col')) {
        componentsStore.components.forEach((c: ComponentNode) => {
            handleDeleteComponentForCol(id, c)
        })
        return
    }

    let idx = -1
    componentsStore.recordSnapshot()

    componentsStore.components.forEach((_c: ComponentNode, _idx: number) => {
        if (_c.id === id) {
            idx = _idx
            return
        }
    })
    componentsStore.components.splice(idx, 1)

    if (componentsStore.components.length) {
        const _idx = idx === 0 ? 1 : idx
        
        const selectedId = (componentsStore.components[_idx - 1] as ComponentNode).id
        componentsStore.changeId(selectedId)
        eventBus.emit(
            'changeComponentId',
            selectedId
        )
        eventBus.emit('clickComponent', componentsStore.components[_idx - 1])
    } else {
        // when only one is deleted
        componentsStore.changeId(-1)
        eventBus.emit('changeComponentId', -1)
        eventBus.emit('clickComponent', {})
    }
}
const handleDeleteComponentForCol = (id: number, c: any, pc?: any[]) => {
    if (id === c.id) {
        (pc as unknown as ComponentNode).children?.forEach((_c: ComponentNode, idx: number) => {
            if (id === _c.id) {
                const _pc = (pc as unknown as ComponentNode)
                _pc.children?.splice(idx, 1)

                const selectedId = (pc as unknown as ComponentNode).children?.length
                    ? ((_pc.children as unknown as ComponentNode)[0]).id
                    : -1
                componentsStore.changeId(selectedId)
                eventBus.emit(
                    'changeComponentId',
                    selectedId
                )
                selectedId !== -1
                    ? eventBus.emit('clickComponent', (_pc.children as unknown as ComponentNode)[0])
                    : eventBus.emit('clickComponent', {})
            }
        })
    } else if (c.cols && c.cols.length) {
        c.cols.forEach((_c: any) => handleDeleteComponentForCol(id, _c, c))
    } else if (c.children && c.children.length) {
        c.children.forEach((_c: any) => handleDeleteComponentForCol(id, _c, c))
    }
}

eventBus.on('changeComponentId', (id: number) => {
    currentComponentId.value = id
})
eventBus.on('delete', handleDeleteComponent)
</script>

<style lang="scss" scoped>
.h-main {
    position: relative;
    padding: 10px;
    height: calc(100% - 96px);

    @include background_color('bg');

    border-radius: $border-radius;

    .h-main-tip {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #ccc;
    }

    .h-main-layout {
        height: 100%;
        overflow-y: auto;
    }

    .h-main-layout-item {
        padding: 5px;
    }
}
</style>
