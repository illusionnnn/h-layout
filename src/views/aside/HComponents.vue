<!--
 * @Description: 左侧可拖动组件区域
 * @Author: Hedgehog96
 * @Date: 2022-05-09 15:33:03
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-24 14:47:05
-->
<template>
  <div class="h-components">
    <div
      v-for="config in componentsConfig"
      :key="config.pid"
      class="h-components-area"
    >
      <div class="h-components-area-title">{{ config.title }}</div>
      <div class="h-components-area-container">
        <draggable
          class="h-components-drag-area"
          item-key="id"
          :list="config.components"
          :sort="false"
          :group="{ name: 'componentItem', pull: 'clone', put: false }"
          :clone="handleCloneComponentsConfig"
        >
          <template #item="{ element }">
            <el-tag
              :key="element.id"
              :data-id="element.name"
              class="h-components-drag-area-item"
            >
              {{ element.title }}
            </el-tag>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
import { cloneDeep } from "lodash-es";
import componentsConfig from "../../config/components";
import { ComponentConfig } from "../../config/interfaces";

let $_ID_GLOBAL = 8;

const handleCloneComponentsConfig = (d: ComponentConfig) => {
  return cloneDeep({
    ...d,
    id: $_ID_GLOBAL++,
  });
};
</script>

<style lang="scss" scoped>
.h-components {
  padding: 0 10px;
  .h-components-area {
    margin-bottom: 10px;

    .h-components-area-title {
      margin-bottom: 10px;
    }
  }

  .h-components-drag-area {
    display: flex;
    flex-wrap: wrap;

    .h-components-drag-area-item {
      margin: 5px;
      margin-left: 0;
      cursor: move;
    }
  }
}
</style>
