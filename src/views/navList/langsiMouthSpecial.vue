<template>
  <div class="box">
    <div class="hader">
      <img src="@/assets/image/langsi/koubannder.png" alt="" />
      <p class="bannder_text1">朗思口语一站式提分方案，超全教学+辅导体系，贴心的服务</p>
      <h2>朗思口语冲刺班</h2>
      <div class="pic">
        <p>课程价格：<span>￥2688 </span>/</p>
        <p>原价：<span>￥5688</span></p>
      </div>
      <p class="bannder_text2">更多选择：2999班课+2节1V1 | 3399班课+5节1V1</p>
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
        <h2 class="title">
          <span>LIZI languageCert</span>
          <p>凭实力给出考官满意的答案</p>
        </h2>
        <div class="cnt_box1tab">
          <div class="box1tab_list" v-for="(item, index) in box1tab_list" :key="index">
            <span>
              <img :src="item.icon" alt="" />
            </span>
            <div>
              <h3>{{ item.tite }}</h3>
              <p>{{ item.text }}</p>
              <p>{{ item.text2 }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="con_pa3">
        <div :style="{ background: `url(${xtbj}) no-repeat` }">
          <h2 class="title">
            <span>LIZI languageCert</span>
            <p>口语冲刺 课程亮点</p>
          </h2>
          <!-- <img src="@/assets/image/langsi/xtbj2.png" class="xtbj" alt="" /> -->
          <div class="con_pa3box">
            <img src="@/assets/image/langsi/ky_ct.png" alt="" />
            <div class="con_pa3listbox">
              <div class="con_pa3list" v-for="(item, index) in conpa3_list" :key="index">
                <i :style="{ background: `url(${item.bgImg}) no-repeat right -20px bottom -30px` }"></i>
                <p>{{ item.text1 }}</p>
                <p>
                  <span>{{ item.text2 }}</span>
                  <span>{{ item.text3 }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cnt_box2">
        <h2 class="title">
          <span>LIZI languageCert</span>
          <p>朗思口语冲刺 课程大纲</p>
        </h2>
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
      <!-- 适合学员 -->
      <div class="cnt_box4">
        <div :style="{ background: `url(${xtbj}) no-repeat` }">
          <div class="title">
            <img src="@/assets/image/zhuanti/LIZI languageCert.png" alt="" />
            <h1>适合学员</h1>
          </div>
          <ul>
            <li>
              <div class="img">
                <img src="@/assets/image/spoken_zhuanti/student3.png" alt="" />
              </div>
              <p class="small_tit">朗思萌新</p>
              <p>备考不知道从何下手</p>
              <p>考前冲刺口语高分</p>
            </li>
            <li>
              <div class="img">
                <img src="@/assets/image/spoken_zhuanti/student2.png" alt="" />
              </div>
              <p class="small_tit">瓶颈考生</p>
              <p>考了几次分数没变化</p>
              <p>渴望手术刀般精准诊断</p>
            </li>
            <li>
              <div class="img">
                <img src="@/assets/image/spoken_zhuanti/student1.png" alt="" />
              </div>
              <p class="small_tit">DIY选手</p>
              <p>独自摸索备考策略但常有疑惑</p>
              <p>急需爆发式提高</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 配套增值服务 -->
      <div class="cnt_box5">
        <div class="title">
          <img src="@/assets/image/zhuanti/LIZI languageCert.png" alt="" />
          <h1>配套增值服务</h1>
        </div>
        <ul>
          <li>
            <div class="fl text">
              <div class="h4">在线老师实时互动，精品视频随时观看</div>
              <p>直播/录播，可互动，可回看</p>
              <p>栗子老师助你高效提分</p>
            </div>
            <div class="fr">
              <img src="@/assets/image/spoken_zhuanti/serve3.png" alt="" />
            </div>
          </li>
          <li>
            <div class="fl">
              <img src="@/assets/image/spoken_zhuanti/serve2.png" alt="" />
            </div>
            <div class="fr text">
              <div class="h4">自研题库，直击考点，巧用灵活碎片时间</div>
              <p>笔试套题，全真模考，真实估分</p>
              <p>口语小程序，考生实时发布考后回忆，归纳题库便于备考</p>
              <p>写作小程序，分析范文结构，题目要求</p>
            </div>
          </li>
          <li>
            <div class="fl text">
              <div class="h4">个性化定制,每日计划设计,专属名师批改</div>
              <p>专业口语老师精批 · 帮助考生建立口语框架</p>
              <p>强化语法及词汇句式使用</p>
              <p>强化提分进阶，告别哑巴英语</p>
            </div>
            <div class="fr">
              <img src="@/assets/image/spoken_zhuanti/serve1.png" alt="" />
            </div>
          </li>
        </ul>
      </div>
      <!-- 口语成绩展示 -->
      <div class="cnt_box6">
        <div class="title">
          <img src="@/assets/image/zhuanti/LIZI languageCert.png" alt="" />
          <h1>口语成绩展示</h1>
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
      xtbj: require('@/assets/image/langsi/xtbj2.png'),
      dialog: false,
      nav_list: [
        { text: '课程目标' },
        { text: '课程亮点' },
        { text: '课程大纲' },
        { text: '适合学员' },
        { text: '课程服务' },
        { text: '成绩反馈' }
      ],
      box1tab_list: [
        {
          icon: require('@/assets/image/langsi/icon7.png'),
          tite: '个性化',
          text: '功课个性提分困境，帮助考生突破口语瓶颈，实现口语提分',
          text2: '实战演练，过滤盲点，水到渠成'
        },
        {
          icon: require('@/assets/image/langsi/icon8.png'),
          tite: '英语思维',
          text: '掌握西式思维工具和完能思路',
          text2: '去繁从简，快速入门，激发英语口语思维'
        },
        {
          icon: require('@/assets/image/langsi/icon9.png'),
          tite: '朗思助力',
          text: '独家口语练习册+独家教研资料+最新真题库',
          text2: ''
        },
        {
          icon: require('@/assets/image/langsi/icon10.png'),
          tite: '表达能力',
          text: '综合提升流利度、发音、词汇表达能力',
          text2: '狠抓重难点，深入浅出，高效学习'
        }
      ],
      conpa3_list: [
        {
          text1: '锁定范围',
          text2: '考前定位考题范围',
          text3: '缩小口语备考内容',
          bgImg: require('@/assets/image/langsi/set1.png')
        },
        {
          text1: '专项专学',
          text2: '朗思B2、C1单独开班',
          text3: '授课，名师教学有保障',
          bgImg: require('@/assets/image/langsi/set2.png')
        },
        {
          text1: '精准预测',
          text2: '提供该份素材',
          text3: '口语精准预测（90%）',
          bgImg: require('@/assets/image/langsi/set3.png')
        },
        {
          text1: '课程体系升级',
          text2: '冲刺课+预测课',
          text3: '每日名师答疑+督学打卡',
          bgImg: require('@/assets/image/langsi/set4.png')
        }
      ],
      box2tab_list: [
        {
          text1: '第一课',
          text2: '朗思口语考试介绍',
          text3: '评分标准分析',
          text4: 'Part1 简答题型讲解',
          text5: 'Part1 最新真题试练'
        },
        {
          text1: '第二课',
          text2: '讲解Part1六大话题要点',
          text3: '高低分回答的差别',
          text4: '讲解Part1简答题切题思路',
          text5: 'Part1 学生习作讲解点评'
        },
        {
          text1: '第三课',
          text2: '讲解Part2角色扮演',
          text3: '讲解Part2注意事项',
          text4: '补充常用语句和实用表达',
          text5: 'Part2最新真题试练'
        },
        {
          text1: '第四课',
          text2: 'Part2 作业讲解点评',
          text3: '串讲Part2',
          text4: '分析Role Play得分要点',
          text5: '高频题目和考场难题'
        },
        {
          text1: '第五课',
          text2: '讲解Part3情景会话',
          text3: '考场实例分析',
          text4: '精讲交换信息对话的表达方法',
          text5: '补充词汇、短语、表达方式'
        },
        {
          text1: '第六课',
          text2: 'Part3学生作业讲解点评',
          text3: '高低分实例对比分析',
          text4: '分析信息交换对话得分重点',
          text5: 'P2+P3实战模拟（高频考题+考场难题）'
        },
        {
          text1: '第七课',
          text2: '讲解Part4问题叙述题',
          text3: 'Part4最新真题试练',
          text4: '提供扩展答案和具体的方法和语句',
          text5: '结合Part1，突出Part4区别'
        },
        {
          text1: '第八课',
          text2: 'Part4学生作业讲解点评',
          text3: '串讲Part1+Part4',
          text4: '梳理答题思路补充常用语句',
          text5: '高频考题+考场难题'
        },
        {
          text1: '全真模拟考试（一次）',
          text2: '全真考场情景还原',
          text3: '还原考官评语',
          text4: '把握真实水平',
          text5: '专业老师问题诊断'
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
          imgUrl: require('@/assets/image/spoken_zhuanti/results1.png')
        },
        {
          imgUrl: require('@/assets/image/spoken_zhuanti/results2.png')
        },
        {
          imgUrl: require('@/assets/image/spoken_zhuanti/results3.png')
        },
        {
          imgUrl: require('@/assets/image/spoken_zhuanti/results4.png')
        },
        {
          imgUrl: require('@/assets/image/spoken_zhuanti/results5.png')
        },
        {
          imgUrl: require('@/assets/image/spoken_zhuanti/results6.png')
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
      top: 2.6375rem;
      left: 14.0625rem;
      display: flex;
      align-items: center;
      p:nth-child(1) {
        color: #fc9732;
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
      left: 14.0625rem;
      top: 1.375rem;
      font-weight: 700;
      font-size: 0.6rem;
      color: #0071b8;
    }
    .bannder_text1 {
      font-size: 0.25rem;
      position: absolute;
      top: 0.4rem;
      left: 14.0625rem;
      color: #0071b8;
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
      left: 14.0625rem;
      width: 3.375rem;
      height: 0.6rem;
      background: #37cfe7;
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
        width: 17.5rem;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        .box1tab_list {
          margin-right: 0.75rem;
          width: 8.375rem;
          height: 2.625rem;
          background: #ffffff;
          border-radius: 0.1875rem;
          box-shadow: 0px 0.0375rem 0.1875rem 0px #9bbcf3;
          margin-bottom: 0.675rem;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            display: block;
            width: 1.6625rem;
            height: 1.6625rem;
            position: relative;
            margin-right: 0.225rem;
            img {
              background-size: 100% 100%;
              width: 1.6625rem;
              height: 1.6625rem;
              position: absolute;
              left: 0;
              top: 0;
            }
          }
          div {
            width: 5.85rem;
            h3 {
              font-size: 0.275rem;
              font-weight: 400;
              text-align: left;
              color: #3a466b;
              margin: 0 auto 0.2625rem;
            }
            p {
              font-size: 0.225rem;
              font-weight: 400;
              text-align: left;
              color: #777777;
            }
          }
        }
        .box1tab_list:nth-child(2),
        .box1tab_list:nth-child(4) {
          margin-right: 0 !important;
        }
      }
    }
    .con_pa3 {
      padding: 0 2.9625rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 1.25rem;
      position: relative;
      height: 11.6rem;
      background: #f7feff;
      h2 {
        width: 100%;
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
      .con_pa3box {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 5.4rem;
          height: 8.6125rem;
        }
        .con_pa3listbox {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          .con_pa3list:nth-child(2) {
            margin-right: 0 !important;
          }
          .con_pa3list:nth-child(3),
          .con_pa3list:nth-child(4) {
            margin-bottom: 0 !important;
          }
          .con_pa3list:nth-child(4) {
            margin-right: 0 !important;
          }
          .con_pa3list {
            width: 6rem;
            height: 3.675rem;
            background-color: #ffffff;
            box-shadow: 0px 0.0375rem 0.075rem 0.0125rem #e6f3ff;
            border-radius: 0.125rem;
            opacity: 1;
            padding-top: 0.9625rem;
            padding-left: 0.7875rem;
            box-sizing: border-box;
            margin-right: 0.125rem;
            margin-bottom: 0.625rem;
            position: relative;
            p:nth-child(2) {
              font-size: 0.325rem;
              color: #4f87e6;
            }
            p:nth-child(3) {
              margin-top: 0.8875rem;
              font-size: 0.225rem;
              color: #b7b7b7;
              span {
                display: block;
                margin-bottom: 0.0625rem;
              }
            }
            i {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .cnt_box2 {
      position: relative;
      height: 13rem;
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

      .cnt_box2div {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        .cnt_box2tab {
          margin: 0 auto 0.8rem;
          width: 17.5rem;
          // height: 9.075rem;
          background: #ffffff;
          border-radius: 0.3125rem;
          box-shadow: 0px 0.0375rem 0.1875rem 0px #cff9ff;

          h2 {
            font-size: 0.325rem;
            font-weight: 500;
            line-height: 1.075rem;
            text-align: center;
            height: 1.075rem;
            background: #00b7d3;
            border-radius: 0.3125rem 0.3125rem 0px 0px;
            box-shadow: 0px 0.0375rem 0.075rem 0px #cff9ff;
            position: relative;
            color: #ffffff;
            margin-bottom: 0 !important;
            span {
              width: 2.8125rem;
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
          .box2tab_list:nth-child(3),
          .box2tab_list:nth-child(5),
          .box2tab_list:nth-child(7),
          .box2tab_list:nth-child(9) {
            background: #fafeff;
          }
          .box2tab_list {
            display: flex;
            align-items: center;
            height: 0.9875rem;
            p {
              height: 100%;
              line-height: 0.9875rem;
              border-left: 0.025rem solid #c7f8ff;
              font-size: 0.225rem;
              color: #051123;
              box-sizing: border-box;
            }
            p:nth-child(1) {
              width: 2.8125rem;
              height: 100%;
              line-height: 0.9875rem;
              text-align: center;
              font-size: 0.25rem;
              color: #4374b9;
              border: none;
              padding-left: 0 !important;
            }
            p:nth-child(2) {
              width: 3.3875rem;
              padding-left: 0.5687rem;
            }
            p:nth-child(3) {
              width: 2.925rem;
              padding-left: 0.5rem;
            }
            p:nth-child(4) {
              width: 3.9875rem;
              padding-left: 0.4rem;
            }
            p:nth-child(5) {
              width: 4.375rem;
              padding-left: 0.25rem;
            }
          }
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
          // font-family: Microsoft YaHei, Microsoft YaHei-Bold;
          font-weight: 700;
          color: #3a466b;
        }
      }
    }
    .cnt_box4 {
      width: 100%;
      height: 7.1375rem;
      & > div {
        width: 17.5rem;
        margin: 0 auto;
        padding-top: 1px;
        height: 100%;
      }
      text-align: center;
      background-color: #f7feff;
      .lcx();
      ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      li {
        width: 4.8125rem;
        height: 3.175rem;
        background: #ffffff;
        border-radius: 0.1875rem;
        box-shadow: 0rem 0.0375rem 0.125rem 0rem #c0d8ff;
        .img {
          width: 1.1875rem;
          height: 1.1875rem;
          border: 0.0125rem solid #707070;
          border-radius: 50%;
          margin: 0.3rem auto 0.275rem;
        }
        .small_tit {
          height: 0.3875rem;
          font-size: 0.3rem;
          // font-family: Microsoft YaHei, Microsoft YaHei-Bold;
          font-weight: 700;
          color: #4374b9;
          margin-bottom: 0.125rem;
        }
        p {
          font-size: 0.225rem;
          // font-family: Microsoft YaHei, Microsoft YaHei-Regular;
          font-weight: 400;
          color: #777777;
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