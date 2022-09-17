<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-05-09 14:22:35
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-09-17 21:52:47
-->
<template>
    <div class="h-aside">
        <div class="h-aside-tabs">
            <div
                class="h-aside-tab h-aside-tabs-component-config"
                :class="currentCompsTabClass"
                @click="handleTabClick('c')"
            >
                <i class="iconfont icon-h-jichupeizhi" />
                <span>组件配置</span>
            </div>
            <div
                class="h-aside-tab h-aside-tabs-layout-config"
                :class="currentSettingTabClass"
                @click="handleTabClick('l')"
            >
                <i class="iconfont icon-h-xitongpeizhi" />
                <span>页面配置</span>
            </div>
        </div>
        <div class="h-aside-container">
            <keep-alive>
                <component
                    :is="state.currentComponent"
                    @tab-click="handleTabClick"
                />
            </keep-alive>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, computed, shallowRef, watch } from "vue";
import { useFieldsConfigStore } from "@/store/fieldsConfig";
import HComponentConfig from "./HComponentConfig.vue";
import HLayoutConfig from "./HLayoutConfig.vue";

const ACTIVATING_CLASS = "activating";
const NOTACTIVE_CLASS = "";
type C = 'c'
type L = 'l'

const fieldsConfigStore = useFieldsConfigStore();
const state = reactive({
    currentComponent: shallowRef(fieldsConfigStore.tabName === 'c' ? HComponentConfig : HLayoutConfig),
});

const currentCompsTabClass = computed(() => {
    return fieldsConfigStore.tabName === 'c' ? ACTIVATING_CLASS : NOTACTIVE_CLASS;
});

const currentSettingTabClass = computed(() => {
    return fieldsConfigStore.tabName === 'l' ? ACTIVATING_CLASS : NOTACTIVE_CLASS;
});

const handleTabClick = (name: C | L) => {
    fieldsConfigStore.changeTabName(name);
};

watch(() => fieldsConfigStore.tabName, (newVal: any) => {
    const currentComponent = newVal === 'c' ? HComponentConfig : HLayoutConfig;
    state.currentComponent = currentComponent;
});
</script>

<style lang="scss" scoped>
.h-aside {
    height: 100%;
    .h-aside-tabs {
        display: flex;
        justify-content: center;

        .h-aside-tab {
            flex: 1;
            margin: 10px 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            &.activating {
                color: $base-color;
            }

            i {
                margin-right: 4px;
            }

            span {
                font-size: 14px;
            }
        }
    }

    .h-aside-container {
        height: calc(100% - 40px);
    }
}
</style>
