/*
 * @Description: 可拖动组件配置
 * @Author: Hedgehog96
 * @Date: 2022-05-09 17:30:41
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-09-23 16:38:36
 */
import { ElButton, ElInput, ElSwitch, ElRate, ElRadio, ElCheckbox, ElDivider } from 'element-plus'
// import BaseContainer from "@/components/BaseContainer.vue";

export default [
    {
        pid: 0,
        title: '容器',
        name: 'Wrapper',
        components: [
            // {
            //     id: 1,
            //     pid: -1,
            //     uniqueKey: "Container1",
            //     title: "布局",
            //     label: "Container",
            //     icon: "icon-h-shangebuju",
            //     showTitle: false,
            //     component: BaseContainer,
            //     props: {},
            //     event: {},
            //     children: [],
            // },
        ]
    },
    {
        pid: 1,
        title: '实体',
        name: 'components',
        components: [
            {
                id: 2,
                pid: -1,
                uniqueKey: 'Input2',
                title: '单行输入',
                label: 'Input',
                icon: 'icon-h-input',
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
                    hidden: false
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
                uniqueKey: 'Input3',
                title: '多行输入',
                label: 'Input',
                icon: 'icon-h-textarea',
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
                    autosize: false,
                    hidden: false
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
                uniqueKey: 'Button4',
                title: '按钮',
                label: 'Button',
                icon: 'icon-h-anniu',
                showTitle: true,
                component: ElButton,
                props: {
                    size: 'default',
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
                    onClick: ''
                }
            },
            {
                id: 5,
                pid: -1,
                uniqueKey: 'Switch5',
                title: '开关',
                label: 'Switch',
                icon: 'icon-h-huadonganniux',
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
                    hidden: false
                },
                event: {
                    onChange: ''
                }
            },
            {
                id: 6,
                pid: -1,
                uniqueKey: 'Rate6',
                title: '评分',
                label: 'Rate',
                icon: 'icon-h-pingfen1',
                showTitle: false,
                component: ElRate,
                props: {
                    max: 5,
                    $_max: 10,
                    size: 'default',
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
                    onChange: ''
                }
            },
            {
                id: 7,
                pid: -1,
                uniqueKey: 'Text7',
                title: '静态文本',
                label: 'Text',
                icon: 'icon-h-wenzi',
                showTitle: false,
                component: ElRate,
                props: {
                    textContent: '文本',
                    hidden: false
                },
                event: {}
            },
            {
                id: 8,
                pid: -1,
                uniqueKey: 'Radio8',
                title: '单选框',
                label: 'Radio',
                icon: 'icon-h-radio',
                showTitle: false,
                component: ElRadio,
                props: {
                    size: 'default',
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
                    onChange: ''
                }
            },
            {
                id: 9,
                pid: -1,
                uniqueKey: 'Checkbox9',
                title: '多选框',
                label: 'Checkbox',
                icon: 'icon-h-checkbox-checked',
                showTitle: false,
                component: ElCheckbox,
                props: {
                    size: 'default',
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
                    onChange: ''
                }
            },
            {
                id: 10,
                pid: -1,
                uniqueKey: 'Divider10',
                title: '分割线',
                label: 'Divider',
                icon: 'icon-h-hr',
                showTitle: false,
                component: ElDivider,
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
