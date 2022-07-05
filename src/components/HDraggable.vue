<!--
 * @Description: 拖曳主区域组件
 * @Author: Hedgehog96
 * @Date: 2022-05-20 16:47:09
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-07-05 10:33:36
-->
<template>
    <draggable
        class="h-main-layout"
        item-key="id"
        handle=".component-drag-handler"
        :animation="200"
        :group="{ name: 'componentItem' }"
        :list="props.components"
        @add.stop="handleAddComponent"
        @end.stop="handleMoveComponent"
    >
        <template #item="{ element }">
            <template v-if="element.name === 'Container' || element.name === 'Card'">
                <div
                    class="h-main-layout-item"
                    @click.stop="(e) => handleClickComponent(e, element)"
                >
                    <component
                        :is="element.component"
                        v-bind="element.attrs"
                        :activated="element.id === componentId"
                        :elem="element"
                    >
                        <h-draggable
                            :component-id="componentId"
                            :components="element.children"
                        />
                    </component>
                </div>
            </template>
            <template v-else>
                <div
                    class="h-main-layout-item"
                    @click.stop="(e) => handleClickComponent(e, element)"
                >
                    <base-component
                        :name="element.name"
                        :title="element.title"
                        :activated="element.id === componentId"
                        :elem="element"
                    >
                        <component
                            :is="element.component"
                            v-bind="element.attrs"
                        >
                            {{
                                element.title
                            }}
                        </component>
                    </base-component>
                </div>
            </template>
        </template>
    </draggable>
</template>

<script setup lang="ts">
import { defineProps, inject, nextTick } from "vue";
import Draggable from "vuedraggable";
import { useComponentsStore } from "@/store/components";
import BaseComponent from "./BaseComponent.vue";
import { ComponentConfig } from "@/config/interfaces";

const props = defineProps({
    componentId: {
        type: Number,
        default: () => -1,
    },
    components: {
        type: Array,
        default: () => [],
    },
    changeComponentId: {
        type: Function,
        default: () => Function,
    },
});

const EVENT_BUS: any = inject("eventBus");
const componentsStore = useComponentsStore();

const handleClickComponent = (evt: Event, c: ComponentConfig) => {
    EVENT_BUS.emit("changeComponentId", c.id);
    EVENT_BUS.emit("clickComponent", c);
};

const handleAddComponent = (evt: Event, c: ComponentConfig | undefined) => {
    nextTick(() => {
        componentsStore.recordSnapshot()
        
        c && c.children?.forEach((cc: ComponentConfig) => {
            cc.pid = c.id
        })
    })
}

const handleMoveComponent = () => {
    componentsStore.recordSnapshot()
    
    return true
}
</script>

<style lang="scss" scoped>
.h-base-container .h-main-layout {
    min-height: 200px;
    height: 100%;
    overflow-y: auto;
}

.h-main-layout-item {
    margin-bottom: 10px;
    padding: 5px;

    .h-main-layout-item-inner {
        display: flex;
        align-items: center;
    }

    .h-main-layout-item-name {
        margin-right: 20px;
    }
}
</style>
