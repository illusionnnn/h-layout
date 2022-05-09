<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-05-09 14:22:35
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-09 17:23:20
-->
<template>
  <div class="h-aside">
    <div class="h-aside-tabs">
      <div
        class="h-aside-tab h-aside-tabs-components"
        :class="currentCompsTabClass"
        @click="handleTabClick('c')"
      >
        <el-icon :color="currentCompsTabColor"><goods /></el-icon>
      </div>
      <div
        class="h-aside-tab h-aside-tabs-setting"
        :class="currentSettingTabClass"
        @click="handleTabClick('s')"
      >
        <el-icon :color="currentSettingTabColor"><setting /></el-icon>
      </div>
    </div>
    <div class="h-aside-container">
      <component :is="state.currentComponent" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, shallowRef } from "vue";
import { Goods, Setting } from "@element-plus/icons-vue";
import HComponents from "./HComponents.vue";
import HSettings from "./HSettings.vue";

const ACTIVATING_CLASS = "activating";
const NOTACTIVE_CLASS = "";
const ACTIVATING_COLOR = "#409eff";
const NOTACTIVE_COLOR = "#000";
const C = "c";
const S = "s";

const state = reactive({
  currentTabName: C,
  currentComponent: shallowRef(HComponents),
});

const currentCompsTabClass = computed(() => {
  return state.currentTabName === C ? ACTIVATING_CLASS : NOTACTIVE_CLASS;
});
const currentCompsTabColor = computed(() => {
  return state.currentTabName === C ? ACTIVATING_COLOR : NOTACTIVE_COLOR;
});

const currentSettingTabClass = computed(() => {
  return state.currentTabName === S ? ACTIVATING_CLASS : NOTACTIVE_CLASS;
});
const currentSettingTabColor = computed(() => {
  return state.currentTabName === S ? ACTIVATING_COLOR : NOTACTIVE_COLOR;
});

const handleTabClick = (tabName: string) => {
  state.currentTabName = tabName;
  const currentComponent = tabName === C ? HComponents : HSettings;
  state.currentComponent = currentComponent;
};
</script>

<style lang="scss" scoped>
.h-aside {
  .h-aside-tabs {
    display: flex;
    justify-content: center;

    .h-aside-tab {
      flex: 1;
      margin: 10px 40px;
      text-align: center;
      cursor: pointer;

      &.activating {
        border-bottom: 1.5px solid $global-base-color;
      }
    }
  }
}
</style>
