<!--
 * @Description: 应用头部组件
 * @Author: Hedgehog96
 * @Date: 2022-05-07 16:34:02
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-11 17:31:17
-->
<template>
  <div class="h-base-header">
    <div class="h-base-header-title">h-layout</div>
    <div class="h-base-header-btns">
      <el-button size="small" @click="handleFullScreen"
        ><el-icon><zoom-in /></el-icon>全屏</el-button
      >
      <el-button size="small"
        ><el-icon><show /></el-icon>预览</el-button
      >
      <el-button size="small"
        ><el-icon><delete /></el-icon>清空</el-button
      >
      <el-button size="small" type="primary"
        ><el-icon><circle-check /></el-icon>保存</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import {
  ZoomIn,
  View as Show,
  Delete,
  CircleCheck,
} from "@element-plus/icons-vue";

interface FullScreenHTMLElement extends HTMLElement {
  mozRequestFullScreen?: () => void;
  msRequestFullscreen?: () => void;
  webkitRequestFullscreen?: () => void;
}

const handleFullScreen = () => {
  const elem = document.querySelector("html") as FullScreenHTMLElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else {
    ElMessage({
      message: "使用该功能请配合最新版chrome浏览器食用",
      type: "warning",
    });
  }
};
</script>

<style lang="scss" scoped>
.h-base-header {
  height: 40px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  background-color: $global-bg-color;
  border-bottom: 1.5px solid #e8e8e8;

  .h-base-header-title {
    font-size: 20px;
    color: #6b6b6b;
  }

  .h-base-header-btns {
    margin-left: auto;

    .el-icon {
      margin-right: 4px;
    }
  }
}
</style>
