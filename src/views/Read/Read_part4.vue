<template>
  <div class="box">
    <PartTop />
    <div class="test">
      <!-- 文章 -->
      <div class="article fl scrollBar">
        <p v-for="(item, index) in essayList" :key="index" style="margin-bottom: 0.375rem; text-indent: 2em">{{ item }}</p>
      </div>
      <!-- 选项 -->
      <div class="option fl scrollBar">
        <div v-for="(item, index) in subjectList" :key="index">
          <p>{{ index + 1 }}. {{ item.question }}</p>
          <input type="text" name="" id="" v-model="info.answer[index]" @blur="blur" :style="{ backgroundColor: errors[index] == index ? '#ff6969' : '' }" />
          <Analysis @isView="isView(index)" :flag="item.flag" :analysis="analysis[index]" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PartTop from '@/components/top.vue'
import Analysis from '@/components/Analysis.vue'
export default {
  data() {
    return {
      subjectList: [],
      essayList: [],
      obj: {},
      analysis: [],
      info: {
        userId: '',
        examId: '',
        partId: '',
        answer: [],
        timeUsing: 0
      },
      errors: []
    }
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit('setTime', { id: 8, timeUsing: this.info.timeUsing })
    next()
  },
  created() {
    sessionStorage.setItem('id', 8)
    let isAnalysis = JSON.parse(sessionStorage.getItem('isAnalysis'))
    this.time = setInterval(() => {
      this.info.timeUsing++
    }, 1000)
    if (isAnalysis) {
      this.getAnswer()
      clearInterval(this.time)
    }
    this.getRead()
    this.getEssay()
    this.time = setInterval(() => {
      this.info.timeUsing++
    }, 1000)
    this.info.answer = JSON.parse(JSON.stringify(this.$store.state.part8))
  },
  destroyed() {
    clearInterval(this.time)
  },
  methods: {
    blur() {
      this.$store.commit('addAnswer8', this.info.answer)
      const arr = this.info.answer.filter((a) => a)
      if (arr.length == this.subjectList.length) {
        this.$emit('curr', true, 7)
      } else {
        this.$emit('curr', false, 7)
      }
    },
    // 获取解析
    getAnswer() {
      this.$api.getAnswer1(4).then((res) => {
        if (res.data.code == 200) {
          let answer = res.data.data[res.data.data.length - 1].answer
          this.analysis = res.data.data[res.data.data.length - 1].analysis
          answer.forEach((item, index) => {
            this.$set(this.obj, index, item)
          })
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
    // 获取题目
    async getRead() {
      this.$api.getSubject(4).then((res) => {
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
    // 获取指定examId，PartId的文章
    async getEssay() {
      this.$api.getEssay(4).then((res) => {
        if (res.data.code == 200) {
          this.essayList = res.data.data.textContent
        }
      })
    },
    isView(index) {
      if (!this.subjectList[index].flag) {
        return this.$set(this.subjectList[index], 'flag', true)
      }
      this.subjectList[index].flag = false
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
  width: 100%;
  height: 86%;
  .article,
  .option {
    width: 50%;
    overflow-y: auto;
    height: 90%;
    padding: 0.25rem;
    padding-bottom: 0.75rem;
    box-sizing: border-box;
  }
  .article {
    background-color: #f5f5f5;
    border-radius: 0.15rem;
    color: #5d5d5d;
    font-size: 0.35rem;
    p {
      font-size: 0.25rem;
      color: #5d5d5d;
      font-weight: 700;
    }
  }
  .option {
    p {
      font-size: 0.25rem;
      font-weight: 700;
    }
    input {
      width: 94%;
      height: 0.5rem;
      padding: 0 0.125rem;
      box-sizing: border-box;
      border-radius: 0.125rem;
      border: 0.0125rem solid #000;
      margin: 0.25rem auto;
      font-size: 0.25rem;
    }
    /deep/ .jiexi {
      margin: 0.25rem auto;
      p {
        text-align: right;
      }
      .analysis {
        height: 1.25rem;
        width: 96%;
        margin: 0 auto;
      }
    }
  }
}
</style>
