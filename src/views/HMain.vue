<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-05-09 17:24:21
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-11 18:36:52
-->
<template>
  <div class="h-main">
    <draggable
      :key="uniqueId()"
      class="h-main-layout"
      item-key="name"
      :group="{ name: 'componentItem', pull: true, put: true }"
      :list="components"
    >
      <template #item="{ element }">
        <div
          class="h-main-layout-item"
          :data-id="uniqueId()"
          @click="handleClickCompeont"
        >
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
import { ref, reactive } from "vue";
import draggable from "vuedraggable";
import uniqueId from "lodash-es/uniqueId";

const components = ref([]);
const state = reactive({
  selectComponentId: null,
});

const handleClickCompeont = (evt: any) => {
  console.log(evt.currentTarget.getAttribute("data-id"));
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
