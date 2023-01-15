/*
 * @Description: ts接口文件
 * @Author: Hedgehog96
 * @Date: 2022-05-24 14:43:03
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-01-15 20:08:37
 */
import { Component } from 'vue'
import { InputProps as $_InputProps, RadioProps, CheckboxProps } from 'element-plus'

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
    snapshotIdx: number;
    snapshotcomponents: ComponentConfig[][];
    components: ComponentConfig[];
    layout: object;
}

export interface InputProps extends $_InputProps {
    readonly minlength: number;
    readonly maxlength: number;
}

export interface TextContentElemProps {
    textContent: string;
    hidden: boolean;
}

interface OptionItem {
    text: string;
    label: string;
}
export interface RadioElemProps extends RadioProps {
    size: 'default' | 'small' | 'large';
    disabled: boolean;
    border: boolean;
    buttonStyle: boolean;
    hidden: boolean;
    optionItems: OptionItem[]
}

export interface CheckboxElemProps extends CheckboxProps {
    max: number;
    size: 'default' | 'small' | 'large';
    disabled: boolean;
    border: boolean;
    buttonStyle: boolean;
    hidden: boolean;
    optionItems: OptionItem[];
}

export type Theme = 'dark' | 'light'