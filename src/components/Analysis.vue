<template>
  <!-- 查看解析 -->
  <div class="jiexi" v-if="isShow">
    <span @click="isView()">查看解析</span>
    <div class="analysis" v-if="flag">
      {{ analysis }}
      <div v-if="isListen" @click="look">查看原文答案句</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['flag', 'analysis', 'isListen'],
  data() {
    return {
      isShow: false
    }
  },
  created() {
    this.isShow = JSON.parse(sessionStorage.getItem('isAnalysis'))
  },
  methods: {
    isView() {
      this.$emit('isView')
    },
    look() {}
  }
}
</script>
<style lang="less" scoped>
.jiexi {
  cursor: pointer;
  width: 90%;
  margin: 0.25rem auto 0.625rem;
  span {
    font-weight: 700;
    margin: 0.25rem 0;
    color: #dc0000;
    display: inline-block;
    width: 1.125rem;
    font-size: 0.225rem;
  }
}
.analysis {
  width: 55%;
  min-height: 1.25rem;
  line-height: 0.5rem;
  height: auto;
  box-shadow: 0 0 0.125rem 0.0625rem #f5f5f5;
  word-wrap: break-word;
  padding: 0 0.125rem;
  box-sizing: border-box;
  font-size: 0.25rem;
  position: relative;
  div {
    position: absolute;
    bottom: 0.025rem;
    right: 0.125rem;
    width: 1.425rem;
    font-size: 0.2rem;
    height: 0.25rem;
    float: right;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    color: #4f87e6;
    line-height: 0px;
  }
}
</style>