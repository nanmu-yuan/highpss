<template>
  <div class="box">
    <PartTop />
    <div class="test">
      <!-- 文章 -->
      <div class="article fl scrollBar">
        <div v-for="(item, index) in test" :key="index">
          <p>
            <span v-for="(items, indexs) in item" :key="indexs">
              <span v-html="items.essay"></span>
              <span class="answer1" v-if="items.value || answer[items.id]">
                <i style="font-style: normal; font-size: 0.3rem"
                  >{{ items.ids || (answer[items.id] ? answer[items.id].id : '') }}:</i
                >
                <i style="font-style: normal">{{ items.value || (answer[items.id] ? answer[items.id].value : '') }}</i>
                <i
                  class="iconfont icon-cuowu"
                  style="
                    font-size: 0.275rem;
                    text-align: center;
                    cursor: pointer;
                    margin-left: 0.375rem;
                    font-style: normal;
                  "
                  @click="remove(index, indexs, items.id)"
                ></i>
              </span>
              <span
                class="answer"
                @drop="drop(index, indexs, items.id)"
                @dragover="dragover"
                v-else-if="!items.value && items.state"
                :style="{ backgroundColor: errors[items.id] == items.id ? '#ff6969' : '' }"
                >{{ isAnalysis ? info.answer[items.id] : '' }}</span
              >
              <!-- 查看解析 -->
              <Analysis
                v-show="items.state"
                @isView="isView(index, indexs)"
                :flag="items.flag"
                :analysis="analysis[items.id]"
              />
            </span>
          </p>
        </div>
      </div>
      <!-- 选项 -->
      <div class="option fl scrollBar">
        <div v-for="item in subjectList" :key="item.id">
          <div
            :draggable="draggable[0].flag"
            :class="{ is_mask: !draggable[0].flag }"
            @dragstart="dragstart(item.sentenceA, 'A', 0)"
            v-if="item.sentenceA"
          >
            <div>A</div>
            <p>{{ item.sentenceA }}</p>
          </div>
          <div
            :draggable="draggable[1].flag"
            :class="{ is_mask: !draggable[1].flag }"
            @dragstart="dragstart(item.sentenceB, 'B', 1)"
            v-if="item.sentenceB"
          >
            <div>B</div>
            <p>{{ item.sentenceB }}</p>
          </div>
          <div
            :draggable="draggable[2].flag"
            :class="{ is_mask: !draggable[2].flag }"
            @dragstart="dragstart(item.sentenceC, 'C', 2)"
            v-if="item.sentenceC"
          >
            <div>C</div>
            <p>{{ item.sentenceC }}</p>
          </div>
          <div
            :draggable="draggable[3].flag"
            :class="{ is_mask: !draggable[3].flag }"
            @dragstart="dragstart(item.sentenceD, 'D', 3)"
            v-if="item.sentenceD"
          >
            <div>D</div>
            <p>{{ item.sentenceD }}</p>
          </div>
          <div
            :draggable="draggable[4].flag"
            :class="{ is_mask: !draggable[4].flag }"
            @dragstart="dragstart(item.sentenceE, 'E', 4)"
            v-if="item.sentenceE"
          >
            <div>E</div>
            <p>{{ item.sentenceE }}</p>
          </div>
          <div
            :draggable="draggable[5].flag"
            :class="{ is_mask: !draggable[5].flag }"
            @dragstart="dragstart(item.sentenceF, 'F', 5)"
            v-if="item.sentenceF"
          >
            <div>F</div>
            <p>{{ item.sentenceF }}</p>
          </div>
          <div
            :draggable="draggable[6].flag"
            :class="{ is_mask: !draggable[6].flag }"
            @dragstart="dragstart(item.sentenceG, 'G', 6)"
            v-if="item.sentenceG"
          >
            <div>G</div>
            <p>{{ item.sentenceG }}</p>
          </div>
          <div
            :draggable="draggable[7].flag"
            :class="{ is_mask: !draggable[7].flag }"
            @dragstart="dragstart(item.sentenceH, 'H', 7)"
            v-if="item.sentenceH"
          >
            <div>H</div>
            <p>{{ item.sentenceH }}</p>
          </div>
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
.is_mask {
  background-color: #bfbfbf !important;
}
.test {
  width: 100%;
  height: 86%;
  /deep/ .jiexi {
    margin: 0.25rem auto;
    span {
      text-align: right;
      font-weight: 700;
      font-size: 0.25rem !important;
      text-align: left;
      width: 1rem;
    }
  }
  /deep/ .analysis {
    height: 2.5rem;
    background-color: #fff;
  }
  .article,
  .option {
    width: 50%;
    overflow-y: auto;
    height: 90%;
    padding: 0.15rem;
    padding-bottom: 0.75rem;
    box-sizing: border-box;
  }
  .article {
    background-color: #f5f5f5;
    border-radius: 0.15rem;
    color: #5d5d5d;
    /deep/ .jiexi {
      .analysis {
        width: 96%;
        margin: 0 auto;
        height: 1.25rem;
        padding: 0.125rem 0.125rem;
      }
    }
  }
  .article div p:first-child {
    font-size: 0.25rem;
    font-weight: 700;
    padding: 20px 0;
  }
  .article div .answer {
    text-align: center;
    line-height: 0.35rem;
    font-size: 0.25rem;
    width: 1.4375rem;
    display: inline-block;
    height: 0.35rem;
    background-color: #fff;
    box-shadow: 0 0.0375rem 0.075rem rgba(0, 0, 0, 0.16);
    opacity: 1;
    border-radius: 0.1rem;
    position: relative;
    top: 0.0625rem;
  }
  .article div .answer1 {
    // align-items: center;
    background-color: #e2edff;
    // width: 96%;
    border-radius: 0.125rem;
    margin: 0.125rem 0;
    padding: 0.0625rem 0.125rem;
    // min-height: 0.5rem;
    font-size: 0.25rem;
    font-weight: bold;
    line-height: 0.4375rem;
  }
  .option > div > div {
    padding: 0 0.375rem;
    width: 90%;
    min-height: 1.3125rem;
    height: auto;
    padding-bottom: 0.125rem;
    border-radius: 0.125rem;
    background-color: #e2edff;
    margin: 0 auto 0.25rem auto;
    box-sizing: border-box;
    div {
      font-size: 0.375rem;
      font-weight: 700;
      text-align: center;
      padding: 0.125rem 0;
    }
    p {
      font-size: 0.25rem;
    }
  }
}
</style>

