<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-08-22 11:28:51
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-09-07 10:41:04
-->
<template>
    <el-form-item class="h-editor">
        <span
            class="h-editor-title"
            title="隐藏字段标签"
        >隐藏字段标签</span>
        <div
            class="h-editor-container"
        >
            <template v-if="!isLayoutHidden">
                <el-switch
                    :model-value="props.elem.props.hidden"
                    @change="handleChange"
                />
            </template>
            <template v-else>
                <el-switch
                    :model-value="props.elem.hidden"
                    @change="handleLayoutHiddenChange"
                />
            </template>
        </div>
    </el-form-item>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { ElFormItem, ElSwitch } from "element-plus";
import { useComponentsStore } from '@/store/components';

const props = defineProps({
    isLayoutHidden: {
        type: Boolean,
        default: false
    },
    elem: {
        type: Object,
        default: () => Object
    },
});

const componentStpre = useComponentsStore();
const handleChange = (value: number | string | boolean) => {
    props.elem.props.hidden = Boolean(value);
    props.elem.props['$_isComponentSethidden'] = true;
};
const handleLayoutHiddenChange = (value: number | string | boolean) => {
    if (props.isLayoutHidden !== undefined) {
        props.elem.hidden = Boolean(value);
        componentStpre.setLayoutProperty('hidden', Boolean(value));
    } else {
        props.elem.props.hidden = Boolean(value);
    }
};
</script>