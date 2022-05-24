/*
 * @Description: ts接口文件
 * @Author: Hedgehog96
 * @Date: 2022-05-24 14:43:03
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-05-24 14:49:09
 */
import { Component } from "vue";

// 拖曳组件实例
export interface ComponentConfig {
  id: number;
  title: string;
  name: string;
  showTitle: boolean;
  component: Component;
  attrs: object;
  evt: object;
  children?: ComponentConfig[];
}
