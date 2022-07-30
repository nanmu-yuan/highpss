<template>
  <div class="box">
    <!-- 写作训练营 -->
    <div class="trainingCamp clearfix">
      <div class="banner fl">
        <img
          :src="info.bannerImg"
          alt=""
        >
      </div>
      <div class="neirong fl">
        <h1>{{info.title}}</h1>
        <div>
          <p>课程时间：2022.05.18-2022.05.30</p>
          <p class="time">课程报名倒计时：{{countdown}}</p>
        </div>
        <div class="price">￥2988</div>
        <button @click="open">速抢名额</button>
      </div>
    </div>
    <slot name="top"></slot>
    <!-- 名师授课区 -->
    <div class="toSolveProblem">
      <detailItem></detailItem>
      <!-- <div
        class="item"
        v-for="(item,index) in list"
        :key="index"
      >
        <div class="title">
          <div class="circle"></div>
          <div class="line">
            <p>{{index+1}}. {{item.title}}</p>
          </div>
        </div>
         <div class="dsc">
          <p
            class="introduce"
            v-html="item.contain"
          ></p>
          <div
            class="teacher"
            v-if="index == 0"
          >
            <div class="base_info">
              <img
                :src="item.teacherPicture"
                alt=""
                class="fl"
              >
              <div class="fr">
                <p class="p1">{{item.uname}}</p>
                <p class="p2">{{item.speaker}}</p>
              </div>
            </div>
            <div class="teacher_introduce">
              <p
                v-for="(items,indexs) in item.baseInfo"
                :key="indexs"
              >{{items}}</p>
            </div>
          </div>
        </div>
      </div> -->
      <slot name="sentiment"></slot>
      <div
        class="item"
        v-if="!isShow"
      >
        <!-- 标题 -->
        <div class="title">
          <div class="circle"></div>
          <div class="line">
            <p> 6. 课程安排</p>
          </div>
        </div>
        <!-- 内容 -->
        <div class="dsc">
          <p class="introduce">
          </p>
          <div class="teacher">
            <img
              src="@/assets/image/write/curriculum.png"
              alt=""
              style="width:11.9rem;height:24.275rem;margin:0 auto;display: block;"
            >
          </div>
        </div>
      </div>
    </div>
    <slot name="dsc"></slot>
    <!-- 右边漂浮 -->
    <div
      class="scroll_img"
      v-show="imgShow"
    >
      <img
        src="@/assets/image/write/logo.png"
        alt=""
      >
      <img
        class="code"
        src="@/assets/image/highpass.png"
        alt=""
      >
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
      <p>关注公众号速抢名额！</p>
    </div>
  </div>
