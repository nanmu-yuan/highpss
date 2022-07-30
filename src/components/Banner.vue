<template>
  <div class="box">
    <div class="trainingCamp clearfix">
      <div class="banner fl">
        <img :src="info.bannerImg" alt="" />
      </div>
      <div class="neirong fl">
        <h1>{{ info.title }}</h1>
        <div v-if="sign">
          <p>课程时间：2022.05.18-2022.05.30</p>
          <p class="time">课程报名倒计时：{{ countdown }}</p>
        </div>
        <div>
          <slot name="con"></slot>
        </div>
        <div class="price" v-if="sign">￥2988</div>
        <button @click="opens">{{ info.btn }}</button>
      </div>
    </div>
    <!-- 右边漂浮 -->
    <div class="scroll_img" v-show="imgShow && show">
      <p>
        <img src="@/assets/image/write/right.png" alt="" />
      </p>
      <p>
        <img src="@/assets/image/write/code.png" alt="" />
      </p>
    </div>
    <div class="codeDialog" v-show="dialog">
      <span class="iconfont icon-guanbi1" @click="closeDialog"></span>
      <img src="@/assets/image/code.png" alt="" />
      <p>关注公众号速抢名额！</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    info: Object,
    sign: Boolean
  },
  data() {
    return {
      imgShow: false,
      countdown: '',
      timer: '',
      dialog: false,
      show: false,
      vshow: false,
      ishow: false
    }
  },
  created() {
    const arr = ['/langsiSpoken', '/langsiWrite']
    arr.forEach((item) => {
      if (this.$route.fullPath == item) {
        this.show = false
      } else {
        this.show = true
      }
    })
    if (this.$route.fullPath == '/lsMoldTest') {
      this.vshow = true
      this.ishow = false
    } else {
      this.vshow = false
      this.ishow = true
    }
  },
  // beforeRouteEnter(to, from, next) {
  //   const arr = ['/langsiSpoken', '/langsiWrite', '/langsigeneral']
  //   next((vm) => {
  //     arr.forEach((item) => {
  //       if (to.path == item) {
  //         vm.show = false
  //       } else {
  //         vm.show = true
  //       }
  //     })
  //   })
  // },
  // beforeRouteUpdate(to, from, next) {
  //   const arr = ['/langsiSpoken', '/langsiWrite', '/langsigeneral']
  //   arr.forEach((item) => {
  //     if (to.path == item) {
  //       this.show = false
  //     } else {
  //       this.show = true
  //     }
  //   })
  //   next()
  // },
  mounted() {
    this.CountDown('2022/6/10')
    window.addEventListener('scroll', this.scroll)
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    scroll() {
      // 获取滚动值
      var scroll_top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      // 控制台查看滚动值
      if (scroll_top > 426) {
        return (this.imgShow = true)
      }
      this.imgShow = false
    },
    open() {
      this.dialog = true
    },
    closeDialog() {
      this.dialog = false
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
    },
    // 开始模考
    startTest() {
      this.$router.push('SingleExercise')
    },
    opens() {
      if (this.sign) {
        this.open()
      } else {
        this.startTest()
      }
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
.scroll_img {
  z-index: 999;
  position: fixed;
  right: 0.15rem;
  top: 50%;
  p:nth-child(1) {
    position: absolute;
    right: -0.125rem;
    bottom: 2.18rem;
    width: 4.5125rem;
    height: 3.625rem;
  }
  p:nth-child(2) {
    width: 2.8125rem;
    height: 2.8125rem;
    background: #61cdff;
    box-shadow: 0px 0.0375rem 0.125rem 1px rgba(0, 0, 0, 0.16);
    border-radius: 0.1875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
}
.trainingCamp {
  margin: 0.6rem 0 1.2rem;
  padding: 0 0 0 0.75rem;
  width: 100%;
  background-color: #f5f7fa;
  box-sizing: border-box;
  .banner {
    float: left;
    width: 15.8rem;
    height: 7.525rem;
  }
  .neirong {
    width: 6.25rem;
    margin-left: 0.8125rem;
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
      margin-top: 0.425rem;
    }
  }
  .time {
    width: 100%;
  }
}
</style>