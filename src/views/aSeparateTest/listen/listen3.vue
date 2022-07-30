<template>
  <div class="box">
    <top :isShow="true" :audio="audio[0]" ref="aud" />
    <div class="test scrollBar">
      <div class="con">
        <div class="title">Pasta</div>
        <ul>
          <li class="clearfix" v-for="(item, index) in subjectList" :key="item.id">
            <p class="fl" style="min-width: 5.5rem">{{ index + 1 }}.{{ item.question }}</p>
            <input
              class="fl"
              type="text"
              v-model="info.answer[index]"
              :style="{ backgroundColor: errors[index] == index ? '#ff6969' : '' }"
            />
            <Analysis @isView="isView(index)" :flag="item.flag" :analysis="analysis[index]" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.box {
  width: 100%;
  position: relative;
}
.test {
  height: 7.3125rem;
  overflow-y: auto;
}
.con {
  width: 12.5rem;
  height: auto;
  text-align: center;
  margin: 0 auto;
  padding: 1.025rem 1.5rem;
  box-sizing: border-box;
  background: url('@/assets/image/listen_part3.png') no-repeat top center;
  background-size: 90% 100%;
  .title {
    text-align: left;
    font-size: 0.4375rem;
    color: #484848;
  }
  li {
    margin-top: 0.125rem;
    line-height: 0.5rem;
    /deep/ .analysis {
      width: 90%;
      height: 1.25rem;
      margin-top: 0.125rem;
      background-color: #fff;
      text-align: left;
    }
    /deep/ .jiexi {
      width: 98%;
      margin: 0;
      span {
        margin: 0;
        font-size: 0.175rem;
        width: 0.875rem;
      }
    }
  }
  p {
    font-size: 0.25rem;
    width: 60%;
    text-align: left;
  }
  input {
    width: 25%;
    height: 0.35rem;
    line-height: 0.35rem;
    border: none;
    border-radius: 0.05rem;
    text-align: center;
    padding: 0 0.125rem;
  }
  span {
    color: #dc0000;
  }
}
</style>
<script>
import top from '@/components/aSeparateTest/top.vue'
import Analysis from '@/components/Analysis.vue'
export default {
  name: 'Listen_part3',
  data() {
    return {
      subjectList: [],
      audio: [],
      analysis: [],
      info: {
        userId: '',
        examId: '',
        partId: '',
        answer: [],
        timeUsing: 0
      },
      answer: {},
      errors: [],
      partId: 3
    }
  },
  watch: {
    'info.answer': function (newV, oddV) {
      let arr = Object.keys(newV)
      if (arr.length == this.subjectList.length) {
        this.$emit('curr', true, 2)
      }
    }
  },
  created() {
    this.partId = this.$route.query.partId
    this.time = setInterval(() => {
      this.info.timeUsing++
    }, 1000)
    this.isAnalysis = JSON.parse(sessionStorage.getItem('isAnalysis'))
    if (this.isAnalysis) {
      this.getAnswer1()
      clearInterval(this.time)
    }
    this.getListen()
    this.getRecord()
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
      this.$api.getlistensubmitInfo(3).then((res) => {
        if (res.data.code == 200) {
          this.info.answer = res.data.data.answerSubmit
          res.data.data.errors.forEach((item) => {
            this.errors[item - 1] = item - 1
          })
        }
      })
    },
    isView(index) {
      if (!this.subjectList[index].flag) {
        return this.$set(this.subjectList[index], 'flag', true)
      }
      this.subjectList[index].flag = false
    },
    async getListen() {
      this.$api.getListen(3).then((res) => {
        if (res.data.code == 200) {
          this.info.examId = res.data.data.id
          this.info.partId = res.data.data.infos.partId
          this.subjectList = res.data.data.infos.questionsInfo
          this.subjectList.forEach((item) => {
            this.info.answer.push('')
            if (this.isAnalysis) {
              this.info.answer.push(item.answer)
              this.analysis.push(item.analysis)
              this.info.answer.forEach((item, index) => {
                this.errors.push('')
              })
              this.$forceUpdate()
            }
          })
        }
      })
    },
    // 获取录音
    async getRecord() {
      this.$api.getRecord(3).then((res) => {
        if (res.data.code == 200) {
          this.audio = res.data.data.urls
          this.listeningToInteraction()
        }
      })
    }
  },
  components: {
    top,
    Analysis
  }
}
</script>