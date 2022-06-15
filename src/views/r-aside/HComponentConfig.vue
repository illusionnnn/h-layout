<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-05-11 14:08:14
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-15 18:29:14
-->
<template>
  <div class="h-component-config">
    <div>
      <span>唯一名称</span><span>{{ uniqueKey }}</span>
    </div>
    <div>
      <span>标签</span><span>{{ name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, inject } from "vue";

defineProps({
  uniqueKey: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
});

const EVENT_BUS: any = inject("eventBus");
EVENT_BUS.on("clickComponent", () => console.log(2));
</script>
