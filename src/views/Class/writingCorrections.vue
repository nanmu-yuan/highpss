<template>
  <div class="box clearfix">
    <Banner
      :info="bannerInfo"
      :sign="true"
    />
    <div class="contain fl">
      <detailItem
        :info="list[0]"
        :index="0"
      >
        <template slot="title">
          朗思写作遇到<span class="red">瓶颈</span>？栗子朗思<span class="red">名师</span>为你支招！
        </template>
      </detailItem>
      <detailItem
        :info="{}"
        :index="1"
      >
        <template slot="title">
          <span class="red">为什么</span> 选择栗子 <img src="@/assets/image/flag1.png" style="width:0.4875rem;height:0.4875rem;position: relative; top: 0.1rem;"> 写作批改？
        </template>
        <template slot="why_select">
          <div class="why_select">
            <div class="top"><span>01</span> 快速提分：</div>
            <p>考生习作批改，结合朗思考试评分标准，从词汇，语法，链接和行文逻辑四个维度，给出改正意见。同时点评失分原因，分析题⽬完成度，⽂章结构，和语⾔表达。</p>
          </div>
          <div class="why_select">
            <div class="top"><span>02</span> 名师执笔：</div>
            <p>
              老师拥有多年雅思写作授课及雅思作文批改经验，近几年开始专注于朗思教学，教研，具有丰富的朗思写作授课，学生习作批改及点评经验。</p>
          </div>
        </template>
      </detailItem>
      <detailItem
        :info="list[1]"
        :index="2"
      >
        <template slot="title">
          <span class="red">现在！</span> 准备好攻克朗思作文难关了吗？
        </template>
      </detailItem>
      <div>
        <img src="@/assets/image/write/wing.png" alt="" style="width: 11.9375rem;margin-left: 0.5375rem;">
      </div>
      <!-- <div class="dsc">
        <div class="title">朗思写作遇到<span class="red">瓶颈</span>？栗子朗思<span class="red">名师</span>为你支招！</div>
        <div class="dsc-main">
          <p>写作批改服务，帮你找出失分点，突破写作障碍，只需要24～48小时，实现写作快速提分！考生在样题中选
            择朗思写作题目，按时完成，在线提交。老师将从朗思写作评分标准出发，对考生的文章进行审阅。</p>
          <p>改掉词汇使用不当，语法错误，语句不连贯，段落不通顺，及中式思维等写作高频问题，逐渐提高你的英文
            写作能力！<span style="color:#FF4B40">48小时</span>内完成批改，传授地道的写作词汇，揭示朗思写作的精髓，帮你迅速突破写作瓶颈，提升
            写作成绩！</p>
        </div>
      </div>
      <div class="dsc">
        <div class="title"><span class="red">为什么</span> 选择栗子（栗子emoji）写作批改？</div>
        <div class="dsc-main">
          <div class="top"><span>01</span> 快速提分：</div>
          <p>考生习作批改，结合朗思考试评分标准，从词汇，语法，链接和行文逻辑四个维度，给出改正意见。同
            时点评失分原因，分析题⽬完成度，⽂章结构，和语⾔表达。</p>
        </div>
        <div class="dsc-main">
          <div class="top"><span>02</span> 名师执笔：</div>
          <p>栗子朗思名师1V1批改学生习作 <br />
            老师拥有多年雅思写作授课及雅思作文批改经验，近几年开始专注于朗思教学，教研，具有丰富的朗思
            写作授课，学生习作批改及点评经验。</p>
        </div>
      </div>
      <div class="dsc">
        <div class="title"><span class="red">现在！</span> 准备好攻克朗思作文难关了吗？</div>
        <div class="dsc-main">
          <p>48⼩时彻底摒弃写作模板，学习写作⾼分技巧，掌握写作评分标准，写出考场⾼分⽂章</p>
        </div>
      </div> -->
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
      bannerInfo: {
        title: '写作批改',
        bannerImg: require('@/assets/image/class/write.png'),
        btn: '速抢名额'
      },
      list: [
        {
          contain: [
            `写作批改服务，帮你找出失分点，突破写作障碍，只需要24～48小时，实现写作快速提分！<br/>
            考生在样题中选择朗思写作题目，按时完成，在线提交。老师将从朗思写作评分标准出发，对考生的文章进行审阅。<br/>
            改掉词汇使用不当，语法错误，语句不连贯，段落不通顺，及中式思维等写作高频问题，逐渐提高你的英文写作能力！<br/>
            48小时内完成批改，传授地道的写作词汇，揭示朗思写作的精髓，帮你迅速突破写作瓶颈，提升写作成绩！`
          ]
        },
        {
          contain: [`48⼩时彻底摒弃写作模板，学习写作⾼分技巧，掌握写作评分标准，写出考场⾼分⽂章`]
        }
      ],
      rightInfo: {
        infoList: [
          {
            imgUrl: require('@/assets/image/write/teacher_write.png'),
            uname: '朱军超',
            speaker: '朗思写作主讲人',
            userDsc: [`15年英语教学经验`, `在出国类考试以及国际教育方面有深刻的个人理解`, '本科毕业于南京师范大学，后于美国进修英语教育', `专研朗思写作一年有余，开创独家写作方法，帮助千余名学生成功通过考试`, `托福113分，雅思8分，通过TEM-8，教师资格证书`]
          }
        ],
        imgs: {
          img1: require('@/assets/image/write/write.png'),
          img2: require('@/assets/image/write/yuce.png'),
          img3: require('@/assets/image/write/mokao.png'),
          img4: ''
        },
        routerpush: {
          push1: '/langsiWrite',
          push2: '/generalPrediction',
          push3: '/lsMoldTest',
          push4: ''
        }
      }
    }
  },
  mounted() {},

  components: { Banner, detailItem, detailRight },
  methods: {}
}
</script>
<style lang="less" scoped>
.right_detail {
  margin-right: 0.45rem;
  margin-top: 1rem;
  .user_img {
    float: left;
    width: 3.15rem;
    height: 3.6625rem;
  }
}
.contain {
  // width: 17.675rem;
  margin-left: 1.0875rem;
  /deep/ .serialNumber {
    font-size: 0.4375rem;
    color: #000000;
    font-weight: 700;
  }
  /deep/ .line {
    background-color: #CCE9FF;
    p {
      font-size: 0.475rem !important;
    }
  }
  /deep/ .circle {
    background-color: #BDDBFF;
  }
  /deep/ .contain p {
    font-size: 0.35rem;
  }
}
.title {
  color: #051123;
  font-size: 0.475rem;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  .red {
    color: #ff4b40;
    font-size: 0.5625rem;
  }
}
.why_select {
  // margin-bottom: 2.375rem;
  margin-left: 0.625rem;
  margin-top: 1rem;
  .top {
    position: relative;
    font-size: 0.5375rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #051123;
    margin-bottom: 0.5625rem;
    span {
      position: absolute;
      top: -0.6rem;
      left: -0.375rem;
      z-index: -1;
      font-size: 0.9125rem;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #e7edf7;
      text-decoration: underline;
    }
  }
}
</style>