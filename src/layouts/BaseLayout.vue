<!--
 * @Description: 基础布局组件
 * @Author: Hedgehog96
 * @Date: 2022-05-07 15:11:38
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-17 10:52:52
-->
<template>
  <div class="h-base-layout">
    <el-container class="h-base-layout-wrapper">
      <el-header class="h-base-layout-header">
        <slot name="header"></slot>
      </el-header>
      <el-container class="h-base-layout-container">
        <el-aside width="256px" class="h-base-layout-l-aside">
          <slot name="lAside"></slot>
        </el-aside>
        <el-container class="h-base-layout-container-main">
          <el-main class="h-base-layout-main">
            <slot name="main"></slot>
          </el-main>
          <el-footer class="h-base-layout-footer">
            <slot name="footer"></slot>
          </el-footer>
        </el-container>
        <el-aside width="256px" class="h-base-layout-r-aside">
          <slot name="rAside"></slot>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.h-base-layout-wrapper {
  min-height: 100vh;
}
.h-base-layout-header {
  position: fixed;
  width: 100%;
}

.h-base-layout-container {
  margin-top: 60px;
}

.h-base-layout-container-main {
  margin-left: 20px;
}

.h-base-layout-main {
  padding: 0;
  height: calc(100vh - 140px);
  border-radius: $global-border-radius;
  overflow: initial;
}

.h-base-layout-l-aside {
  border-top-right-radius: $global-border-radius;
  border-bottom-right-radius: $global-border-radius;
  background-color: $global-bg-color;
}

.h-base-layout-r-aside {
  margin-left: 20px;
  border-top-left-radius: $global-border-radius;
  border-bottom-left-radius: $global-border-radius;
  background-color: $global-bg-color;
}

.h-base-layout-footer {
  margin-top: 20px;
  border-top-left-radius: $global-border-radius;
  border-top-right-radius: $global-border-radius;
  background-color: $global-bg-color;
}

.el-header {
  padding: 0;
  height: auto;
}

.el-aside {
  overflow: initial;
}
</style>
