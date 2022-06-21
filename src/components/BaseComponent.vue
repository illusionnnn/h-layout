<!--
 * @Description: 实体组件
 * @Author: Hedgehog96
 * @Date: 2022-05-25 15:37:32
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-21 14:35:18
-->
<template>
  <div
    class="h-base-component"
    :class="activated ? 'activated' : 'unactivated'"
  >
    <div class="component-name">{{ name }}</div>
    <slot></slot>

    <div v-show="activated" class="component-action">
      <i class="iconfont icon-h-fuzhi" title="复制"></i>
      <i
        class="iconfont icon-h-shanchu"
        title="删除"
        @click="() => showMessageBox(messageBoxParams)"
      ></i>
    </div>

    <div v-show="activated" class="component-drag-handler">
      <i class="iconfont icon-h-yidong_huaban"></i>
      <span class="component-title">{{ title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

import { showMessageBox, showMessageBoxInterface } from "../utils/Message";

defineProps({
  name: {
    type: String,
    default: () => "",
  },
  title: {
    type: String,
    default: () => "",
  },
  activated: {
    type: Boolean,
    default: () => false,
  },
});

const messageBoxParams: showMessageBoxInterface = {
  title: "删除组件",
  content: "是否确定删除该组件",
  type: "warning",
  confirmButtonText: "确认",
  cancelButtonText: "取消",
  confirmMessageType: "warning",
  confirmMessageText: "删除中",
};
</script>

<style lang="scss" scoped>
.h-base-component {
  padding: 2px 0;
  position: relative;
  display: flex;
  align-items: center;

  .component-name {
    margin-right: 30px;
  }

  .component-action {
    position: absolute;
    bottom: 0;
    right: -2px;
    height: 16px;
    display: flex;
    color: #fff;
    opacity: 0.6;
    background-color: $base-color;
    z-index: 99;
    &:hover {
      opacity: 1;
    }

    i {
      margin: 0 2px;
      cursor: pointer;
    }
  }

  .component-drag-handler {
    position: absolute;
    top: -1px;
    left: -2px;
    padding-top: 2px;
    padding-left: 2px;
    height: 16px;
    display: flex;
    color: #fff;
    opacity: 0.6;
    background-color: $base-color;
    z-index: 9;
    cursor: move;
    &:hover {
      opacity: 1;
    }

    .iconfont {
      font-size: 14px;
    }
    .component-title {
      margin-left: 4px;
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
