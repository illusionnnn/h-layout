<!--
 * @Description: 内容头部区域
 * @Author: Hedgehog96
 * @Date: 2022-05-17 10:46:19
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-16 17:13:07
-->
<template>
  <div class="h-main-header">
    <i class="iconfont icon-h-undo" title="撤回"></i>
    <i class="iconfont icon-h-redo" title="恢复"></i>
    <div class="h-main-header-btns">
      <el-button size="small"
        ><el-icon><folder-opened /></el-icon>结构</el-button
      >
      <el-button size="small"
        ><el-icon><show /></el-icon>预览</el-button
      >
      <el-button size="small" type="danger"
        ><el-icon><delete /></el-icon>清空</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { FolderOpened, View as Show, Delete } from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
.h-main-header {
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
  padding: 4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $base-bg-color;
  text-align: center;
  border-radius: $base-border-radius;

  .el-icon {
    cursor: pointer;
    margin: 0 10px;
  }
  .iconfont {
    margin: 0 8px;
    cursor: pointer;
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
