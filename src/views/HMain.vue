<!--
 * @Description: 主拖曳区域
 * @Author: Hedgehog96
 * @Date: 2022-05-09 17:24:21
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-24 14:37:22
-->
<template>
  <div class="h-main">
    <h-draggable
      item-key="id"
      :group="{ name: 'componentItem' }"
      :components="components"
    ></h-draggable>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import HDraggable from "../components/HDraggable.vue";

const components = ref([]);

const handleClickCompeont = (evt: any) => {
  console.log(evt.currentTarget);
};

const handleAddComponent = (evt: any) => {
  // 组件名或路径
  const nameOrIndex = evt.clone.getAttribute("data-id");
  // 拖拽元素的目标路径
  const { newIndex } = evt;
  console.log(components.value);
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
