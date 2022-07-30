<template>
  <div class="box">
    <div class="hader">
      <img src="@/assets/image/langsi/xiebannder.png" alt="" />
      <p class="bannder_text1">朗思写作遇到瓶颈？栗⼦朗思名师为你⽀招！</p>
      <h2>朗思写作批改</h2>
      <div class="pic">
        <p>课程价格：<span>￥2688 </span>/</p>
        <p>原价：<span>￥5688</span></p>
      </div>
      <div class="bannder_btn" @click="open">咨询课程详情</div>
    </div>
    <div class="cont">
      <div class="cnt_nav" :class="{ tab_nav: isSticky }">
        <div class="nav_list" v-for="(item, index) in nav_list" :key="index">
          <p @click="tabChange(index)" style="cursor: pointer" :style="{ color: num == index ? '#4F87E6' : '' }">
            {{ item.text }}
          </p>
          <span v-show="num == index"></span>
        </div>
      </div>

      <!-- 写作批改服务亮点 -->
      <div class="cnt_box1">
        <div class="title">
          <img src="@/assets/image/zhuanti/LIZI languageCert.png" alt="" />
          <h1>写作批改服务亮点</h1>
        </div>
        <ul>
          <li>
            <div class="fl text">
              <div class="h4">48小时内快速批改，精确标注</div>
              <p>写作批改服务，帮你找出失分点，突破写作障碍，</p>
              <p>只需要24～48小时，实现写作快速提分！</p>
            </div>
            <div class="fr">
              <img src="@/assets/image/langsi/liang1.png" alt="" />
            </div>
          </li>
          <li>
            <div class="fl">
              <img src="@/assets/image/langsi/liang2.png" alt="" />
            </div>
            <div class="fr text">
              <div class="h4">自研写作题库，对标朗思考试内容</div>
              <p>考生在样题中选择朗思写作题目，按时完成，在线提交。</p>
              <p>老师将从朗思写作评分标准出发，对考生的文章进行审阅。</p>
            </div>
          </li>
          <li>
            <div class="fl text">
              <div class="h4">词汇、语法、结构、行文思路名师指路</div>
              <p>改掉词汇使用不当，语法错误，语句不连贯，段落不通顺，</p>
              <p>及中式思维等写作高频问题，逐渐提高你的英文写作能力！</p>
            </div>
            <div class="fr">
              <img src="@/assets/image/langsi/liang3.png" alt="" />
            </div>
          </li>
          <li>
            <div class="fl">
              <img src="@/assets/image/langsi/liang4.png" alt="" />
            </div>
            <div class="fr text">
              <div class="h4">助力朗思考生突破写作瓶颈</div>
              <p>48小时内完成批改，传授地道的写作词汇，揭示朗思写作的精髓，</p>
              <p>帮你迅速突破写作瓶颈，提升写作成绩！</p>
            </div>
          </li>
        </ul>
      </div>
      <!-- 批改服务 -->
      <div class="cnt_box2">
        <div :style="{ background: `url(${xtbj}) no-repeat` }">
          <div class="title">
            <img src="@/assets/image/zhuanti/LIZI languageCert.png" alt="" />
            <h1>批改服务</h1>
          </div>
          <ul>
            <li>
              <i></i>
              <div>
                <img src="@/assets/image/langsi/pi1.png" alt="" />
              </div>
              <p class="small_tit">语法词汇精细批改</p>
            </li>
            <li>
              <i></i>
              <div>
                <img src="@/assets/image/langsi/pi2.png" alt="" />
              </div>
              <p class="small_tit">人工批改</p>
            </li>
            <li>
              <i></i>
              <div>
                <img src="@/assets/image/langsi/pi3.png" alt="" />
              </div>
              <p class="small_tit">写作思路拓展</p>
            </li>
            <li>
              <i></i>
              <div>
                <img src="@/assets/image/langsi/pi4.png" alt="" />
              </div>
              <p class="small_tit">专业表达范例推荐</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 为什么选择朗思写作批改 -->
      <div class="cnt_box3">
        <div class="title">
          <img src="@/assets/image/zhuanti/LIZI languageCert.png" alt="" />
          <h1>为什么选择朗思写作批改</h1>
        </div>
        <ul>
          <li>
            <div class="img">
              <img src="@/assets/image/langsi/lsts1.png" alt="" />
            </div>
            <div class="text">
              <h2>快速提分</h2>
              <p>
                考生习作批改，结合朗思考试评分标准，从词汇，语法，链接和行文逻辑四个维度，给出改正意见。<br />同时点评失分原因，分析题⽬完成度，⽂章结构，和语⾔表达。
              </p>
            </div>
          </li>
          <li>
            <div class="text">
              <h2>名师执笔</h2>
              <p>
                老师拥有多年雅思写作授课及雅思作文批改经验，近几年开始专注于朗思教学，<br />教研，具有丰富的朗思写作授课，学生习作批改及点评经验。
              </p>
            </div>
            <div class="img">
              <img src="@/assets/image/langsi/lsts2.png" alt="" />
            </div>
          </li>
        </ul>
      </div>
      <!-- 功课朗思作文 -->
      <div class="cnt_box4">
        <div>
          <img class="img1" src="@/assets/image/write_pigai/toGuideThe2.png" alt="" />
          <img class="img2" src="@/assets/image/write_pigai/toGuideThe3.png" alt="" />
          <img class="img3" src="@/assets/image/write_pigai/toGuideThe1.png" alt="" />
          <img class="img4" src="@/assets/image/write_pigai/toGuideThe4.png" alt="" />
          <div class="title">
            <img src="@/assets/image/zhuanti/LIZI languageCert.png" alt="" />
            <h1>功课朗思作文</h1>
          </div>
          <ul>
            <li>
              <img src="@/assets/image/write_pigai/homework.png" alt="" />
            </li>
            <li>
              <img src="@/assets/image/write_pigai/homework1.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <!-- 考生成绩反馈 -->
      <div class="cnt_box5">
        <div class="title">
          <img src="@/assets/image/zhuanti/LIZI languageCert.png" alt="" />
          <h1>考生成绩反馈</h1>
        </div>
        <ul>
          <li v-for="(item, index) in box6tab_list" :key="index">
            <img src="@/assets/image/langsi/ren.png" class="ren_zheng" alt="" />
            <img :src="item.imgUrl" alt="" />
          </li>
        </ul>
      </div>
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
  data() {
    return {
      num: 0,
      isSticky: false,
      offsetTop: 0,
      xtbj: require('@/assets/image/langsi/xtbj3.png'),
      dialog: false,
      nav_list: [
        { text: '项目亮点' },
        { text: '项目服务' },
        { text: '项目特色' },
        { text: '批改实例' },
        { text: '成绩反馈' }
      ],

      box6tab_list: [
        {
          imgUrl: require('@/assets/image/write_pigai/results1.png')
        },
        {
          imgUrl: require('@/assets/image/write_pigai/results2.png')
        },
        {
          imgUrl: require('@/assets/image/write_pigai/results3.png')
        },
        {
          imgUrl: require('@/assets/image/write_pigai/results4.png')
        },
        {
          imgUrl: require('@/assets/image/write_pigai/results5.png')
        },
        {
          imgUrl: require('@/assets/image/write_pigai/results6.png')
        }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scroll)
    this.offsetTop = document.querySelector('.cont').offsetTop
  },
  methods: {
    // 获取每个模块距离页面顶部的距离
    getdistance() {
      let list = document.querySelectorAll('.cont>div')
      let lists = [...list]
      lists.splice(0, 1)
      const offsetTopArr = []
      lists.forEach((item) => {
        offsetTopArr.push(item.offsetTop)
      })
      return offsetTopArr
    },
    tabChange(index) {
      this.num = index
      const arr = this.getdistance()
      document.documentElement.scrollTop = arr[index] - 140
    },
    scroll() {
      // 获取滚动值
      let scroll_top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      const arr = this.getdistance()
      for (let i = 0; i < arr.length; i++) {
        if (scroll_top >= arr[i] - 200) {
          this.num = i
        }
      }
      // 控制台查看滚动值
      if (scroll_top > 110) {
        return (this.isSticky = true)
      }
      this.isSticky = false
    },
    open() {
      this.dialog = true
    },
    closeDialog() {
      this.dialog = false
    }
  }
}
</script>
<style lang="less" scoped>
.tab_nav {
  position: sticky;
  top: 1.375rem;
  z-index: 1000;
}
.box {
  .hader {
    height: 5.625rem;
    background: #e6f3ff;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    .pic {
      position: absolute;
      top: 2.7375rem;
      left: 13.4625rem;
      display: flex;
      align-items: center;
      p:nth-child(1) {
        color: #f12a7e;
        font-size: 0.325rem;
        span {
          display: inline-block;
          font-weight: bold;
          font-size: 0.5rem;
          margin-right: 0.375rem;
        }
      }
      p:nth-child(2) {
        color: #000000;
        font-size: 0.325rem;
        padding-left: 0.375rem;
        span {
          text-decoration: line-through;
        }
      }
    }
    h2 {
      position: absolute;
      left: 13.4625rem;
      top: 1.4375rem;
      font-weight: 700;
      font-size: 0.6rem;
      color: #4374b9;
    }
    .bannder_text1 {
      font-size: 0.25rem;
      position: absolute;
      top: 0.325rem;
      left: 15.825rem;
      color: #4374b9;
    }
    .bannder_text2 {
      position: absolute;
      left: 14.0625rem;
      top: 3.525rem;
      font-size: 0.25rem;
      color: #0071b8;
    }
    .bannder_btn {
      position: absolute;
      top: 4.175rem;
      left: 13.4625rem;
      width: 3.375rem;
      height: 0.6rem;
      background: #da2370;
      border-radius: 0.3rem;
      font-size: 0.25rem;
      color: #ffffff;
      line-height: 0.6rem;
      text-align: center;
      cursor: pointer;
    }
  }
  .cont {
    .cnt_nav {
      height: 0.7375rem;
      background: #ffffff;
      z-index: 10;
      box-shadow: 0 0.0375rem 0.075rem 0 #e6f3ff;
      padding: 0 3.25rem;
      display: flex;
      align-items: center;
      .nav_list {
        width: 1rem;
        height: 100%;
        line-height: 0.7375rem;
        color: #051123;
        font-size: 0.25rem;
        margin-right: 0.825rem;
        position: relative;
        span {
          width: 100%;
          position: absolute;
          left: 0;
          bottom: 0;
          height: 0.075rem;
          background: #4f87e6;
          border-radius: 0.0375rem 0.0375rem 0 0;
          display: block;
        }
      }
      .active {
        color: #4f87e6;
      }
    }
    .cnt_box1 {
      width: 17.5rem;
      padding-bottom: 2.175rem;
      margin: 0 auto;
      text-align: center;
      .lcx();
      ul {
        width: 100%;
      }
      li {
        width: 100%;
        height: 4.8125rem;
        & > div {
          width: 8.75rem;
          height: 100%;
        }
        .text {
          padding-top: 1.05rem;
          box-sizing: border-box;
        }
        .h4 {
          height: 0.5rem;
          font-size: 0.375rem;
          font-family: Microsoft YaHei, Microsoft YaHei-Bold;
          font-weight: 700;
          text-align: right;
          color: #4f87e6;
          line-height: 0.5625rem;
          margin-bottom: 0.425rem;
        }
        p {
          font-size: 0.25rem;
          font-family: Microsoft YaHei, Microsoft YaHei-Regular;
          font-weight: 400;
          text-align: right;
          color: #8f8f8f;
          line-height: 0.5625rem;
        }
      }
    }
    .lcx {
      .title {
        position: relative;
        margin-bottom: 0.7125rem;
        margin-top: 0.8625rem;
        img {
          width: 4.9125rem;
          height: 0.75rem;
        }
        h1 {
          position: absolute;
          top: 0.35rem;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.45rem;
          font-family: Microsoft YaHei, Microsoft YaHei-Bold;
          font-weight: 700;
          color: #3a466b;
        }
      }
    }
    .cnt_box2 {
      width: 100%;
      height: 7.1375rem;
      background: #fafdff;
      & > div {
        width: 100%;
        padding: 0 3.25rem;
        box-sizing: border-box;
        margin: 0 auto;
        padding-top: 1px;
        height: 100%;
      }
      text-align: center;
      background-color: #fafdff;
      .lcx();
      ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      li:nth-child(1) div {
        width: 1.85rem;
        height: 1.3875rem;
      }
      li {
        width: 4rem;
        height: 3.175rem;
        background: #ffffff;
        border-radius: 0.1875rem;
        box-shadow: 0px 0.0375rem 0.125rem 0px #c0d8ff;

        position: relative;
        i {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 0.275rem;
          background: #4f87e6;
          border-radius: 0.1875rem 0.1875rem 0px 0px;
        }
        div {
          margin: 0.5875rem auto 0.225rem;
          width: 1.475rem;
          height: 1.475rem;
          display: flex;
          justify-content: center;
          .img {
            width: 1.475rem;
          }
        }

        .small_tit {
          width: 100%;
          font-weight: 700;
          font-size: 0.3rem;
          color: #4374b9;
        }
      }
    }
    .cnt_box3 {
      width: 17.5rem;
      margin: 0 auto 1.25rem;
      text-align: center;
      .lcx();
      ul {
        li {
          width: 17.5rem;
          height: 3.125rem;
          background: #ffffff;
          border-radius: 0.1875rem;
          box-shadow: 0px 0.0375rem 0.1875rem 0px #9bbcf3;
          margin-bottom: 0.4rem;
          display: flex;
          .img {
            width: 5.3375rem;
            height: 3.125rem;
            background: linear-gradient(180deg, #bbd4ff, #78a3eb);
            border-radius: 0.1875rem 0px 0px 0.1875rem;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 2.5rem;
              height: 2.5rem;
            }
            li {
              width: 100%;
              height: 4.8125rem;
              & > div {
                width: 8.75rem;
                height: 100%;
              }
              .text {
                padding-top: 1.05rem;
                box-sizing: border-box;
              }
              .h4 {
                height: 0.5rem;
                font-size: 0.375rem;
                // font-family: Microsoft YaHei, Microsoft YaHei-Bold;
                font-weight: 700;
                text-align: right;
                color: #4f87e6;
                line-height: 0.5625rem;
                margin-bottom: 0.425rem;
              }
              p {
                font-size: 0.25rem;
                // font-family: Microsoft YaHei, Microsoft YaHei-Regular;
                font-weight: 400;
                text-align: right;
                color: #8f8f8f;
                line-height: 0.5625rem;
              }
            }
          }
        }
        li:nth-child(2) {
          .img {
            width: 5.3375rem;
            height: 3.125rem;
            background: linear-gradient(180deg, #bbc9ff, #9b78eb);
            border-radius: 0px 0.1875rem 0.1875rem 0px;
          }
          .text {
            padding-right: 0.625rem;
            h2 {
              text-align: right;
            }
            h1 {
              position: absolute;
              top: 0.35rem;
              left: 50%;
              transform: translateX(-50%);
              font-size: 0.45rem;
              // font-family: Microsoft YaHei, Microsoft YaHei-Bold;
              font-weight: 700;
              color: #3a466b;
            }
          }
        }
      }
    }
    .cnt_box4 {
      height: 11.425rem;
      & > div {
        height: 100%;
        width: 17.5rem;
        margin: 0 auto;
        text-align: center;
        position: relative;
        .lcx();
        ul {
          position: relative;
          width: 100%;
        }
        li:first-child {
          position: absolute;
          right: 0;
          top: 0;
          width: 11.5375rem;
          height: 8.65rem;
        }
        li:last-child {
          position: absolute;
          margin-top: 1.5rem;
          margin-left: 4.1rem;
          width: 4.275rem;
          height: 6.8875rem;
        }
        & > img {
          position: absolute;
          width: 4.2625rem;
          height: 1.575rem;
          z-index: 2;
        }
        .img1 {
          top: 3rem;
          left: 1.925rem;
        }
        .img2 {
          top: 1.575rem;
          right: 0.7rem;
        }
        .img3 {
          bottom: 2.75rem;
          left: 2.375rem;
        }
        .img4 {
          bottom: 2.65rem;
          right: 3.825rem;
        }
      }
    }
    .cnt_box5 {
      width: 17.5rem;
      margin: 0 auto;
      text-align: center;
      .lcx();

      ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      li {
        width: 4.8375rem;
        height: 4.025rem;
        margin-bottom: 1.125rem;
        position: relative;
        .ren_zheng {
          width: 0.9375rem;
          height: 0.9375rem;
          position: absolute;
          top: -0.375rem;
          left: -0.375rem;
        }
      }
    }
  }
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
}
</style>