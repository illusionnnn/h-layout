<!--
 * @Description: 主拖曳区域
 * @Author: Hedgehog96
 * @Date: 2022-05-09 17:24:21
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-06 14:47:01
-->
<template>
  <div class="h-main">
    <h-draggable :components="components"></h-draggable>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const components = ref([]);
</script>

<style lang="scss" scoped>
.h-main {
  padding: 20px;
  height: calc(100% - 90px);
  background-color: $base-bg-color;
  border-radius: $base-border-radius;

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
