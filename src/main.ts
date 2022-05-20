/*
 * @Description:
 * @Author: Hedgehog96
 * @Date: 2022-05-05 21:19:48
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-20 16:52:08
 */
import { createApp } from "vue";
import App from "./App.vue";
import HDraggable from "./components/HDraggable.vue";
import "./assets/styles/normalize.css";
import "element-plus/dist/index.css";

const app = createApp(App);
app.component("HDraggable", HDraggable);
app.mount("#app");
