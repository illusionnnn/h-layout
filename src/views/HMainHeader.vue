<!--
 * @Description: 内容头部区域
 * @Author: Hedgehog96
 * @Date: 2022-05-17 10:46:19
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-17 14:27:23
-->
<template>
  <div class="h-main-header">
    <el-icon title="撤回"><arrow-left /></el-icon>
    <el-icon title="恢复"><arrow-right /></el-icon>
    <div class="h-main-header-btns">
      <el-button size="small"
        ><el-icon><folder-opened /></el-icon>结构</el-button
      >
      <el-button size="small"
        ><el-icon><show /></el-icon>预览</el-button
      >
      <el-button size="small"
        ><el-icon><delete /></el-icon>清空</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowLeft,
  ArrowRight,
  FolderOpened,
  View as Show,
  Delete,
} from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
.h-main-header {
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $global-bg-color;
  text-align: center;
  border-radius: $global-border-radius;

  .el-icon {
    cursor: pointer;
    margin: 0 10px;
  }

  .h-main-header-btns {
    margin-left: 20px;
    .el-icon {
      margin-left: auto;
      margin-right: 4px;
    }
  }
}
</style>
