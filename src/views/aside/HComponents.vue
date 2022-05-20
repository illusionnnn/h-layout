<!--
 * @Description: 可拖动组件
 * @Author: Hedgehog96
 * @Date: 2022-05-09 15:33:03
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-20 17:35:32
-->
<template>
  <div class="h-components">
    <div
      v-for="config in componentsConfig"
      :key="config.id"
      class="h-components-area"
    >
      <div class="h-components-area-title">{{ config.title }}</div>
      <div class="h-components-area-container">
        <draggable
          class="h-components-drag-area"
          item-key="name"
          :list="config.components"
          :sort="false"
          :group="{ name: 'componentItem', pull: 'clone', put: false }"
        >
          <template #item="{ element }">
            <el-tag
              :key="element.cid"
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
import componentsConfig from "../../config/components";
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
