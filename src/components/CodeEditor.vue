<!--
 * @Description: 
 * @Author: Hedgehog96
 * @Date: 2022-08-04 14:31:25
 * @LastEditors: Hedgehog96
 * @LastEditTime: 2022-08-04 15:58:00
-->
<template>
    <div class="code-container">
        <div
            ref="aceEditorRef"
            class="code-editor"
        />
    </div>
</template>

<script setup lang="ts">
import  { defineProps, defineEmits, ref, onMounted } from 'vue';
import ace from 'ace-builds';
import 'ace-builds/src-min-noconflict/theme-monokai';
import 'ace-builds/src-min-noconflict/mode-javascript';
import 'ace-builds/src-min-noconflict/ext-language_tools';

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
});

const emits = defineEmits(['update']);

ace.config.set('basePath', 'https://ks3-cn-beijing.ksyun.com/vform2021/ace-mini');

const aceEditorRef = ref('');

onMounted(() => {
    const aceEditor = ace.edit(aceEditorRef.value, {
        maxLines: 20, // 最大行数，超过会自动出现滚动条
        minLines: 5, // 最小行数，还未到最大行数时，编辑器会自动伸缩大小
        fontSize: 12, // 编辑器内字体大小
        theme: 'ace/theme/monokai', // 默认设置的主题
        mode: 'ace/mode/javascript', // 默认设置的语言模式
        tabSize: 4, // 制表符设置为2个空格大小
        highlightActiveLine: true,
        value: props.modelValue
    });

    aceEditor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,  // 设置代码片段提示
        enableLiveAutocompletion: true,  // 设置自动提示
    });

    aceEditor.getSession().setUseWorker(false);

    aceEditor.getSession().on('change', () => {
        emits('update', aceEditor.getValue());
    });
});
</script>

<style lang="scss" scoped>
    .code-editor {
        min-height: 300px;
    }
</style>