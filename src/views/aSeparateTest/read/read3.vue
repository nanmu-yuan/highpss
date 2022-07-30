<template>
  <div class="box">
    <top />
    <div class="test">
      <!-- 文章 -->
      <div class="article fl scrollBar">
        <div v-for="item in test" :key="item.id" draggable="true" @dragstart="dragstart(item.id)">
          <div>{{ item.id }}</div>
          <p>{{ item.essay }}</p>
        </div>
      </div>
      <!-- 选项 -->
      <div class="option fl scrollBar">
        <div>
          <h4>In which text dose the writer：</h4>
          <div @drop="drop(1)" @dragover="dragover" :style="flagList[0].flag || info.answer[0] ? 'background-color: #e2edff' : ''" :class="{ curr: errors[0] == 0 }">
            <span
              >{{ subjectList.questionOne }} <span style="float: right; font-size: 0.3rem" v-if="isAnalysis">{{ info.answer[0] }}</span>
            </span>
            <div v-show="flagList[0].flag || info.answer[0]" class="fr remove">
              <span style="font-size: 0.35rem; font-weight: 700; padding-right: 0.25rem">{{ flagList[0].flag || (info.answer[0] ? info.answer[0].id : '') }}</span>
              <span class="iconfont icon-cuowu" style="float: right; font-size: 0.25rem; cursor: pointer" @click="remove(1)"></span>
            </div>
          </div>
          <div @drop="drop(2)" @dragover="dragover" :style="flagList[1].flag || info.answer[1] ? 'background-color: #e2edff' : ''" :class="{ curr: errors[1] == 1 }">
            <span
              >{{ subjectList.questionTwo }}<span style="float: right; font-size: 0.3rem" v-if="isAnalysis">{{ info.answer[1] }}</span></span
            >
            <div v-show="flagList[1].flag || info.answer[1]" class="fr remove">
              <span style="font-size: 0.35rem; font-weight: 700; padding-right: 0.25rem">{{ flagList[1].flag || (info.answer[1] ? info.answer[1].id : '') }}</span>
              <span class="iconfont icon-cuowu" style="float: right; font-size: 0.25rem; cursor: pointer" @click="remove(2)"></span>
            </div>
          </div>
          <div @drop="drop(3)" @dragover="dragover" :style="flagList[2].flag || info.answer[2] ? 'background-color: #e2edff' : ''" :class="{ curr: errors[2] == 2 }">
            <span
              >{{ subjectList.questionThree }}<span style="float: right; font-size: 0.3rem" v-if="isAnalysis">{{ info.answer[2] }}</span></span
            >
            <div v-show="flagList[2].flag || info.answer[2]" class="fr remove">
              <span style="font-size: 0.35rem; font-weight: 700; padding-right: 0.25rem">{{ flagList[2].flag || (info.answer[2] ? info.answer[2].id : '') }}</span>
              <span class="iconfont icon-cuowu" style="float: right; font-size: 0.25rem; cursor: pointer" @click="remove(3)"></span>
            </div>
          </div>
          <Analysis @isView="isView(0)" :flag="analysis[0].flag" :analysis="analysis[0].val" />
        </div>
        <div>
          <h4>Which text is saying the following? ：</h4>
          <div @drop="drop(4)" @dragover="dragover" :style="flagList[3].flag || info.answer[3] ? 'background-color: #e2edff' : ''" :class="{ curr: errors[3] == 3 }">
            <span
              >{{ subjectList.questionFour }} <span style="float: right; font-size: 0.3rem" v-if="isAnalysis">{{ info.answer[3] }}</span></span
            >
            <div v-show="flagList[3].flag || info.answer[3]" class="fr remove">
              <span style="font-size: 0.35rem; font-weight: 700; padding-right: 0.25rem">{{ flagList[3].flag || (info.answer[3] ? info.answer[3].id : '') }}</span>
              <span class="iconfont icon-cuowu" style="float: right; font-size: 0.25rem; cursor: pointer" @click="remove(4)"></span>
            </div>
          </div>
          <div @drop="drop(5)" @dragover="dragover" :style="flagList[4].flag || info.answer[4] ? 'background-color: #e2edff' : ''" :class="{ curr: errors[4] == 4 }">
            <span
              >{{ subjectList.questionFive }}<span style="float: right; font-size: 0.3rem" v-if="isAnalysis">{{ info.answer[4] }}</span></span
            >
            <div v-show="flagList[4].flag || info.answer[4]" class="fr remove">
              <span style="font-size: 0.35rem; font-weight: 700; padding-right: 0.25rem">{{ flagList[4].flag || (info.answer[4] ? info.answer[4].id : '') }}</span>
              <span class="iconfont icon-cuowu" style="float: right; font-size: 0.25rem; cursor: pointer" @click="remove(5)"></span>
            </div>
          </div>
          <div @drop="drop(6)" @dragover="dragover" :style="flagList[5].flag || info.answer[5] ? 'background-color: #e2edff' : ''" :class="{ curr: errors[5] == 5 }">
            <span
              >{{ subjectList.questionSix }}<span style="float: right; font-size: 0.3rem" v-if="isAnalysis">{{ info.answer[5] }}</span></span
            >
            <div v-show="flagList[5].flag || info.answer[5]" class="fr remove">
              <span style="font-size: 0.35rem; font-weight: 700; padding-right: 0.25rem">{{ flagList[5].flag || (info.answer[5] ? info.answer[5].id : '') }}</span>
              <span class="iconfont icon-cuowu" style="float: right; font-size: 0.25rem; cursor: pointer" @click="remove(6)"></span>
            </div>
          </div>
          <div @drop="drop(7)" @dragover="dragover" :style="flagList[6].flag || info.answer[6] ? 'background-color: #e2edff' : ''" :class="{ curr: errors[6] == 6 }">
            <span
              >{{ subjectList.questionSeven }}<span style="float: right; font-size: 0.3rem" v-if="isAnalysis">{{ info.answer[6] }}</span></span
            >
            <div v-show="flagList[6].flag || info.answer[6]" class="fr remove">
              <span style="font-size: 0.35rem; font-weight: 700; padding-right: 0.25rem">{{ flagList[6].flag || (info.answer[6] ? info.answer[6].id : '') }}</span>
              <span class="iconfont icon-cuowu" style="float: right; font-size: 0.25rem; cursor: pointer" @click="remove(7)"></span>
            </div>
          </div>
          <Analysis @isView="isView(1)" :flag="analysis[1].flag" :analysis="analysis[1].val" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.box {
  width: 100%;
  position: relative;
}
.curr {
  background-color: #ff6969 !important;
}
.test {
  width: 100%;
  .article,
  .option {
    width: 50%;
    overflow: auto;
    height: 7.45rem;
  }
  /deep/ .jiexi {
    .analysis {
      width: 96%;
      height: 1.25rem;
      margin: 0 auto;
    }
  }
  .option /deep/ .jiexi {
    border: none;
    height: auto;
    display: block !important;
    .analysis {
      height: 2.5rem;
      line-height: normal;
      display: block;
    }
  }
  .article {
    background-color: #fff;
    border-radius: 0.15rem;
    padding: 0.25rem;
    color: #5d5d5d;
    font-size: 0.35rem;
    box-sizing: border-box;
  }
  .article > div {
    width: 98%;
    padding: 0.125rem;
    box-sizing: border-box;
    background-color: #e2edff;
    margin-bottom: 0.5rem;
    border-radius: 0.125rem;
    div {
      font-size: 0.375rem;
      text-align: center;
      font-weight: 700;
    }
    p {
      font-size: 0.25rem;
      font-weight: 700;
    }
  }
  .option > div {
    margin-bottom: 0.375rem;
    h4 {
      color: #484848;
      font-size: 0.35rem;
      padding-left: 0.25rem;
    }
    & > div {
      width: 94%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.25rem;
      min-height: 0.625rem;
      border-radius: 0.125rem;
      padding: 0 0.125rem;
      box-sizing: border-box;
      line-height: 0.375rem;
      border: 0.0125rem solid #000;
      margin: 0.25rem auto 0 auto;
    }
  }
}
</style>
<script>
import top from '@/components/aSeparateTest/top.vue'
import Analysis from '@/components/Analysis.vue'
export default {
  data() {
    return {
      value: '',
      test: [],
      subjectList: {},
      analysis: [
        {
          val: ''
        },
        {
          val: ''
        }
      ],
      analysis2: '',
      essayList: [],
      flagList: [{}, {}, {}, {}, {}, {}, {}],
      info: {
        userId: '',
        examId: '',
        partId: '',
        answer: ['', '', '', '', '', '', ''],
        timeUsing: 0
      },
      errors: [],
      isAnalysis: ''
    }
  },
  created() {
    this.isAnalysis = JSON.parse(sessionStorage.getItem('isAnalysis'))
    this.time = setInterval(() => {
      this.info.timeUsing++
    }, 1000)
    if (this.isAnalysis) {
      this.getAnswer1()
      clearInterval(this.time)
    }
    this.getRead()
    this.getEssay()
  },
  destroyed() {
    clearInterval(this.time)
  },
  methods: {
    submitAnswer() {
      this.$emit('submitAnswer', this.info)
    },
    // 获取解析
    // getAnswer() {
    //   this.$api.getAnswer1(3).then((res) => {
    //     if (res.data.code == 200) {
    //       this.answer = res.data.data[0].answer
    //       let analysis = res.data.data[0].analysis[0]
    //       this.analysis[0].val = analysis.slice(0, 3).join()
    //       this.analysis[1].val = analysis.slice(3, 7).join()
    //       this.info.answer = res.data.data[0].submitAndError.answerSubmit
    //       this.info.answer.forEach((item, index) => {
    //         this.errors.push('')
    //       })
    //       res.data.data[0].submitAndError.errors.forEach((item) => {
    //         this.errors[item - 1] = item - 1
    //       })
    //     }
    //   })
    // },
    getAnswer1() {
      this.$api.getreadsubmitInfo(3).then((res) => {
        if (res.data.code == 200) {
          console.log(res.data.data)
          this.info.answer = res.data.data.answerSubmit
          this.info.answer.forEach((item) => {
            this.errors.push('')
          })
          res.data.data.errors.forEach((item) => {
            this.errors[item - 1] = item - 1
          })
        }
      })
    },
    // 获取题目
    async getRead() {
      this.$api.getSubject(3).then((res) => {
        if (res.data.code == 200) {
          console.log(res.data.data)
          this.info.examId = res.data.data.id
          this.info.partId = res.data.data.infos.partId
          this.subjectList = res.data.data.infos.questionsInfo[0]
          if (this.isAnalysis) {
            let analysis = this.subjectList.analysis
            this.analysis[0].val = analysis.slice(0, 3).join()
            this.analysis[1].val = analysis.slice(3, 7).join()
            this.answer = this.subjectList.answer
          }
        }
      })
    },
    // 获取指定examId，PartId的文章
    async getEssay() {
      this.$api.getEssay(3).then((res) => {
        if (res.data.code == 200) {
          this.essayList = res.data.data.textContent
          const arr = ['A', 'B', 'C', 'D']
          this.essayList.forEach((item, index) => {
            return this.test.push({ essay: item, id: arr[index] })
          })
        }
      })
    },

    isView(index) {
      if (!this.analysis[index].flag) {
        return this.$set(this.analysis[index], 'flag', true)
      }
      this.analysis[index].flag = false
    },
    // 拖动鼠标，释放时触发
    drop(e) {
      this.$set(this.flagList[e - 1], 'flag', this.value)
      this.$forceUpdate()
      console.log(this.flagList)
      this.info.answer[e - 1] = this.value
      console.log(this.info.answer)
    },
    dragover(e) {
      e.preventDefault()
    },
    // 用户开始拖动元素时触发
    dragstart(val) {
      console.log(val)
      this.value = val
    },
    remove(index) {
      this.flagList[index - 1].flag = ''
      this.info.answer[index - 1] = ''
      // console.log(this.info.answer)
      this.$forceUpdate()
    }
    // 提交
    // submitListen() {
    //   const arr = this.info.answer.filter((d) => d)
    //   this.info.answer = arr
    //   this.$emit('submitAnswer', this.info, 2)
    // }
  },
  components: {
    top,
    Analysis
  }
}
</script>