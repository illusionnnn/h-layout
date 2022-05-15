<!--
 * @Description: 应用主内容组件
 * @Author: Hedgehog96
 * @Date: 2022-05-07 16:43:27
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-14 15:05:10
-->
<template>
  <div class="h-base-main"><h-main></h-main></div>
</template>

<script setup lang="ts">
import HMain from "../views/HMain.vue";
</script>

<style scoped>
.h-base-main {
  height: 100%;
  overflow-y: auto;
}
</style>
