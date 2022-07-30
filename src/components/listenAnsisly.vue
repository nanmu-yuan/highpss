<template>
  <div class="phone">
    <img src="@/assets/image/q.png" alt="" />
    <div class="con">
      <p class="title">
        <span @click="tabChange(0)" :style="tabNum == 0 ? 'color:#4F87E6' : ''">原文</span>
        <span @click="tabChange(1)" :style="tabNum == 1 ? 'color:#4F87E6' : ''">精听</span>
      </p>
      <div class="content_up" v-show="!isBlindlisten">
        <span class="numberPages fl">第1/30句</span>
        <div class="translation fr" @click="translation" :class="{ current: whetherTranslation }" style="cursor: pointer"><span class="iconfont icon-Translate"></span><span>翻译</span></div>
      </div>
      <div class="content">
        <!-- 文章 -->
        <div v-if="!isBlindlisten">
          <!-- 单句 -->
          <div v-show="modelTabNum == 0">
            <div v-for="item in sentences" :key="item.id" style="margin-bottom: 20px">
              <p v-html="item.lyricsEn" style="color: #000000" :style="{ color: item.beginTime <= formatCurrentTime1 && item.endTime >= formatCurrentTime1 ? '#2AD16B' : '' }"></p>
              <p v-html="item.lyricsCn" style="color: #989898" v-if="whetherTranslation && modelTabNum == 0"></p>
            </div>
          </div>
          <!-- 对话 -->
          <div v-show="modelTabNum == 1">
            <div v-for="item in paragraphs" :key="item.id" style="margin-bottom: 20px">
              <!-- 原文 -->
              <p>
                <span class="uname">{{ item.name }}：</span>
                <span :style="{ color: item.beginTime <= formatCurrentTime1 && item.endTime >= formatCurrentTime1 ? '#2AD16B' : '' }">{{ item.contentEn }}</span>
              </p>
              <!-- 译文 -->
              <p v-if="whetherTranslation && modelTabNum == 1">
                <span class="uname">{{ item.name }}：</span>
                <span style="color: #989898">{{ item.contentCn }}</span>
              </p>
            </div>
          </div>
          <!-- 答案句 -->
          <div v-show="modelTabNum == 2">
            <div v-for="item in answerIs" :key="item.id" style="margin-bottom: 20px">
              <p v-html="item.lyricsEn" style="color: #000000" :style="{ color: item.beginTime <= formatCurrentTime1 && item.endTime >= formatCurrentTime1 ? '#2AD16B' : '' }"></p>
              <p v-html="item.lyricsCn" style="color: #989898" v-if="whetherTranslation && modelTabNum == 2"></p>
            </div>
          </div>
        </div>
        <!-- 盲听 -->
        <div v-if="isBlindlisten" class="blind_listen">
          <div class="item">
            <span>1</span>
            <div>
              <span class="iconfont icon-bofang"></span>
              <input type="range" />
              <span style="font-size: 12px; transform: scale(0.8); color: #4f87e6">10</span>
            </div>
          </div>
        </div>
      </div>
      <div class="tabbar">
        <el-slider class="progress" v-model="playProcess" :show-tooltip="false" @change="audioChange"></el-slider>
        <div class="timesSpe">
          <div class="options" v-show="timesShow">
            <p v-for="item in options" :key="item.id" @click="timesSpeChange(item.label, item.value)">{{ item.label }}</p>
          </div>
          <p style="font-size: 0.2rem; color: #4f87e6; cursor: pointer" @click="timesShow = !timesShow">{{ value }}</p>
          <p style="font-size: 0.15rem; color: #989898">倍速</p>
        </div>
        <audio ref="audio" @timeupdate="timeupdateFunc" @canplay="canplayFunc">
          <source :src="audioUrl" type="audio/mpeg" />
        </audio>
        <div class="cc"><span class="iconfont icon-yduishangyiqu"></span></div>
        <div class="cc">
          <div class="time">{{ formatCurrentTime }} / {{ formatDuration }}</div>
          <span class="iconfont icon-bofang" @click="clickFunc('play')" v-show="!isPlay"></span>
          <span class="iconfont icon-zanting" @click="clickFunc('pause')" v-show="isPlay"></span>
        </div>
        <div class="cc"><span class="iconfont icon-yduixiayiqu"></span></div>
        <div class="blindTo" v-show="tabNum == 0" @click="blindlisten">
          <p><span class="iconfont icon-touting" :class="{ current: isBlindlisten }"></span></p>
          <p style="font-size: 0.15rem; color: #989898" :class="{ current: isBlindlisten }">盲听</p>
        </div>
        <div class="model" v-show="tabNum == 1">
          <div class="model_tab" v-show="modelTabShow">
            <div :class="{ current: modelTabNum == 0 }"><span class="iconfont icon-xiaoxi" :class="{ current: modelTabNum == 0 }" @click="sentence(0)"></span><span>单句</span></div>
            <div :class="{ current: modelTabNum == 1 }"><span class="iconfont icon-duihuakuang" :class="{ current: modelTabNum == 1 }" @click="dialogue(1)"></span><span>对话</span></div>
            <div :class="{ current: modelTabNum == 2 }"><span class="iconfont icon-mofazimuke" :class="{ current: modelTabNum == 2 }" style="font-size: 16px" @click="answer(2)"></span><span>答案句</span></div>
            <div :class="{ current: iscycle }"><span class="iconfont icon-24gl-repeatOnce2" :class="{ current: iscycle }" @click="iscycle = !iscycle"></span><span>单句循环</span></div>
          </div>
          <p><span class="iconfont icon-shezhi" @click="modelTabShow = !modelTabShow"></span></p>
          <p style="font-size: 0.15rem; color: #989898">模式</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
