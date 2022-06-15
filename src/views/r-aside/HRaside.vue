<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-05-09 14:22:35
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-15 17:23:26
-->
<template>
  <div class="h-aside">
    <div class="h-aside-tabs">
      <div
        class="h-aside-tab h-aside-tabs-component-config"
        :class="currentCompsTabClass"
        @click="handleTabClick('c')"
      >
        <el-icon :color="currentCompsTabColor"><doc /></el-icon>
        <span>组件配置</span>
      </div>
      <div
        class="h-aside-tab h-aside-tabs-layout-config"
        :class="currentSettingTabClass"
        @click="handleTabClick('l')"
      >
        <el-icon :color="currentSettingTabColor"><files /></el-icon>
        <span>页面配置</span>
      </div>
    </div>
    <div class="h-aside-container">
      <component :is="state.currentComponent" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, shallowRef } from "vue";
import { Document as doc, Files } from "@element-plus/icons-vue";
import HComponentConfig from "./HComponentConfig.vue";
import HLayoutConfig from "./HLayoutConfig.vue";

const ACTIVATING_CLASS = "activating";
const NOTACTIVE_CLASS = "";
const ACTIVATING_COLOR = "#409eff";
const NOTACTIVE_COLOR = "#000";
const C = "c";
const L = "l";

const state = reactive({
  currentTabName: C,
  currentComponent: shallowRef(HComponentConfig),
});

const currentCompsTabClass = computed(() => {
  return state.currentTabName === C ? ACTIVATING_CLASS : NOTACTIVE_CLASS;
});
const currentCompsTabColor = computed(() => {
  return state.currentTabName === C ? ACTIVATING_COLOR : NOTACTIVE_COLOR;
});

const currentSettingTabClass = computed(() => {
  return state.currentTabName === L ? ACTIVATING_CLASS : NOTACTIVE_CLASS;
});
const currentSettingTabColor = computed(() => {
  return state.currentTabName === L ? ACTIVATING_COLOR : NOTACTIVE_COLOR;
});

const handleTabClick = (tabName: string) => {
  state.currentTabName = tabName;
  const currentComponent = tabName === C ? HComponentConfig : HLayoutConfig;
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
      margin: 10px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &.activating {
        color: $base-color;
      }

      i {
        margin-right: 4px;
      }

      span {
        font-size: 14px;
      }
    }
  }
}
</style>
