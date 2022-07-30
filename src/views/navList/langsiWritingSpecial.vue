<template>
  <div class="box">
    <div class="hader">
      <img src="@/assets/image/langsi/xiebanner.png" alt="" />
      <div class="pic">
        <p>课程价格：<span>￥2988 </span>/</p>
        <p>原价：￥<span>5988</span></p>
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
      <div class="cnt_box1">
        <h2>
          <span>LIZI languageCert</span>
          <p>栗子朗思写作特训 为考前提分而设</p>
        </h2>
        <div class="cnt_box1tab">
          <div class="box1tab_list" v-for="(item, index) in box1tab_list" :key="index">
            <span>
              <img :src="item.icon" alt="" />
            </span>
            <h3>{{ item.tite }}</h3>
            <p>{{ item.text }}</p>
            <p>{{ item.text2 }}</p>
          </div>
        </div>
      </div>
      <div class="cnt_box2">
        <h2>
          <span>LIZI languageCert</span>
          <p>朗思写作特训 课程大纲</p>
        </h2>
        <img src="@/assets/image/langsi/xtbj.png" class="xtbj" alt="" />
        <div class="cnt_box2div">
          <div class="cnt_box2tab">
            <h2>
              课程内容
              <span>课时</span>
            </h2>
            <div class="box2tab_list" v-for="(item, index) in box2tab_list" :key="index">
              <p>{{ item.text1 }}</p>
              <p>{{ item.text2 }}</p>
              <p>{{ item.text3 }}</p>
              <p>{{ item.text4 }}</p>
              <p>{{ item.text5 }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="cnt_box3">
        <h2>
          <span>LIZI languageCert</span>
          <p>备考朗思时 还在为这些问题烦忧吗？</p>
        </h2>
        <div class="cnt_box3tab">
          <div class="box3tab_list" v-for="(item, index) in box3tab_list" :key="index">
            <img :src="item.icon" alt="" />
            <h3>{{ item.tite }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
      <!-- 服务体系 -->
      <div class="cnt_box4">
        <div :style="{ background: `url(${xtbj}) no-repeat` }">
          <div class="title">
            <img src="@/assets/image/zhuanti/LIZI languageCert.png" alt="" />
            <h1>完善的服务体系 为你的学习保驾护航</h1>
          </div>
          <ul>
            <li>
              <img src="@/assets/image/zhuanti/server2.png" alt="" />
              <span class="sp1">全面分析&专属方案</span>
              <span class="sp2">专为高效提分设计</span>
              <span class="sp3">从基础到冲刺全面覆盖</span>
            </li>
            <li>
              <img src="@/assets/image/zhuanti/server1.png" alt="" />
              <span class="sp1">找准你的薄弱项</span>
              <span class="sp2">帮你全面认识自己</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 批改 -->
      <div class="cnt_box5">
        <div class="title">
          <img src="@/assets/image/zhuanti/LIZI languageCert.png" alt="" />
          <h1>行业名师 精细化专属批改</h1>
        </div>
        <ul>
          <li>
            <img src="@/assets/image/zhuanti/correct1.png" alt="" />
            <span class="sp1">紧跟课程大纲</span>
          </li>
          <li>
            <img src="@/assets/image/zhuanti/correct2.png" alt="" />
            <span class="sp2">学完复盘核心知识点</span>
            <span class="sp3">专业表达的范例推荐</span>
          </li>
          <li>
            <img src="@/assets/image/zhuanti/correct3.png" alt="" />
            <span class="sp4">语法词汇细心批改</span>
          </li>
          <li>
            <img src="@/assets/image/zhuanti/correct4.png" alt="" />
            <span class="sp5">课后作业督导老师批改</span>
          </li>
        </ul>
      </div>
      <!-- 成绩反馈 -->
      <div class="cnt_box6">
        <div class="title">
          <img src="@/assets/image/zhuanti/LIZI languageCert.png" alt="" />
          <h1>训练营考生高分成绩单展示</h1>
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
      xtbj: require('@/assets/image/langsi/xtbj.png'),
      dialog: false,
      num: 0,
      isSticky: false,
      nav_list: [
        { text: '课程亮点' },
        { text: '课程大纲' },
        { text: '适合学员' },
        { text: '课程服务' },
        { text: '作业批改' },
        { text: '成绩反馈' }
      ],
      box1tab_list: [
        {
          icon: require('@/assets/image/langsi/icon1.png'),
          tite: '精华考点',
          text: '精华课时浓缩',
          text2: '抢分技巧'
        },
        {
          icon: require('@/assets/image/langsi/icon2.png'),
          tite: '精选干货',
          text: '配套真题资料',
          text2: '专业批改'
        },
        {
          icon: require('@/assets/image/langsi/icon3.png'),
          tite: '精心服务',
          text: '班群答疑活动',
          text2: '贴心陪伴'
        },
        {
          icon: require('@/assets/image/langsi/icon4.png'),
          tite: '题库伴学',
          text: '自研题库系统',
          text2: '课后巩固'
        },
        {
          icon: require('@/assets/image/langsi/icon5.png'),
          tite: '考前预测',
          text: '精准命题预测',
          text2: '考点导向'
        },
        {
          icon: require('@/assets/image/langsi/icon6.png'),
          tite: '模拟评测',
          text: '自研题库系统',
          text2: '课后巩固'
        }
      ],
      box2tab_list: [
        {
          text1: '第一课',
          text2: '朗思写作考试介绍',
          text3: '评分标准分析',
          text4: 'Part1 小作文题型讲解',
          text5: 'Part1 最新真题试练'
        },
        {
          text1: '第二课',
          text2: '高低分作文差别',
          text3: '讲解小作文内容',
          text4: '讲解小作文思路和结构',
          text5: 'Part1 学生习作讲解点评'
        },
        {
          text1: '第三课',
          text2: 'Part1 总结复习',
          text3: '真题串讲',
          text4: '梳理思路和文章结构',
          text5: '补充词汇、短语、表达方式'
        },
        {
          text1: '第四课',
          text2: 'Part2 大作文题型讲解',
          text3: '讲解大作文题型分类',
          text4: 'Part2高频真题+考场难题',
          text5: 'Part1 学生习作讲解点评'
        },
        {
          text1: '第五课',
          text2: '讲解大作文得分重点',
          text3: '高分范文赏析',
          text4: '文章内容扩展方法',
          text5: '补充词汇、短语、表达方式'
        },
        {
          text1: '第六课',
          text2: 'Part2 学生习作点评',
          text3: '真题串讲',
          text4: '结合范文给出改正意见',
          text5: '精讲点评'
        },
        {
          text1: '第七课',
          text2: '1V1私人授课',
          text3: '私人定制作业包',
          text4: '仿真测评，答疑解惑',
          text5: '对个人情况进行查缺补漏'
        },
        {
          text1: '第八课',
          text2: '1V1私人授课',
          text3: '私人制定复习方案',
          text4: '仿真测评，答疑解惑',
          text5: '对个人情况进行查缺补漏'
        }
      ],
      box3tab_list: [
        {
          icon: require('@/assets/image/langsi/img1.png'),
          tite: '刚开始备考',
          text: '对写作无从下手，不知道怎么备考'
        },
        {
          icon: require('@/assets/image/langsi/img2.png'),
          tite: '写作没思路',
          text: '通常一个题目只能想到一个点'
        },
        {
          icon: require('@/assets/image/langsi/img3.png'),
          tite: '词句积累少',
          text: '语言组织困难，背了很多范文却用不上'
        },
        {
          icon: require('@/assets/image/langsi/img4.png'),
          tite: '即将考试',
          text: '备考时间紧张，想要短期快速提分'
        }
      ],
      box6tab_list: [
        {
          imgUrl: require('@/assets/image/zhuanti/transcript1.png')
        },
        {
          imgUrl: require('@/assets/image/zhuanti/transcript2.png')
        },
        {
          imgUrl: require('@/assets/image/zhuanti/transcript3.png')
        },
        {
          imgUrl: require('@/assets/image/zhuanti/transcript4.png')
        },
        {
          imgUrl: require('@/assets/image/zhuanti/transcript5.png')
        },
        {
          imgUrl: require('@/assets/image/zhuanti/transcript6.png')
        }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scroll)
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
      top: 2.775rem;
      left: 12.5625rem;
      display: flex;
      align-items: center;
      p:nth-child(1) {
        color: #f82e6b;
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
      }
    }
    .bannder_btn {
      position: absolute;
      top: 4.175rem;
      left: 12.5625rem;
      width: 3.375rem;
      height: 0.6rem;
      background: #f82e6b;
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
      z-index: 2;
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
      h2 {
        height: 1.3875rem;
        position: relative;
        margin-bottom: 0.875rem;
        span {
          width: 100%;
          position: absolute;
          top: 0.4rem;
          left: 0;
          text-align: center;
          display: block;
          font-size: 0.55rem;
          font-weight: 700;
          color: #e6f3ff;
        }
        p {
          width: 100%;
          text-align: center;
          position: absolute;
          bottom: 0;
          left: 0;
          font-size: 0.45rem;
          font-weight: 700;
          color: #3a466b;
        }
      }
      .cnt_box1tab {
        width: 15rem;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        .box1tab_list {
          margin-right: 1.875rem;
          width: 3.75rem;
          height: 3.675rem;
          background: #ffffff;
          border-radius: 0.125rem;
          box-shadow: 0px 0.0375rem 0.1875rem 0px #9bbcf3;
          margin-bottom: 0.6375rem;
          padding-top: 0.325rem;
          box-sizing: border-box;
          span {
            margin: 0 auto;
            display: block;
            width: 1.6625rem;
            height: 1.6625rem;
            position: relative;
            img {
              background-size: 100% 100%;
              width: 1.6625rem;
              height: 1.6625rem;
              position: absolute;
              left: 0;
              top: 0;
            }
          }
          h3 {
            font-size: 0.275rem;
            font-weight: 400;
            text-align: center;
            color: #3a466b;
            margin: 0.225rem auto 0.1rem;
          }
          p {
            font-size: 0.225rem;
            font-weight: 400;
            text-align: center;
            color: #777777;
          }
        }
        .box1tab_list:nth-child(3),
        .box1tab_list:nth-child(6) {
          margin-right: 0 !important;
        }
      }
    }
    .cnt_box2 {
      position: relative;
      height: 12rem;
      h2 {
        height: 1.3875rem;
        position: relative;
        margin-bottom: 0.875rem;
        span {
          width: 100%;
          position: absolute;
          top: 0.4rem;
          left: 0;
          text-align: center;
          display: block;
          font-size: 0.55rem;
          font-weight: 700;
          color: #e6f3ff;
        }
        p {
          width: 100%;
          text-align: center;
          position: absolute;
          bottom: 0;
          left: 0;
          font-size: 0.45rem;
          font-weight: 700;
          color: #3a466b;
        }
      }
      .xtbj {
        width: 100%;
        height: 9.075rem;
        position: absolute;
        top: 0.6625rem;
        left: 0;
      }
      .cnt_box2div {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0);
        .cnt_box2tab {
          margin: 0 auto 0.8rem;
          width: 15rem;
          // height: 9.075rem;
          background: #ffffff;
          border-radius: 0.3125rem;
          box-shadow: 0px 0.0375rem 0.1875rem 0px #a8c8ff;

          h2 {
            font-size: 0.325rem;
            font-weight: 500;
            line-height: 1.075rem;
            text-align: center;
            height: 1.075rem;
            background: #4f87e6;
            border-radius: 0.3125rem 0.3125rem 0px 0px;
            box-shadow: 0px 0.0375rem 0.075rem 0px #e6f3ff;
            position: relative;
            color: #ffffff;
            margin-bottom: 0 !important;
            span {
              width: 1.5688rem;
              height: 100%;
              font-size: 0.325rem;
              font-weight: 500;
              line-height: 1.075rem;
              text-align: center;
              position: absolute;
              left: 0;
              top: 0;
            }
          }
          .box2tab_list:nth-child(2),
          .box2tab_list:nth-child(4),
          .box2tab_list:nth-child(6),
          .box2tab_list:nth-child(8) {
            background: #f7fbff;
          }
          .box2tab_list {
            display: flex;
            align-items: center;
            height: 0.9875rem;
            p {
              height: 100%;
              line-height: 0.9875rem;
              border-left: 0.025rem solid #8bb5fc;
              font-size: 0.225rem;
              color: #051123;
              padding-left: 0.5687rem;
              box-sizing: border-box;
            }
            p:nth-child(1) {
              width: 1.5688rem;
              height: 100%;
              line-height: 0.9875rem;
              text-align: center;
              font-size: 0.25rem;
              color: #4374b9;
              border: none;
            }
            p:nth-child(2) {
              width: 3.3875rem;
            }
            p:nth-child(3) {
              width: 2.925rem;
            }
            p:nth-child(4) {
              width: 3.5875rem;
            }
            p:nth-child(5) {
              width: 3.5313rem;
            }
          }
        }
      }
    }
    .cnt_box3 {
      h2 {
        height: 1.3875rem;
        position: relative;
        margin-bottom: 0.875rem;
        span {
          width: 100%;
          position: absolute;
          top: 0.4rem;
          left: 0;
          text-align: center;
          display: block;
          font-size: 0.55rem;
          font-weight: 700;
          color: #e6f3ff;
        }
        p {
          width: 100%;
          text-align: center;
          position: absolute;
          bottom: 0;
          left: 0;
          font-size: 0.45rem;
          font-weight: 700;
          color: #3a466b;
        }
      }
      .cnt_box3tab {
        width: 15rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        padding-bottom: 1.2875rem;
        .box3tab_list {
          width: 7.025rem;
          height: 3.175rem;
          background: #fafdff;
          border-radius: 0.1875rem;
          box-shadow: 0px 0.0375rem 0.125rem 0px #c0d8ff;
          padding-top: 0.3rem;
          box-sizing: border-box;
          margin-bottom: 0.5875rem;
          img {
            width: 1.1875rem;
            height: 1.1875rem;
            display: block;
            margin: 0 auto;
          }
          h3 {
            margin: 0.275rem auto 0.275rem;
            font-size: 0.3rem;
            color: #4374b9;
            text-align: center;
            font-weight: 700;
          }
          p {
            font-size: 0.225rem;
            font-weight: 700;
            color: #515151;
            text-align: center;
          }
        }
      }
    }
    .lcx {
      .title {
        position: relative;
        margin-bottom: 1.375rem;
        margin-top: 1.5375rem;
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
          // font-family: Microsoft YaHei, Microsoft YaHei-Bold;
          font-weight: 700;
          color: #3a466b;
        }
      }
    }
    .cnt_box4 {
      background: #f9fcff;
      div {
        padding: 0 3.25rem;
        margin: 0 auto;
        text-align: center;
        padding-bottom: 0.625rem;
        .lcx();
        .title {
          margin-bottom: 0.25rem;
        }
        ul {
          width: 100%;
          height: 6.75rem;
          position: relative;
        }
        li {
          position: absolute;
          width: 8.9125rem;
          height: 6.675rem;
          span {
            position: absolute;
            font-size: 0.225rem;
            border-radius: 0.1875rem;
            box-shadow: 0rem 0.0375rem 0.075rem 0rem #78a3eb;
            // font-family: Microsoft YaHei, Microsoft YaHei-Regular;
            font-weight: 400;
            color: #ffffff;
            padding: 0.075rem 0.2125rem;
            background-color: #4f87e6;
          }
        }
        li:first-child {
          left: 0.75rem;
          z-index: 1;
          .sp1 {
            left: 0.9625rem;
            top: 1.3625rem;
          }
          .sp2 {
            top: 2.5rem;
            right: 1.625rem;
          }
          .sp3 {
            left: 2.425rem;
            bottom: 2.325rem;
          }
        }
        li:last-child {
          right: 0.75rem;
          margin-top: 1.025rem;
          .sp1 {
            top: 3.1125rem;
            right: 4.6375rem;
          }
          .sp2 {
            right: 1.6625rem;
            bottom: 1.7625rem;
          }
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
        width: 8.475rem;
        height: 5rem;
        margin-bottom: 0.3rem;
        position: relative;
      }
      span {
        position: absolute;
        font-size: 0.225rem;
        border-radius: 0.1875rem;
        box-shadow: 0rem 0.0375rem 0.075rem 0rem #78a3eb;
        // font-family: Microsoft YaHei, Microsoft YaHei-Regular;
        font-weight: 400;
        color: #ffffff;
        padding: 0.075rem 0.2125rem;
        background-color: #4f87e6;
      }
      .sp1 {
        top: 1.775rem;
        left: 2.0625rem;
      }
      .sp2 {
        top: 2.4625rem;
        left: -0.2125rem;
      }
      .sp3 {
        right: 0.275rem;
        bottom: 0.9375rem;
      }
      .sp4 {
        top: 1.775rem;
        right: 1.1rem;
      }
      .sp5 {
        top: 0.7rem;
        left: 2.25rem;
      }
    }
    .cnt_box6 {
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