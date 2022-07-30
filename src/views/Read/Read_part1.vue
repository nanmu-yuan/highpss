<template>
  <div class="box">
    <PartTop />
    <div class="test">
      <!-- 文章 -->
      <div class="article fl scrollBar">
        <p v-for="(item, index) in essayList" :key="index" style="margin-bottom: 0.375rem; text-indent: 2em">
          {{ item }}
        </p>
      </div>
      <!-- 题目 -->
      <div class="topic fl scrollBar" v-if="testId == 1">
        <div class="topic_item" v-for="(item, index) in subjectList" :key="index">
          <!-- 题目标题 -->
          <div class="topic_title">
            <div style="font-size: 0.375rem">{{ index + 1 }}</div>
            <div>{{ item.question }}</div>
          </div>
          <!-- 选择 -->
          <div
            class="option"
            @click="decideOn1('1', index)"
            :class="{ current: (value[index] == 1 && item.state) || info.answer[index] === '1' }"
          >
            <div style="font-size: 0.375rem" :class="{ sure: correct[index] == 1 }">A</div>
            <div>TRUE</div>
          </div>
          <div
            class="option"
            @click="decideOn1('0', index)"
            :class="{ current: (value[index] == 0 && item.state) || info.answer[index] === '0' }"
          >
            <div style="font-size: 0.375rem" :class="{ sure: correct[index] == 0 }">B</div>
            <div>FALSE</div>
          </div>
          <Analysis @isView="isView(index)" :flag="item.flag" :analysis="analysis[index]" />
        </div>
      </div>
      <div class="topic fl" v-if="testId == 0">
        <ListenTest
          :subjectList="subjectList"
          @decideOn="decideOn"
          :correct="correct"
          :analysis="analysis"
          :submitError="submitError"
          :answer="info.answer"
        />
      </div>
    </div>
  </div>
</template>
<script>
import PartTop from '@/components/top.vue'
import Analysis from '@/components/Analysis.vue'
import ListenTest from '@/components/ListenTest.vue'
export default {
  data() {
    return {
      num: -1,
      examId: 0,
      subjectList: [],
      essayList: [],
      correct: [],
      analysis: [],
      submitError: {},
      info: {
        userId: '',
        examId: '',
        partId: '',
        answer: [],
        timeUsing: 0
      },
      value: {},
      isAnalysis: false
    }
  },
  created() {
    sessionStorage.setItem('id', 5)
    this.testId = JSON.parse(sessionStorage.getItem('testId'))
    this.isAnalysis = JSON.parse(sessionStorage.getItem('isAnalysis'))
    if (this.isAnalysis) {
      clearInterval(this.time)
    }
    this.getRead()
    this.getEssay()
    this.time = setInterval(() => {
      this.info.timeUsing++
    }, 1000)
    this.info.answer = JSON.parse(JSON.stringify(this.$store.state.part5))
  },
  destroyed() {
    clearInterval(this.time)
  },
  components: {
    PartTop,
    Analysis,
    ListenTest
  },
  mounted() {
    this.isAnalysis = JSON.parse(sessionStorage.getItem('isAnalysis'))
    if (!this.isAnalysis) {
      this.subjectList.forEach((item, index) => {
        item.state = false
      })
    }
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit('setTime', { id: 5, timeUsing: this.info.timeUsing })
    next()
  },
  methods: {
    decideOn(val, index) {
      this.info.answer[index] = val
      this.$store.commit('addAnswer5', this.info.answer)
      const arr = this.info.answer.filter((b) => b)
      if (arr.length == this.subjectList.length) {
        this.$emit('curr', true, 4)
      }
    },
    decideOn1(val, index) {
      if (!this.isAnalysis) {
        this.$set(this.value, index, val)
        this.subjectList[index].state = true
        this.info.answer[index] = val
        this.$store.commit('addAnswer5', this.info.answer)
        const arr = this.info.answer.filter((b) => b)
        if (arr.length == this.subjectList.length) {
          this.$emit('curr', true, 4)
        }
      }
    },
    // 获取题目
    async getRead() {
      this.$api.getSubject(1).then((res) => {
        if (res.data.code == 200) {
          this.info.examId = res.data.data.id
          this.info.partId = res.data.data.infos.partId
          let test = res.data.data.infos.questionsInfo
          test.forEach((item) => {
            if (item) {
              this.subjectList.push(item)
            }
          })
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
    // 获取解析
    getAnswer() {
      this.$api.getAnswer1(1).then((res) => {
        if (res.data.code == 200) {
          this.correct = res.data.data[res.data.data.length - 1].answer
          this.analysis = res.data.data[res.data.data.length - 1].analysis
          this.submitError = res.data.data[res.data.data.length - 1].submitAndError
        }
      })
    },
    // 获取指定examId，PartId的文章
    async getEssay() {
      this.$api.getEssay(1).then((res) => {
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
  }
}
</script>
<style lang="less" scoped>
.sure {
  background-color: #00bc00;
  color: #f5f5f5;
}
.current {
  background-color: #e2edff;
}
.box {
  width: 100%;
  position: relative;
}
.test {
  width: 100%;
  overflow: hidden;
  height: 86%;
  .article,
  .topic {
    width: 50%;
    overflow-y: auto;
    height: 90%;
    padding: 0.25rem;
    box-sizing: border-box;
    padding-bottom: 0.75rem;
  }
  .article {
    background-color: #f5f5f5;
    border-radius: 0.15rem;
    color: #5d5d5d;
    font-size: 0.25rem;
    font-weight: 700;
  }
}
.topic_item {
  margin-bottom: 0.5rem;
  /deep/ .analysis {
    height: 2.5rem;
  }
}
.topic_title,
.option {
  display: flex;
  border: 0.0125rem solid #000;
  border-radius: 0.125rem;
  align-items: center;
  cursor: pointer;
  div:first-child {
    flex: 1;
    height: 0.5rem;
    font-weight: 700;
    line-height: 0.5rem;
    text-align: center;
  }
  div:last-child {
    flex: 8;
    padding: 0 0.125rem;
    line-height: 0.5rem;
    border-left: 0.0125rem solid #000;
  }
}
.topic {
  /deep/ .text_title {
    width: 98%;
    margin: 0 auto;
  }
  /deep/ .test_item {
    width: 90%;
    margin: 0.225rem auto;
  }
  /deep/ .jiexi {
    .analysis {
      width: 90%;
      height: 1.25rem;
      margin: 0 auto;
    }
  }
}
.topic_title {
  width: 98%;
  margin: 0 auto;
  div:first-child {
    height: 100%;
  }
  div:last-child {
    font-size: 0.25rem;
    line-height: 0.5rem;
  }
}
.option {
  width: 80%;
  margin: 0.25rem auto;
  div:last-child {
    font-size: 0.325rem;
    font-weight: 700;
  }
}
</style>

