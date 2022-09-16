<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-05-09 15:38:49
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-09-16 17:20:16
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
                            @click="handleLoadTemplate"
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
import { ElRow, ElCol, ElCard, ElTooltip, ElButton } from "element-plus";
import questionnaireTemplate from "./templates/questionnaireTemplate";
import questionnaireImg from "@/assets/imgs/questionnaire.jpg";
import { useIdStore } from "@/store/id";
import { useComponentsStore } from "@/store/components";
import { ComponentConfig } from "@/config/interfaces";

const $_loadText = "加载该模板";
const templates = [
    { id: 0, text: "1. 调查问卷模板", img: questionnaireImg,  },
];

const idStore = useIdStore();
const componentsStore = useComponentsStore();
const handleLoadTemplate = () => {
    questionnaireTemplate.forEach((c: (id: number) => ComponentConfig) => {
        componentsStore.add(c(idStore.id));
        idStore.increment();
    });
};
</script>

<style lang="scss" scoped>
    .h-settings {
        padding: 5px;
        height: 100%;
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
