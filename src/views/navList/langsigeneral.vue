<template>
  <div class="box clearfix">
    <Banner
      :info="info"
      :sign="true"
    />
    <div class="main fl">
      <detailItem
        v-for="(item,index) in list"
        :key="index"
        :info="item"
        :index="index"
      ></detailItem>
      <div class="ph">
        当上完全科1v1课程后你会发现，你可以自信地参加考试。<br>你准备好了吗？准备好了，那就来吧，欢迎你的加入!
      </div>
      <div class="title1">
        <img
          src="@/assets/image/class/bg.png"
          alt=""
        >
        <div>全程陪伴+督促只为<span>更高效</span>的备考历程</div>
      </div>
      <ul class="list">
        <li
          v-for="(item,index) in list1"
          :key="index"
        >
          <div class="item_title">{{item.title}}</div>
          <div
            class="img"
            :style="{backgroundImage:'linear-gradient('+item.c1+','+item.c2+')'}"
          >
            <img
              :src="item.imgUrl"
              alt=""
            >
          </div>
          <div class="bottom">
            <p>{{item.contain}}</p>
            <span>{{item.tit}}</span>
          </div>
        </li>
      </ul>
      <div class="title"><span>一对一定制化</span>提分方案</div>
      <ul class="plan">
        <li
          v-for="(item,index) in planList"
          :key="index"
        >
          <div class="circle">
            <div class="zg"></div>
            <span>{{index+1}}</span>
          </div>
          <div class="plan_title">{{item.title}}</div>
          <p style="margin-bottom: 0.8rem;">
            {{item.contain}}
          </p>
          <img :src="item.imgUrl" alt="" :style="{width:item.width}" >
        </li>
      </ul>
    </div>
    <div class="right_detail fr">
      <detailRight :info="rightInfo">
        <template slot="userImg0">
          <div class="user_img">
            <img
              :src="rightInfo.infoList[0].imgUrl"
              alt=""
            >
          </div>
        </template>
      </detailRight>
    </div>
  </div>
