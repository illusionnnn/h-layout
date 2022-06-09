<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-05-20 16:47:09
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-09 15:19:26
-->
<template>
  <draggable
    class="h-main-layout"
    item-key="id"
    handle=".component-drag-handler"
    :animation="200"
    :group="{ name: 'componentItem' }"
    :list="components"
  >
    <template #item="{ element }">
      <template v-if="element.name === 'Container' || element.name === 'Card'">
        <div
          class="h-main-layout-item"
          @click="(e) => handleClickComponent(e, element)"
        >
          <component
            :is="element.component"
            v-bind="element.attrs"
            :activated="element.id === state.currentComponentId"
          >
            <h-draggable :components="element.children" />
          </component>
        </div>
      </template>
      <template v-else>
        <div
          class="h-main-layout-item"
          @click="(e) => handleClickComponent(e, element)"
        >
          <base-component
            :name="element.name"
            :title="element.title"
            :activated="element.id === state.currentComponentId"
          >
            <component :is="element.component" v-bind="element.attrs">{{
              element.showTitle ? element.title : null
            }}</component>
          </base-component>
        </div>
      </template>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import { reactive, defineProps, defineEmits } from "vue";
import Draggable from "vuedraggable";

import BaseComponent from "./BaseComponent.vue";
import { ComponentConfig } from "@/config/interfaces";

defineProps({
  components: {
    type: Array,
    default: () => [],
  },
});
const $_emits = defineEmits(["add"]);

const state = reactive({
  currentComponentId: -1,
});

const handleAddComponent = (evt: Event) => {
  $_emits("add", evt);
};

const handleClickComponent = (evt: Event, elem: ComponentConfig) => {
  state.currentComponentId = elem.id;
  console.log(elem);
};
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