<template>
  <div class="box">
    <top :isShow="true" :audio="audio[0]" ref="aud" />
    <!-- 试题 -->
    <div class="test scrollBar">
      <ListenTest
        @decideOn="decideOn"
        :subjectList="subjectList"
        :correct="correct"
        :answer="info.answer"
        :analysis="analysis"
        :submitError="submitError"
      />
    </div>
  </div>
</template>
<style lang="less" scoped>
.box {
  width: 100%;
  position: relative;
}
.test {
  width: 100%;
  height: 7.45rem;
  overflow-y: auto;
  .text_title {
    width: 100%;
    height: 0.9rem;
    border: 0.0125rem solid #000;
    border-radius: 0.125rem;
    div:first-child {
      width: 9%;
      height: 100%;
      font-size: 0.625rem;
      line-height: 0.9rem;
      text-align: center;
      font-weight: 700;
      color: #5d5d5d;
      border-right: 0.0125rem solid #000;
    }
    div:last-child {
      width: 91%;
      line-height: 0.9rem;
      padding: 0 0.25rem;
      color: #484848;
      font-size: 0.35rem;
    }
  }
  .test_item {
    width: 90%;
    height: 0.9rem;
    margin: 0.35rem auto;
    border: 0.0125rem solid #000;
    border-radius: 0.125rem;
    cursor: pointer;
    div:first-child {
      width: 9%;
      height: 100%;
      font-size: 0.625rem;
      line-height: 0.9rem;
      text-align: center;
      font-weight: 700;
      color: #5d5d5d;
      border-right: 0.0125rem solid #000;
    }
    div:last-child {
      width: 91%;
      line-height: 0.9rem;
      padding: 0 0.25rem;
      color: #484848;
      font-size: 0.35rem;
    }
  }
}
</style>
<script>
import top from '@/components/aSeparateTest/top.vue'
import ListenTest from '@/components/aSeparateTest/listenList.vue'
export default {
  name: 'Listen_part1',
  data() {
    return {
      id: '',
      subjectList: [],
      correct: [],
      analysis: [],
      submitError: {},
      audio: [],
      time: '',
      info: {
        userId: '',
        examId: '',
        partId: '',
        answer: [],
        timeUsing: 0
      },
      isAnalysis: '',
      partId: 1,
      partName: ''
    }
  },
  created() {
    this.isAnalysis = JSON.parse(sessionStorage.getItem('isAnalysis'))
    this.partId = this.$route.query.partId
    this.getListen()
    this.getRecord()
    this.time = setInterval(() => {
      this.info.timeUsing++
    }, 1000)
    if (this.isAnalysis) {
      clearInterval(this.time)
    }
  },
  destroyed() {
    clearInterval(this.time)
  },
  methods: {
    submitAnswer() {
      this.$emit('submitAnswer', this.info)
    },
    listeningToInteraction() {
      document.addEventListener('mouseenter', this.move)
      this.$refs.aud.play()
    },
    move() {
      document.removeEventListener('mouseenter', this.move)
    },
    getAnswer1() {
      this.$api.getlistensubmitInfo(this.partId).then((res) => {
        if (res.data.code == 200) {
          console.log(res.data)
          this.submitError = { answerSubmit: res.data.data.answerSubmit, errors: res.data.data.errors }
        }
      })
    },

    // 选中
    decideOn(val, index) {
      this.info.answer[index] = val
    },
    // 获取选项
    getListen() {
      this.$api.getListen(this.partId).then((res) => {
        if (res.data.code == 200) {
          console.log(res.data)
          this.partName = res.data.data.infos.partName
          this.info.examId = res.data.data.id
          this.info.partId = res.data.data.infos.partId
          this.subjectList = res.data.data.infos.questionsInfo
          this.subjectList.forEach((item) => {
            this.info.answer.push('')
            if (this.isAnalysis) {
              this.correct.push(item.answer)
              this.analysis.push(item.analysis)
            }
          })
        }
        if (this.isAnalysis) {
          this.getAnswer1()
        }
      })
    },
    // 获取录音
    getRecord() {
      this.$api.getRecord(this.partId).then((res) => {
        if (res.data.code == 200) {
          this.audio = res.data.data.urls
          this.listeningToInteraction()
        }
      })
    }
  },
  components: {
    top,
    ListenTest
  }
}
</script>