</template>
<script>
import Banner from '@/components/Banner.vue'
import detailItem from '@/components/detailItem.vue'
import detailRight from '@/components/detailRight.vue'
export default {
  data() {
    return {
      info: {
        title: '朗思全科1V1',
        bannerImg: require('@/assets/image/write/banner_1v1.png'),
        btn: '速抢名额'
      },
      list: [
        {
          title: '课程亮点',
          tit: '直击痛点！弥补短板！短期快速实现提分！',
          contain: [
            `还在为苦恼于阅读听力不能掌握题型与解题方法？阅读长难句难以分析，听力不熟悉相关题型，看了大量的备考资料却还是一筹莫展。写作题型变化莫测，无法掌握相关写作技巧，写作逻辑，看到题目后缺少思路。口语难以开口，P2 P3模式不熟悉？碰到难题哑口无言，只能与考官尴尬对视。栗子朗思全科一对一，带你扫清所有障碍，轻松拿下high pass！`
          ]
        },
        {
          title: 'Reading',
          contain: [
            `阅读是大多数学生苦苦挣扎的领域，虽然做了大量的练习但还是在某些句子上，理解不了其中的含义与逻辑关系，遇到这些难题只能苦苦叹气吗？答案是“不”！栗子朗思全科1v1阅读，对朗思题型不熟悉，长难句难以分析，做出专项针对，对于如何读，如何提高准确率，如何在规定的时间做好，如何平行阅读，如何应对各种题型均有深刻的把握认知。帮你省时省力，不走弯路！老师会以基础巩固，讲练结， 刷题密训三部分为同学们解决阅读上的疑难杂症。`
          ]
        },
        {
          title: 'Listening',
          contain: [
            `在听力课中，你将逐步学习你所需要的。老师将从建立一些基本的基础开始，然后通过大量的例子、练习题和策略的细分，逐步加深你的理解。在本课程中，你将学习。“如何回答每一种问题类型”“如何注意大多数学生都会上当受骗的常见伎俩和陷阱”“如何把握自己的节奏和管理自己的时间”“如何明智而有效地利用你的 “两次播放时间””如何标记正确的关键词并提炼具体信息”“如何倾听正确的答案”。`,
            `在老师授课中将和同学一起实时回答听力测试中的问题。然后，一起分析分解录音，研究正确答案选择背后的原因。`
          ]
        },
        {
          title: 'Writing',
          contain: [
            `对朗思写作没有任何概念？参加了多次考试写作却还是一直被压分？在写作课程中，你会学学习简单易行的方法，结合你自身能力去提高你的写作分数。针对强调如何避免学生常犯的错误。学习头脑风暴策略，以便在考试条件下迅速产生高质量的想法观点。培养你的分析能力，极大地提高你的全方位写作水平。`,
            `当你发现考官在评分时寻找的需要的是什么，这样你就可以给出充分发展的段落，从而给考官留下深刻印象。学习大量的连接短语、它们的含义、用法和语法，以提高你写作的流畅性和凝聚力。学习如何组织你的想法，以一种有逻辑和有意义的方式来写文章。`
          ]
        },
        {
          title: 'Specking',
          contain: [
            `当你在口语考试中说英语时，你是否在为流畅性而挣扎？你是否因为没有练习过相关话题做不出相应回答？你是否难以适应一种全新的角色扮演类的对话？`,
            `如果你的讲话因犹豫不决而放慢速度，因为你在努力寻找正确的词汇，或者花太多时间考虑正确的语法。如果你想不出问题如何回答，没有一套正确的回答方法。如果你的尚不习惯这种模式，对于角色扮演没有概念。将帮助“你”更流利地说话，改善你的音调，建立你的信心。为同学逐一解析4个part的答题方法扩充思路，重点讲解口语当中的得失点，补充相关地道表达及社会热点相关语料，掌握不同的思维方式，以考官思维回答出“他”最想听到的`,
            `此外，通过大量的经常性的练习将帮助你开始自动使用语法中最重要的方面，而不需要考虑太多。最后，当你把注意力从单词转移到句子上时，随着你更多的练习，你将开始真正感受到英语，并发展出你在口语中获得高分所需的灵活性。`
          ]
        }
      ],
      list1: [
        {
          title: '严卡单词正确率',
          imgUrl: require('@/assets/image/write/5.png'),
          contain: '打好学习基础',
          tit: '',
          c1: '#F2B3B7',
          c2: '#FF9566'
        },
        {
          title: '讲练结合',
          imgUrl: require('@/assets/image/write/1.png'),
          contain: '所有学习执行到位',
          tit: '',
          c1: '#7EAFFF',
          c2: '#FF5252'
        },
        {
          title: '及时批改',
          imgUrl: require('@/assets/image/write/2.png'),
          contain: '拒绝错误惯性思维',
          tit: '',
          c1: '#19F9A7',
          c2: '#F2FF7E'
        },
        {
          title: '考前心里疏导',
          imgUrl: require('@/assets/image/write/3.png'),
          contain: '给你的关心绝非学习本身',
          tit: '',
          c1: '#67FFE6',
          c2: '#3B96FF'
        },
        {
          title: '不达目标学习不停',
          imgUrl: require('@/assets/image/write/4.png'),
          contain: '课程或许暂停',
          tit: '但不达目标绝不会停止学习',
          c1: '#2F9DEB',
          c2: '#00B8FF',
        },
        {
          title: '全程私人督导',
          imgUrl: require('@/assets/image/write/6.png'),
          contain: '一对一盯',
          tit: '',
          c1: '#7EFEE3',
          c2: '#38C5FC'
        }
      ],
      planList: [
        {
          title: '入班',
          contain: `建立私人服务群，确认课程信息及流程`,
          imgUrl:require('@/assets/image/write/rban.png'),
          width:'7.1625rem'
        },
        {
          title: '老师摸底',
          contain: `根据同学水平，老师制定客制化备考方案`,
          imgUrl:require('@/assets/image/write/writing.png'),
          width:'10.475rem'
        },
        {
          title: '线上直播授课',
          contain: `实时互动，随时随地都能学`,
          imgUrl:require('@/assets/image/write/ml.png'),
          width:'13.45rem'
        },
        {
          title: '课后反馈',
          contain: `根据学生课堂表现，及作业情况及时给出反馈，细化问题及时查漏补缺`,
          imgUrl:require('@/assets/image/write/ghua.png'),
          width:'8.325rem'
        },
        {
          title: '课后作业及任务规划',
          contain: `根据考量学生自身情况，合理安排作业`,
          imgUrl:require('@/assets/image/write/fkui.png'),
          width:'8.75rem'
        },
        {
          title: '作业批改',
          contain: `作业提交后及时给予反馈，针对相关问题进行答疑 `,
          imgUrl:require('@/assets/image/write/pgai.png'),
          width:'8.75rem'
        }
      ],
      rightInfo: {
        infoList:[
          {
            imgUrl: require('@/assets/image/write/teacher_1v1.png'),
            uname: '许茜',
            speaker: '全科1v1主讲人',
            userDsc: [
              `曾就职于英国文化协会雅思考试中心北京办公室， 担任雅思阅读听力阅卷老师，并参与雅思监考等 工作。`,
              ` 托业960分（满分990）独创朗思口语16字真言`,
              '雅思官方认证教师 托福官方认证教师 ',
              `近十年培训中，大部分优秀学子在考试中不同程 度的提分。善于利用新媒体强化教学效果，结合学生个体差异，制定解决方案。具备教研能力， 有组织教师团队开展工作的经验，同时可以辅助 市场推广部门制定推广主题计划，也在多年工作中与留学及销售部门有过良好合作，了解相关工作流程，并能够为学生提出课程安排方面的建议， 助力签约，有效推课。有突破创新精神，乐于分享，沟通能力较强。`
            ],
          }
        ],
        imgs: {
          img1: require('@/assets/image/write/write.png'),
          img2: require('@/assets/image/write/yuce.png'),
          img3: require('@/assets/image/write/mokao.png'),
          img4: require('@/assets/image/write/kouyu.png'),
          img4: require('@/assets/image/write/kouyumokao.png')
        },
        routerpush:{
          push1:'/langsiWrite',
          push2:'/generalPrediction',
          push3:'/lsMoldTest',
          push4:'/langsiSpoken',
          push4:'/oralMoldTest',
        }
      }
    }
  },
  components: {
    detailRight,
    Banner,
    detailItem
  }
}
</script>
<style lang="less" scoped>
.main {
  margin-left: 1.0875rem;
  /deep/ .item {
    margin-top: 1.5625rem;
  }
}
.right_detail {
  margin-right: 0.45rem;
  margin-top: 2.7375rem;
  .user_img {
    float: left;
    width: 3.95rem;
    height: 3.675rem;
  }
}
.top {
  width: 19.625rem;
  margin: 0 auto;
  .title {
    text-align: center;
    font-size: 0.8375rem;
    // font-family: Source Han Sans CN;
    font-weight: 500;
    color: #ff5300;
    margin-bottom: 1.25rem;
  }
  p {
    width: 19.575rem;
    font-size: 0.375rem;
    // font-family: Source Han Sans CN;
    font-weight: 500;
    line-height: 0.6375rem;
    color: #4f4f4f;
    margin-bottom: 1.25rem;
  }
}
.ph {
  width: 12.8125rem;
  font-size: 0.475rem;
  // font-family: Source Han Sans CN;
  font-weight: 500;
  line-height: 0.8125rem;
  color: #ff7940;
}
.title_con {
  font-size: 0.55rem;
  // font-family: Source Han Sans CN;
  font-weight: bold;
  line-height: 0.9375rem;
  color: #434a54;
  text-align: center;
  span {
    color: #ff7940;
    font-size: 0.6875rem;
  }
}
.title1 {
  position: relative;
  width: 12.9625rem;
  height: 2.0875rem;
  margin-top: 2.425rem;
  div {
    .title_con();
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
}
.title {
  width: 11.85rem;
  .title_con();
  line-height: normal;
}
.list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 11.85rem;
  margin: 1.35rem 0 2.125rem;
  li {
    width: 5.1875rem;
    height: 4.375rem;
    background: #ffffff;
    box-shadow: 0rem 0.0375rem 0.2rem rgba(255, 183, 185, 0.34);
    border-radius: 0.1875rem;
    margin-bottom: 0.8375rem;
    color: #434a54;
    display: flex;
    flex-direction: column;
    align-items: center;
    .item_title {
      font-size: 0.475rem;
      font-weight: 700;
      height: 0.625rem;
      margin: 0.525rem auto 0.25rem;
    }
    .img {
      width: 1.45rem;
      height: 1.45rem;
      border-radius: 50%;
      margin-bottom: 0.25rem;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 1.0625rem;
        height: 1.0625rem;
      }
    }
    .bottom {
      font-size: 0.325rem;
      text-align: center;
    }
  }
}

