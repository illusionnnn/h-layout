<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-05-20 16:47:09
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-24 15:00:41
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
        <component
          :is="element.component"
          v-bind="element.attrs"
          v-on="element.evt"
        >
          <h-draggable
            :item-key="'id'"
            :group="{
              name: 'componentItem',
            }"
            :components="element.children"
          />
        </component>
      </template>
      <template v-else>
        <div class="h-main-layout-item">
          <div class="h-main-layout-item-name">{{ element.name }}</div>
          <component
            :is="element.component"
            v-bind="element.attrs"
            v-on="element.evt"
            >{{ element.showTitle ? element.title : null }}</component
          >
        </div>
      </template>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import Draggable from "vuedraggable";

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

const handleAddComponent = (evt: any) => {
  $_emits("add", evt);
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
  display: flex;
  align-items: center;

  .h-main-layout-item-name {
    margin-right: 20px;
  }
}
</style>
