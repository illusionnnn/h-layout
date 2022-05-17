<!--
 * @Description: 应用主内容组件
 * @Author: Hedgehog96
 * @Date: 2022-05-07 16:43:27
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-17 14:20:55
-->
<template>
  <div class="h-base-main">
    <h-main-header></h-main-header>
    <h-main></h-main>
  </div>
</template>

<script setup lang="ts">
import HMain from "../views/HMain.vue";
import HMainHeader from "../views/HMainHeader.vue";
</script>

<style scoped>
.h-base-main {
  height: 100%;
}
</style>
