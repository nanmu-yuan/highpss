<template>
  <div class="box">
    <div class="header">
      <img src="../../assets/image/langsi/cj_banner.png" alt="">
      <el-input placeholder="请输入关键词/中英文搜索" v-model="input" class="input-with-select" @input="btn_input()">
        <el-button slot="append" class="btn_input" @click="btn_input()"></el-button>
      </el-input>
    </div>
    <CommonProblem v-show="isShow"></CommonProblem>
    <CommonSearch v-show="!isShow" :info='resListdata'></CommonSearch>
  </div>
</template>
<script>
import CommonProblem from '@/components/CommonProblem/CommonProblem.vue'
import CommonSearch from '@/components/CommonProblem/CommonSearch.vue'
export default {
  data() {
    return {
      isShow: true,
      input: '',
      resListdata: {
      }
    }
  },
  created() {
    this.input = this.$route.query.id
    console.log(this.$route.query.id, this.$route.query.label)
    this.input = this.$route.query.label
    this.btn_input()
  },
  components: {
    CommonProblem, CommonSearch
  },
  methods: {
    btn_input(v) {
      console.log(v, 'btn_input');
      if (this.input != '' && this.input != undefined) {
        this.isShow = false
      } else {
        this.isShow = true
      }
      console.log(this.input)
      this.$api.getCommonSearch(this.input, 1).then((res) => {
        console.log(res.data.data, '22')
        this.resListdata = res.data.data

      })

    }
  }
}
</script>
<style lang="less" scoped>
.box {
  margin: 0 auto;
  background: #f5f7fa;
  padding-bottom: 3.1rem;

  .header {
    padding-top: .5rem;
    position: relative;

    /deep/ .el-input__inner {
      position: absolute;
      bottom: 2.98rem;
      left: 3.14rem;
      width: 6.0125rem;
      height: .875rem;
      background: #fcfeff;
      border: .0625rem solid #dcebf9;
      border-radius: .5rem;
      box-shadow: 0px .0375rem .125rem 0px #cde1f3, 0px .05rem .0625rem 0px #ffffff inset;
      font-size: .35rem;
      padding: 0 .1875rem;
      box-sizing: border-box;
      color: #cde1f3;

      &::-webkit-input-placeholder {
        color: #cde1f3 !important;
      }
    }

    /deep/ .el-input-group__append {
      position: absolute;
      left: 9.325rem;
      bottom: 2.9625rem;
      width: .875rem;
      height: .875rem;
      cursor: pointer;
      background: none;
      border: none;

      .el-button {
        width: .875rem;
        height: .875rem;
        margin: 0;
        padding: 0;
      }
    }
  }

}
</style>