<template>
  <div class="box scrollBar">
    <top>{{ subjectList[0].question }}</top>
    <div class="tit" v-html="subjectList[0].materialContent"></div>
    <Editor @onChange="onChange" :total="total" :answer="info.answer[0]" />
    <Analysis @isView="isView()" :flag="flag" />
  </div>
</template>
<script>
import top from '@/components/aSeparateTest/top.vue'
import Editor from '@/components/Editor.vue'
import Analysis from '@/components/Analysis.vue'
export default {
  data() {
    return {
      flag: false,
      subjectList: [{}],
      info: {
        userId: '',
        examId: '',
        partId: '',
        answer: [],
        timeUsing: 0
      },
      total: 0
    }
  },
  created() {
    let id = JSON.parse(sessionStorage.getItem('examId'))
    if (id == 2) {
      this.total = 200
    } else {
      this.total = 150
    }

    this.getWtire()
    this.time = setInterval(() => {
      this.info.timeUsing++
    }, 1000)
  },
  destroyed() {
    clearInterval(this.time)
  },
  methods: {
    submitAnswer() {
      this.$emit('submitAnswer', this.info)
    },
    onChange(val) {
      this.info.answer[0] = val
    },
    // 获取题目
    async getWtire() {
      this.$api.getWrite(1).then((res) => {
        if (res.data.code == 200) {
          this.info.examId = res.data.data.questionsInfo[0].examId
          this.info.partId = res.data.data.questionsInfo[0].partId
          this.subjectList = res.data.data.questionsInfo
        }
      })
    },
    isView() {
      this.flag = !this.flag
    }
  },
  components: {
    top,
    Editor,
    Analysis
  }
}
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  position: relative;
  height: 9.475rem;
  overflow: auto;
  /deep/ .jiexi {
    margin: 0.25rem auto !important;
    width: 100% !important;
    .analysis {
      width: 96%;
    }
  }
}
.tit {
  width: 100%;
  font-size: 0.25rem;
  font-weight: 700;
  color: #5d5d5d;
  background-color: #f5f5f5;
  padding: 0.125rem 0.25rem;
  box-sizing: border-box;
}
</style>