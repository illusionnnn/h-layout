<!--
 * @Description: 应用头部组件
 * @Author: Hedgehog96
 * @Date: 2022-05-07 16:34:02
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-07 18:23:51
-->
<template>
  <div class="h-the-header">
    <div class="h-the-header-title">h-layout</div>
    <div class="h-the-header-btns">
      <el-button size="small" ><el-icon><hide /></el-icon>预览</el-button>
      <el-button size="small"><el-icon><delete /></el-icon>清空</el-button>
      <el-button size="small" type="primary"><el-icon><circle-check /></el-icon>保存</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Hide, Delete, CircleCheck } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.h-the-header {
  height: 40px;
  padding: 0 20px;
  display: flex;
  align-items: center;

  .h-the-header-title {
    font-size: 20px;
    color: #6b6b6b;
  }

  .h-the-header-btns {
    margin-left: auto;

    .el-icon {
      margin-right: 4px;
    }
  }
}
</style>