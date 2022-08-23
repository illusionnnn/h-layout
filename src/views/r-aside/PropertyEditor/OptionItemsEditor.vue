<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-08-22 16:04:45
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-23 17:02:05
-->
<template>
    <el-form-item class="h-editor">
        <el-divider>
            选项设置
        </el-divider>
        <div
            v-for="(item, idx) in props.elem.props.optionItems"
            :key="idx"
            class="option-items-wrapper"
            style="margin-bottom: 4px"
        >
            <el-input
                v-model="item.label"
                style="width: 45%; margin-right: 10px;"
                title="值"
                @input="debounce(handleChangeLabel, 300)"
            />
            <el-input
                v-model="item.text"
                style="width: 45%; margin-right: 10px"
                title="文本"
            />
            <el-button
                type="danger"
                :icon="Delete"
                circle
                @click="handleDelete(item)"
            />
        </div>
        <el-button
            type="primary"
            link
            @click="handleAdd"
        >
            增加选项
        </el-button>
    </el-form-item>
</template>

<script setup lang="ts">
import { defineProps, getCurrentInstance } from 'vue';
import { Delete } from '@element-plus/icons-vue';
import { ElFormItem, ElInput, ElButton, ElDivider } from "element-plus";
import { debounce } from 'lodash-es';

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    },
});

const instance = getCurrentInstance();
const handleDelete = (item: { text: string; label: string }) => {
    if (props.elem.props.optionItems.length === 1) {
        instance?.appContext.config.globalProperties.$message.warning('不能删除全部选项');
    } else {
        const _ = props.elem.props.optionItems.filter((_item: { text: string; label: string }) => _item.label !== item.label);
        props.elem.props.optionItems = _;
    }
};
const handleAdd = () => {
    props.elem.props.optionItems.push(
        { text: `radio${+new Date()}`, label: `radio${+new Date()}` }
    );
};
const handleChangeLabel = (value: string) => {
    console.log(value);
};
</script>

<style scoped>
.option-items-wrapper {
  margin-bottom: 4px;
  display: flex;
}
</style>