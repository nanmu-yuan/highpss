<template>
  <div style="border: 1px solid #ccc;margin-top: .625rem;">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editor"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 4.75rem; overflow-y: hidden;"
      v-model="html"
      :defaultConfig="editorConfig"
      :mode="mode"
      lang="en"
      @onCreated="onCreated"
      @onChange="onChange"
    />
  </div>
</template>
<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { i18nChangeLanguage } from '@wangeditor/editor'
i18nChangeLanguage('en')
export default {
  components: {
    Editor,
    Toolbar
  },
  props: {
    value: {
      type: [Number, Object, Array, String],
      default: ''
    },
    total: Number,
    answer: String
  },
  data() {
    return {
      editor: null,
      html: this.answer ? this.answer : '',
      toolbarConfig: {
        lang: 'en'
      },
      editorConfig: {
        placeholder: 'Please enter the content'
        // maxLength: 5000
      },
      mode: 'default',
      lang: 'en'
    }
  },
  mounted() {
    this.initMounted()
    console.log(this.answer)
  },
  beforeDestroy() {
    const editor = this.editor
    if (editor == null) return
    editor.destroy() // 组件销毁时，及时销毁编辑器
  },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
    },
    onChange(editor) {
      // console.log(editor.getText())
      let value = editor.getText()
      value = value.replace(/[\u4e00-\u9fa5]+/g, ' ')
      // 将换行符，前后空格不计算为单词数
      value = value.replace(/\n|\r|^\s+|\s+$/gi, '')
      // 多个空格替换成一个空格
      value = value.replace(/\s+/gi, ' ')
      // 更新计数
      var length = 0
      var match = value.match(/\s/g)
      if (match) {
        length = match.length + 1
      } else if (value) {
        length = 1
      }
      let el = document.querySelector('.w-e-max-length-info')
      if (length > this.total) {
        this.$message({
          type: warning,
          message: '单词个数已超出'
        })
      }
      el.innerHTML = length + '/' + this.total
      this.$emit('onChange', editor.getHtml(), length)
    },
    initMounted() {
      setTimeout(() => {
        this.isShow = true
      }, 100)
    },
    // 统计单词个数
    statisticalWordNumber() {
      let el = document.getElementById('dcs')
      if (el && input) {
        // 获取输入内容长度并更新到界面
        var value = input.value
        // 替换中文字符为空格
        value = value.replace(/[\u4e00-\u9fa5]+/g, ' ')
        // 将换行符，前后空格不计算为单词数
        value = value.replace(/\n|\r|^\s+|\s+$/gi, '')
        // 多个空格替换成一个空格
        value = value.replace(/\s+/gi, ' ')
        // 更新计数
        var length = 0
        var match = value.match(/\s/g)
        if (match) {
          length = match.length + 1
        } else if (value) {
          length = 1
        }
        el.innerText = length
      }
    }
  }
}
</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>
<style>
#editor-container {
  border: 1px solid #000;
  margin-top: 0.625rem;
}
</style>