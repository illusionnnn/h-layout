<!--
 * @Description: 主拖曳区域
 * @Author: Hedgehog96
 * @Date: 2022-05-09 17:24:21
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-07-04 11:40:42
-->
<template>
    <div class="h-main">
        <h-draggable
            :component-id="currentComponentId"
            :components="components"
            @change-component-id="handleChangeComponetId"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, inject, watch } from "vue";
import { useComponentsStore } from "@/store/components";
import { ComponentConfig } from "@/config/interfaces";

const componentsStore = useComponentsStore();
const components = ref(componentsStore.components)
watch(
    () => componentsStore.components,
    (newVal: ComponentConfig[]) => {
        components.value = newVal
    },
    { deep: true }
)

const EVENT_BUS: any = inject("eventBus");
EVENT_BUS.on("changeComponentId", (id: number) => {
    currentComponentId.value = id;
});

const currentComponentId = ref(-1);
const handleChangeComponetId = (id: number) => {
    currentComponentId.value = id;
};
</script>

<style lang="scss" scoped>
.h-main {
    padding: 20px;
    height: calc(100% - 90px);
    background-color: $base-bg-color;
    border-radius: $base-border-radius;

    .h-main-layout {
        height: 100%;
        overflow-y: auto;
    }

    .h-main-layout-item {
        margin-bottom: 10px;
        padding: 5px;
    }
}
</style>