function toStringFunc(param) {
  if (param > 9) {
    return param + ''
  } else {
    return '0' + param
    // return param + ''
  }
}
export default {
  props: {
    partId: Number
  },
  data() {
    return {
      tabNum: 0,
      timesShow: false,
      isPlay: false,
      totalTimes: 0,
      playProcess: 0,
      currentTime: 0,
      isgreen: true,
      whetherTranslation: false, //是否翻译
      iscycle: false, //是否循环
      value: '1.0x',
      options: [{
          id: 1,
          label: '1.5x',
          value: 1.5
        },
        {
          id: 2,
          label: '1.25x',
          value: 1.25
        },
        {
          id: 3,
          label: '1.x',
          value: 1.0
        },
        {
          id: 4,
          label: '0.75x',
          value: 0.75
        }
      ],
      audioUrl: '',
      paragraphs: [],
      answerIs: [], //答案句
      sentences: [], //单句
      modelTabShow: false,
      modelTabNum: 1,
      isBlindlisten: false
    }
  },
  mounted() {
    this.getListenAudio(this.partId)
  },
  computed: {
    formatDuration() {
      if (typeof this.totalTimes == 'number') {
        let fTotal = Math.floor(this.totalTimes)
        let tempMin = Math.floor(fTotal / 60)
        let tempSec = fTotal % 60
        return `${toStringFunc(tempMin)}:${toStringFunc(tempSec)}`
      }
      return '00:00'
    },
    formatCurrentTime() {
      if (typeof this.currentTime == 'number') {
        let fTotal = Math.floor(this.currentTime)
        let tempMin = Math.floor(fTotal / 60)
        let tempSec = fTotal % 60
        return `${toStringFunc(tempMin)}:${toStringFunc(tempSec)}`
      }
      return '00:00'
    },
    formatCurrentTime1() {
      if (typeof this.currentTime == 'number') {
        let fTotal = Math.floor(this.currentTime)
        let tempMin = Math.floor(fTotal / 60)
        let tempSec = fTotal % 60
        return `${tempMin}.${toStringFunc(tempSec)}`
      }
      return '0.00'
    }
  },
  methods: {
    // 获取听力音频
    getListenAudio(id) {
      this.$api.getListenAudio(id).then((res) => {
        if (res.data.code == 200) {
          console.log(res.data.data)
          this.audioUrl = res.data.data.conversationUrl
          this.$refs.audio.load()
          this.paragraphs = res.data.data.paragraphs
          // 获取单句
          let arr2 = []
          this.paragraphs.forEach((item) => {
            arr2 = arr2.concat(item.sentences)
          })
          this.sentences = arr2
          // 获取答案句
          let arr = []
          this.paragraphs.forEach((item) => {
            if (item.isAnswerPara) {
              arr = arr.concat(item.sentences)
            }
          })
          let arr1 = arr.filter((item) => {
            return item.isAnswerSent
          })
          this.answerIs = arr1
        }
      })
    },

    // tab切换
    tabChange(i) {
      this.tabNum = i
    },
    // 翻译
    translation() {
      this.whetherTranslation = !this.whetherTranslation
    },
    // 倍速选择
    timesSpeChange(val, value) {
      this.value = val
      this.$refs.audio.playbackRate = value
      this.timesShow = false
    },
    // 播放 、 暂停
    clickFunc(val) {
      if (val == 'play') {
        this.isPlay = true
        this.play()
      } else if (val == 'pause') {
        this.isPlay = false
        this.pause()
      }
    },
    // 滑动进度
    formatTooltip(val) {
      return val / 100
    },
    audioChange(val) {
      // this.$refs.audio.currentTime = val
      // this.play()
    },
    // 单句
    sentence(num) {
      this.modelTabNum = num
      this.whetherTranslation = false
    },
    // 对话
    dialogue(num) {
      this.modelTabNum = num
      this.whetherTranslation = false
    },
    // 答案句
    answer(num) {
      this.modelTabNum = num
      this.whetherTranslation = false
    },
    // 单曲循环
    cycle(num) {
      this.modelTabNum = num
    },
    // 播放
    play() {
      this.$refs.audio.play()
    },
    // 暂停
    pause() {
      this.$refs.audio.pause()
    },
    // 盲听
    blindlisten() {
      this.isBlindlisten = !this.isBlindlisten
    },
    canplayFunc(e) {
      this.totalTimes = e.target.duration
    },
    timeupdateFunc(e) {
      this.playProcess = (e.target.currentTime / this.totalTimes) * 100
      this.currentTime = e.target.currentTime
    }
  }
}
</script>

