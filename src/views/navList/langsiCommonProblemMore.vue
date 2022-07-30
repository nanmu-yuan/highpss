<template>
  <div class="box">
    <div class="ww">
      <div class="top">
        <div>朗思常见考生问答</div>
        <p>为你解答考试不同阶段的疑惑，助考生轻松应对朗思考试</p>
        <span class="sousuo">
          <el-input type="text" v-model="input" placeholder="输入您的问题关键词" @change="btninput(input)" />
          <img src="@/assets/image/langsi/sou.png" @click="btninput(input)" alt="" />
        </span>
        
      </div>
      <div class="main clearfix" style="margin-top: 0.5875rem">
        <div class="main-left">
          <div class="tab">
            <div :class="{ current: tabIndex == 0 }" @click="tabChange(0)">
              <i class="line" v-show="tabIndex == 0"></i><span>报名</span>
            </div>
            <div :class="{ current: tabIndex == 1 }" @click="tabChange(1)">
              <i class="line" v-show="tabIndex == 1"></i><span>网络</span>
            </div>
            <div :class="{ current: tabIndex == 2 }" @click="tabChange(2)">
              <i class="line" v-show="tabIndex == 2"></i><span>考试</span>
            </div>
            <div :class="{ current: tabIndex == 3 }" @click="tabChange(3)">
              <i class="line" v-show="tabIndex == 3"></i><span>院校</span>
            </div>
          </div>
          <div class="container">
            <div class="item" v-for="(item,index) in morelist" :key="index">
              <h3 @click="insurance(item.id)">{{item.title}}
                <span v-for="(items,indexs) in item.tagList" :class="{'sp1':String(items)==='环境','sp2':String(items)==='考试','sp1':String(items)==='网络','sp3':String(items)==='报考','sp4':String(items)==='院校'}" :key="indexs">{{items}}</span>
              </h3>
              <p @click="insurance(item.id)">{{item.introduction}}</p>
              <div class="imgs" @click="insurance(item.id)">
                <img :src="`https:${item}`" alt="" v-for="(item,index) in item.questionPictures.split(',')" :key="index">
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabIndex: 0,
      morelist:[],
      input:''
    }
  },
  created(){
    this.tabIndex = this.$route.query.id
    console.log(this.tabIndex)
    this.tabChange(this.tabIndex)
  },
  methods:{
    btninput(id){
      if(id!=''){
        this.$router.push({ path: 'langsiCommonProblem', query: { id } })
      }else{
        this.$message({
          type: 'success',
          message: '输入框不可以为空哦！'
        })
      }
    },
    tabChange(index) {
      this.tabIndex = index
      // this.getChapter(index)
      if(this.tabIndex==0){
        this.$api.getProblemlist("更多问题,朗思考试报名",1).then((res) => {
          this.morelist=res.data.data.resList
        })
      }else if(this.tabIndex==1){
        
        this.$api.getProblemlist("更多问题,考场网络问题",1).then((res) => {
          this.morelist=res.data.data.resList
        })
      }else if(this.tabIndex==2){
        this.$api.getProblemlist("更多问题,考试过程常见问题",1).then((res) => {
          this.morelist=res.data.data.resList
        })
      }else{
        this.$api.getProblemlist("更多问题,院校朗思语言要求",1).then((res) => {
          this.morelist=res.data.data.resList
        })
      }
    },
        //查看内容
    insurance(id) {
      console.log(id)
      this.$router.push({ path: 'langsiCommondetails', query: { id } })
    },
    
  }
}
</script>
<style lang="less" scoped>
// 环境
.sp1{background: #3bbb33;}
// 考试
.sp2{background: #00b7d3;}
// 报考
.sp3{background: #FFC015;}
// 院校
.sp4{background: #ff8042;}

.font_style {
  font-size: 0.225rem;
  // font-family: Microsoft YaHei, Microsoft YaHei-Regular;
  text-align: left;
  color: #202020;
  letter-spacing: 0.0225rem;
}

.box {
  background-color: #f5f7fa;
  padding-bottom: 1.375rem;
  box-sizing: border-box;
  .ww {
    width: 15rem !important;
    margin: 0 auto;
  }
}

.top {
  position: relative;
  div {
    height: 0.3875rem;
    font-size: 0.3rem;
    // font-family: Microsoft YaHei, Microsoft YaHei-Bold;
    font-weight: 700;
    text-align: left;
    color: #4374b9;
    letter-spacing: 0.03rem;
    padding-top: 0.5rem;
  }
  p {
    height: 0.3rem;
    font-size: 0.225rem;
    // font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    text-align: left;
    color: #202020;
    letter-spacing: 0.0225rem;
    margin-top: 0.225rem;
  }

  .sousuo {
    width: 5.2375rem;
    height: 0.6875rem;
    position: absolute;
    top: 0.7375rem;
    right: 0;
    display: block;
    /deep/ .el-input__inner {
      width: 5.2375rem;
      height: 0.6875rem;
      font-size: 0.25rem;
      color: #b7b7b7;
      padding-right: 0.7875rem;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      left: 0;
      background: #ffffff;
      border-radius: 0.1875rem;
      padding-left: 0.475rem;
      border: none;
    }
    img {
      width: 0.4625rem;
      height: 0.4625rem;
      position: absolute;
      right: 0.325rem;
      top: 0.1125rem;
      cursor: pointer;
    }
  }
}

.main-left {
  width: 15rem;
  .tab {
    display: flex;
    width: 100%;
    height: 0.6rem;
    font-size: 0.225rem;
    // font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    color: #202020;
    letter-spacing: 0.0225rem;
    div {
      cursor: pointer;
      flex: 1;
      border-radius: 0.125rem 0.125rem 0 0;
      background-color: #f0f2f5;
      height: 100%;
      text-align: center;
      line-height: 0.75rem;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
    }
    .line {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 0.0875rem;
      background-color: #4f87e6;
    }
    div.current {
      background-color: #fff;
      color: #4f87e6;
    }
  }
  .container {
    box-sizing: border-box;
    padding: 0.5rem 0.325rem 0.5rem 0.425rem;
    width: 15rem;
    // height: 13.3375rem;
    background-color: #fff;
    border-radius: 0rem 0.1rem 0.1rem 0.1rem;
    box-shadow: 0.025rem 0.025rem 0rem 0rem #e6f3ff;
    .item {
      h3{
        font-size: .325rem;
        font-weight: 400;
        color: #4374b9;
        display: flex;
        align-items: center;
        span{
          width: .675rem;
          height: .325rem;
          // background: #00b7d3;
          border-radius: .1rem;
          line-height: .325rem;
          text-align: center;
          margin-left: .375rem;
          color: #ffffff;
          font-size: .2125rem;
          display:inline-block;
        }
      }
      p{
        margin-top: .3375rem;
        padding-right: 0.4875rem;
        height: .75rem;
        font-size: .25rem;
        color: #aca8a8;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .imgs{
        display: flex;
        img{
          width: 2.7625rem;
          height: 1.8125rem;
        }
      }
    }
  }
}

</style>