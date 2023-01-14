<!--
 * @Description: 内容头部区域
 * @Author: Hedgehog96
 * @Date: 2022-05-17 10:46:19
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-14 20:42:53
-->
<template>
    <div class="h-main-header">
        <i
            class="iconfont icon-h-undo"
            :class="[componentsStore.snapshotIdx >= 0 && 'can-undo']"
            title="撤销"
            @click="handleUndo()"
        />
        <i
            class="iconfont icon-h-redo"
            :class="[componentsStore.snapshotIdx < componentsStore.snapshotcomponents.length - 1 && 'can-redo']"
            title="恢复"
            @click="handleRedo()"
        />
        <div class="h-main-header-btns">
            <el-button
                size="small"
                @click="handleTree(true)"
            >
                <i class="iconfont icon-h-jiegou" />结构
            </el-button>
            <el-button
                size="small"
                @click="isPreview = true"
            >
                <i
                    class="iconfont icon-h-yulan"
                />预览
            </el-button>
            <el-button
                size="small"
                type="danger"
                @click="handleCleanAll()"
            >
                <i class="iconfont icon-h-shanchu" />清空
            </el-button>
        </div>
    </div>

    <structure-tree
        :open="opTree"
        :node-key="currentNodeKey"
        @close="handleTree(false)"
    />
    <preview-dialog
        :visible="isPreview"
        @close="handleClosePreiview"
    />
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import StructureTree from '@/components/StructureTree.vue'
import PreviewDialog from '@/components/PreviewDialog.vue'
import { useComponentsStore } from '@/store/components'
import { useFieldsConfigStore } from '@/store/fieldsConfig'
import { ComponentConfig } from '@/config/interfaces'

const componentsStore = useComponentsStore()
const fieldsConfigStore = useFieldsConfigStore()

const opTree = ref(false)
const isPreview = ref(false)
const handleTree = (op: boolean) => {
    opTree.value = op
}
const handleCleanAll = () => {
    if (!componentsStore.components.length) return
    componentsStore.clear()
    fieldsConfigStore.changeTabName('l')
}
const handleClosePreiview = () => {
    isPreview.value = false
}

const currentNodeKey = ref('')
const EVENT_BUS: any = inject('eventBus')
EVENT_BUS.on('clickComponent', (elem: ComponentConfig) => {
    currentNodeKey.value = elem.uniqueKey
})
const handleUndo = () => {
    componentsStore.undo()
    const c = componentsStore.components.slice(-1)
    if (c.length) {
        EVENT_BUS.emit('changeComponentId', c[0].id)
        EVENT_BUS.emit('clickComponent', c[0])
    } else {
        EVENT_BUS.emit('changeComponentId', -1)
        EVENT_BUS.emit('clickComponent', {})
    }
}
const handleRedo = () => {
    if (!componentsStore.snapshotcomponents.length) return 
    componentsStore.redo()
    const c = componentsStore.components.slice(-1)[0]
    EVENT_BUS.emit('changeComponentId', c.id)
    EVENT_BUS.emit('clickComponent', c)
}
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
        color: #409eff;
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
