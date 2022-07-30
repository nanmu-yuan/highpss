<template>
  <div class="box">
    <div class="top">
      <div class="ww clearfix">
        <div class="title fl">{{ info.introduction }}</div>
        <div class="list_show fr" @click="listShow = !listShow">
          <span class="iconfont icon-VideoList" style="font-size: 0.3rem; vertical-align: middle"></span
          ><span>课程列表</span>
        </div>
      </div>
    </div>
    <div class="ww">
      <div class="video_main">
        <div class="video_play fl">
          <!-- <d-player ref="video" id="player" :options="options"></d-player> -->
          <div id="dplayer" ref="player"></div>
        </div>
        <div class="video_list fr" v-show="listShow">
          <div class="course_item" v-for="(item, index) in cont_zj" :key="index">
            <div class="title">{{ item.title }}</div>
            <div class="course_list" v-for="(items, indexes) in item.courseDetail" :key="indexes">
              <div class="item" @click="changeVideo(items.id,type)">
                <div class="imgs fl">
                  <img :src="`https:${items.post}`" alt="" />
                </div>
                <div class="dsc fl chaotwo" :style="{ color: items.id == numId ? '#4f87e6' : '' }">
                  <p>{{ items.id }}--{{ items.title }} {{ items.introduction }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright_statement">
        <span style="color: #4f87e6">版权声明</span>
        <span
          >：本课程所含有的全部作品（包括但不限于课程音频、视频、课件、教材、试题等）著作权及邻接权归XXXXXXXXXXXXXXXX</span
        >
      </div>
      <div class="other clearfix">
        <!-- 教程 分段 -->
        <div class="other_left fl">
          <ul class="tabbar">
            <li @click="tabChange(1)">
              <span :style="{ color: tabIndex == 1 ? '#3474E1' : '' }">图文教程</span>
              <div class="line" v-show="tabIndex == 1"></div>
            </li>
            <li @click="tabChange(2)">
              <span :style="{ color: tabIndex == 2 ? '#3474E1' : '' }">视频分段</span>
              <div class="line" v-show="tabIndex == 2"></div>
            </li>
          </ul>
          <!-- 内容区 -->
          <div class="container">
            <!-- <langsiCommondetails ></langsiCommondetails> -->
            <div v-for="(item, index) in info.paragraphs" :key="index">
              <div v-if="item.paragraphType == 'PICTURE'" class="picture_box">
                <div :style="item.picture.nameStyle" style="margin: 48px 0 16px 0">
                  <h2 :style="`color:${item.picture.nameColor};fontSize:${item.picture.nameSize / 80}rem;`">
                    {{ item.picture.name }}
                  </h2>
                </div>
                <div :style="item.picture.contentStyle">
                  <p :style="`color:${item.picture.contentColor};fontSize:${item.picture.contentSize / 80}rem;`">
                    {{ item.picture.content }}
                  </p>
                </div>
                <img
                  :src="`https:${item.picture.url}`"
                  alt=""
                  :style="`width:${item.picture.weight / 80}rem;height:${item.picture.height / 80}rem;`"
                />
              </div>
              <div v-if="item.paragraphType == 'TEXT'" class="text_box">
                <div v-for="(items, indexs) in item.sentences" :key="indexs">
                  <!-- <div :style="items.style">
                      <p :style="`color:${items.color};fontSize:${items.size/80}rem;`">{{items.content}}</p>
                  </div> -->
                  <div>
                    <p>{{ items.content }}</p>
                  </div>
                </div>
              </div>
              <div v-if="item.paragraphType == 'AUDIO'" class="audio_box">
                <div :style="item.audio.nameStyle">
                  <h2 :style="`color:${item.audio.nameColor};fontSize:${item.audio.nameSize / 80}rem;`">
                    {{ item.audio.name }}
                  </h2>
                </div>
                <div :style="item.audio.contentStyle">
                  <p :style="`color:${item.audio.contentColor};fontSize:${item.audio.contentSize / 80}rem;`">
                    {{ item.audio.content }}
                  </p>
                </div>
                <audio :src="`https:${item.audio.url}`" controls="controls"></audio>
              </div>
              <div v-if="item.paragraphType == 'VIDEO'" class="video_box">
                <div :style="item.video.nameStyle">
                  <h2 :style="`color:${item.video.nameColor};fontSize:${item.video.nameSize / 80}rem;`">
                    {{ item.video.name }}
                  </h2>
                </div>
                <div :style="item.video.contentStyle">
                  <p :style="`color:${item.video.contentColor};fontSize:${item.video.contentSize / 80}rem;`">
                    {{ item.video.content }}
                  </p>
                </div>
                <video :src="`https:${item.video.url}`" controls="controls"></video>
              </div>
            </div>
          </div>
        </div>
        <!-- 推荐课程 -->
        <div class="recommend fr">
          <p>推荐课程</p>
          <ul>
            <li v-for="(item,index) in recommendList" :key="index" @click="startTest($event,item.path)">
              <div class="img"><img :src="item.img" alt=""></div>
              <div class="right_con">
                <span class="name">{{item.title}}</span>
                <span class="type">{{item.text}}</span>
                <span class="date">{{item.time}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import VueDPlayer from 'vue-dplayer'
// import 'vue-dplayer/dist/vue-dplayer.css'
import Dplyaer from 'dplayer'
export default {
  data() {
    return {
      numId: '',
      type:'',
      displayControlBar: false,
      listShow: true,
      tabIndex: 1,
      paragraphs: [],
      info: {},
      player: '',
      videopirce: [],
      cont_zj:[],
      recommendList: [
          {
            img: require('@/assets/image/langsi/kouyu.png'),
            title: '朗思口语保分班',
            text: '名师授课',
            time: '2022-11-12',
            path:'/langsiMouthSpecial'
          },
          {
            img: require('@/assets/image/langsi/quanke.png'),
            title: '朗思全科1V1',
            text: '朗思最快3天出分',
            time: '2022-11-12',
            path:'/langsiPractice1v1'
          },
          {
            img: require('@/assets/image/langsi/pigai.png'),
            title: '朗思写作批改',
            text: '名师批改',
            time: '2022-11-12',
            path:'/langsiCorrectionSpecial'
          },
          {
            img: require('@/assets/image/langsi/xunlian.png'),
            title: '朗思写作训练营',
            text: '作文头脑风暴',
            time: '2022-11-12',
            path:'/langsiWritingSpecial'
          },
          {
            img: require('@/assets/image/langsi/mokao.png'),
            title: '朗思全真模考',
            text: '全真模拟考场环境',
            time: '2022-11-12',
            path:'/langsiForecastSpecial'
          }
        ],
    }
  },
  mounted() {
    this.id = this.$route.query.id
    this.numId = this.$route.query.id
    this.type=this.$route.query.type
    if(this.$route.query.id!=''){
      this.getCoursedetailId(this.$route.query.id)
    }
    if(this.$route.query.id!=''){
      this.courseUrl(this.$route.query.url)
    }
    this.getCoursetype(this.$route.query.type)
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    courseUrl(id){
      this.loadVideo({ url: `https://${id}` })
    },
    //获取课程
    getCoursetype(type) {
      this.$api.getCoursetype(type).then((res) => {
        console.log(res.data.data)
        this.videopirce = res.data.data
        this.videopirce.forEach((item) => {
          this.getCoursecontent(item.id)
          
        })
      })
    },
    //获取章节
    getCoursecontent(id) {
      this.$api.getCoursecontent(id).then((res) => {
        this.cont_zj = res.data.data.chapters
      })
    },
    //获取每个章节下的文章
    getCoursedetailId(id) {
      this.$api.getCoursedetailId(id).then((res) => {
        if (res.data.code == 200) {
          console.log(res.data.data)
          this.info = res.data.data
          this.loadVideo({ url: `https://${res.data.data.url}` })
        }
      })
    },
    loadVideo(videoInfo) {
      this.dp = new Dplyaer({
        element: this.$refs.player,
        video: {
          url: videoInfo.url,
          type: 'customHls'
        }
      })
    },
    // 视频选择
    changeVideo(id,type) {
      this.numId=id
      console.log(this.numId)
      this.getCoursedetailId(id)
      this.$router.push({ path: '/video', query: { id,type } })
      console.log(id)
    },
    tabChange(index) {
      this.tabIndex = index
    },
    // 推荐课程路由跳转
    startTest(event, path) {
      if (path) {
        return this.$router.push(path)
      }
    },
  }
}
</script>
<style lang="less" scoped>
.el-slider {
  /deep/ .el-tooltip.el-slider__button {
    width: 0.175rem;
    height: 0.175rem;
    box-shadow: 0rem 0.0375rem 0.075rem 0rem rgba(0, 0, 0, 0.16);
    border: none !important;
  }

  /deep/ .el-slider__bar {
    background-color: #fff;
  }
}

.top {
  width: 100%;
  height: 0.825rem;
  line-height: 0.825rem;
  background-color: #fff;
  box-shadow: 0rem 0.0375rem 0.075rem 0rem rgba(212, 212, 212, 0.25);
}

.title {
  font-size: 0.3rem;
  // font-family: Microsoft YaHei, Microsoft YaHei-Regular;
  text-align: left;
  color: #4f87e6;
  letter-spacing: 0.03rem;
}

.list_show {
  font-size: 0.225rem;
  // font-family: Microsoft YaHei, Microsoft YaHei-Regular;
  text-align: left;
  color: #4f87e6;
  letter-spacing: 0.0225rem;
  cursor: pointer;
}

.video_main {
  width: 100%;
  height: 9.85rem;
  display: flex;
  position: relative;
  margin: 0.125rem 0;
  display: flex;

  .img {
    cursor: pointer;
    width: 1.925rem;
    height: 1.925rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .video_play {
    flex: 85.7;
    min-width: 15rem;
    max-width: 100%;
    height: 100%;
    position: relative;

    .dplayer {
      height: 100%;
    }

    video {
      width: 100%;
      height: 100%;
    }

    .function_bar {
      position: absolute;
      z-index: 40;
      bottom: 0;
      left: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0.25rem 0.325rem;
      display: flex;
      align-items: center;

      span {
        cursor: pointer;
        color: #fff;
        font-size: 0.375rem;
      }

      .play {
        color: #fff;
        font-size: 0.375rem;
      }

      .volume {
        margin-left: 0.3125rem;
      }

      .share,
      .full_screen {
        margin-left: 0.25rem;
      }

      .set {
        position: relative;
        width: 0.8rem;
        text-align: center;
        padding: 0 0 0 0.225rem;

        span {
          color: #fff;
          font-size: 0.325rem;
        }

        .timesSpe {
          position: absolute;
          bottom: 0.525rem;
          left: -0.075rem;
          width: 1.25rem;
          height: 2.5rem;
          background-color: #000;
          border-radius: 0.1rem;
          display: flex;
          flex-direction: column;
          align-items: center;

          span {
            font-size: 0.2rem;
            flex: 1;
            line-height: 0.5rem;
            cursor: pointer;
            width: 100%;
            text-align: center;
          }
        }
      }

      .video_proess {
        width: 12.5rem;
        float: left;
        margin-left: 0.25rem;
      }

      .volmue_proess {
        width: 1.125rem;
        float: left;
        margin-left: 0.25rem;
      }
    }
  }

  .video_list {
    flex: 14.3;
    // position: absolute;
    overflow-y: auto;

    // 整个滚动条
    &::-webkit-scrollbar {
      // display: none;
      width: 0.0625rem;
    }

    // 滚动条上的按钮 (上下箭头)
    &::-webkit-scrollbar-button {
      display: none;
    }

    // 滚动条上的滚动滑块
    &::-webkit-scrollbar-thumb {
      width: 0.0625rem;
      background-color: #fff;
      border-radius: 0.0313rem;
    }

    // 滚动条轨道
    &::-webkit-scrollbar-track {
      width: 0.0625rem;
      // background-color: transparent;
    }

    // 滚动条没有滑块的轨道部分
    &::-webkit-scrollbar-track-piece {
      background-color: transparent;
    }

    top: 0;
    right: 0;
    width: 2.5rem;
    height: 100%;
    background-color: #30353b;
    padding: 0 0.125rem 0.25rem 0.0625rem;
    box-sizing: border-box;

    .title {
      padding-top: 0.2375rem;
      font-size: 0.2rem;
      // font-family: Microsoft YaHei, Microsoft YaHei-Regular;
      text-align: left;
      color: #ffffff;
      letter-spacing: 0.02rem;
    }

    .item {
      margin-top: 0.075rem;
      height: 0.525rem;
      cursor: pointer;

      .imgs {
        width: 0.925rem;
        height: 0.525rem;
        background-color: skyblue;
      }

      .dsc {
        width: 1.1375rem;
        height: 0.4375rem;
        font-size: 0.175rem;
        // font-family: Microsoft YaHei, Microsoft YaHei-Regular;
        text-align: left;
        color: #ffffff;
        line-height: 0.2125rem;
        letter-spacing: 0.0175rem;
        margin-left: 0.15rem;
        box-sizing: border-box;
        margin-top: 0.05rem;
      }
    }
  }
}

.copyright_statement {
  width: 100%;
  font-size: 0.225rem;
  text-align: left;
  color: #172333;
  letter-spacing: 0.0225rem;
  padding: 0.275rem 0;
  background-color: #f7f7f7;
}

.other {
  width: 100%;
  margin: 1.325rem 0 1.75rem 0;

  .other_left {
    width: 11.85rem;
    background: #ffffff;
    box-shadow: 0rem 0.0375rem 0.075rem 0rem rgba(205, 225, 243, 0.19);

    .tabbar {
      height: 0.75rem;
      line-height: 0.75rem;
      padding: 0 0.175rem;
      border-bottom: 0.0125rem solid #e2e2e2;

      li {
        height: 100%;
        float: left;
        font-size: 0.25rem;
        font-weight: normal;
        color: #515151;
        letter-spacing: 0.025rem;
        margin-right: 0.5875rem;
        cursor: pointer;
      }

      .line {
        width: 0.6625rem;
        height: 0.05rem;
        background-color: #3474e1;
        border-radius: 0.025rem;
        margin: -0.1rem auto 0;
      }
    }
    .container {
      .picture_box,
      .text_box,
      .audio_box,
      .video_box {
        h2 {
          font-size: 0.3rem;
          padding-top: 0.125rem;
          text-align: center;
          font-weight: bold;
          color: #000000;
        }

        p {
          line-height: 0.375rem;
          font-size: 0.225rem;
          color: #505050;
          text-align: left;
          margin: 0 auto;
          width: 85%;
        }

        img,
        video {
          margin: 0 auto 0.425rem;
          width: 11.4125rem;
          height: 5.0875rem;
          display: block;
        }

        audio {
          display: block;
          margin: 0 auto 0.425rem;
        }
      }
    }
  }

  .recommend {
    width: 5.5rem;
    background: #ffffff;
    box-shadow: 0rem 0.0375rem 0.075rem 0rem rgba(205, 225, 243, 0.19);
    padding: 0 0.2125rem;
    box-sizing: border-box;

    p {
      font-size: 0.275rem;
      font-weight: 400;
      text-align: left;
      color: #4374b9;
      letter-spacing: 0.0138rem;
      padding: 0.2625rem 0;
    }

    ul {
      li {
        height: 1.1rem;
        display: flex;
        margin-bottom: 0.125rem;
        cursor: pointer;
        .img {
          width: 3.0625rem;
          height: 100%;
          background-color: skyblue;
          margin-right: 0.325rem;
        }

        .right_con {
          display: flex;
          flex-direction: column;
        }

        .name {
          font-size: 0.225rem;
          font-weight: 400;
          text-align: left;
          color: #202020;
        }

        .type,
        .date {
          font-size: 0.2rem;
          font-weight: 400;
          text-align: left;
          color: #b7b7b7;
          letter-spacing: 0.01rem;
        }
      }
    }
  }
}
</style>