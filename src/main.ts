/*
 * @Description:
 * @Author: Hedgehog96
 * @Date: 2022-05-05 21:19:48
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-09 18:06:55
 */
import { createApp } from "vue";
import App from "./App.vue";
import HDraggable from "./components/HDraggable.vue";
import "./styles/normalize.css";
import "element-plus/dist/index.css";

const H_APP = createApp(App);
H_APP.component("HDraggable", HDraggable);
H_APP.mount("#app");
