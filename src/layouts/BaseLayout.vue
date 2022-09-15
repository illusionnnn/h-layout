<!--
 * @Description: 基础布局组件
 * @Author: Hedgehog96
 * @Date: 2022-05-07 15:11:38
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-09-15 15:38:55
-->
<template>
    <div class="h-base-layout">
        <el-container class="h-base-layout-wrapper">
            <el-header class="h-base-layout-header">
                <slot name="header" />
            </el-header>
            <el-container class="h-base-layout-container">
                <el-aside
                    width="256px"
                    class="h-base-layout-l-aside"
                >
                    <slot name="lAside" />
                </el-aside>
                <el-container class="h-base-layout-container-main">
                    <el-main class="h-base-layout-main">
                        <slot name="main" />
                    </el-main>
                </el-container>
                <el-aside
                    width="256px"
                    class="h-base-layout-r-aside"
                >
                    <slot name="rAside" />
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
    height: calc(100vh - 70px);
    border-radius: $base-border-radius;
    overflow: initial;
}

.h-base-layout-l-aside {
    height: calc(100vh - 60px);
    border-top-right-radius: $base-border-radius;
    border-bottom-right-radius: $base-border-radius;
    background-color: $base-bg-color;
}

.h-base-layout-r-aside {
    margin-left: 20px;
    height: calc(100vh - 60px);
    border-top-left-radius: $base-border-radius;
    border-bottom-left-radius: $base-border-radius;
    background-color: $base-bg-color;
}

.h-base-layout-footer {
    margin-top: 20px;
    border-top-left-radius: $base-border-radius;
    border-top-right-radius: $base-border-radius;
    background-color: $base-bg-color;
}

.el-header {
    padding: 0;
    height: auto;
}

.el-aside {
    overflow: initial;
}
</style>
