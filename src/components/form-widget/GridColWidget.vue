<!--
 * @Description: 栅格列组件
 * @Author: Hedgehog96
 * @Date: 2023-02-10 15:38:47
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-22 10:55:26
-->
<template>
    <el-col
        :class="state.isSelected ? 'selected' : 'unselected'"
        :span="props.elem.props.span"
        :offset="props.elem.props.offset"
        :push="props.elem.props.push"
        :pull="props.elem.props.pull"
        @click.stop="() => handleClickComponent(props.elem as ComponentNode)"
    >
        <vue-draggable
            class="h-col-dragarea"
            item-key="id"
            handle=".component-drag-handler"
            :animation="300"
            :group="{ name: 'componentItem' }"
            :list="props.elem.children"
            @add="(e: Event) => handleAddComponent(e, props.elem.children)"
            @change="handleChangeComponents"
        >
            <template #item="{ element }">
                <div class="h-col-layout-item">
                    <template v-if="element.label === 'Grid'">
                        <base-container
                            :selected="element.id === componentsStore.selectedComponentId"
                            :elem="element"
                        >
                            <component
                                :is="element.widget"
                                :selected="element.id === componentsStore.selectedComponentId"
                                :elem="element"
                            ></component>
                        </base-container>
                    </template>
                    <template v-else>
                        <base-component
                            :selected="element.id === componentsStore.selectedComponentId"
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
    </el-col>
</template>

<script setup lang="ts" name="GridColWidget">
import { reactive, watch, inject } from 'vue'
import BaseComponent from '../BaseComponent.vue'

import { useComponentsStore } from '@/store/components'
import { useFieldsConfigStore } from '@/store/fieldsConfig'
import { inlineFlexComponentLables } from '@/config/components'
import { ComponentNode, GridColNode } from '@/config/interfaces'

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
})

const state = reactive({ isSelected: false })
const componentsStore = useComponentsStore()
const fieldsConfigStore = useFieldsConfigStore()
const eventBus: any = inject('eventBus')

watch(
    () => componentsStore.selectedComponentId,
    (val: number) => {
        val === props.elem.id ? state.isSelected = true :  state.isSelected = false
    }
)

const handleClickComponent = (c: ComponentNode) => {
    eventBus.emit('changeComponentId', c.id)
    eventBus.emit('clickComponent', c)
    componentsStore.changeId(c.id)
    fieldsConfigStore.changeTabName('c')
}

const handleAddComponent = (evt: Event, cs: ComponentNode[]) => {
    const newIndex = (evt as any).newIndex

    handleClickComponent(cs[newIndex])
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
.el-col {
    min-height: 38px;
    padding: 4px;
    outline: 1px dashed #ccc;

    &.selected {
        outline: 2px dashed $base-color;
    }

    .h-col-dragarea {
        height: 100%;
    }
}
</style>