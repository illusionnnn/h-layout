<!--
 * @Description: 应用布局组件
 * @Author: Hedgehog96
 * @Date: 2022-05-07 16:36:50
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-30 16:50:39
-->
<template>
    <base-layout>
        <template #header>
            <base-header />
        </template>
        <template #lAside>
            <base-laside />
        </template>
        <template #main>
            <base-main />
        </template>
        <template #rAside>
            <base-raside />
        </template>
    </base-layout>
</template>

<script setup lang="ts">
import BaseLayout from './BaseLayout.vue'
import BaseHeader from './header/BaseHeader.vue'
import BaseLaside from './aside/BaseLaside.vue'
import BaseRaside from './aside/BaseRaside.vue'
import BaseMain from './main/BaseMain.vue'
</script>