<style lang="less" scoped>
.phone {
  position: fixed;
  top: 2.75rem;
  right: 0.975rem;
  height: 8.9rem;

  .current {
    color: #4f87e6 !important;
  }

  .con {
    position: absolute;
    top: 0.975rem;
    left: 1.475rem;
    width: 3.35rem;
    height: 6.8rem;
    border-radius: 0 0 0.175rem 0.175rem;
    overflow: hidden;
  }

  .title {
    text-align: center;
    font-size: 0.2rem;
    font-weight: 400;
    line-height: 0.4875rem;
    color: #5d5d5d;

    span {
      padding: 0 17px;
      cursor: pointer;
    }
  }

  .content_up {
    padding: 0 0.1875rem;
    height: 0.4rem;
    line-height: 0.4rem;
    background-color: #fbfbfb;
    font-size: 0.175rem;
    font-weight: 400;
    color: #5d5d5d;

    .iconfont {
      font-size: 0.275rem;
      vertical-align: middle;
    }
  }

  .content {
    width: 100%;
    height: 5.375rem;
    font-size: 0.2rem;
    font-family: Segoe UI;
    line-height: 0.3125rem;
    padding: 0.25rem 0.1875rem;
    box-sizing: border-box;
    overflow-y: auto;

    .uname {
      color: #989898;
      font-weight: 700;
    }

    span {
      color: #000000;
    }

    .blind_listen {
      .item {
        height: 34px;
        line-height: 34px;
        margin-bottom: 14px;
        display: flex;

        div {
          margin-left: 10px;
          width: 215px;
          background-color: #f0f6ff;
          border-radius: 0.1rem;
          display: flex;
          padding: 0 10px;
          box-sizing: border-box;

          span {
            flex: 1;
          }

          input {
            vertical-align: middle;
            flex: 8;
          }
        }
      }
    }
  }

  .tabbar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.55rem;
    background-color: #fff;
    box-shadow: 0rem -0.0125rem 0.125rem 0.0125rem rgba(0, 0, 0, 0.09);
    display: flex;

    .progress {
      position: absolute;
      top: -0.225rem;
      left: 0;
      width: 100%;
      padding: 0 0.075rem;
      box-sizing: border-box;

      /deep/ .el-slider__bar {
        height: 0.025rem;
        background-color: #bcd5ff;
      }

      /deep/ .el-slider__button {
        width: 0.15rem;
        height: 0.15rem;
        border: none;
        background-color: #fff;
        box-shadow: 0rem 0.0125rem 0.075rem 0.0125rem rgba(0, 0, 0, 0.16);
      }

      /deep/ .el-slider__runway {
        height: 0;
        margin: 0.2rem 0;
      }

      /deep/ .el-slider__button-wrapper {
        width: 0.45rem;
        height: 0.45rem;
        top: -0.225rem;
      }
    }

    span {
      cursor: pointer;
    }

    &>div {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;

      .iconfont {
        font-size: 0.25rem;
        color: #707070;
      }
    }

    .cc {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;

      .iconfont {
        font-size: 0.325rem;
        color: #707070;
      }

      .time {
        text-align: center;
        width: 170%;
        font-size: 0.15rem;
        transform: scale(0.6);
      }
    }

    .timesSpe {
      position: relative;

      .options {
        position: absolute;
        bottom: 0.55rem;
        left: 0rem;
        width: 0.75rem;
        height: 1.25rem;
        background: #ffffff;
        box-shadow: 0rem 0.0375rem 0.075rem rgba(79, 135, 230, 0.15);
        border-radius: 0.0625rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0 0.1rem;
        box-sizing: border-box;
        text-align: center;
        font-size: 0.1875rem;
        font-weight: 400;
        color: #7c7c7c;

        p {
          cursor: pointer;
        }
      }
    }

    .model_tab {
      position: absolute;
      bottom: 0.5925rem;
      left: 0;
      height: 0.55rem;
      width: 100%;
      display: flex;
      background-color: #fbfbfb;

      div {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        font-size: 0.125rem;
        color: #989898;

        &:nth-child(3) {
          padding-top: 0.0625rem;
        }

        span:last-child {
          transform: scale(0.8);
        }

        .iconfont {
          font-size: 0.3rem;
        }
      }
    }
  }
}
</style>