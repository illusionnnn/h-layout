<!--
 * @Description: 左侧可拖动组件
 * @Author: Hedgehog96
 * @Date: 2022-05-09 15:33:03
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-15 18:57:01
-->
<template>
    <div class="h-components">
        <div
            v-for="config in componentsConfig"
            :key="config.pid"
            class="h-components-area"
        >
            <div class="h-components-area-title">
                {{ config.title }}
            </div>
            <div class="h-components-area-container">
                <span
                    v-if="!config.components.length"
                    class="h-components-area-tip"
                >暂无组件</span>
                <draggable
                    v-else
                    class="h-components-drag-area"
                    item-key="id"
                    :list="config.components"
                    :sort="false"
                    :group="{ name: 'componentItem', pull: 'clone', put: false }"
                    :clone="handleCloneComponentsConfig"
                >
                    <template #item="{ element }">
                        <el-tag
                            class="h-components-drag-area-item"
                            :key="element.id"
                            round
                            effect="light"
                            :data-id="element.name"
                        >
                            <i :class="['iconfont', element.icon]" />
                            {{ element.title }}
                        </el-tag>
                    </template>
                </draggable>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import { cloneDeep, random } from 'lodash-es'
import { useIdStore } from '@/store/id'
import componentsConfig from '@/config/components'
import { ComponentConfig } from '@/config/interfaces'

const idStore = useIdStore()

const handleCloneComponentsConfig = (d: ComponentConfig) => {
    const _ = cloneDeep({
        ...d,
        id: idStore.id,
        uniqueKey: d.label + random(1, 999)
    })
    idStore.increment()

    return _
}
</script>

<style lang="scss" scoped>
.h-components {
    padding: 10px;

    .h-components-area {
        margin-bottom: 10px;

        .h-components-area-title {
            margin-bottom: 10px;

            @include font_color('areaTitleColor');
        }

        .h-components-area-tip {
            font-size: 12px;

            @include font_color('tipColor');
        }
    }

    .h-components-drag-area {
        display: flex;
        flex-wrap: wrap;

        .h-components-drag-area-item {
            margin: 10px;
            margin-left: 0;
            cursor: move;

            :deep(.el-tag__content) {
                display: flex;
                align-items: center;

                i {
                    margin-right: 4px;
                }
            }
        }
    }
}
</style>
