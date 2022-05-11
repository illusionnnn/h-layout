/*
 * @Description: 可拖动组件配置
 * @Author: Hedgehog96
 * @Date: 2022-05-09 17:30:41
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-11 18:04:43
 */
import {
  ElContainer,
  ElCard,
  ElButton,
  ElInput,
  ElSwitch,
  ElRate,
} from "element-plus";

export default [
  {
    id: "0",
    title: "容器",
    components: [
      {
        cid: "0-0",
        title: "布局",
        showTitle: false,
        component: ElContainer,
        attrs: {},
        evt: {},
        children: [],
      },
      {
        cid: "0-1",
        title: "卡片",
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
    components: [
      {
        cid: "1-0",
        title: "单行输入",
        showTitle: false,
        component: ElInput,
        attrs: {},
        evt: {},
        children: [],
      },
      {
        cid: "1-1",
        title: "多行输入",
        showTitle: false,
        component: ElInput,
        attrs: { type: "textarea" },
        evt: {},
        children: [],
      },
      {
        cid: "1-2",
        title: "按钮",
        showTitle: true,
        component: ElButton,
        attrs: {},
        evt: {},
        children: [],
      },
      {
        cid: "1-3",
        title: "开关",
        showTitle: false,
        component: ElSwitch,
        attrs: {},
        evt: {},
        children: [],
      },
      {
        cid: "1-4",
        title: "评分",
        showTitle: false,
        component: ElRate,
        attrs: {},
        evt: {},
        children: [],
      },
    ],
  },
];
