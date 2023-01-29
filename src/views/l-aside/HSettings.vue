<!--
 * @Description: 右侧配置区域组件
 * @Author: Hedgehog96
 * @Date: 2022-05-09 15:38:49
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-14 21:45:52
-->
<template>
    <div class="h-settings">
        <el-row>
            <el-col
                v-for="template in templates"
                :key="template.id"
            >
                <el-card
                    shadow="never"
                    :body-style="{ padding: '0px' }"
                >
                    <el-tooltip
                        trigger="hover"
                        effect="light"
                        placement="right-start"
                    >
                        <template #content>
                            <img
                                :src="template.img"
                                style="width: 40vw;"
                            >
                        </template>
                        <img
                            class="template-image"
                            :src="template.img"
                        >
                    </el-tooltip>
                    <div class="template-tips">
                        <span class="template-text">{{ template.text }}</span>
                        <el-button
                            text
                            size="small"
                            style="margin-left: auto;"
                            @click="handleConfirmLoadTemplate"
                        >
                            {{ $_loadText }}
                        </el-button>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { ElRow, ElCol, ElCard, ElTooltip, ElButton, ElMessageBox } from 'element-plus'
import questionnaireTemplate from './templates/questionnaireTemplate'
import questionnaireImg from '@/assets/imgs/questionnaire.jpg'
import { useIdStore } from '@/store/id'
import { useComponentsStore } from '@/store/components'
import { ComponentConfig } from '@/config/interfaces'

const $_loadText = '加载该模板'
const templates = [
    { id: 0, text: '1. 调查问卷模板', img: questionnaireImg  }
]

const idStore = useIdStore()
const componentsStore = useComponentsStore()
const handleConfirmLoadTemplate = () => {
    ElMessageBox.confirm(
        '加载模板会覆盖当前已有组件（可使用撤销功能恢复',
        '友情提示',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'info'
        }
    )
        .then(() => {
            componentsStore.$_setComponents([])
            
            questionnaireTemplate.forEach((c: (id: number) => ComponentConfig) => {
                componentsStore.add(c(idStore.id))
                idStore.increment()
            })
            componentsStore.recordSnapshot()
        })
        .catch(() => {
        // notodo
        })
}
</script>

<style lang="scss" scoped>
    .h-settings {
        padding: 5px;
        overflow-y: auto;

        .template-image {
            width: 100%;
            display: block;
        }

        .template-tips {
            padding: 5px;
            display: flex;
            align-items: center;
        }

        .template-text {
            padding: 0 15px;
            font-size: 12px;
            font-weight: 600;
        }
    }
</style>
