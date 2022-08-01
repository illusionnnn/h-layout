<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-08-01 15:55:51
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-01 17:48:02
-->
<template>
    <div class="icon-dialog">
        <el-dialog
            v-model="state.visible"
            title="请选择Icon"
            width="60%"
            :before-close="handleClose"
        >
            <div
                v-for="(name, idx) in state.icons"
                :key="idx"
                class="icons-dialog-item"
                :class="state.currentIconName === name ? 'is-active': ''"
                @click.stop="state.currentIconName = name"
            >
                <component
                    :is="name"
                    style="width: 1.4rem; height: 1.4rem;"
                />
            </div>
            <template #footer>
                <span class="icons-dialog-footer">
                    <el-button @click.stop="state.visible = false">取消</el-button>
                    <el-button @click.stop="handleOk">确定</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, reactive, watch } from 'vue';
import { ElButton, ElDialog } from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const getIcons = () => {
    const icons = [];
    for (const name in ElementPlusIconsVue) {
        icons.push(name);
    }
    return icons;
};

const props = defineProps({
    iconName: {
        type: String,
        default: '',
        required: true
    },
    visible: {
        type: Boolean,
        default: false,
        required: true
    }
});
const emits = defineEmits(['update', 'close']);

const state = reactive({
    visible: false,
    currentIconName: '',
    icons: getIcons()
});
watch(() => props.iconName, (val) => {
    state.currentIconName = val;
});
watch(() => props.visible, (val) => {
    state.visible = val;
});

const handleClose = () => {
    state.visible = false;
    emits('close');
};
const handleOk = () => {
    emits('update', state.currentIconName);
    emits('close');
    handleClose();
};
</script>

<style lang="scss">
.icon-dialog {
  .el-dialog {
    .el-dialog__body {
        display: flex !important;
        flex-wrap: wrap !important;
    }

    .icons-dialog-item {
      padding: 0.2rem;
      cursor: pointer;
    }

    .is-active {
      background-color: #e6a23c;
      color: #fff;
    }
  }
}
</style>