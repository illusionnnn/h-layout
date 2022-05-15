<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-05-09 17:24:21
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-16 00:04:17
-->
<template>
  <div class="h-main">
    <draggable
      :key="uniqueId()"
      class="h-main-layout"
      item-key="name"
      :group="{
        name: 'componentItem',
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65,
        pull: true,
        put: true,
      }"
      :list="components"
      @add.stop="handleAddComponent"
    >
      <template #item="{ element }">
        <div class="h-main-layout-item" @click="handleClickCompeont">
          <component
            :is="element.component"
            v-bind="element.attrs"
            v-on="element.evt"
            >{{ element.showTitle ? element.title : null }}</component
          >
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import draggable from "vuedraggable";
import uniqueId from "lodash-es/uniqueId";

import { isPath } from "../utils";

const components = ref([]);

const loopRenderComponents = (comps: any[]) => {
  comps.forEach((c: any, idx: number) => {
    if (c.name === "Container") {
    }
  });
};

const handleClickCompeont = (evt: any) => {
  console.log(evt.currentTarget);
};

const handleAddComponent = (evt: any) => {
  // 组件名或路径
  const nameOrIndex = evt.clone.getAttribute("data-id");
  // 父节点路径
  const parentPath = evt.path[1].getAttribute("data-id");
  // 拖拽元素的目标路径
  const { newIndex } = evt;
  // 新路径为根节点时直接使用index
  const newPath = parentPath ? `${parentPath}-${newIndex}` : newIndex;
  console.log(nameOrIndex, parentPath, newIndex, newPath);

  // 判断是否为路径 路径执行移动，非路径为新增
  if (isPath(nameOrIndex)) {
    console.log(1);
    return false;
  }
};
</script>

<style lang="scss" scoped>
.h-main,
.h-main-layout {
  padding: 20px;
  height: 100%;

  .h-main-layout-item {
    margin-bottom: 10px;
    padding: 5px 0;
  }
}
</style>
