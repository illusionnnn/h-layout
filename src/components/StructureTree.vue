<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-08-11 10:52:21
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-11 17:37:12
-->
<template>
    <el-drawer
        :model-value="props.open"
        direction="ltr"
        size="15%"
        title="组件结构树"
        :before-close="handleClose"
    >
        <el-tree
            :key="props.nodeKey"
            default-expand-all
            node-key="uniqueKey"
            empty-text="暂无组件"
            :data="componentsStore.components"
            :props="defaultProps"
            :highlight-current="true"
            :current-node-key="props.nodeKey"
            @node-click="handleNodeClick"
        />
    </el-drawer>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, inject } from 'vue';
import { ElDrawer, ElTree } from 'element-plus';
import { useComponentsStore } from "@/store/components";
import { ComponentConfig } from '@/config/interfaces';

const props = defineProps({
    open: {
        type: Boolean,
        default: false
    },
    nodeKey: {
        type: String,
        default: ''
    }
});
const emits = defineEmits(['close']);
const defaultProps = {
    children: 'children',
    label: 'uniqueKey',
};

const componentsStore = useComponentsStore();
const handleClose = (done: () => void) => {
    done();
    emits('close');
};

const EVENT_BUS: any = inject("eventBus");
const handleNodeClick = (c: ComponentConfig) => {
    EVENT_BUS.emit("changeComponentId", c.id);
    EVENT_BUS.emit("clickComponent", c);
};
</script>