</template>
<script>
import detailItem from './detailItem.vue'
export default {
  props: {
    info: Object,
    list: Array,
    isShow: Boolean
  },
  data() {
    return {
      imgShow: false,
      countdown: '',
      timer: '',
      dialog: false
    }
  },
  components: { detailItem },
  mounted() {
    window.addEventListener('scroll', this.scroll)
    this.CountDown('2022/6/10')
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    open() {
      this.dialog = true
    },
    closeDialog() {
      this.dialog = false
    },
    scroll() {
      // 获取滚动值
      var scroll_top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      // 控制台查看滚动值
      if (scroll_top > 426) {
        return (this.imgShow = true)
      }
      this.imgShow = false
    },
    // 倒计时
    CountDown(time) {
      this.timer = setInterval(() => {
        let nowtime = new Date() //获取当前时间
        let endtime = new Date(time) //定义结束时间
        let lefttime = endtime.getTime() - nowtime.getTime() //距离结束时间的毫秒数
        let day = Math.floor(lefttime / (1000 * 60 * 60 * 24)) //计算天数
        let hour = Math.floor((lefttime / (1000 * 60 * 60)) % 24) //计算小时数
        let minute = Math.floor((lefttime / (1000 * 60)) % 60) //计算分钟数
        let second = Math.floor((lefttime / 1000) % 60) //计算秒数
        if (day <= 0 && hour <= 0 && minute <= 0 && second <= 0) {
          return (this.countdown = `0 天 0 小时 0 分钟 0 秒`)
        }
        this.countdown = `${day} 天 ${hour} 小时 ${minute} 分钟 ${second} 秒`
      }, 1000)
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
.time {
  width: 100%;
}
.trainingCamp {
  margin: 0.6rem auto 1.2rem;
  width: 22.5rem;
  .banner {
    float: left;
    width: 15.8rem;
    height: 7.525rem;
  }
  .neirong {
    float: right;
    width: 6.25rem;
    h1 {
      font-size: 0.7rem;
      font-weight: bold;
      line-height: 0.925rem;
      color: #05265d;
      margin: 0.9375rem 0 1.1rem 0;
    }
    p {
      font-size: 0.3125rem;
      font-weight: 400;
      line-height: 0.4125rem;
      color: #9f9f9f;
      margin-bottom: 0.125rem;
    }
    .price {
      font-size: 0.5625rem;
      font-weight: bold;
      line-height: 0.75rem;
      color: #f58042;
      margin: 0.575rem 0 0.425rem 0;
    }
    button {
      width: 3.0375rem;
      height: 0.9rem;
      background: rgba(79, 135, 230, 1);
      border-radius: 0.1rem;
      font-size: 0.4375rem;
      font-weight: 400;
      color: #ffffff;
    }
  }
}
.toSolveProblem {
  width: 19.75rem;
  margin: 0 auto;
  .item {
    margin-bottom: 0.4375rem;
  }
  .title {
    position: relative;
    height: 1.1rem;
    .circle {
      position: absolute;
      z-index: 1;
      width: 1.1rem;
      height: 1.1rem;
      background: #ffa277;
      border-radius: 50%;
    }
    .line {
      position: absolute;
      top: 0.775rem;
      left: 0.55rem;
      min-width: 2.875rem;
      width: auto;
      height: 0.325rem;
      background: #ffd6d7;
      border-radius: 0.1rem;
      padding-right: 0.25rem;
    }
    p {
      position: relative;
      z-index: 1;
      left: 0.075rem;
      top: -0.3125rem;
      font-size: 0.4375rem;
      font-weight: 700;
      color: #000000;
    }
  }
  .dsc {
    width: 16.5rem;
    .introduce {
      font-size: 0.35rem;
      color: #000000;
      margin: 0.25rem 0 1.375rem;
      padding-left: 0.55rem;
      padding-right: 0.625rem;
      border: 1px solid transparent;
    }
    .teacher {
      margin: 0 auto;
      width: 12.375rem;
      margin-top: 2.15rem;
      .base_info {
        width: 12.375rem;
        height: 2.425rem;
        position: relative;
        background-color: #ffa277;
        border-radius: 0.1875rem;
        img {
          position: absolute;
          bottom: 0;
          left: 0.125rem;
          width: auto;
          height: auto;
        }
        div {
          width: 9.225rem;
          text-align: center;
          color: #fff;
          margin-top: 0.325rem;
        }
        .p1 {
          font-size: 0.675rem;
          font-weight: bold;
          line-height: 0.8875rem;
        }
        .p2 {
          font-size: 0.45rem;
          line-height: 0.5875rem;
        }
      }
      .teacher_introduce {
        width: 11.9625rem;
        height: auto;
        background: #fffaf5;
        box-shadow: 0rem 0.0375rem 0.075rem rgba(0, 0, 0, 0.16);
        border-radius: 0.1875rem;
        font-size: 0.3125rem;
        font-weight: 400;
        line-height: 0.4125rem;
        color: #434a54;
        padding: 0.1875rem 0.8rem;
        box-sizing: border-box;
        margin: 0 auto;
        p {
          padding: 0.1875rem 0;
        }
      }
    }
  }
}
.scroll_img {
  width: 3.15rem;
  height: 3.15rem;
  position: fixed;
  right: 0;
  top: 7rem;
  .code {
    position: absolute;
    z-index: 1;
    top: 1.375rem;
    left: 1.45rem;
    width: 0.85rem;
    height: 0.85rem;
  }
}
</style>