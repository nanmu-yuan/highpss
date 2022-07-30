<template>
  <div class="ly">
    <div v-for="(item, index) in subjectList" :key="index">
      <div class="text_title" style="font-weight: 700">
        <div class="fl">
          <p>{{ index + 1 }}.</p>
        </div>
        <div class="fl">
          <p>{{ item ? (item.question ? item.question : '') : '' }}</p>
        </div>
      </div>
      <!-- 选项 -->
      <div
        class="test_item"
        :class="(val[index] == 'a' && item.state) || answer[index] == 'a' ? 'current' : ''"
        @click="decideOn('a', index)"
        style="position: relative"
      >
        <div
          class="fl"
          :class="{
            sure: correct[index] == 'a',
            z_index: num == 6 && index == 0,
            error: item.errorAnswer == 'a' && item.error
          }"
        >
          <p>A.</p>
        </div>
        <div class="fl" :class="{ z_index: num == 6 && index == 0 }">
          <p>{{ item.optionA }}</p>
        </div>
      </div>
      <div
        class="test_item"
        :class="(val[index] == 'b' && item.state) || answer[index] == 'b' ? 'current' : ''"
        @click="decideOn('b', index)"
      >
        <div class="fl" :class="{ sure: correct[index] == 'b', error: item.errorAnswer == 'b' && item.error }">
          <p>B.</p>
        </div>
        <div class="fl">
          <p>{{ item.optionB }}</p>
        </div>
      </div>
      <div
        class="test_item"
        :class="(val[index] == 'c' && item.state) || answer[index] == 'c' ? 'current' : ''"
        @click="decideOn('c', index)"
      >
        <div class="fl" :class="{ sure: correct[index] == 'c', error: item.errorAnswer == 'c' && item.error }">
          <p>C.</p>
        </div>
        <div class="fl">
          <p>{{ item.optionC }}</p>
        </div>
      </div>
      <Analysis @isView="isView(index)" :flag="item.flag" :analysis="analysis[index]" :isListen="true" />
    </div>
  </div>
</template>
<script>
import Analysis from '@/components/Analysis.vue'
export default {
  props: {
    subjectList: Array,
    analysis: Array,
    submitError: Object,
    correct: Array,
    num: Number,
    answer: Array
  },
  data() {
    return {
      flag: false,
      current: '',
      val: {},
      isAnalysis: false,
      list: []
    }
  },
  created() {
    this.isAnalysis = JSON.parse(sessionStorage.getItem('isAnalysis'))
    if (!this.isAnalysis) {
      this.subjectList.forEach((item, index) => {
        item.state = false
      })
    }
  },
  watch: {
    'submitError.errors'(newV, oldV) {
      newV.forEach((item, index) => {
        this.subjectList.forEach((items, indexes) => {
          if (item == indexes + 1) {
            items.error = true
            items.errorAnswer = this.submitError.answerSubmit[indexes]
          }
        })
      })
    }
  },
  methods: {
    // 选中
    decideOn(val, index) {
      if (!this.isAnalysis) {
        this.$set(this.val, index, val)
        this.subjectList[index].state = true
        this.$emit('decideOn', this.val[index], index)
      }
    },
    isView(index) {
      if (!this.subjectList[index].flag) {
        return this.$set(this.subjectList[index], 'flag', true)
      }
      this.subjectList[index].flag = false
    }
  },
  components: {
    Analysis
  }
}
</script>
<style lang="less" scoped>
.z_index {
  z-index: 100000;
  background-color: #e2edff;
}
.sure {
  background-color: #8ee5b0;
  color: #fff;
}
.error {
  background-color: #ff6969;
  color: #fff;
}
.current {
  background-color: #e2edff;
}
.test {
  width: 100%;
  .text_title {
    width: 12.125rem;
  }
  .test_item {
    width: 10.275rem;
    margin: 0.225rem 0 0.225rem 0.5625rem;
  }
  .text_title,
  .test_item {
    line-height: 0.4625rem;
    min-height: 0.625rem;
    height: auto;
    border: 0.0125rem solid #000;
    border-radius: 0.125rem;
    display: flex;
    color: #5d5d5d;
    cursor: pointer;
    div {
      display: table;
    }
    p {
      display: table-cell;
      vertical-align: middle;
    }
    div:first-child {
      flex: 1;
      font-size: 0.4375rem;
      text-align: center;
      font-weight: 700;
      overflow: hidden;
    }
    div:last-child {
      flex: 9;
      line-height: 0.4625rem;
      padding: 0 0.25rem;
      font-size: 0.25rem;
      border-left: 0.0125rem solid #000;
    }
  }
}
</style>
