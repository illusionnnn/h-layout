<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-05-11 14:08:14
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-16 16:34:15
-->
<template>
  <div v-if="Object.keys(state.currentElem).length" class="h-component-config">
    <div class="h-component-config-item">
      <span class="h-component-config-item-title">唯一名称</span
      ><el-input v-model="state.currentElem.uniqueKey" size="small"></el-input>
    </div>
    <div class="h-component-config-item">
      <span class="h-component-config-item-title">标签</span
      ><el-input v-model="state.currentElem.name" size="small"></el-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, inject, reactive, toRefs } from "vue";
import { ElInput } from "element-plus";
import { ComponentConfig } from "@/config/interfaces";

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

const state: any = reactive({
  currentElem: {},
});
toRefs(state);

const EVENT_BUS: any = inject("eventBus");
EVENT_BUS.on("clickComponent", (elem: ComponentConfig) => {
  state.currentElem = elem;
});
</script>

<style lang="scss" scoped>
.h-component-config {
  height: 100%;
  overflow-y: auto;

  .h-component-config-item {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    padding: 0 8px;

    .h-component-config-item-title {
      font-size: 12px;
    }

    .el-input {
      flex: 1;
      padding-left: 8px;
    }
  }
}
</style>
