<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-05-09 14:22:35
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-22 14:47:00
-->
<template>
    <div class="h-aside-l">
        <div class="h-aside-tabs">
            <div
                class="h-aside-tab h-aside-tabs-components"
                :class="currentCompsTabClass"
                @click="handleTabClick('c')"
            >
                <i class="iconfont icon-h-kucunliang" />
                <span>组件库</span>
            </div>
            <div
                class="h-aside-tab h-aside-tabs-setting"
                :class="currentSettingTabClass"
                @click="handleTabClick('s')"
            >
                <i class="iconfont icon-h-mobanguanli" />
                <span>模板</span>
            </div>
        </div>
        <div class="h-aside-container">
            <component :is="state.currentComponent" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, computed, shallowRef } from "vue";
import HComponents from "./HComponents.vue";
import HSettings from "./HSettings.vue";

const ACTIVATING_CLASS = "activating";
const NOTACTIVE_CLASS = "";
const C = "c";
const S = "s";

const state = reactive({
    currentTabName: C,
    currentComponent: shallowRef(HComponents),
});

const currentCompsTabClass = computed(() => {
    return state.currentTabName === C ? ACTIVATING_CLASS : NOTACTIVE_CLASS;
});

const currentSettingTabClass = computed(() => {
    return state.currentTabName === S ? ACTIVATING_CLASS : NOTACTIVE_CLASS;
});

const handleTabClick = (tabName: string) => {
    state.currentTabName = tabName;
    const currentComponent = tabName === C ? HComponents : HSettings;
    state.currentComponent = currentComponent;
};
</script>

<style lang="scss" scoped>
.h-aside-l {
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
