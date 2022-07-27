<!--
 * @Description: 实体组件
 * @Author: Hedgehog96
 * @Date: 2022-05-25 15:37:32
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-07-27 14:39:47
-->
<template>
    <div
        class="h-base-component"
        :class="activated ? 'activated' : 'unactivated'"
    >
        <div class="component-name">
            {{ label }}
        </div>
        <slot />

        <div
            v-show="activated"
            class="component-action"
        >
            <i
                class="iconfont icon-h-fuzhi"
                title="复制"
                @click.stop="handleCopy"
            />
            <i
                class="iconfont icon-h-shanchu"
                title="删除"
                @click.stop="handleDelete"
            />
        </div>

        <div
            v-show="activated"
            class="component-drag-handler"
        >
            <i class="iconfont icon-h-yidong_huaban" />
            <span class="component-title">{{ title }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, inject } from "vue";
import { cloneDeep, random } from "lodash-es";
import { useIdStore } from "@/store/id";
import { useComponentsStore } from "@/store/components";
import { ComponentConfig } from "@/config/interfaces";

const props = defineProps({
    label: {
        type: String,
        default: "",
    },
    title: {
        type: String,
        default: "",
    },
    activated: {
        type: Boolean,
        default: false,
    },
    elem: {
        type: Object,
        default: () => {
            return;
        },
    },
});

const idStore = useIdStore();
const componentsStore = useComponentsStore();
const EVENT_BUS: any = inject("eventBus");

const handleCopy = () => {
    const c = cloneDeep((props.elem as ComponentConfig));
    c.id = idStore.id;
    c.uniqueKey = c.label + random(1, 999);
    
    if (c.pid !== -1) {
        componentsStore.components.forEach((_c: ComponentConfig) => {
            if (_c.id === c.pid) {
                _c.children?.push(c);
            }
        });
    } else {
        componentsStore.add(c);
    }
    idStore.increment();
};

const handleDelete = () => {
    EVENT_BUS.emit("delete", props.elem.id);
};
</script>

<style lang="scss" scoped>
.h-base-component {
    padding: 4px;
    position: relative;
    display: flex;
    align-items: center;

    .component-name {
        margin-right: 30px;
    }

    .component-action {
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

    .component-drag-handler {
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
        .component-title {
            margin-left: 4px;
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
