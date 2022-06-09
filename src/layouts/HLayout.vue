<!--
 * @Description: 应用布局组件
 * @Author: Hedgehog96
 * @Date: 2022-05-07 16:36:50
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-09 15:19:48
-->
<template>
  <base-layout>
    <template #header>
      <base-header></base-header>
    </template>
    <template #lAside>
      <base-laside></base-laside>
    </template>
    <template #main>
      <base-main></base-main>
    </template>
    <template #rAside>
      <base-raside></base-raside>
    </template>
  </base-layout>
</template>

<script setup lang="ts">
import BaseLayout from "./BaseLayout.vue";
import BaseHeader from "@/components/BaseHeader.vue";
import BaseLaside from "@/components/BaseLaside.vue";
import BaseRaside from "@/components/BaseRaside.vue";
import BaseMain from "@/components/BaseMain.vue";
</script>
