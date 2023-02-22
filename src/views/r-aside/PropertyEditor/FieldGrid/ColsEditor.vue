<!--
 * @Description: 当前栅格列组件
 * @Author: Hedgehog96
 * @Date: 2023-02-21 16:16:55
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-22 10:58:56
-->
<template>
    <el-form-item class="h-editor">
        <el-divider>
            当前栅格列
        </el-divider>
        <div
            v-for="(item, idx) in props.elem.cols"
            :key="idx"
            class="col-items-wrapper"
        >
            <span>{{ `${item.title}宽度${idx + 1}` }}</span>
            <el-input-number :min="0" v-model="item.props.span"  style="margin-left: 17%;" />
        </div>
        <el-button
            type="primary"
            @click="handleAdd"
        >
            增加栅格列
        </el-button>
    </el-form-item>
</template>

<script setup lang="ts">
import { ElCol } from 'element-plus'
import { random } from 'lodash-es'
import { useIdStore } from '@/store/id'
import { useComponentsStore } from '@/store/components'

const props = defineProps({
    elem: {
        type: Object,
        default: () => Object
    }
})

const idStore = useIdStore()
const componentsStore = useComponentsStore()

const handleAdd = () => {
    const id = idStore.id
    const uniqueKey = `Col${random(1, 999)}`
    
    const colConfig = {
        id,
        uniqueKey,
        title: '栅格列',
        label: 'Col',
        path: `${props.elem.path}/${id}-${uniqueKey}`,
        component: ElCol,
        props: {
            span: 12,
            offset: 0,
            push: 0,
            pull: 0
        },
        event: {},
        children: []
    }
    
    props.elem.cols.push(colConfig)
    idStore.increment()
    componentsStore.recordSnapshot()
}
</script>

<style lang="scss" scoped>
.col-items-wrapper {
    width: 100%;
    margin-bottom: 4px;
}
</style>