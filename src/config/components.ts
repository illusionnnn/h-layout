/*
 * @Description: 可拖动组件配置
 * @Author: Hedgehog96
 * @Date: 2022-05-09 17:30:41
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-17 15:58:21
 */
import { ElCard, ElButton, ElInput, ElSwitch, ElRate } from "element-plus";
import BaseContainer from "../components/BaseContainer.vue";

export default [
  {
    id: "0",
    title: "容器",
    name: "Wrapper",
    components: [
      {
        cid: "0-0",
        title: "布局",
        name: "Container",
        showTitle: false,
        component: BaseContainer,
        attrs: {},
        evt: {},
        children: [],
      },
      {
        cid: "0-1",
        title: "卡片",
        name: "Card",
        showTitle: false,
        component: ElCard,
        attrs: {},
        evt: {},
        children: [],
      },
    ],
  },
  {
    id: "1",
    title: "实体",
    name: "components",
    components: [
      {
        cid: "1-0",
        title: "单行输入",
        name: "Input",
        showTitle: false,
        component: ElInput,
        attrs: {},
        evt: {},
      },
      {
        cid: "1-1",
        title: "多行输入",
        name: "Input",
        showTitle: false,
        component: ElInput,
        attrs: { type: "textarea" },
        evt: {},
      },
      {
        cid: "1-2",
        title: "按钮",
        name: "Button",
        showTitle: true,
        component: ElButton,
        attrs: {},
        evt: {},
      },
      {
        cid: "1-3",
        title: "开关",
        name: "Switch",
        showTitle: false,
        component: ElSwitch,
        attrs: {},
        evt: {},
      },
      {
        cid: "1-4",
        title: "评分",
        name: "Rate",
        showTitle: false,
        component: ElRate,
        attrs: {},
        evt: {},
      },
    ],
  },
];
