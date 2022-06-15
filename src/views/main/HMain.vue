<!--
 * @Description: 主拖曳区域
 * @Author: Hedgehog96
 * @Date: 2022-05-09 17:24:21
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-15 17:20:16
-->
<template>
  <div class="h-main">
    <h-draggable></h-draggable>
  </div>
</template>

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
