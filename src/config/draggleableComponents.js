/*
 * @Description: 可拖曳组件配置
 * @Author: Hedgehog96
 * @Date: 2022-05-09 17:30:41
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-10 17:39:25
 */
const $_prefix = "el-";

export default [
  {
    id: 0,
    title: "容器",
    components: [
      { name: "布局", component: `${$_prefix}'container'`, attrs: {} },
    ],
  },
  {
    id: 1,
    title: "实体",
    components: [
      {
        cid: 0,
        name: "单行输入",
        component: `${$_prefix}'input'`,
        attrs: {},
      },
      {
        cid: 1,
        name: "多行输入",
        component: `${$_prefix}'input'`,
        attrs: { type: "textarea" },
      },
      {
        cid: 2,
        name: "按钮",
        component: `${$_prefix}'button'`,
        attrs: {},
      },
      {
        cid: 3,
        name: "开关",
        component: `${$_prefix}'switch'`,
        attrs: {},
      },
      {
        cid: 4,
        name: "平分",
        component: `${$_prefix}'rate'`,
        attrs: {},
      },
    ],
  },
];
