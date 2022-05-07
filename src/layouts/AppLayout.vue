<!--
 * @Description: 应用布局组件
 * @Author: Hedgehog96
 * @Date: 2022-05-07 16:36:50
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-07 16:46:29
-->
<template>
  <base-layout>
    <template v-slot:header>
      <the-header></the-header>
    </template>
    <template v-slot:aside>
      <the-aside></the-aside>
    </template>
    <template v-slot:main>
      <the-main></the-main>
    </template>
    <template v-slot:footer>
      <the-footer></the-footer>
    </template>
  </base-layout>
</template>

<script setup lang="ts">
import BaseLayout from './BaseLayout.vue'
import TheHeader from '../components/TheHeader.vue'
import TheAside from '../components/TheAside.vue'
import TheMain from '../components/TheMain.vue'
import TheFooter from '../components/TheFooter.vue'
</script>
