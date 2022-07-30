<template>
  <div class="box">
    <PartTop :isShow="true" :audio="audio[0]" ref="aud" />
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
    <!-- <div v-if="isAnalysis">
      <listenAnsisly :partId="1"></listenAnsisly>
    </div> -->
  </div>
</template>
<script>
import PartTop from '@/components/PartTop.vue'
import ListenTest from '@/components/ListenTest.vue'
import listenAnsisly from '@/components/listenAnsisly.vue'
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
      isAnalysis: ''
    }
  },
  created() {
    sessionStorage.setItem('id', 1)
    this.isAnalysis = JSON.parse(sessionStorage.getItem('isAnalysis'))
    this.getListen()
    this.getRecord()
    this.time = setInterval(() => {
      this.info.timeUsing++
    }, 1000)
    if (this.isAnalysis) {
      clearInterval(this.time)
    }
    this.info.answer = JSON.parse(JSON.stringify(this.$store.state.part1))
  },
  destroyed() {
    clearInterval(this.time)
  },
  methods: {
    listeningToInteraction() {
      document.addEventListener('mouseenter', this.move)
      this.$refs.aud.play()
    },
    move() {
      document.removeEventListener('mouseenter', this.move)
    },
    // 获取解析,答案
    getAnswer() {
      this.$api.getAnswer(1).then((res) => {
        if (res.data.code == 200) {
          this.correct = res.data.data[res.data.data.length - 1].answer
          this.analysis = res.data.data[res.data.data.length - 1].analysis
          this.submitError = res.data.data[res.data.data.length - 1].submitAndError
        }
      })
    },

    // 选中
    decideOn(val, index) {
      this.info.answer[index] = val
      this.$store.commit('addAnswer1', this.info.answer)
      const arr = this.info.answer.filter((b) => b)
      if (arr.length == this.subjectList.length) {
        this.$emit('curr', true, 0)
      }
    },
    // 获取选项
    getListen() {
      this.$api.getListen(1).then((res) => {
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
    getRecord() {
      this.$api.getRecord(1).then((res) => {
        if (res.data.code == 200) {
          this.audio = res.data.data.urls
          this.listeningToInteraction()
        }
      })
    }
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit('setTime', { id: 1, timeUsing: this.info.timeUsing })
    next()
  },
  components: {
    PartTop,
    ListenTest,
    listenAnsisly
  }
}
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  position: relative;
}
.test {
  width: 100%;
  height: 86%;
  overflow-y: auto;
  padding-bottom: 0.75rem;
  box-sizing: border-box;

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
