<template>
  <div>
    <!-- 音频控件 -->
    <div
      class="listen"
      v-if="isShow"
    >
      <audio
        ref="audio"
        rossOrigin=“anonymous”
        @timeupdate="timeupdateFunc"
        @canplay="canplayFunc"
      >
        <source
          :src="audio"
          type="audio/mpeg"
        />
      </audio>
      <!-- 播放按钮 -->
      <div class="play-vol">
        <span
          :class="flag ? 'play iconfont icon-zanting' : 'play iconfont icon-bofang'"
          style="color: #f9390c; font-size: .35rem; cursor: pointer"
        ></span>
        <!-- 音量调节 -->
        <div class="volume-control fr">
          <span
            :class="is_muted ? 'iconfont icon-jingyin' : 'iconfont icon-shengyin_shiti'"
            style="font-size: .35rem; cursor: pointer"
            @click="muted"
          ></span>
          <el-slider
            v-model="value"
            @input="volume"
            :show-tooltip="false"
          ></el-slider>
        </div>
      </div>
      <!-- 进度 -->
      <el-progress
        :percentage="audioValue"
        :format="format"
      ></el-progress>
    </div>
    <!-- 提示 -->
    <div class="prompt">
      <div class="prompt_head fl"></div>
      <div class="prompt_contain fl">
        <slot>You will hear some conversations. You will hear each conversation twice.Choose the correct answers for each conversation.</slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isShow: Boolean,
    audio: String
  },
  data() {
    return {
      num: 0, // 计数器
      // 音量
      value: 40,
      // 是否播放
      flag: false,
      // 是否静音
      is_muted: false,
      nav_change: '',
      duration: '',
      audioValue: 0,
      timer: '',
      id: 1,
      progress: 0,
      start: false,
      isAnalysis: false
    }
  },
  mounted() {
    // this.start = JSON.parse(sessionStorage.getItem('start'))
    this.isAnalysis = JSON.parse(sessionStorage.getItem('isAnalysis'))
    // this.play()
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    timeupdateFunc(e) {
      this.audioValue = isNaN(Math.ceil((e.target.currentTime / this.totalTimes) * 100)) ? 0 : Math.ceil((e.target.currentTime / this.totalTimes) * 100)
      // this.audioValue += 5
      this.currentTime = e.target.currentTime
    },
    canplayFunc(e) {
      this.totalTimes = e.target.duration // 无
    },
    // 播放
    play() {
      console.log('lcxlcxsss')
      if (this.start) return
      if (this.isAnalysis) return
      setTimeout(() => {
        this.$refs.audio.load()
        console.log('sasa')
        this.$refs.audio.play()
      }, 500)
    },
    // 音量控制
    volume() {
      this.$refs.audio.volume = this.value / 100
    },
    // 静音
    muted() {
      this.$refs.audio.muted = !this.$refs.audio.muted
      this.is_muted = !this.is_muted
    },
    format() {
      return ''
    }
  }
}
</script>
<style lang="less" scoped>
.listen {
  overflow: hidden;
  width: 2.825rem;
  height: 0.55rem;
  border: 0.0125rem solid #707070;
  border-radius: 0.1rem;
  margin: 0.225rem auto;
  display: flex;
  flex-direction: column;
  .play-vol {
    flex: 9;
    height: 0.475rem;
    display: flex;
    align-items: center;
  }
  .el-progress {
    /deep/ .el-progress-bar {
      width: 100%;
      margin-bottom: 0.125rem;
      padding: 0;
    }
  }
  .play {
    flex: 1;
    padding-left: 0.175rem;
    font-size: 0.3rem !important;
  }
  .volume-control {
    flex: 9;
    display: flex;
    align-items: center;
    span {
      flex: 1;
      padding: 0 0.125rem;
      font-size: 0.3rem !important;
    }
    .el-slider {
      flex: 9;
      padding-right: 0.3rem;
      /deep/ .el-slider__button {
        width: 0.15rem;
        height: 0.15rem;
      }
    }
  }
}
.pre_next {
  float: right;
  margin: 0.2rem 0 0 0;
  width: 3.5rem;
  button {
    width: 1.375rem;
    height: 0.4125rem;
    font-size: 0.25rem;
    background-color: #4f87e6;
    border-radius: 0.0625rem;
    color: #ffffff;
  }
}
.prompt {
  width: 100%;
  min-height: 0.5rem;
  margin: 0.3125rem auto;
  border-radius: 0.1rem;
  overflow: hidden;
  display: flex;
  .prompt_head {
    flex: 2;
    min-height: 0.5rem;
    background-color: #7c7c7c;
  }
  .prompt_contain {
    flex: 18;
    display: flex;
    align-items: center;
    min-height: 0.5rem;
    font-size: 0.25rem;
    color: #484848;
    padding: 0.1rem 0.25rem;
    background-color: #f5f5f5;
  }
}
</style>
