<!--
 * @Description: 主拖曳区域
 * @Author: Hedgehog96
 * @Date: 2022-05-09 17:24:21
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-20 16:53:02
-->
<template>
  <div class="h-main">
    <draggable
      :key="uniqueId()"
      class="h-main-layout"
      item-key="name"
      :group="{
        name: 'componentItem',
      }"
      :list="components"
      @add.stop="handleAddComponent"
    >
      <template #item="{ element }">
        <template
          v-if="element.name === 'Container' || element.name === 'Card'"
        >
          <component
            :is="element.component"
            v-bind="element.attrs"
            v-on="element.evt"
          >
            <slot>
              <draggable
                :key="uniqueId()"
                item-key="name"
                :group="{
                  name: 'componentItem',
                }"
                :empty-insert-threshold="100"
                :list="element.children"
                @add.stop="handleAddComponent"
              >
                <template #item="{ element: c_element }">
                  <div
                    class="h-main-layout-item h-main-layout-item-container"
                    @click="handleClickCompeont"
                  >
                    <template
                      v-if="c_element.children && c_element.children.length"
                    >
                      <!-- 容器内嵌套容器 -->
                      <div
                        v-for="(c, idx) in c_element.children"
                        :key="idx"
                        class="h-main-layout-item"
                        @click="handleClickCompeont"
                      >
                        <component
                          :is="c_element.component"
                          v-bind="c_element.attrs"
                          v-on="c_element.evt"
                          >{{
                            c_element.showTitle ? c_element.title : null
                          }}</component
                        >
                      </div>
                    </template>
                    <template v-else>
                      <!-- 容器外添加组件 -->
                      <div
                        class="h-main-layout-item"
                        @click="handleClickCompeont"
                      >
                        <component
                          :is="c_element.component"
                          v-bind="c_element.attrs"
                          v-on="c_element.evt"
                          >{{
                            c_element.showTitle ? c_element.title : null
                          }}</component
                        >
                      </div>
                    </template>
                  </div>
                </template>
              </draggable>
            </slot>
          </component>
        </template>
        <template v-else>
          <div class="h-main-layout-item" @click="handleClickCompeont">
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
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Draggable from "vuedraggable";
import uniqueId from "lodash-es/uniqueId";

import HDraggableVue from "../components/HDraggable.vue";

const components = ref([]);

const handleClickCompeont = (evt: any) => {
  console.log(evt.currentTarget);
};

const handleAddComponent = (evt: any) => {
  // 组件名或路径
  const nameOrIndex = evt.clone.getAttribute("data-id");
  // 拖拽元素的目标路径
  const { newIndex } = evt;

  console.log(newIndex);
};
</script>

<style lang="scss" scoped>
.h-main {
  padding: 20px;
  height: calc(100% - 90px);
  background-color: $global-bg-color;
  border-radius: $global-border-radius;

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
