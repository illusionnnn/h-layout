/*
 * @Description: 可拖动组件配置
 * @Author: Hedgehog96
 * @Date: 2022-05-09 17:30:41
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-18 14:54:57
 */
import { ElButton, ElInput, ElSwitch, ElRate } from "element-plus";
import BaseContainer from "@/components/BaseContainer.vue";

export default [
    {
        pid: 0,
        title: "容器",
        name: "Wrapper",
        components: [
            {
                id: 1,
                pid: -1,
                uniqueKey: "Container1",
                title: "布局",
                label: "Container",
                icon: "icon-h-shangebuju",
                showTitle: false,
                component: BaseContainer,
                props: {},
                event: {},
                children: [],
            },
        ],
    },
    {
        pid: 1,
        title: "实体",
        name: "components",
        components: [
            {
                id: 2,
                pid: -1,
                uniqueKey: "Input2",
                title: "单行输入",
                label: "Input",
                icon: "icon-h-input",
                showTitle: false,
                component: ElInput,
                props: {
                    defaultValue: '22',
                    size: 'default',
                    disabled: false,
                    readonly: false,
                    clearable: false,
                    placeholder: '',
                    type: 'text',
                    minLength: 0,
                    maxLength: 1,
                    showWordLimit: false,
                    prefixIcon: '',
                    suffixIcon: '',
                    prependButton: false,
                    prepend: '',
                    appendButton: false,
                    append: '',
                },
                event: {
                    onFocus: '',
                    onInput: '',
                    onBlur: '',
                    onChange: ''
                }
            },
            {
                id: 3,
                pid: -1,
                uniqueKey: "Input3",
                title: "多行输入",
                label: "Input",
                icon: "icon-h-textarea",
                showTitle: false,
                component: ElInput,
                props: {
                    defaultValue: '22',
                    disabled: false,
                    readonly: false,
                    placeholder: '',
                    type: 'textarea',
                    minLength: 0,
                    maxLength: 1,
                    showWordLimit: false,
                    rows: 2,
                    autosize: false
                },
                event: {
                    onFocus: '',
                    onInput: '',
                    onBlur: '',
                    onChange: ''
                }
            },
            {
                id: 4,
                pid: -1,
                uniqueKey: "Button4",
                title: "按钮",
                label: "Button",
                icon: "icon-h-anniu",
                showTitle: true,
                component: ElButton,
                props: {
                    size: "default",
                    type: 'default',
                    label: 'button',
                    plain: false,
                    text: false,
                    bg: false,
                    link: false,
                    round: false,
                    circle: false,
                    disabled: false,
                    buttonIcon: '',
                    
                },
                event: {
                    onClick: ''
                },
            },
            {
                id: 5,
                pid: -1,
                uniqueKey: "Switch5",
                title: "开关",
                label: "Switch",
                icon: "icon-h-huadonganniux",
                showTitle: false,
                component: ElSwitch,
                props: {
                    disabled: false,
                    size: 'default',
                    inlinePrompt: false,
                    width: 50,
                    activeIcon: '',
                    inActiveIcon: '',
                    activeText: '',
                    inActiveText: '',
                },
                event: {
                    onChange: ''
                },
            },
            {
                id: 6,
                pid: -1,
                uniqueKey: "Rate6",
                title: "评分",
                label: "Rate",
                icon: "icon-h-pingfen1",
                showTitle: false,
                component: ElRate,
                props: { name: "rate", label: "rate" },
                event: {},
            },
        ],
    },
];
