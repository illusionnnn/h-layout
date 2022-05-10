<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-05-09 17:24:21
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-10 18:17:49
-->
<template>
  <div class="h-main">
    <draggable
      :key="uniqueId()"
      class="h-components-drag-area"
      item-key="name"
      :group="{ name: 'componentItem', pull: true, put: true }"
      :list="state.components"
    >
      <template #item="{ element }">{{ element.name }}</template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import draggable from "vuedraggable";
import uniqueId from "lodash-es/uniqueId";

const state = reactive({
  components: [],
});
</script>

<style lang="scss" scoped>
.h-main,
.h-components-drag-area {
  height: 100%;
}
</style>
