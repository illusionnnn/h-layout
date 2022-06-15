/*
 * @Description:
 * @Author: Hedgehog96
 * @Date: 2022-05-05 21:19:48
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-15 18:28:52
 */
import { createApp } from "vue";
import App from "./App.vue";
import HDraggable from "./components/HDraggable.vue";
import EventBus from "./utils/eventBus";
import "./styles/normalize.css";
import "element-plus/dist/index.css";

const H_APP = createApp(App);
const H_EVENT_BUS = new EventBus();
H_APP.provide("eventBus", H_EVENT_BUS);
H_APP.component("HDraggable", HDraggable);
H_APP.mount("#app");
