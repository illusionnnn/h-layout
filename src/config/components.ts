/*
 * @Description: 可拖动组件配置
 * @Author: Hedgehog96
 * @Date: 2022-05-09 17:30:41
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2023-02-21 18:04:38
 */
import {
    ElButton,
    ElInput,
    ElSwitch,
    ElRate,
    ElRadio,
    ElCheckbox,
    ElDivider,

    ElRow,
    ElCol
} from 'element-plus'

export default [
    {
        title: '容器',
        name: 'Container',
        components: [
            {
                id: 1,
                uniqueKey: 'Grid1',
                title: '栅格',
                label: 'Grid',
                icon: 'icon-h-shangebuju',
                showTitle: false,
                component: ElRow,
                widget: 'GridWidget',
                cols: [
                    {
                        id: 11,
                        uniqueKey: 'Col11',
                        title: '栅格列',
                        label: 'Col',
                        component: ElCol,
                        props: {
                            span: 12,
                            offset: 0,
                            push: 0,
                            pull: 0
                        },
                        event: {},
                        children: []
                    },
                    {
                        id: 12,
                        uniqueKey: 'Col12',
                        title: '栅格列',
                        label: 'Col',
                        component: ElCol,
                        props: {
                            span: 12,
                            offset: 0,
                            push: 0,
                            pull: 0
                        },
                        event: {},
                        children: []
                    }
                ],
                props: {
                    gutter: 12,
                    cols: ''
                },
                event: {}
            }
        ]
    },
    {
        title: '实体',
        name: 'components',
        components: [
            {
                id: 2,
                uniqueKey: 'Input2',
                title: '单行输入',
                label: 'Input',
                icon: 'icon-h-input',
                showTitle: false,
                component: ElInput,
                widget: 'InputWidget',
                props: {
                    defaultValue: '22',
                    size: '',
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
                    hidden: false
                },
                event: {
                    onFocus: null,
                    onInput: null,
                    onBlur: null,
                    onChange: null
                }
            },
            {
                id: 3,
                uniqueKey: 'Input3',
                title: '多行输入',
                label: 'Input',
                icon: 'icon-h-textarea',
                showTitle: false,
                component: ElInput,
                widget: 'InputWidget',
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
                    autosize: false,
                    hidden: false
                },
                event: {
                    onFocus: null,
                    onInput: null,
                    onBlur: null,
                    onChange: null
                }
            },
            {
                id: 4,
                uniqueKey: 'Button4',
                title: '按钮',
                label: 'Button',
                icon: 'icon-h-anniu',
                showTitle: true,
                component: ElButton,
                widget: 'ButtonWidget',
                props: {
                    size: '',
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
                    hidden: false
                },
                event: {
                    onClick: null
                }
            },
            {
                id: 5,
                uniqueKey: 'Switch5',
                title: '开关',
                label: 'Switch',
                icon: 'icon-h-huadonganniux',
                showTitle: false,
                component: ElSwitch,
                widget: 'SwitchWidget',
                props: {
                    disabled: false,
                    size: '',
                    inlinePrompt: false,
                    width: 50,
                    activeIcon: '',
                    inActiveIcon: '',
                    activeText: '',
                    inActiveText: '',
                    hidden: false
                },
                event: {
                    onChange: null
                }
            },
            {
                id: 6,
                uniqueKey: 'Rate6',
                title: '评分',
                label: 'Rate',
                icon: 'icon-h-pingfen1',
                showTitle: false,
                component: ElRate,
                widget: 'RateWidget',
                props: {
                    max: 5,
                    $_max: 10,
                    size: '',
                    disabled: false,
                    allowHalf: false,
                    lowThreshold: 2,
                    highThreshold: 4,
                    showText: false,
                    showScore: false,
                    voidIcon: 'Star',
                    disabledVoidIcon: 'StarFilled',
                    hidden: false
                },
                event: {
                    onChange: null
                }
            },
            {
                id: 7,
                uniqueKey: 'Text7',
                title: '静态文本',
                label: 'Text',
                icon: 'icon-h-wenzi',
                showTitle: false,
                component: ElRate,
                widget: 'TextWidget',
                props: {
                    textContent: '文本',
                    hidden: false
                },
                event: {}
            },
            {
                id: 8,
                uniqueKey: 'Radio8',
                title: '单选框',
                label: 'Radio',
                icon: 'icon-h-radio',
                showTitle: false,
                component: ElRadio,
                widget: 'RadioWidget',
                props: {
                    size: '',
                    disabled: false,
                    border: false,
                    buttonStyle: false,
                    hidden: false,
                    optionItems: [
                        { text: 'radio1', label: 'radio1' },
                        { text: 'radio2', label: 'radio2' }
                    ]
                },
                event: {
                    onChange: null
                }
            },
            {
                id: 9,
                uniqueKey: 'Checkbox9',
                title: '多选框',
                label: 'Checkbox',
                icon: 'icon-h-checkbox-checked',
                showTitle: false,
                component: ElCheckbox,
                widget: 'CheckboxWidget',
                props: {
                    size: '',
                    disabled: false,
                    border: false,
                    buttonStyle: false,
                    hidden: false,
                    max: 10,
                    optionItems: [
                        { text: 'checkbox1', label: 'checkbox1' },
                        { text: 'checkbox2', label: 'checkbox2' }
                    ]
                },
                event: {
                    onChange: null
                }
            },
            {
                id: 10,
                uniqueKey: 'Divider10',
                title: '分割线',
                label: 'Divider',
                icon: 'icon-h-hr',
                showTitle: false,
                component: ElDivider,
                widget: 'DividerWidget',
                props: {
                    showText: false,
                    textContent: 'divider',
                    contentPosition: 'center',
                    borderStyle: 'solid',
                    hidden: false
                },
                event: {}
            }
        ]
    }
]

export const inlineFlexComponentLables = [
    'Button',
    'Switch',
    'Rate',
    'Radio',
    'Checkbox'
]