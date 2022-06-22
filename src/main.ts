/*
 * @Description:
 * @Author: Hedgehog96
 * @Date: 2022-05-05 21:19:48
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-22 16:24:17
 */
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import HDraggable from "./components/HDraggable.vue";
import EventBus from "./utils/eventBus";
import "./styles/normalize.css";
import "./assets/fonts/iconfont.css";
import "element-plus/dist/index.css";

const H_APP = createApp(App);
const H_PINIA = createPinia();
const H_EVENT_BUS = new EventBus();
H_APP.use(H_PINIA);
H_APP.provide("eventBus", H_EVENT_BUS);
H_APP.component("HDraggable", HDraggable);
H_APP.mount("#app");
