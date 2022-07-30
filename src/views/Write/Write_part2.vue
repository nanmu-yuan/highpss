<template>
  <div class="box scrollBar">
    <PartTop>{{ subjectList[0].question }}</PartTop>
    <Editor @onChange="onChange" :total="total" :answer="info.answer[0]" />
    <Analysis @isView="isView()" :flag="flag" />
  </div>
</template>
<script>
import PartTop from '@/components/top.vue'
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
    sessionStorage.setItem('id', 9)
    this.info.answer = JSON.parse(JSON.stringify(this.$store.state.part10))
    let id = JSON.parse(sessionStorage.getItem('examId'))
    if (id == 2) {
      this.total = 300
    } else {
      this.total = 200
    }

    sessionStorage.setItem('id', 10)
    this.getWtire()
    this.time = setInterval(() => {
      this.info.timeUsing++
    }, 1000)
  },
  destroyed() {
    clearInterval(this.time)
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit('setTime', { id: 10, timeUsing: this.info.timeUsing })
    next()
  },
  methods: {
    onChange(val, num) {
      this.info.answer[0] = val
      this.$store.commit('addAnswer10', this.info.answer)
      if (num >= 1) {
        this.$emit('curr', true, 9)
      } else {
        this.$emit('curr', false, 9)
      }
      this.$emit('addInfo3', this.info, 1)
    },
    // 获取题目
    async getWtire() {
      this.$api.getWrite(2).then((res) => {
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
    PartTop,
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
  }
}
</style>