<!--
 * @Description: 容器组件
 * @Author: Hedgehog96
 * @Date: 2022-05-15 17:42:07
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-30 16:02:29
-->
<template>
    <div
        class="h-base-container"
        :class="activated ? 'activated' : 'unactivated'"
    >
        <slot />

        <div
            v-show="activated"
            class="container-action"
        >
            <!-- <i
                class="iconfont icon-h-fuzhi"
                title="复制"
            /> -->
            <i
                class="iconfont icon-h-shanchu"
                title="删除"
            />
        </div>

        <div
            v-show="activated"
            class="container-drag-handler"
        >
            <i class="iconfont icon-h-yidong_huaban" />
            <span class="container-title">容器</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
    activated: {
        type: Boolean,
        default: () => false,
    },
});
</script>

<style lang="scss" scoped>
.h-base-container {
    position: relative;
    min-height: 200px;
    border: 1px solid #ccc;

    .container-action {
        position: absolute;
        bottom: 0;
        right: -2px;
        height: 16px;
        display: flex;
        color: #fff;
        opacity: 0.6;
        background-color: $base-color;
        z-index: 99;
        &:hover {
            opacity: 1;
        }

        i {
            margin: 0 2px;
            cursor: pointer;
        }
    }

    .container-drag-handler {
        position: absolute;
        top: -1px;
        left: -2px;
        padding-top: 2px;
        padding-left: 2px;
        height: 16px;
        display: flex;
        color: #fff;
        opacity: 0.6;
        background-color: $base-color;
        z-index: 9;
        cursor: move;
        &:hover {
            opacity: 1;
        }

        .iconfont {
            font-size: 14px;
        }
        .container-title {
            margin: 0 4px;
            font-size: 12px;
        }
    }

    &.activated {
        outline: 2px solid $base-color;
    }

    &.unactivated {
        outline: none;
    }
}
</style>
