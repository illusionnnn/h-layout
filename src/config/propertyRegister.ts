/*
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-07-14 15:19:28
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-07-21 18:25:17
 */
import { Component } from "vue";

// 格式说明：属性名称对应属性编辑器的组件名称
const COMMON_PROPERTIES = {
    //字段
    "uniqueKey"         :            "UniquekeyEditor",
    "label"             :            "LabelEditor",
    // "labelAlign"        :            "labelAlign-editor",
    // "type"              :            "type-editor",
    // "defaultValue"      :            "defaultValue-editor",
    // "placeholder"       :            "placeholder-editor",
    // "startPlaceholder"  :            "startPlaceholder-editor",
    // "endPlaceholder"    :            "endPlaceholder-editor",
    // "columnWidth"       :            "columnWidth-editor",
    // "autoFullWidth"     :            "autoFullWidth-editor",
    // "size"              :            "size-editor",
    // "showStops"         :            "showStops-editor",
    // "displayStyle"      :            "displayStyle-editor",
    // "buttonStyle"       :            "buttonStyle-editor",
    // "border"            :            "border-editor",
    // "labelWidth"        :            "labelWidth-editor",
    // "labelHidden"       :            "labelHidden-editor",
    // "rows"              :            "rows-editor",
    // "required"          :            "required-editor",
    // "requiredHint"      :            "requiredHint-editor",
    // "validation"        :            "validation-editor",
    // "validationHint"    :            "validationHint-editor",
    // "readonly"          :            "readonly-editor",
    // "disabled"          :            "disabled-editor",
    // "hidden"            :            "hidden-editor",
    // "clearable"         :            "clearable-editor",
    // "editable"          :            "editable-editor",
    // "showPassword"      :            "showPassword-editor",
    // "textContent"       :            "textContent-editor",
    // "htmlContent"       :            "htmlContent-editor",
    // "format"            :            "format-editor",
    // "valueFormat"       :            "valueFormat-editor",
    // "filterable"        :            "filterable-editor",
    // "allowCreate"       :            "allowCreate-editor",
    // "remote"            :            "remote-editor",
    // "automaticDropdown" :            "automaticDropdown-editor",
    // "multiple"          :            "multiple-editor",
    // "multipleLimit"     :            "multipleLimit-editor",
    // "contentPosition"   :            "contentPosition-editor",
    // "optionItems"       :            "optionItems-editor",
    // "uploadURL"         :            "uploadURL-editor",
    // "uploadTip"         :            "uploadTip-editor",
    // "withCredentials"   :            "withCredentials-editor",
    // "multipleSelect"    :            "multipleSelect-editor",
    // "limit"             :            "limit-editor",
    // "fileMaxSize"       :            "fileMaxSize-editor",
    // "fileTypes"         :            "fileTypes-editor",
    // "contentHeight"     :            "contentHeight-editor",
    // "customClass"       :            "customClass-editor",
}

/**
 * 判断属性是否已注册
 * @param uniquePropName 属性名称（保证名称唯一，不跟其他组件属性冲突）
 */
export function propertyRegistered(uniquePropName: string) {
    return !!COMMON_PROPERTIES[uniquePropName];
}

/**
 * 注册组件常见属性编辑器
 */
export function registerCPEditor(app: any, propName: string, editorComponent: Component) {
    app.component(propName, editorComponent);
}

export default {
    COMMON_PROPERTIES
}