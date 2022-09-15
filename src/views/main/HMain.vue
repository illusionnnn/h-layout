<!--
 * @Description: 主拖曳区域
 * @Author: Hedgehog96
 * @Date: 2022-05-09 17:24:21
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-09-15 14:26:26
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
import { ref, inject, watch } from "vue";
import { useComponentsStore } from "@/store/components";
import { ComponentConfig } from "@/config/interfaces";

const componentsStore = useComponentsStore();
const components = ref(componentsStore.components);
const EVENT_BUS: any = inject("eventBus");
const currentComponentId = ref(-1);

watch(
    () => componentsStore.components,
    (newVal: ComponentConfig[]) => {
        components.value = newVal;

        const layoutProperty = Object.keys(componentsStore.layout);
        layoutProperty.forEach((k: string) => {
            components.value.forEach((c: ComponentConfig) => {
                if (!(c.props as object)[`$_isComponentSet${k}`]) {
                    const v = Object.freeze(componentsStore.layout[k]);
                    (c.props as object)[k] = v;
                }
            });
        });
    },
    { deep: true }
);
watch(
    () => componentsStore.layout,
    (newVal: object) => {
        const keys = Object.keys(newVal);
        components.value.forEach((c: ComponentConfig) => {
            keys.forEach((k: string) => {
                if ((k in (c.props as object)) && !(c.props as object)[`$_isComponentSet${k}`]) {
                    (c.props as object)[k] = newVal[k];
                }
            });
        });
    },
    { deep: true }
);

const handleChangeComponetId = (id: number) => {
    currentComponentId.value = id;
};

const handleDeleteComponent = (id: number) => {
    let idx = -1;
    componentsStore.recordSnapshot();

    componentsStore.components.forEach((_c: ComponentConfig, _idx: number) => {
        if (_c.id === id) {
            idx = _idx;
            return;
        }
    });
    componentsStore.components.splice(idx, 1);

    if (componentsStore.components.length) {
        EVENT_BUS.emit(
            "changeComponentId",
            (componentsStore.components[idx - 1] as ComponentConfig).id
        );
        EVENT_BUS.emit("clickComponent", componentsStore.components[idx - 1]);
    } else {
        // when only one is deleted
        EVENT_BUS.emit("changeComponentId", -1);
        EVENT_BUS.emit("clickComponent", {});
    }
};

EVENT_BUS.on("changeComponentId", (id: number) => {
    currentComponentId.value = id;
});
EVENT_BUS.on("delete", handleDeleteComponent);
</script>

<style lang="scss" scoped>
.h-main {
    position: relative;
    padding: 20px;
    height: calc(100% - 90px);
    background-color: $base-bg-color;
    border-radius: $base-border-radius;

    .h-main-tip {
        position: absolute;
        top: 48%;
        left: 32%;
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
