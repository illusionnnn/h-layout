<!--
 * @Description: 内容头部区域
 * @Author: Hedgehog96
 * @Date: 2022-05-17 10:46:19
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-07-21 18:28:16
-->
<template>
    <div class="h-main-header">
        <i
            class="iconfont icon-h-undo"
            :class="[componentsStore.snapshotIdx >= 0 && 'can-undo']"
            title="撤销"
            @click="componentsStore.undo()"
        />
        <i
            class="iconfont icon-h-redo"
            :class="[componentsStore.snapshotIdx < componentsStore.snapshotcomponents.length - 1 && 'can-redo']"
            title="恢复"
            @click="componentsStore.redo()"
        />
        <div class="h-main-header-btns">
            <el-button size="small">
                <i class="iconfont icon-h-jiegou" />结构
            </el-button>
            <el-button size="small">
                <i class="iconfont icon-h-yulan" />预览
            </el-button>
            <el-button
                size="small"
                type="danger"
            >
                <i class="iconfont icon-h-shanchu" />清空
            </el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useComponentsStore } from '@/store/components';

const componentsStore = useComponentsStore();
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

    .iconfont {
        margin: 0 8px;
        font-size: 14px;
        cursor: pointer;
    }

    .icon-h-undo,
    .icon-h-redo {
        cursor: not-allowed;
    }
    .can-undo,
    .can-redo {
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
