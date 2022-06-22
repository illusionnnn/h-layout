<!--
 * @Description: 内容头部区域
 * @Author: Hedgehog96
 * @Date: 2022-05-17 10:46:19
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-22 14:47:45
-->
<template>
  <div class="h-main-header">
    <i class="iconfont icon-h-undo" title="撤回"></i>
    <i class="iconfont icon-h-redo" title="恢复"></i>
    <div class="h-main-header-btns">
      <el-button size="small"
        ><i class="iconfont icon-h-jiegou"></i>结构</el-button
      >
      <el-button size="small"
        ><i class="iconfont icon-h-yulan"></i>预览</el-button
      >
      <el-button size="small" type="danger"
        ><i class="iconfont icon-h-shanchu"></i>清空</el-button
      >
    </div>
  </div>
</template>

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

  .iconfont {
    margin: 0 8px;
    font-size: 14px;
    cursor: pointer;
  }

  .h-main-header-btns {
    margin-left: 20px;
    .iconfont {
      margin: 0 4px;
    }
  }
}
</style>
