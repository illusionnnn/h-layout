<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-05-05 21:19:48
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-09-16 15:36:17
-->
<template>
    <h-layout />
</template>

<script setup lang="ts">
import HLayout from "./layouts/HLayout.vue";
</script>

<style>
:-webkit-full-screen body {
    width: 100%;
    height: 100%;
}

#app {
    background-color: #f0f0f0;
}

::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 0;
}

::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 6px;
    height: 6px;
}

::-webkit-scrollbar-thumb {
    cursor: pointer;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.15);
    transition: color 0.2s ease;
}
</style>
