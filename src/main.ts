/*
 * @Description:
 * @Author: Hedgehog96
 * @Date: 2022-05-05 21:19:48
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-21 11:18:38
 */
import { Component, createApp } from 'vue'
import { createPinia } from 'pinia'
import { ElMessage } from 'element-plus'
import Draggable from 'vuedraggable'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as HWidgets from '@/components/form-widget'
import App from './App.vue'
import EventBus from './utils/EventBus'
import './styles/normalize.css'
import './styles/editor.css'
import './assets/fonts/iconfont.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

const PINIA = createPinia()
const EVENT_BUS = new EventBus()
const H_APP = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    H_APP.component(key, component)
}
for (const [key, component] of Object.entries(HWidgets.default)) {
    H_APP.component(key, component as Component)
}
H_APP.component('vue-draggable', Draggable)
H_APP.config.globalProperties.$message = ElMessage

H_APP.use(PINIA)
H_APP.provide('eventBus', EVENT_BUS)
H_APP.mount('#app')