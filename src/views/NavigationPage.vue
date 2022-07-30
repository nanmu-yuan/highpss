<template>
  <el-container style="height: 100vh">
    <el-header>
      <div class="zoom" :class="{ z_index: num == 3 }">
        <span>zoom</span>
        <ul v-show="false">
          <li>zoom in</li>
          <li>zoom out</li>
          <li>reset</li>
        </ul>
      </div>
      <!-- 顶部标题 -->
      <div class="title clearfix">
        <div class="img fl">
          <img src="../assets/image/logo.png" alt="朗思教育" />
        </div>
        <!-- 朗思HigHPass模考系统 -->
        <div class="title_text fl">
          <p style="font-family: Source Han Sans CN; font-weight: 500">栗子朗思 在线模考</p>
          <p>Lizi LanguageCert</p>
        </div>
      </div>
      <!-- 倒计时 -->
      <div class="countdown" :class="{ z_index: num == 1 }">2:40:00</div>
    </el-header>
    <el-container class="center">
      <el-aside width="3.05rem ">
        <!-- 听 -->
        <div class="listen">
          <div class="listen_title">Listening</div>
          <div class="listen_contain">
            <div class="item" v-for="(item, indexs) in route.listen" :key="item.id">
              <img :src="img1" alt="" style="position: relative" :class="{ z_index: num == 4 && indexs == 0 }" />
              <router-link :to="{ path: item.path }"
                ><span :class="{ current: indexs == 0 }">Listening Part {{ indexs + 1 }}</span></router-link
              >
            </div>
          </div>
        </div>
        <!-- 读 -->
        <div class="read">
          <div class="read_title">Reading</div>
          <div class="read_contain">
            <div class="item" v-for="(item, indexs) in route.read" :key="item.id">
              <img :src="img1" />
              <router-link :to="{ path: item.path }"
                ><span>Reading Part {{ indexs + 1 }}</span></router-link
              >
            </div>
          </div>
        </div>
        <!-- 写 -->
        <div class="write">
          <div class="write_title">Writing</div>
          <div class="write_contain">
            <div class="item" v-for="(item, indexs) in route.write" :key="item.id">
              <img :src="img1" />
              <router-link :to="{ path: item.path }"
                ><span>Writing Part {{ indexs + 1 }}</span></router-link
              >
            </div>
          </div>
        </div>
      </el-aside>
      <el-main>
        <!-- <PartTop :isShow="true" /> -->
        <div>
          <!-- 音频控件 -->
          <div class="listens" :class="{ z_index: num == 5 }">
            <audio ref="audio">
              <source src="" type="audio/mpeg" autoplay="autoplay" />
            </audio>
            <!-- 播放按钮 -->
            <div class="play-vol">
              <span
                :class="'play iconfont icon-bofang'"
                style="color: #f9390c; font-size: 0.35rem; cursor: pointer"
              ></span>
              <!-- 音量调节 -->
              <div class="volume-control fr">
                <span class="iconfont icon-shengyin_shiti" style="font-size: 0.35rem; cursor: pointer"></span>
                <el-slider></el-slider>
              </div>
            </div>
            <!-- 进度 -->
            <el-progress :percentage="0"></el-progress>
          </div>
          <!-- 上一页 下一页 -->
          <div class="pre_next">
            <button class="fr" style="margin-left: 0.25rem">Next</button>
            <button class="fr">Previous</button>
          </div>
          <!-- 提示 -->
          <div class="prompt">
            <div class="prompt_head fl"></div>
            <div class="prompt_contain fl">
              <slot
                >You will hear some conversations. You will hear each conversation twice.Choose the correct answers for
                each conversation.</slot
              >
            </div>
          </div>
        </div>
        <div class="test">
          <ListenTest
            :subjectList="subjectList"
            :correct="correct"
            :answer="answer"
            :analysis="analysis"
            :submitError="submitError"
            :num="num"
          />
        </div>
      </el-main>
    </el-container>
    <el-footer>
      <button class="submit" :class="{ z_index: num == 2 }">submit</button>
    </el-footer>
    <div class="mask"></div>
    <!-- 下一步 -->
    <div class="navBtn">
      <button @click="next">下一步</button>
      <span @click="jump">跳过导航</span>
    </div>
    <!-- 导航一 -->
    <div class="first" v-if="num == 1">
      <div class="oval"></div>
      <img src="@/assets/image/1.png" alt="" />
      <p>此处显示考试剩余时间</p>
    </div>
    <!-- 导航二 -->
    <div class="second" v-if="num == 2">
      <div class="oval"></div>
      <img src="@/assets/image/2.png" alt="" />
      <p>试卷填写完成后点击此处提交</p>
    </div>
    <!-- 导航三 -->
    <div class="third" v-if="num == 3">
      <div class="oval"></div>
      <img src="@/assets/image/3.png" alt="" />
      <p>点击此处可调节页面字体大小 或恢复到默认设置</p>
    </div>
    <!-- 导航四 -->
    <div class="fourth" v-if="num == 4">
      <div class="oval"></div>
      <img src="@/assets/image/4.png" alt="" />
      <p>当题答完后变色</p>
    </div>
    <!-- 导航五 -->
    <div class="fifth" v-if="num == 5">
      <div class="oval"></div>
      <img src="@/assets/image/5.png" alt="" />
      <p>听力播放时您可以滑动此处 以调节音量大小</p>
    </div>
    <!-- 导航六 -->
    <div class="sixth" v-if="num == 6">
      <div class="oval"></div>
      <img src="@/assets/image/6.png" alt="" />
      <p>点击选项即可选择答案，选择后答案变色</p>
    </div>
  </el-container>
