<!--
 * @Description: 拖曳主区域组件
 * @Author: Hedgehog96
 * @Date: 2022-05-20 16:47:09
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-22 14:30:42
-->
<template>
    <div class="h-main-layout">
        <vue-draggable
            class="h-main-dragarea"
            item-key="id"
            handle=".component-drag-handler"
            :animation="300"
            :group="{ name: 'componentItem' }"
            :list="props.components"
            @add="handleAddComponent"
            @change="handleChangeComponents"
        >
            <template #item="{ element }">
                <div class="h-main-layout-item">
                    <template v-if="element.label === 'Grid'">
                        <base-container
                            :selected="element.id === componentId"
                            :elem="element"
                        >
                            <component
                                :is="element.widget"
                                :selected="element.id === componentId"
                                :elem="element"
                            ></component>
                        </base-container>
                    </template>
                    
                    <template v-else>
                        <base-component
                            :selected="element.id === componentId"
                            :isInlineFlex="inlineFlexComponentLables.includes(element.label)"
                            :elem="element"
                        >
                            <component
                                :is="element.widget"
                                :elem="element"
                            ></component>
                        </base-component>
                    </template>
                </div>
            </template>
        </vue-draggable>
    </div>
</template>

<script setup lang="ts" name="HDraggable">
import { inject } from 'vue'
import BaseContainer from './BaseContainer.vue'
import BaseComponent from './BaseComponent.vue'

import { useComponentsStore } from '@/store/components'
import { useFieldsConfigStore } from '@/store/fieldsConfig'
import { ComponentNode, GridColNode } from '@/config/interfaces'
import { inlineFlexComponentLables } from '@/config/components'

const props = defineProps({
    componentId: {
        type: Number,
        default: -1
    },
    components: {
        type: Array,
        default: () => []
    },
    changeComponentId: {
        type: Function,
        default: () => Function
    }
})

const eventBus: any = inject('eventBus')
const componentsStore = useComponentsStore()
const fieldsConfigStore = useFieldsConfigStore()

const handleClickComponent = (c: ComponentNode) => {
    eventBus.emit('changeComponentId', c.id)
    eventBus.emit('clickComponent', c)
    componentsStore.changeId(c.id)
    fieldsConfigStore.changeTabName('c')
}

const handleAddComponent = (evt: Event) => {
    const newIndex = (evt as any).newIndex
    handleClickComponent(componentsStore.components[newIndex])
}

const handleChangeComponents = () => {
    componentsStore.components.forEach((c: ComponentNode) => {
        handleGeneratePath(c, '/root')
    })
    componentsStore.recordSnapshot()
}

const handleGeneratePath = (c: ComponentNode, path: string) => {
    if (c.children?.length) {
        const parentPath = `${path}/${c.id}-${c.uniqueKey}`

        c.children.forEach((cc: ComponentNode) => {
            handleGeneratePath(cc, parentPath)
        })
    }
    else if (c.cols?.length) {
        const parentPath = `${path}/${c.id}-${c.uniqueKey}`
        c.path = parentPath
        
        c.cols.forEach((cc: GridColNode) => {
            handleGeneratePath(cc as ComponentNode, parentPath)
        })
    }
    else {
        c.path = `${path}/${c.id}-${c.uniqueKey}`
    }
}
</script>

<style lang="scss" scoped>
.h-main-layout {
    height: 100%;
    overflow-y: auto;
}

.h-main-dragarea {
    height: 100%;
}

.h-main-layout-item {
    padding: 5px;

    .h-main-layout-item-inner {
        display: flex;
        align-items: center;
    }

    .h-main-layout-item-name {
        margin-right: 20px;
    }
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
