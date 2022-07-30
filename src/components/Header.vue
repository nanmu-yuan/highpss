<template>
  <header>
    <div class="zoom">
      <span @click="iszoom=!iszoom">zoom</span>
      <ul v-show="iszoom">
        <li @click="zoomIn">zoom in</li>
        <li @click="zoomOut">zoom out</li>
        <li @click="reset">reset</li>
      </ul>
    </div>
    <button
      style="float: left;font-size: .2rem;margin:.0875rem .3rem;color:#000000;border-radius: .05rem;border: .0125rem solid #7C7C7C;background-color: #fff;padding: 0.025rem 0.1625rem;"
      class="iconfont icon-refresh"
      @click="refresh"
    > refresh</button>
    <button
      style="float: left;font-size: .2rem;margin:.0875rem .3rem;color:#000000;border-radius: .05rem;border: .0125rem solid #7C7C7C;background-color: #fff;padding: 0.025rem 0.1625rem;"
      @click="toHome"
    > 首页</button>
    <!-- 顶部标题 -->
    <div class="title clearfix">
      <div class="img fl">
        <img
          src="../assets/image/logo.png"
          alt="朗思教育"
        />
      </div>
      <!-- 朗思HigHPass模考系统 -->
      <div class="title_text fl">
        <p style="font-family: Source Han Sans CN;font-weight: 500;">栗子朗思 在线模考</p>
        <p>Lizi LanguageCert</p>
      </div>
    </div>
    <!-- 倒计时 -->
    <div
      class="countdown"
      v-if="!flag"
    >{{value}}</div>
  </header>
</template>
<script>
export default {
  props: ['start'],
  data() {
    return {
      flag: 0,
      maxtime: 3600 * 3 - 1200,
      value: '2:40:00',
      iszoom: false
    }
  },
  mounted() {
    this.flag = JSON.parse(sessionStorage.getItem('isAnalysis'))
    this.timer = setInterval(this.CountDown, 1000)
    window.addEventListener('beforeunload', e => this.beforeunloadHandler(e))
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    beforeunloadHandler(e) {
      this._beforeUnload_time = new Date().getTime()
      e = e || window.event
      if (e) {
        e.returnValue = '关闭提示'
      }
      return '关闭提示'
    },
    toHome() {
      this.$confirm('此操作将退出, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          sessionStorage.setItem('back', true)
          this.$router.push('/')
        })
        .catch(() => {
          console.log(2)
        })
    },
    refresh() {},
    // 放大
    zoomIn() {
      this.$parent.$parent.$parent.resize_window1()
    },
    // 缩小
    zoomOut() {
      this.$parent.$parent.$parent.resize_window2()
    },
    // 重置
    reset() {
      this.$parent.$parent.$parent.resize_window3()
    },
    CountDown() {
      if (this.maxtime >= 0) {
        let hour = Math.floor(this.maxtime / 3600)

        let minutes = Math.floor((this.maxtime % 3600) / 60)
        if (minutes < 10) minutes = '0' + minutes

        let seconds = Math.floor(this.maxtime % 60)
        if (seconds < 10) seconds = '0' + seconds

        this.value = hour + ':' + minutes + ':' + seconds

        if (this.maxtime == 5 * 60) alert('距离结束仅剩5分钟')

        --this.maxtime
      } else {
        clearInterval(this.timer)

        alert('时间到，结束!')
      }
    }
  }
}
</script>
<style lang="less" scoped>
header {
  position: relative;
  height: 1.25rem;
  line-height: 1.25rem;
  border-bottom: 0.0125rem solid #000;
  .zoom {
    margin-top: 0.025rem;
    float: right;
    width: 1.225rem;
    margin-right: 0.25rem;
    border: 0.0125rem solid #000;
    position: relative;
    height: 0.3125rem;
    line-height: 0.3125rem;
    text-align: center;
    border-radius: 0.05rem 0.05rem 0 0;
    color: #000000;
    font-size: 0.2rem;
    cursor: pointer;
    ul {
      width: 100%;
      position: absolute;
      z-index: 1;
      top: 0.3rem;
      left: -0.0125rem;
      border: 0.0125rem solid #000;
      border-top: none;
      font-size: 0.175rem;
      background-color: #fff;
      li {
        width: 100%;
        cursor: pointer;
        height: 0.2875rem;
        line-height: 0.2875rem;
      }
    }
  }
  .title {
    margin: auto;
    width: 5.75rem;
    font-size: 0.4375rem;
    color: #484848;
  }
  .countdown {
    position: absolute;
    top: 0.575rem;
    right: 0.25rem;
    width: 1.4rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    color: #ffff;
    font-size: 0.3125rem;
    border-radius: 0.075rem;
    background-color: #4f87e6;
    box-shadow: 0.0375rem 0.0375rem 0rem rgba(0, 0, 0, 0.16);
  }
  .img {
    height: 1.15rem;
    width: 1.15rem;
    margin-top: 0.075rem;
    margin-right: 0.25rem;
  }
  .title_text {
    margin-top: 0.25rem;
    p {
      font-family: KaiTi;
      line-height: normal;
      font-size: 0.4375rem;
    }
    p:last-child {
      font-size: 0.175rem;
      text-align: right;
    }
  }
}
</style>