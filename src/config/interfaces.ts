/*
 * @Description: ts接口文件
 * @Author: Hedgehog96
 * @Date: 2022-05-24 14:43:03
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-10 11:52:15
 */
import { Component } from "vue";
import { InputProps as $_InputProps } from "element-plus";

// 拖曳组件实例
export interface ComponentConfig {
    id: number;
    pid: number;
    uniqueKey: string;
    title: string;
    label: string;
    icon: string;
    showTitle: boolean;
    component: Component;
    props: object;
    event: object;
    children?: ComponentConfig[];
}

export interface ComponentsStore {
    snapshotIdx: number,
    snapshotcomponents: ComponentConfig[][]
    components: ComponentConfig[]
}

export interface InputProps extends $_InputProps {
    readonly minlength: number;
    readonly maxlength: number;
}