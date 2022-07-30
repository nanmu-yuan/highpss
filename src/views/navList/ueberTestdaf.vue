<template>
  <div class="box">
    <div class="list">
      <div
        class="item"
        @click="showImg(index+1)"
        @mouseenter="imgEnter(index+1)"
        @mouseleave="imgLeave(index+1)"
        v-for="(item,index) in list"
        :key="index"
        :style="{'background':`url(${item.bgImg}) no-repeat center`}"
      >
        <div class="mask"></div>
        <p :class="index==2?'third':''">{{item.title}}</p>
        <button
          :style="{color:item.color}"
          :class="{blue:index == 2||index==4}"
        >{{item.contain}}</button>
        <img
          src="@/assets/image/code.png"
          alt=""
          class="img"
          v-show="imgNums[index].imgNum==index+1||imgNums[index].flag"
        >
      </div>
    </div>
    <div
      class="codeDialog"
      v-show="dialog"
    >
      <span
        class="iconfont icon-guanbi1"
        @click="closeDialog"
      ></span>
      <img
        src="@/assets/image/code.png"
        alt=""
      >
      <p>关注公众号领取资料！</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      list: [
        {
          title: '朗思词汇机经',
          contain: '领取资料',
          bgImg: require('@/assets/image/beikao/1.png'),
          color: '#f06520'
        },
        {
          title: '朗思口语题本',
          contain: '领取资料',
          bgImg: require('@/assets/image/beikao/2.png'),
          color: '#ee352d'
        },
        {
          title: '朗思口语参考回答',
          contain: '公众号查看',
          bgImg: require('@/assets/image/beikao/3.png'),
          color: '#4f87e6'
        },
        {
          title: '朗思全科预测',
          contain: '咨询购买',
          bgImg: require('@/assets/image/beikao/4.png'),
          color: '#f3954d'
        },
        {
          title: '朗思考试样题',
          contain: '领取资料',
          bgImg: require('@/assets/image/beikao/5.png'),
          color: '#ee352d'
        },
        {
          title: '朗思B2套题',
          contain: '领取资料',
          bgImg: require('@/assets/image/beikao/6.png'),
          color: '#fd6b44'
        },
        {
          title: '口语在线题库',
          contain: '小程序查看',
          bgImg: require('@/assets/image/beikao/7.png'),
          color: '#e03b58'
        },
        {
          title: '写作在线题库',
          contain: '小程序查看',
          bgImg: require('@/assets/image/beikao/8.png'),
          color: '#f06520'
        }
      ],
      imgNums: [
        {
          imgNum: 0,
          flag: false
        },
        {
          imgNum: 0,
          flag: false
        },
        {
          imgNum: 0,
          flag: false
        },
        {
          imgNum: 0,
          flag: false
        },
        {
          imgNum: 0,
          flag: false
        },
        {
          imgNum: 0,
          flag: false
        },
        {
          imgNum: 0,
          flag: false
        },
        {
          imgNum: 0,
          flag: false
        }
      ]
    }
  },
  methods: {
    open() {
      this.dialog = true
    },
    closeDialog() {
      this.dialog = false
    },
    imgLeave(index) {
      this.imgNums[index - 1].imgNum = 0
    },
    imgEnter(index) {
      this.imgNums[index - 1].imgNum = index
    },
    showImg(index) {
      this.imgNum = index
      this.imgNums[index - 1].flag = !this.imgNums[index - 1].flag
    }
  }
}
</script>
<style lang="less" scoped>
.codeDialog {
  .iconfont {
    position: absolute;
    top: 0.125rem;
    right: 0.125rem;
    font-size: 0.35rem;
    font-weight: 700;
    color: #ccc;
    cursor: pointer;
  }
  position: fixed;
  top: 1.625rem;
  left: 50%;
  transform: translate(-50%);
  z-index: 3;
  width: 5.375rem;
  height: 6rem;
  background-color: #fff;
  border-radius: 0.125rem;
  text-align: center;
  box-shadow: 0rem 0.0375rem 0.1875rem rgba(79, 135, 230, 0.3);
  img {
    width: 4.5rem;
    height: 4.5rem;
    margin-top: 0.5rem;
  }
  p {
    padding: 0.25rem 0;
    font-size: 0.3rem;
    font-weight: 700;
  }
}
.list {
  width: 20.05rem;
  margin: 0 auto 1.6875rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item {
  background-size: 4.9375rem 3.9625rem !important;
  width: 4.375rem;
  height: 3.375rem;
  box-shadow: 0rem 0.0375rem 0.1875rem rgba(79, 135, 230, 0.28);
  margin-top: 0.8rem;
  border-radius: 0.125rem;
  position: relative;
  .mask {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
  }
  .third {
    margin-top: 0.3rem !important;
    padding: 0 0.75rem !important;
    margin-bottom: 0.375rem !important;
  }
  .img {
    width: 58%;
    height: 74%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  p {
    font-size: 0.625rem;
    // font-family: FZBiaoZhiS-R-GB;
    font-weight: 400;
    color: #ffffff;
    text-align: center;
    margin: 1rem 0 0.475rem 0;
    padding: 0 0.125rem;
  }
  button {
    display: block;
    margin: auto;
    padding: 0 0.2125rem;
    height: 0.825rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 0.1875rem;
    font-size: 0.4rem;
    // font-family: FZFW Qing Yin TiS E;
    font-weight: 400;
    box-shadow: 0.025rem 0.05rem 0 0.025rem #fdc51d;
  }
  .blue {
    box-shadow: 0.025rem 0.05rem 0 0.025rem #4f87e6;
  }
}
</style>