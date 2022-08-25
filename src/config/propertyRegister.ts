/*
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-07-14 15:19:28
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-25 21:59:44
 */
import { Component } from "vue";

// 格式说明：属性名称对应属性编辑器的组件名称
const COMMON_PROPERTIES = {
    //字段
    "uniqueKey"         :            "UniquekeyEditor",
    "label"             :            "LabelEditor",
    // "labelAlign"        :            "labelAlign-editor",
    "type"              :            "TypeEditor",
    // "defaultValue"      :            "DefaultValueEditor",
    "placeholder"       :            "PlaceholderEditor",
    // "startPlaceholder"  :            "startPlaceholder-editor",
    // "endPlaceholder"    :            "endPlaceholder-editor",
    // "columnWidth"       :            "columnWidth-editor",
    // "autoFullWidth"     :            "autoFullWidth-editor",
    "size"              :            "SizeEditor",
    // "showStops"         :            "showStops-editor",
    // "displayStyle"      :            "displayStyle-editor",
    "buttonStyle"       :            "ButtonStyleEditor",
    "border"            :            "BorderEditor",
    // "labelWidth"        :            "labelWidth-editor",
    // "labelHidden"       :            "labelHidden-editor",
    "rows"              :            "RowsEditor",
    // "required"          :            "required-editor",
    // "requiredHint"      :            "requiredHint-editor",
    // "validation"        :            "validation-editor",
    // "validationHint"    :            "validationHint-editor",
    "readonly"          :            "ReadonlyEditor",
    "disabled"          :            "DisabledEditor",
    "hidden"            :            "HiddenEditor",
    "clearable"         :            "ClearableEditor",
    "inlinePrompt"      :            "InlinePromptEditor",
    // "editable"          :            "editable-editor",
    // "showPassword"      :            "showPassword-editor",
    "textContent"       :            "TextContentEditor",
    // "htmlContent"       :            "htmlContent-editor",
    // "format"            :            "format-editor",
    // "valueFormat"       :            "valueFormat-editor",
    // "filterable"        :            "filterable-editor",
    // "allowCreate"       :            "allowCreate-editor",
    // "remote"            :            "remote-editor",
    // "automaticDropdown" :            "automaticDropdown-editor",
    // "multiple"          :            "multiple-editor",
    // "multipleLimit"     :            "multipleLimit-editor",
    "contentPosition"   :            "ContentPositionEditor",
    "borderStyle"       :            "BorderStyleEditor",
    "optionItems"       :            "OptionItemsEditor",
    // "uploadURL"         :            "uploadURL-editor",
    // "uploadTip"         :            "uploadTip-editor",
    // "withCredentials"   :            "withCredentials-editor",
    // "multipleSelect"    :            "multipleSelect-editor",
    // "limit"             :            "limit-editor",
    // "fileMaxSize"       :            "fileMaxSize-editor",
    // "fileTypes"         :            "fileTypes-editor",
    // "contentHeight"     :            "contentHeight-editor",
    // "customClass"       :            "customClass-editor",
};

const ADVANCED_PROPERTIES = {
    // 'min'               :            'MinEditor',
    'max'               :            'MaxEditor',
    // 'precision'         :            'precision-editor',
    // 'step'              :            'step-editor',
    // 'controlsPosition'  :            'controlsPosition-editor',
    "width"             :            'WidthEditor',
    'minLength'         :            'MinLengthEditor',
    'maxLength'         :            'MaxLengthEditor',
    'showWordLimit'     :            'ShowWordLimitEditor',
    'prefixIcon'        :            'PrefixIconEditor',
    'suffixIcon'        :            'SuffixIconEditor',
    'activeIcon'        :            'ActiveIcon',
    'inActiveIcon'      :            'InActiveIconEditor',
    // 'switchWidth'       :            'switchWidth-editor',
    'activeText'        :            'ActiveTextEditor',
    'inActiveText'      :            'InActiveTextEditor',
    // 'activeColor'       :            'activeColor-editor',
    // 'inactiveColor'     :            'inactiveColor-editor',
    'lowThreshold'      :            'LowThresholdEditor',
    'highThreshold'     :            'HighThresholdEditor',
    'allowHalf'         :            'AllowHalfEditor',
    'showText'          :            'ShowTextEditor',
    'showScore'         :            'ShowScoreEditor',
    'voidIcon'          :            'VoidIconEditor',
    'disabledVoidIcon'  :            'DisabledVoidIconEditor',
    // 'range'             :            'range-editor',
    // 'vertical'          :            'vertical-editor',
    'plain'             :            'PlainEditor',
    'text'              :            'TextEditor',
    'bg'                :            'BgEditor',
    'link'              :            'LinkEditor',
    'round'             :            'RoundEditor',
    'circle'            :            'CircleEditor',
    // 'icon'              :            'icon-editor',
    // 'labelIconClass'    :            'labelIconClass-editor',
    // 'labelIconPosition' :            'labelIconPosition-editor',
    // 'labelTooltip'      :            'labelTooltip-editor',
    'appendButton'      :            'AppendButtonEditor',
    'append'            :            'AppendEditor',
    'prependButton'     :            'PrependButtonEditor',
    'prepend'           :            'PrependEdtior',
    'buttonIcon'        :            'IconEditor',
};

const EVENT_PROPERTIES = {
    'onClick'           :            'OnClickEditor',
    'onInput'           :            'OnInputEditor',
    'onChange'          :            'OnChangeEditor',
    'onFocus'           :            'OnFocusEditor',
    'onBlur'            :            'OnBlurEditor',
    // 'onRemoteQuery'     :            'onRemoteQuery-editor',
    // 'onBeforeUpload'    :            'onBeforeUpload-editor',
    // 'onUploadSuccess'   :            'onUploadSuccess-editor',
    // 'onUploadError'     :            'onUploadError-editor',
    // 'onFileRemove'      :            'onFileRemove-editor',
};

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
    COMMON_PROPERTIES,
    ADVANCED_PROPERTIES,
    EVENT_PROPERTIES
};