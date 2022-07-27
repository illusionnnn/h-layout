/*
 * @Description:
 * @Author: Hedgehog96
 * @Date: 2022-05-05 21:19:48
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-07-28 00:56:24
 */
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import HDraggable from "./components/HDraggable.vue";
import EventBus from "./utils/eventBus";
import "./styles/normalize.css";
import "./styles/editor.css";
import "./assets/fonts/iconfont.css";
import "element-plus/dist/index.css";

const PINIA = createPinia();
const EVENT_BUS = new EventBus();
const H_APP = createApp(App);

H_APP.use(PINIA);
H_APP.provide("eventBus", EVENT_BUS);
H_APP.component("HDraggable", HDraggable);
H_APP.mount("#app");