<script>
import PartTop from '@/components/top.vue'
import Analysis from '@/components/Analysis.vue'
export default {
  data() {
    return {
      value: '',
      subjectList: [],
      essayList: [],
      analysis: [],
      test: [],
      draggable: [
        {
          val: '',
          flag: true
        },
        {
          val: '',
          flag: true
        },
        {
          val: '',
          flag: true
        },
        {
          val: '',
          flag: true
        },
        {
          val: '',
          flag: true
        },
        {
          val: '',
          flag: true
        },
        {
          val: '',
          flag: true
        },
        {
          val: '',
          flag: true
        }
      ],
      tagIndex: 0,
      nums: 0,
      info: {
        userId: '',
        examId: '',
        partId: '',
        answer: [],
        timeUsing: 0
      },
      errors: [],
      isAnalysis: '',
      answer: []
    }
  },
  created() {
    sessionStorage.setItem('id', 6)
    this.getRead()
    this.getEssay()
    this.isAnalysis = JSON.parse(sessionStorage.getItem('isAnalysis'))
    this.time = setInterval(() => {
      this.info.timeUsing++
    }, 1000)
    if (this.isAnalysis) {
      clearInterval(this.time)
    }

    this.answer = JSON.parse(JSON.stringify(this.$store.state.answer1))
    this.time = setInterval(() => {
      this.info.timeUsing++
    }, 1000)
    this.draggable = JSON.parse(JSON.stringify(this.$store.state.draggable))
  },
  destroyed() {
    clearInterval(this.time)
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit('setTime', { id: 6, timeUsing: this.info.timeUsing })
    next()
  },
  methods: {
    // 获取解析
    getAnswer() {
      this.$api.getAnswer1(2).then((res) => {
        if (res.data.code == 200) {
          this.correct = res.data.data[res.data.data.length - 1].answer[0]
          this.analysis = res.data.data[res.data.data.length - 1].analysis[0]
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
      this.$api.getSubject(2).then((res) => {
        if (res.data.code == 200) {
          this.info.examId = res.data.data.id
          this.info.partId = res.data.data.infos.partId
          this.subjectList = res.data.data.infos.questionsInfo
        }
      })
    },
    // 获取指定examId，PartId的文章
    async getEssay() {
      this.$api.getEssay(2).then((res) => {
        if (res.data.code == 200) {
          this.essayList = res.data.data.textContent
          let reg = new RegExp('<Gap>')
          this.essayList.forEach((item, index) => {
            this.test.push([])
            if (!Array.isArray(item)) {
              let result = reg.test(item)
              if (result) {
                this.nums++
                return this.test[index].push({ essay: item, state: true, id: this.nums - 1 })
              }
              this.test[index].push({ essay: item })
              return
            }
            item.forEach((items, indexs) => {
              let result = reg.test(items)
              if (result) {
                this.nums++
                return this.test[index].push({ essay: items, state: true, id: this.nums - 1 })
              }
              this.test[index].push({ essay: items })
            })
          })
          if (this.isAnalysis) {
            this.getAnswer()
          }
        }
        this.info.answer = JSON.parse(JSON.stringify(this.$store.state.part6))
        if (this.info.answer.length <= 0) {
          let flag = this.answer.some((item) => {
            return item
          })
          if (!flag) {
            this.test.forEach((item) => {
              item.forEach((items) => {
                if (items.state) {
                  this.info.answer.push('')
                }
              })
            })
          }
        }
      })
    },
    isView(index, indexs) {
      if (!this.test[index][indexs].flag) {
        return this.$set(this.test[index][indexs], 'flag', true)
      }
      this.test[index][indexs].flag = false
    },
    // 拖动鼠标，释放时触发
    drop(index, indexs, e) {
      this.draggable[this.tagIndex].flag = false
      this.draggable[this.tagIndex].val = e
      this.$store.commit('addDraggable', this.draggable)
      this.$set(this.test[index][indexs], 'value', this.value)
      this.$set(this.test[index][indexs], 'ids', this.str)
      this.info.answer[e] = this.str
      this.$store.commit('addAnswer6', this.info.answer)
      this.$store.commit('drop1', { val: this.value, id: this.str, e })
      this.$forceUpdate()
      const arr = this.info.answer.filter((b) => b)
      if (arr.length == this.nums) {
        this.$emit('curr', true, 5)
      }
    },
    dragover(e) {
      e.preventDefault()
    },
    // 用户开始拖动元素时触发
    dragstart(val, str, index) {
      this.tagIndex = index
      ;(this.value = val), (this.str = str)
    },
    remove(index, indexs, id) {
      this.draggable.forEach((item) => {
        if (item.val == id) {
          item.flag = true
        }
      })
      this.$store.commit('addDraggable', this.draggable)
      this.answer[id] = ''
      this.test[index][indexs].value = ''
      this.test[index][indexs].ids = ''
      this.info.answer[id] = ''
      this.$store.commit('deldrop1', id)
      this.$forceUpdate()
      const arr = this.info.answer.filter((b) => b)
      if (arr.length == this.nums) {
        this.$emit('curr', true, 5)
      } else {
        this.$emit('curr', false, 5)
      }
    }
  },
  components: {
    PartTop,
    Analysis
  }
}
</script>

