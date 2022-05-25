<!--
 * @Description: 实体组件
 * @Author: Hedgehog96
 * @Date: 2022-05-25 15:37:32
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-25 16:15:25
-->
<template>
  <div
    class="h-base-component"
    :class="activated ? 'activated' : 'unactivated'"
  >
    <div class="component-name">{{ name }}</div>
    <slot></slot>

    <div v-show="activated" class="component-action">
      <el-icon><delete /></el-icon>
    </div>

    <div v-show="activated" class="component-drag-handler">
      <el-icon><position /></el-icon>
      <span class="component-title">{{ title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Position, Delete } from "@element-plus/icons-vue";

defineProps({
  name: {
    type: String,
    default: () => "",
  },
  title: {
    type: String,
    default: () => "",
  },
  activated: {
    type: Boolean,
    default: () => false,
  },
});
</script>

<style lang="scss" scoped>
.h-base-component {
  position: relative;
  display: flex;
  align-items: center;

  .component-name {
    margin-right: 30px;
  }

  .component-action {
    position: absolute;
    bottom: 0;
    right: -2px;
    height: 16px;
    display: flex;
    color: #fff;
    background-color: $base-color;
    z-index: 99;

    i {
      cursor: pointer;
    }
  }

  .component-drag-handler {
    position: absolute;
    top: -2px;
    left: -2px;
    height: 16px;
    display: flex;
    color: #fff;
    background-color: $base-color;
    z-index: 9;

    i {
      cursor: move;
    }

    .component-title {
      font-size: 12px;
    }
  }

  &.activated {
    outline: 2px dotted $base-color;
  }

  &.unactivated {
    outline: none;
  }
}
</style>
