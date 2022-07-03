/*
 * @Description: ts接口文件
 * @Author: Hedgehog96
 * @Date: 2022-05-24 14:43:03
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-07-03 17:34:04
 */
import { Component } from "vue";

// 拖曳组件实例
export interface ComponentConfig {
    id: number;
    pid: number;
    uniqueKey: string;
    title: string;
    name: string;
    showTitle: boolean;
    component: Component;
    attrs: object;
    evt: object;
    children?: ComponentConfig[];
}

export interface ComponentsStore {
    snapshotIdx: number,
    snapshotcomponents: ComponentConfig[][]
    components: ComponentConfig[]
}

type $_MESSAGE_TYPE = "success" | "info" | "warning" | "error";
// 消息提示框
export interface MessageBox {
    title: string;
    content?: string;
    type: $_MESSAGE_TYPE;
    confirmButtonText: string;
    cancelButtonText: string;
    confirmMessageType: $_MESSAGE_TYPE;
    confirmMessageText: string;
}
