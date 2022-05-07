<!--
 * @Description: 基础布局组件
 * @Author: Hedgehog96
 * @Date: 2022-05-07 15:11:38
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-07 16:40:15
-->
<template>
  <div class="h-base-layout">
    <el-container class="h-base-layout-wrapper">
      <el-header class="h-base-layout-header">
        <slot name="header"></slot>
      </el-header>
      <el-container>
        <el-aside width="256px" class="h-base-layout-aside">
          <slot name="aside"></slot>
        </el-aside>
        <el-container>
          <el-main class="h-base-layout-main">
            <slot name="main"></slot>
          </el-main>
          <el-footer class="h-base-layout-footer">
            <slot name="footer"></slot>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.h-base-layout {
  width: 100vw;
  height: 100vh;
}

.h-base-layout-wrapper {
  height: 100vh;
}

.h-base-layout-main {
  overflow-y: auto;
}

.h-base-layout-aside {
  height: calc(100vh - 40px);
  overflow-y: auto;
}

.el-header {
  padding: 0;
  height: auto;
}
</style>