</template>
<script>
import PartTop from '@/components/PartTop.vue'
import ListenTest from '@/components/ListenTest.vue'
export default {
  data() {
    return {
      num: 1,
      subjectList: [],
      correct: [],
      analysis: [],
      submitError: {},
      img1: require('@/assets/image/flag.png'),
      img2: require('@/assets/image/flag1.png'),
      route: {
        listen: [
          { id: 1, path: 'listen_part1' },
          { id: 2, path: 'listen_part2' },
          { id: 3, path: 'listen_part3' },
          { id: 4, path: 'listen_part4' }
        ],
        read: [
          { id: 5, path: 'read_part1' },
          { id: 6, path: 'read_part2' },
          { id: 7, path: 'read_part3' },
          { id: 8, path: 'read_part4' }
        ],
        write: [
          { id: 9, path: 'write_part1' },
          { id: 10, path: 'write_part2' }
        ]
      },
      answer: []
    }
  },
  created() {
    this.getListen()
  },
  methods: {
    getListen() {
      this.$api.getListen(1).then((res) => {
        if (res.data.code == 200) {
          this.subjectList = res.data.data.infos.questionsInfo
        }
      })
    },
    // 下一步
    next() {
      this.num++
      if (this.num == 7) {
        this.$router.push('listen_part1')
      }
    },
    // 跳过
    jump() {
      this.$api.noviceRefusedToKnow().then((res) => {
        if (res.data.code == 200) {
          this.$router.push('listen_part1')
        }
      })
    }
  },
  components: { PartTop, ListenTest }
}
</script>
<style lang="less" scoped>
.z_index {
  z-index: 10001;
}
.first {
  position: fixed;
  top: 0.3rem;
  right: 0.075rem;
  .oval {
    position: absolute;
    top: 0;
    right: 0;
    width: 1.8rem;
    height: 1rem;
    border-radius: 80%;
    opacity: 0.9;
    background-color: #fff;
  }
  img {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    width: 2.5rem;
    height: 2.5rem;
  }
  p {
    position: absolute;
    top: 4rem;
    right: 1.875rem;
    width: 3.8125rem;
    height: 0.45rem;
    font-size: 0.225rem;
    font-family: FZSJ-SNH48HTTJW;
    font-weight: 400;
    line-height: 0.4125rem;
    color: #ffffff;
    letter-spacing: 0.125rem;
  }
  z-index: 10000;
}
.second {
  position: fixed;
  bottom: 0.05rem;
  right: 0.125rem;
  z-index: 10000;
  .oval {
    position: absolute;
    bottom: -0.15rem;
    right: 0.1125rem;
    width: 1.8rem;
    height: 1rem;
    border-radius: 80%;
    opacity: 0.9;
    background-color: #fff;
  }
  img {
    position: absolute;
    bottom: 0.575rem;
    right: 1.25rem;
    width: 2.5rem;
    height: 2.5rem;
  }
  p {
    position: absolute;
    bottom: 2.4375rem;
    right: 3.875rem;
    width: 4.6875rem;
    height: 0.45rem;
    font-size: 0.225rem;
    font-family: FZSJ-SNH48HTTJW;
    font-weight: 400;
    line-height: 0.4125rem;
    color: #ffffff;
    letter-spacing: 0.125rem;
  }
}
.third {
  position: fixed;
  top: 0.3rem;
  right: 0.075rem;
  .oval {
    position: absolute;
    top: -0.3rem;
    right: 0.15rem;
    width: 1.375rem;
    height: 0.625rem;
    border-radius: 80%;
    opacity: 0.9;
    background-color: #fff;
  }
  img {
    position: absolute;
    top: 0.125rem;
    right: 1.25rem;
    width: 2.5rem;
    height: 2.5rem;
  }
  p {
    position: absolute;
    top: 2.5rem;
    right: 2.25rem;
    width: 3.8125rem;
    height: 0.45rem;
    font-size: 0.225rem;
    font-family: FZSJ-SNH48HTTJW;
    font-weight: 400;
    line-height: 0.4125rem;
    color: #ffffff;
    letter-spacing: 0.125rem;
  }
  z-index: 10000;
}
.fourth {
  position: fixed;
  top: 1.875rem;
  left: 0rem;
  .oval {
    position: absolute;
    top: 0rem;
    left: 0rem;
    width: 0.925rem;
    height: 0.8125rem;
    border-radius: 80%;
    opacity: 0.9;
    background-color: #fff;
  }
  img {
    position: absolute;
    top: 0.725rem;
    left: 0.95rem;
    width: 2.5rem;
    height: 2.5rem;
  }
  p {
    position: absolute;
    top: 2.875rem;
    left: 3.925rem;
    width: 3.8125rem;
    height: 0.45rem;
    font-size: 0.225rem;
    font-family: FZSJ-SNH48HTTJW;
    font-weight: 400;
    line-height: 0.4125rem;
    color: #ffffff;
    letter-spacing: 0.125rem;
  }
  z-index: 10000;
}
.fifth {
  position: fixed;
  top: 1.225rem;
  left: 39%;
  transform: translateX(-50%);
  .oval {
    position: absolute;
    top: 0.075rem;
    left: -1.495rem;
    width: 6.55rem;
    height: 1.25rem;
    border-radius: 80%;
    opacity: 0.9;
    background-color: #fff;
  }
  img {
    position: absolute;
    top: 1.3rem;
    left: 1.45rem;
    width: 2.5rem;
    height: 2.5rem;
  }
  p {
    position: absolute;
    top: 3.875rem;
    left: 3.425rem;
    width: 3.8125rem;
    height: 0.45rem;
    font-size: 0.225rem;
    font-family: FZSJ-SNH48HTTJW;
    font-weight: 400;
    line-height: 0.4125rem;
    color: #ffffff;
    letter-spacing: 0.125rem;
  }
  z-index: 10000;
}
.sixth {
  position: fixed;
  top: 4.5rem;
  left: 5rem;
  transform: translateX(-50%);
  .oval {
    position: absolute;
    top: 0.075rem;
    left: -2.025rem;
    width: 20.9rem;
    height: 1.4625rem;
    border-radius: 80%;
    opacity: 0.9;
    background-color: #fff;
  }
  img {
    position: absolute;
    top: 1.3rem;
    left: 0.475rem;
    width: 2.5rem;
    height: 2.5rem;
  }
  p {
    position: absolute;
    top: 3.875rem;
    left: 0.475rem;
    width: 5rem;
    height: 0.45rem;
    font-size: 0.225rem;
    font-family: FZSJ-SNH48HTTJW;
    font-weight: 400;
    line-height: 0.4125rem;
    color: #ffffff;
    letter-spacing: 0.125rem;
  }
  z-index: 10000;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  background-color: rgba(80, 80, 80, 0.9);
}
.navBtn {
  position: fixed;
  z-index: 10000;
  width: 1.5rem;
  bottom: 0.625rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  button {
    display: block;
    width: 1.5rem;
    height: 0.625rem;
    border: 2px solid #ffffff;
    border-radius: 0.1rem;
    font-size: 0.325rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #fff;
    background: rgba(0, 0, 0, 0);
    margin-bottom: 0.25rem;
  }
  span {
    font-size: 0.275rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #fff;
    cursor: pointer;
  }
}
.current {
  background-color: #4f87e6 !important;
  color: #fff;
}
.el-header {
  position: relative;
  height: 1.275rem !important;
  line-height: 1.275rem;
  .zoom {
    margin-top: 0.125rem;
    float: right;
    width: 0.825rem;
    margin-right: 0.25rem;
    border: 1px solid #000;
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
      border: 1px solid #000;
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
    color: #000;
  }
  .countdown {
    position: absolute;
    top: 0.575rem;
    right: 0.25rem;
    width: 1.375rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    color: #ffff;
    font-size: 0.275rem;
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
.center {
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  height: 9.125rem;
}
.el-main {
  height: 100%;
  overflow-y: auto;
}
.el-aside {
  height: 100%;
  overflow: hidden !important;
  background-color: #f5f5f5;
  padding: 0.2rem 0.125rem;
  box-sizing: border-box;
  color: #5d5d5d;
  border-right: 1px solid #000;
  .listen,
  .read,
  .write {
    margin-bottom: 0.5rem;
  }
  .listen_title,
  .read_title,
  .write_title {
    font-size: 0.275rem;
    font-weight: 700;
  }
  .listen_contain,
  .read_contain,
  .write_contain {
    .item {
      display: flex;
      height: 0.5rem;
      line-height: 0.5rem;
      margin: 0.125rem auto;
      box-sizing: content-box;
      a {
        width: 1.6rem;
        display: inline-block;
        padding-right: 0.325rem;
      }
      span {
        display: inline-block;
        height: 0.5rem;
        width: 100%;
        line-height: 0.5rem;
        border: 1px solid #000;
        border-radius: 0.1rem;
        padding: 0 0.125rem;
        background-color: #fff;
        font-size: 0.225rem;
      }
      img {
        width: 0.5rem;
        height: 0.5rem;
        margin: 0 0.25rem 0.075rem 0;
      }
    }
  }
}
.test {
  width: 100%;
  /deep/ .text_title {
    width: 100%;
    min-height: 0.625rem;
    border: 1px solid #000;
    border-radius: 0.125rem;
    div:first-child {
      width: 9%;
      height: 100%;
      font-size: 0.4375rem;
      line-height: 0.625rem;
      text-align: center;
      font-weight: 700;
      color: #5d5d5d;
      border-right: none;
    }
    div:last-child {
      width: 91%;
      line-height: 0.625rem;
      padding: 0 0.25rem;
      color: #484848;
      font-size: 0.25rem;
    }
  }
  /deep/ .test_item {
    width: 90%;
    min-height: 0.625rem;
    margin: 0.35rem auto;
    border: 1px solid #000;
    border-radius: 0.125rem;
    cursor: pointer;
    div:first-child {
      width: 9%;
      height: 100%;
      font-size: 0.4375rem;
      line-height: 0.625rem;
      text-align: center;
      font-weight: 700;
      color: #5d5d5d;
      border-right: none;
    }
    div:last-child {
      width: 91%;
      line-height: 0.625rem;
      padding: 0 0.25rem;
      color: #484848;
      font-size: 0.25rem;
    }
  }
}
.el-footer {
  height: 0.875rem;
  .submit {
    position: relative;
    float: right;
    margin: 0.15rem 0.2rem 0 0;
    width: 1.325rem;
    height: 0.55rem;
    background-color: #4f87e6;
    box-shadow: 0.0375rem 0.0375rem 0rem rgba(0, 0, 0, 0.16);
    border-radius: 0.075rem;
    font-size: 0.25rem;
    font-family: Microsoft YaHei;
    font-weight: bold;
    line-height: 0.325rem;
    color: #ffffff;
  }
}
.listens {
  position: relative;
  float: left;
  width: 21%;
  height: 0.8rem;
  border: 1px solid #000;
  border-radius: 0.1rem;
  margin: 0 auto;
  margin-left: 26%;
  display: flex;
  flex-direction: column;
  .play-vol {
    flex: 9;
    display: flex;
    align-items: center;
  }
  .el-progress {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    /deep/ .el-progress-bar {
      width: 114%;
      margin-right: -0.75rem;
    }
    /deep/ .el-progress__text {
      display: none;
    }
  }
  .play {
    flex: 1;
    padding-left: 0.175rem;
  }
  .volume-control {
    flex: 9;
    display: flex;
    align-items: center;
    span {
      flex: 1;
      padding: 0 0.125rem;
    }
    .el-slider {
      flex: 9;
      padding-right: 0.3rem;
    }
  }
}
.pre_next {
  float: right;
  margin: 0.375rem 0 0.25rem 0;
  width: 24%;
  top: 0;
  right: 4%;
  button {
    width: 40%;
    height: 0.5rem;
    font-size: 0.325rem;
    line-height: 0.5rem;
    background-color: #4f87e6;
    border-radius: 0.0625rem;
    color: #ffffff;
  }
}
.prompt {
  width: 100%;
  min-height: 0.75rem;
  margin: 0.3125rem auto;
  border-radius: 0.1rem;
  overflow: hidden;
  display: flex;
  .prompt_head {
    flex: 2;
    min-height: 0.75rem;
    background-color: #7c7c7c;
  }
  .prompt_contain {
    flex: 18;
    min-height: 0.75rem;
    font-size: 0.35rem;
    color: #484848;
    padding: 0.1rem 0.25rem;
    background-color: #f5f5f5;
  }
}
</style>