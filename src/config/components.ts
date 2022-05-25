/*
 * @Description: 可拖动组件配置
 * @Author: Hedgehog96
 * @Date: 2022-05-09 17:30:41
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-25 16:16:16
 */
import { ElCard, ElButton, ElInput, ElSwitch, ElRate } from "element-plus";
import BaseContainer from "../components/BaseContainer.vue";

export default [
  {
    pid: "0",
    title: "容器",
    name: "Wrapper",
    components: [
      {
        id: 1,
        title: "布局",
        name: "Container",
        showTitle: false,
        component: BaseContainer,
        attrs: {},
        evt: {},
        children: [],
      },
    ],
  },
  {
    pid: "1",
    title: "实体",
    name: "components",
    components: [
      {
        id: 2,
        title: "单行输入",
        name: "Input",
        showTitle: false,
        component: ElInput,
        attrs: {},
        evt: {},
      },
      {
        id: 3,
        title: "多行输入",
        name: "Input",
        showTitle: false,
        component: ElInput,
        attrs: { type: "textarea" },
        evt: {},
      },
      {
        id: 4,
        title: "按钮",
        name: "Button",
        showTitle: true,
        component: ElButton,
        attrs: {},
        evt: {},
      },
      {
        id: 5,
        title: "开关",
        name: "Switch",
        showTitle: false,
        component: ElSwitch,
        attrs: {},
        evt: {},
      },
      {
        id: 6,
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
