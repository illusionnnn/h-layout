<!--
 * @Description: 选项设置组件
 * @Author: Hedgehog96
 * @Date: 2022-08-22 16:04:45
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-22 10:19:52
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
            style="margin-bottom: 4px;"
        >
            <el-input
                v-model="item.label"
                style="width: 45%; margin-right: 10px;"
                title="值"
            />
            <el-input
                v-model="item.text"
                style="width: 45%; margin-right: 10px;"
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
            @click="handleAdd"
        >
            增加选项
        </el-button>
    </el-form-item>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import { Delete } from '@element-plus/icons-vue'

interface Item {
    text: string | number;
    label: string | number;
}

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
})

const instance = getCurrentInstance()
const handleDelete = (item: Item) => {
    if (props.elem.props.optionItems.length === 1) {
        instance?.appContext.config.globalProperties.$message.warning('不能删除全部选项')
    } else {
        const _ = props.elem.props.optionItems.filter((_item: Item) => _item.label !== item.label)
        props.elem.props.optionItems = _
    }
}

const handleAdd = () => {
    props.elem.props.optionItems.push(
        { text: `radio${+new Date()}`, label: `radio${+new Date()}` }
    )
}
// const handleChangeLabel = (value: string | number, item: Item) => {
//     const _ = props.elem.props.optionItems.filter((_item: Item) => _item.text !== item.text)
//     const __ = props.elem.props.optionItems.filter((_item: Item) => _item.text === item.text)[0]
//     _.forEach((_item: Item) => {
//         if (_item.label === value) {
//             instance?.appContext.config.globalProperties.$message.error('输入值已存在')
//             return
//         } else {
//             __.label = value
//         }
//     })
// }
// const handleChangeText = (value: string | number, item: Item) => {
//     const _ = props.elem.props.optionItems.filter((_item: Item) => _item.label !== item.label)
//     const __ = props.elem.props.optionItems.filter((_item: Item) => _item.label === item.label)[0]
//     _.forEach((_item: Item) => {
//         if (_item.text === value) {
//             instance?.appContext.config.globalProperties.$message.error('输入文本已存在')
//             return
//         } else {
//             __.text = value
//         }
//     })
// }
</script>

<style scoped>
.option-items-wrapper {
    margin-bottom: 4px;
    display: flex;
}
</style>