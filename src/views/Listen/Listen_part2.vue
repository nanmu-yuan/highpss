<template>
  <div class="box">
    <PartTop :isShow="true" :audio="audio[0]" ref="aud" />
    <div class="test scrollBar">
      <ListenTest @decideOn="decideOn" :subjectList="subjectList" :correct="correct" :analysis="analysis" :submitError="submitError" :answer="info.answer" />
    </div>
  </div>
</template>
<script>
import PartTop from '@/components/PartTop.vue'
import ListenTest from '@/components/ListenTest.vue'
export default {
  name: 'Listen_part2',
  data() {
    return {
      subjectList: [],
      correct: [],
      analysis: [],
      submitError: {},
      audio: [],
      info: {
        userId: '',
        examId: '',
        partId: '',
        answer: [],
        timeUsing: 0
      }
    }
  },
  created() {
    sessionStorage.setItem('id', 2)
    this.isAnalysis = JSON.parse(sessionStorage.getItem('isAnalysis'))
    if (this.isAnalysis) {
      clearInterval(this.time)
    }
    this.getListen()
    this.getRecord()
    this.time = setInterval(() => {
      this.info.timeUsing++
    }, 1000)
    this.info.answer = JSON.parse(JSON.stringify(this.$store.state.part2))
  },
  destroyed() {
    clearInterval(this.time)
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit('setTime', { id: 2, timeUsing: this.info.timeUsing })
    next()
  },
  methods: {
    listeningToInteraction() {
      document.addEventListener('mouseenter', this.move)
      this.$refs.aud.play()
    },
    move() {
      document.removeEventListener('mouseenter', this.move)
    },
    // 获取解析
    getAnswer() {
      this.$api.getAnswer(2).then((res) => {
        if (res.data.code == 200) {
          this.correct = res.data.data[res.data.data.length - 1].answer
          this.analysis = res.data.data[res.data.data.length - 1].analysis
          this.submitError = res.data.data[res.data.data.length - 1].submitAndError
        }
      })
    },
    decideOn(val, index) {
      this.info.answer[index] = val
      this.$store.commit('addAnswer2', this.info.answer)
      const arr = this.info.answer.filter((b) => b)
      if (arr.length == this.subjectList.length) {
        this.$emit('curr', true, 1)
      }
    },
    // 获取选项
    async getListen() {
      this.$api.getListen(2).then((res) => {
        if (res.data.code == 200) {
          this.info.examId = res.data.data.id
          this.info.partId = res.data.data.infos.partId
          this.subjectList = res.data.data.infos.questionsInfo
          let flag = this.info.answer.some((item) => {
            return item
          })
          if (!flag) {
            this.subjectList.forEach((item) => {
              this.info.answer.push('')
            })
          }
        }
        if (this.isAnalysis) {
          this.getAnswer()
        }
      })
    },
    // 获取录音
    async getRecord() {
      this.$api.getRecord(2).then((res) => {
        if (res.data.code == 200) {
          this.audio = res.data.data.urls
          this.listeningToInteraction()
        }
      })
    }
  },
  components: {
    PartTop,
    ListenTest
  }
}
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  position: relative;
}
.test {
  height: 86%;
  overflow-y: auto;
  padding-bottom: 0.75rem;
  box-sizing: border-box;
}
</style>
