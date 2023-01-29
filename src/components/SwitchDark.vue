<!--
 * @Description: 切换主题组件
 * @Author: Hedgehog96
 * @Date: 2023-01-29 22:23:13
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-30 00:03:54
-->
<template>
    <el-switch
        class="h-theme-swicth"
        v-model="theme"
        inline-prompt
        active-value="dark"
        :active-icon="Sunny"
        inactive-value="light"
        :inactive-icon="Moon"
        @change="handleThemeChange"
    />
</template>

<script setup lang="ts" name="SwitchDark">
import { onMounted, computed } from 'vue'
import { Sunny, Moon } from '@element-plus/icons-vue'
import { useThemeStore } from '@/store/theme'
import { useTheme } from '@/hooks'
import { Theme } from '@/config/interfaces'

const themeStore = useThemeStore()
const { initTheme, switchDark } = useTheme()

onMounted(() => initTheme())

const theme = computed({
    get() {
        return themeStore.theme
    },
    set(newVal: Theme) {
        themeStore.theme = newVal
    }
})

const handleThemeChange = () => {
    switchDark()
}
</script>