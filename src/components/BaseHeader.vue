<!--
 * @Description: 应用头部组件
 * @Author: Hedgehog96
 * @Date: 2022-05-07 16:34:02
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-20 15:07:16
-->
<template>
  <div class="h-base-header">
    <div class="h-base-header-title">h-layout</div>
    <div class="h-base-header-btns">
      <div class="theme-toggler" @click="handleThemeChange">
        <div class="theme-switch" role="switch">
          <div class="theme-switch-action">
            <div class="theme-switch-icons">
              <el-icon>
                <sunrise v-if="lightTheme" class="light-icon" />
                <moon-night v-else class="dark-icon" />
              </el-icon>
            </div>
          </div>
        </div>
      </div>
      <el-button size="small" @click="handleFullScreen"
        ><el-icon><full-screen /></el-icon>全屏</el-button
      >
      <el-button size="small" type="primary"
        ><el-icon><circle-check /></el-icon>存档</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
import {
  Sunrise,
  MoonNight,
  FullScreen,
  CircleCheck,
} from "@element-plus/icons-vue";

interface FullScreenHTMLElement extends HTMLElement {
  mozRequestFullScreen?: () => void;
  msRequestFullscreen?: () => void;
  webkitRequestFullscreen?: () => void;
}

const lightTheme = ref(true);
const handleThemeChange = () => {
  const elem = document.querySelector("html") as HTMLElement;

  if (lightTheme.value) {
    elem.className = "dark";
    lightTheme.value = false;
  } else {
    elem.className && elem.removeAttribute("class");
    lightTheme.value = true;
  }
};

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
    display: flex;

    .theme-toggler {
      height: 24px;
      padding: 0 12px;
      display: flex;
      align-items: center;
      color: #303133;
      background-color: #fff;
      border-radius: 50%;
      transition: border-color 0.3s, background-color 0.2s;

      .theme-switch {
        margin: 0;
        display: inline-block;
        position: relative;
        width: 44px;
        height: 20px;
        border: 1px solid #dcdfe6;
        outline: none;
        border-radius: 10px;
        box-sizing: border-box;
        background-color: #f2f2f2;
        cursor: pointer;
        transition: border-color 0.3s, background-color 0.3s;
      }

      .theme-switch-action {
        height: 16px;
        width: 16px;
        position: absolute;
        top: 1px;
        left: 1px;
        border-radius: 50%;
        color: #606266;
        background-color: #fff;
        transform: translate(0);
        transition: border-color 0.3s, background-color 0.3s, transform 0.3s;
      }

      .theme-switch-icons {
        position: relative;

        .el-icon {
          position: absolute;
          top: 1px;
          left: 1px;
          font-size: 13px;
        }

        .light-icon {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 1;
        }

        .dark-icon {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
        }
      }
    }

    .el-icon {
      margin-right: 4px;
    }
  }
}
</style>
