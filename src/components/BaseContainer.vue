<!--
 * @Description: 容器组件
 * @Author: Hedgehog96
 * @Date: 2022-05-15 17:42:07
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-17 16:21:47
-->
<template>
  <div class="h-base-container">
    <slot></slot>

    <div class="container-action">
      <el-icon><delete /></el-icon>
    </div>

    <div class="container-drag-handler">
      <el-icon><position /></el-icon>
      <span class="container-name">容器</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Position, Delete } from "@element-plus/icons-vue";

defineProps({});
</script>

<style lang="scss" scoped>
.h-base-container {
  position: relative;
  min-height: 200px;
  margin: 5px;
  border: 1px solid #ccc;

  .container-action {
    position: absolute;
    bottom: 0;
    right: -2px;
    height: 16px;
    display: flex;
    color: #fff;
    background-color: $global-base-color;
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
    background-color: $global-base-color;
    z-index: 9;

    i {
      cursor: move;
    }

    .container-name {
      font-size: 12px;
    }
  }
}
</style>
