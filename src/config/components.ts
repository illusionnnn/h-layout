/*
 * @Description: 可拖动组件配置
 * @Author: Hedgehog96
 * @Date: 2022-05-09 17:30:41
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-06-20 18:09:09
 */
import { ElButton, ElInput, ElSwitch, ElRate } from "element-plus";
import BaseContainer from "@/components/BaseContainer.vue";

export default [
  {
    pid: 0,
    title: "容器",
    name: "Wrapper",
    components: [
      {
        id: 1,
        title: "布局",
        name: "Container",
        icon: "icon-h-shangebuju",
        showTitle: false,
        component: BaseContainer,
        attrs: {},
        evt: {},
        children: [],
      },
    ],
  },
  {
    pid: 1,
    title: "实体",
    name: "components",
    components: [
      {
        id: 2,
        title: "单行输入",
        name: "Input",
        icon: "icon-h-input",
        showTitle: false,
        component: ElInput,
        attrs: { name: "input", label: "input" },
        evt: {},
      },
      {
        id: 3,
        title: "多行输入",
        name: "Input",
        icon: "icon-h-textarea",
        showTitle: false,
        component: ElInput,
        attrs: { name: "textarea", label: "textarea" },
        evt: {},
      },
      {
        id: 4,
        title: "按钮",
        name: "Button",
        icon: "icon-h-anniu",
        showTitle: true,
        component: ElButton,
        attrs: { name: "button", label: "button" },
        evt: {},
      },
      {
        id: 5,
        title: "开关",
        name: "Switch",
        icon: "icon-h-huadonganniux",
        showTitle: false,
        component: ElSwitch,
        attrs: { name: "switch", label: "switch" },
        evt: {},
      },
      {
        id: 6,
        title: "评分",
        name: "Rate",
        icon: "icon-h-pingfen1",
        showTitle: false,
        component: ElRate,
        attrs: { name: "rate", label: "rate" },
        evt: {},
      },
    ],
  },
];
