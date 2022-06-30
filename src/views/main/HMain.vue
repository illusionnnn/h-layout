<!--
 * @Description: 主拖曳区域
 * @Author: Hedgehog96
 * @Date: 2022-05-09 17:24:21
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-30 15:25:13
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
import { ref, inject } from "vue";
import { useComponentsStore } from "@/store/components";

const componentsStore = useComponentsStore();
const components = ref(componentsStore.components)

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