.plan {
  width: 12.25rem;
  padding-left: 0.875rem;
  li {
    position: relative;
    margin-top: 1.375rem;
    img{
      margin: 0 auto;display: block;
      border-radius: .125rem;
      box-shadow: 0 .0375rem 0.2rem #cccccc;
    }
  }
  .circle {
    .zg {
      width: 0.8125rem;
      height: 0.4375rem;
      background-color: #fff;
      position: absolute;
      top: 0.6875rem;
      left: 0.4375rem;
    }
    span {
      position: relative;
      z-index: 1;
      // font-family: Source Han Sans CN;
    }
    position: absolute;
    top: -0.65rem;
    left: -0.725rem;
    z-index: -1;
    width: 1.1875rem;
    height: 1.1875rem;
    box-sizing: border-box;
    line-height: 1.425rem;
    border: 0.0625rem solid #ffe7e7;
    border-radius: 50%;
    color: #ffe7e7;
    text-align: center;
    font-size: 0.8375rem;
    // font-family: Source Han Sans CN;
    font-weight: 500;
  }
  .plan_title {
    color: #434a54;
    font-size: 0.45rem;
    font-weight: 500;
    margin-bottom: 0.125rem;
  }
  p {
    color: #676d75;
    font-size: 0.375rem;
  }
}
</style>