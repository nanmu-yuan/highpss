<template>
  <div class="box">
    <PartTop :isShow="true" :audio="audio[0]" ref="aud" />
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
              @blur="blur"
              :style="{ backgroundColor: errors[index] === index ? '#ff6969' : '' }"
            />
            <Analysis @isView="isView(index)" :flag="item.flag" :analysis="analysis[index]" :isListen="true" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import PartTop from '@/components/PartTop.vue'
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
      errors: []
    }
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit('setTime', { id: 3, timeUsing: this.info.timeUsing })
    next()
  },
  created() {
    this.time = setInterval(() => {
      this.info.timeUsing++
    }, 1000)
    let isAnalysis = JSON.parse(sessionStorage.getItem('isAnalysis'))
    if (isAnalysis) {
      this.getAnswer()
      clearInterval(this.time)
    }
    sessionStorage.setItem('id', 3)
    this.getListen()
    this.getRecord()
    this.info.answer = JSON.parse(JSON.stringify(this.$store.state.part3))
  },
  destroyed() {
    clearInterval(this.time)
  },
  methods: {
    blur() {
      this.$store.commit('addAnswer3', this.info.answer)
      const arr = this.info.answer.filter((b) => b)
      if (arr.length == this.subjectList.length) {
        this.$emit('curr', true, 2)
      } else {
        this.$emit('curr', false, 2)
      }
    },
    listeningToInteraction() {
      document.addEventListener('mouseenter', this.move)
      this.$refs.aud.play()
    },
    move() {
      document.removeEventListener('mouseenter', this.move)
    },
    // 获取解析
    getAnswer() {
      this.$api.getAnswer(3).then((res) => {
        if (res.data.code == 200) {
          this.analysis = res.data.data[res.data.data.length - 1].analysis
          this.info.answer = res.data.data[res.data.data.length - 1].submitAndError.answerSubmit
          this.info.answer.forEach((item, index) => {
            this.errors.push('')
          })
          res.data.data[res.data.data.length - 1].submitAndError.errors.forEach((item) => {
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
          let flag = this.info.answer.some((item) => {
            return item
          })
          if (!flag) {
            this.subjectList.forEach((item) => {
              this.info.answer.push('')
            })
          }
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
    PartTop,
    Analysis
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
.con {
  width: 12.5rem;
  height: auto;
  text-align: center;
  margin: 0 auto;
  padding: 1.025rem 1.5rem;
  box-sizing: border-box;
  background: url('../../assets/image/listen_part3.png') no-repeat top center;
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
