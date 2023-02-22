<!--
 * @Description: 容器组件组件
 * @Author: Hedgehog96
 * @Date: 2022-05-15 17:42:07
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-22 18:04:16
-->
<template>
    <div class="h-base-container">
        <slot />

        <div
            v-show="selected"
            class="container-action"
        >
            <!-- <i
                class="iconfont icon-h-fuzhi"
                title="复制"
            /> -->
            <i
                class="iconfont icon-h-shanchu"
                title="删除"
                @click.stop="handleDelete"
            />
        </div>

        <div
            v-show="selected"
            class="container-drag-handler"
        >
            <i class="iconfont icon-h-yidong_huaban" />
            <span class="container-title">{{ props.elem.title }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const props = defineProps({
    selected: {
        type: Boolean,
        default: () => false
    },
    elem: {
        type: Object,
        default: () => {
            return
        }
    }
})

const eventBus: any = inject('eventBus')
const handleDelete = () => {
    eventBus.emit('delete', [props.elem.id, props.elem.path])
}
</script>

<style lang="scss" scoped>
.h-base-container {
    position: relative;

    .container-action {
        position: absolute;
        bottom: 0;
        right: -2px;
        height: 16px;
        display: flex;
        color: #fff;

        @include opacity('opacity');

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

        @include opacity('opacity');

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
}
</style>
