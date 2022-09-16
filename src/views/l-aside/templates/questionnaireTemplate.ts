/*
 * @Description: 调查问卷模板
 * @Author: Hedgehog96
 * @Date: 2022-09-16 15:29:53
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-09-16 17:23:42
 */
import { cloneDeep, random } from "lodash-es";
import componentsConfig from "@/config/components";
import { ComponentConfig, textContentElemProps } from "@/config/interfaces";

function renderTextContentElem(id: number) {
    const textContentConfig = (componentsConfig[1].components as ComponentConfig[]).filter((c: ComponentConfig) => c.label === 'Text')[0];
    const textContentElem = cloneDeep({
        ...textContentConfig,
        id,
        uniqueKey: textContentConfig.label + random(1, 999),
    });
    (textContentElem.props as textContentElemProps).textContent = "问卷调查";

    return textContentElem;
}


export default [renderTextContentElem];