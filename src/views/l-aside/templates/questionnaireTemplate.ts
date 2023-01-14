/*
 * @Description: 调查问卷模板
 * @Author: Hedgehog96
 * @Date: 2022-09-16 15:29:53
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-09-17 20:50:22
 */
import { cloneDeep, random } from 'lodash-es'
import { ComponentConfig, TextContentElemProps, RadioElemProps, CheckboxElemProps } from '@/config/interfaces'
import componentsConfig from '@/config/components'

function $_getElem(elemTitle: string, id: number) {
    const config = (componentsConfig[1].components as ComponentConfig[]).filter((c: ComponentConfig) => c.title === elemTitle)[0]
    const elem = cloneDeep({
        ...config,
        id,
        uniqueKey: config.label + random(1, 999)
    })
    
    return elem
}

function renderTextContentElem1(id: number) {
    const textContentElem = $_getElem('静态文本', id);
    (textContentElem.props as TextContentElemProps).textContent = '问卷调查'

    return textContentElem
}

function renderDividerElem(id: number) {
    const dividerElem = $_getElem('分割线', id)

    return dividerElem
}

function renderTextContentElem2(id: number) {
    const textContentElem = $_getElem('静态文本', id);
    (textContentElem.props as TextContentElemProps).textContent = '1. 早餐吃什么'

    return textContentElem
}

function renderRadioElem1(id: number) {
    const radioElem = $_getElem('单选框', id);
    (radioElem.props as RadioElemProps).optionItems[0].text = '包子';
    (radioElem.props as RadioElemProps).optionItems[1].text = '面条'

    return radioElem
}

function renderTextContentElem3(id: number) {
    const textContentElem = $_getElem('静态文本', id);
    (textContentElem.props as TextContentElemProps).textContent = '2. 午餐吃什么'

    return textContentElem
}

function renderCheckboxElem1(id: number) {
    const checkboxElem = $_getElem('多选框', id);
    (checkboxElem.props as CheckboxElemProps).optionItems[0].text = '面条';
    (checkboxElem.props as CheckboxElemProps).optionItems[1].text = '包子'

    return checkboxElem
}

function renderTextContentElem4(id: number) {
    const textContentElem = $_getElem('静态文本', id);
    (textContentElem.props as TextContentElemProps).textContent = '3. 晚餐吃什么'

    return textContentElem
}

function renderRadioElem2(id: number) {
    const radioElem = $_getElem('单选框', id);
    (radioElem.props as RadioElemProps).optionItems[0].text = '薯条';
    (radioElem.props as RadioElemProps).optionItems[1].text = '番茄酱'

    return radioElem
}

function renderTextContentElem5(id: number) {
    const textContentElem = $_getElem('静态文本', id);
    (textContentElem.props as TextContentElemProps).textContent = '4. 夜宵吃什么'

    return textContentElem
}

function renderCheckboxElem2(id: number) {
    const checkboxElem = $_getElem('多选框', id);
    (checkboxElem.props as CheckboxElemProps).optionItems[0].text = '番茄酱';
    (checkboxElem.props as CheckboxElemProps).optionItems[1].text = '薯条'

    return checkboxElem
}

function renderTextContentElem6(id: number) {
    const textContentElem = $_getElem('静态文本', id);
    (textContentElem.props as TextContentElemProps).textContent = '5. 对h-layout有什么建议'

    return textContentElem
}

function renderTextareaElem(id: number) {
    const textareaElem = $_getElem('多行输入', id)

    return textareaElem
}

export default [
    renderTextContentElem1,
    renderDividerElem,
    renderTextContentElem2,
    renderRadioElem1,
    renderTextContentElem3,
    renderCheckboxElem1,
    renderTextContentElem4,
    renderRadioElem2,
    renderTextContentElem5,
    renderCheckboxElem2,
    renderTextContentElem6,
    renderTextareaElem
]