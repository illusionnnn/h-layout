/*
 * @Description: ts接口文件
 * @Author: Hedgehog96
 * @Date: 2022-05-24 14:43:03
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-21 14:50:42
 */
import { Component } from 'vue'
import { InputProps as $_InputProps, RadioProps, CheckboxProps } from 'element-plus'

// 拖曳组件实例
export interface ComponentNode {
    id: number;
    path?: string;
    uniqueKey: string;
    title: string;
    label: string;
    icon: string;
    showTitle: boolean;
    component: Component;
    widget: string;
    props: object;
    event: object;
    cols?: GridColNode[];
    children?: ComponentNode[];
}

export interface GridColNode {
    id: number;
    path?: string;
    uniqueKey: string;
    title: string;
    label: string;
    span?: number;
    offset?: number;
    push?: number;
    pull?: number
    children: ComponentNode[];
}

export type LayoutComponentSize = 'large' | 'default' | 'small'
export interface LayoutConfig {
    size: LayoutComponentSize;
}

export interface ComponentsStore {
    selectedComponentId: number;
    snapshotIdx: number;
    snapshotcomponents: ComponentNode[][];
    components: ComponentNode[];
    layout: LayoutConfig;
    isPreview: boolean;
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

export interface FullScreenHTMLElement extends HTMLElement {
    mozRequestFullScreen?: () => void;
    msRequestFullscreen?: () => void;
    webkitRequestFullscreen?: () => void;
}

export interface DocumentCancelFullScreenHTMLElement extends Document {
    mozCancelFullscreen?: () => void;
    webkitCancelFullscreen?: () => void;
}