<!--
 * @Description: 容器组件
 * @Author: Hedgehog96
 * @Date: 2022-05-15 17:42:07
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-08 16:32:48
-->
<template>
  <div
    class="h-base-container"
    :class="activated ? 'activated' : 'unactivated'"
  >
    <slot></slot>

    <div v-show="activated" class="container-action">
      <el-icon><delete /></el-icon>
    </div>

    <div v-show="activated" class="container-drag-handler">
      <el-icon><position /></el-icon>
      <span class="container-title">容器</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Position, Delete } from "@element-plus/icons-vue";

defineProps({
  activated: {
    type: Boolean,
    default: () => false,
  },
});
</script>

<style lang="scss" scoped>
.h-base-container {
  position: relative;
  min-height: 200px;
  border: 1px solid #ccc;

  .container-action {
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

  .container-drag-handler {
    position: absolute;
    top: -2px;
    left: -2px;
    height: 16px;
    display: flex;
    color: #fff;
    background-color: $base-color;
    z-index: 9;
    cursor: move;

    .container-title {
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
