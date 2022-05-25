<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-05-20 16:47:09
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-25 16:02:59
-->
<template>
  <draggable
    class="h-main-layout"
    :item-key="itemKey"
    :group="group"
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
            <h-draggable
              :item-key="'id'"
              :group="{
                name: 'componentItem',
              }"
              :components="element.children"
            />
          </component>
        </div>
      </template>
      <!-- 实体组件 -->
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
import { ComponentConfig } from "../config/interfaces";

defineProps({
  itemKey: {
    type: String,
    default: () => "id",
  },
  group: {
    type: Object,
    default: () => {
      "draggable";
    },
  },
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

// .activated > div {
//   outline: 2px dotted $base-color;
// }

// .unactivated > div {
//   outline: none;
// }
</style>
