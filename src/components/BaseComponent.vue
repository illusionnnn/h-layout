<!--
 * @Description: 实体组件组件
 * @Author: Hedgehog96
 * @Date: 2022-05-25 15:37:32
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-22 15:47:58
-->
<template>
    <div
        class="h-base-component"
        :class="[
            selected ? 'selected' : 'unselected',
            isInlineFlex ? 'is-inline-flex-component' : 'is-flex-component'
        ]"
        @click.stop="handleClickComponent(props.elem as ComponentNode)"
    >
        <div
            v-show="!props.elem.props.hidden"
            class="component-name"
        >
            {{ props.elem.label }}
        </div>
        <slot />

        <div
            v-show="selected"
            class="component-action"
        >
            <i
                class="iconfont icon-h-fuzhi"
                title="复制"
                @click.stop="handleCopy"
            />
            <i
                class="iconfont icon-h-shanchu"
                title="删除"
                @click.stop="handleDelete"
            />
        </div>

        <div
            v-show="selected"
            class="component-drag-handler"
        >
            <i class="iconfont icon-h-yidong_huaban" />
            <span class="component-title">{{ props.elem.title }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { cloneDeep, random } from 'lodash-es'
import { useIdStore } from '@/store/id'
import { useComponentsStore } from '@/store/components'
import { useFieldsConfigStore } from '@/store/fieldsConfig'
import { ComponentNode, GridColNode } from '@/config/interfaces'

const props = defineProps({
    selected: {
        type: Boolean,
        default: false
    },
    isInlineFlex: {
        type: Boolean,
        default: false
    },
    elem: {
        type: Object,
        default: () => Object
    }
})

const idStore = useIdStore()
const componentsStore = useComponentsStore()
const fieldsConfigStore = useFieldsConfigStore()
const eventBus: any = inject('eventBus')

const handleClickComponent = (c: ComponentNode) => {
    if (componentsStore.isPreview) return

    eventBus.emit('changeComponentId', c.id)
    eventBus.emit('clickComponent', c)
    componentsStore.changeId(c.id)
    fieldsConfigStore.changeTabName('c')
}

const handleCopy = () => {
    const c = cloneDeep((props.elem as ComponentNode))
    c.id = idStore.id
    c.uniqueKey = c.label + random(1, 999)
    
    const paths = c.path?.split(/\/([^/]+)/).filter(p => p !== '') as Array<string>
    paths.splice(paths.length - 1, 1, `${c.id}-${c.uniqueKey}`)
    paths.splice(0, 1, '/root')
    c.path = paths.join('/')
    
    if (paths?.length > 2) {
        componentsStore.components.forEach((_c: ComponentNode) => {
            if (_c.cols?.length) {
                _c.cols.forEach((_cc: GridColNode) => {
                    if (`${_cc.id}-${_cc.uniqueKey}` === paths[paths.length - 2]) {
                        _cc.children?.push(c)
                    }
                })
            }
            
            if (`${_c.id}-${_c.uniqueKey}` === paths[paths.length - 2]) {
                _c.children?.push(c)
            }
        })
    } else {
        componentsStore.add(c)
        componentsStore.recordSnapshot()
    }

    idStore.increment()
}

const handleDelete = () => {
    eventBus.emit('delete', [props.elem.id, props.elem.path])
}
</script>

<style lang="scss" scoped>
.h-base-component {
    padding: 4px;
    position: relative;
    display: flex;
    align-items: center;

    .component-name {
        margin-right: 30px;
    }

    .component-action {
        position: absolute;
        bottom: 0;
        right: -2px;
        height: 16px;
        display: flex;
        color: #fff;

        @include opacity('opacity');

        background-color: $base-color;
        z-index: 99;

        &:hover {
            opacity: 1;
        }

        i {
            margin: 0 2px;
            cursor: pointer;
        }
    }

    .component-drag-handler {
        position: absolute;
        top: -1px;
        left: -2px;
        padding-top: 2px;
        padding-left: 2px;
        height: 16px;
        display: flex;
        color: #fff;

        @include opacity('opacity');

        background-color: $base-color;
        z-index: 9;
        cursor: move;

        &:hover {
            opacity: 1;
        }

        .iconfont {
            font-size: 14px;
        }

        .component-title {
            margin-left: 4px;
            font-size: 12px;
        }
    }

    &.selected {
        outline: 2px dashed $base-color;
    }

    &.unselected {
        outline: none;
    }
}

.is-inline-flex-component {
    display: inline-flex;
}
</style>
