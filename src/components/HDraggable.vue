<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-05-20 16:47:09
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-20 17:38:31
-->
<template>
  <draggable
    :key="uniqueId()"
    class="h-main-layout"
    item-key="name"
    :group="{
      name: 'componentItem',
    }"
    :list="components"
  >
    <template #item="{ element }">
      <template v-if="element.name === 'Container' || element.name === 'Card'">
        <component
          :is="element.component"
          v-bind="element.attrs"
          v-on="element.evt"
        >
          <h-draggable :components="element.children" />
        </component>
      </template>
      <template v-else>
        <div class="h-main-layout-item">
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
import { defineProps } from "vue";
import Draggable from "vuedraggable";
import uniqueId from "lodash-es/uniqueId";

defineProps({
  components: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
.h-base-container .h-main-layout {
  min-height: 200px;
  height: 100%;
  overflow-y: auto;
}

.h-main-layout-item {
  margin-bottom: 10px;
  padding: 5px;
}
</style>
