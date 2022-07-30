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
      <detailItem
        :info="evaluation"
        :index="2"
      >
        <template slot="evaluation">
          <div class="evaluation">
            <div class="clearfix">
              <div class="fl img">
                <img
                  src="@/assets/image/write/head1.png"
                  alt=""
                >
              </div>
              <div class="fl evaluationLanguage">我还在学习课程的开始阶段，到目前为止，
                课程很好，非常清晰易懂。谢谢老师！</div>
            </div>
            <div class="clearfix">
              <div class="fl evaluationLanguage">我在考试中获得了48分的高分，在考试当天
                使用了老师讲解的技巧。</div>
              <div class="fl img">
                <img
                  src="@/assets/image/write/head2.png"
                  alt=""
                >
              </div>
            </div>
            <div class="clearfix">
              <div class="fl img">
                <img
                  src="@/assets/image/write/head3.png"
                  alt=""
                >
              </div>
              <div class="fl evaluationLanguage">老师非常热心，以简单而准确的方式解释了一
                切。每一条信息都是至关重要的，需要仔细听
                讲。讲义中的内容也能完美呈现知识点和重点，
                容易理解。</div>
            </div>
          </div>
        </template>
      </detailItem>
      <detailItem
        :info="{title:'课程安排'}"
        :index="3"
      >
        <template slot="curriculum">
          <div class="curriculum">
            <img
              src="@/assets/image/write/course_ap2.png"
              alt=""
            >
          </div>
        </template>
      </detailItem>
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
        <template slot="userImg1">
          <div class="user_img">
            <img
              :src="rightInfo.infoList[1].imgUrl"
              alt=""
            >
          </div>
        </template>
      </detailRight>
    </div>
    <!-- <detail
      :info="info"
      :list="list"
    >
      <template slot="top">
        <div class="top">
          <div class="title">还在为⼝语分数⽆法达到⽬标学校的<span>要求</span>⽽苦恼嘛？</div>
          <p>
            如果你正在准备参加并试图取得最高分，那么这个课程能帮助你。如果你曾经
            参加朗思考试，但口语成绩伟大目标，那么你将从这个课程中受益!
            栗子朗思口语保过班，提供完整的朗思考试准备计划，涵盖了口语考试的所有
            部分。老师手把手帮助考生从P1的一问一答，P2的角色扮演，到P3情景对话，
            P4话题陈述及问题回答，为口语考试做好准备，建立考试信心。
            准备口语考试的过程，通常充满混乱，令人沮丧。有体系的培训课程，专业的
            任课老师，高质量的课后服务，帮助考生提高信心，取得心仪分数。
            在该课程中，考生不仅会学习如何针对口语四部分进行准备，同时也能掌握高
            频话题答案扩充的技巧，有效地提高分数，并充分地展示语言能力。无论你是
            备考C1还是B2,想要得到highpass，栗子朗思口语保过班为你提供的课程旨在
            与为考生带来信心，并取得成绩提升。
          </p>
        </div>
      </template>
    </detail> -->
  </div>
</template>
<script>
import detailItem from '@/components/detailItem.vue'
import Banner from '@/components/Banner.vue'
import detailRight from '@/components/detailRight.vue'
export default {
  components: { Banner, detailItem, detailRight },
  data() {
    return {
      info: {
        title: '朗思口语保分班',
        bannerImg: require('@/assets/image/write/banner_spoken.png'),
        btn: '速抢名额'
      },
      list: [
        {
          title: '朗思口语保分班帮助你达到目标',
          tit: '',
          contain: [
            `还在为口语分数无法达到目标学校的要求而苦恼嘛？`,
            `如果你正在准备参加并试图取得最高分，那么这个课程能帮助你。如果你曾经参加朗思考试，但口语成绩伟大目标，那么你将从这个课程中受益!`,
            `

              栗子朗思口语保过班，提供完整的朗思考试准备计划，涵盖了口语考试的所有部分。老师手把手帮助考生从P1的一问一答，P2的角色扮演，到P3情景对话，P4话题陈述及问题回答，为口语考试做好准备，建立考试信心。准备口语考试的过程，通常充满混乱，令人沮丧。有体系的培训课程，专业的任课老师，高质量的课后服务，帮助考生提高信心，取得心仪分数。在该课程中，考生不仅会学习如何针对口语四部分进行准备，同时也能掌握高频话题答案扩充的技巧，有效地提高分数，并充分地展示语言能力。无论你是备考C1还是B2,想要得到highpass，栗子朗思口语保过班为你提供的课程旨在与为考生带来信心，并取得成绩提升。`
          ]
        },
        {
          title: '课程特点',
          contain: [
            `
                本课程以朗思口语四部分考题为基础，提升考生的英语表达能力。结合现实生活中的对话，逐渐提高考生听力理解能力与自我表达能力。当掌握了流畅自信的英语表达能力，考试过程中一定能取得理想的成绩！建立流畅的对话和能力,学习口语考试的关键词汇，短语和表达方式,课程中还包括模拟练习，模考测验、和专项点评。帮助考生逐步学会在考试中取得最高分的方法。所有课程都可以进行无限次数的录播回放，所有口语更新话题本，我们承诺为例子朗思的学生们永久更新。
                 `
          ]
        }
      ],
      evaluation: {
        title: '学生对该课程的评价'
      },
      rightInfo: {
        infoList: [
          {
            imgUrl: require('@/assets/image/write/teacher_1v1.png'),
            uname: '许茜',
            speaker: '口语B2主讲人',
            userDsc: [
              `曾就职于英国文化协会雅思考试中心北京办公室，担任雅思阅读听力阅卷老师，并参与雅思监考等工作。托业960分(满分990)独创朗思口语16字真言。`,
              `雅思官方认证教师托福官方认证教师近十年培训中，大部分优秀学子在考试中不同程度的提分。善于利用新媒体强化教学效 果，结合学生个体差异，制定解决方案。具备教研能力，有组织教师团队开展工作的经 验，同时可以辅助市场推广部门制定推广主题计划，也在多年工作中与留学及销售部门有过良好合作，了解相关工作流程，并能够为学生提出课程安排方面的建议，助力签约，`
            ]
          },
          {
            imgUrl: require('@/assets/image/write/teacher_spoken.png'),
            uname: '马慧慧',
            speaker: '朗思口语主讲人',
            userDsc: [`英国约克大学管理学硕士，英语专业本科，高中英语教师资格证。`, `国内知名教培行业5年雅思听力和口语教师工作经验，具有丰富的雅思口语教学理论，对雅思命题方式，解题技巧，学生问题分析具备丰富经验， 擅长解决学生问题，曾任环球雅思口语组负责人，获得最受学生欢迎老师称号，现专研朗思教育一年有余，深谙朗思出题套路，口语规则，及具有独家口语难题破解之法。`]
          }
        ],

        imgs: {
          img1: require('@/assets/image/write/kouyumokao.png'),
          img2: require('@/assets/image/write/yuce.png'),
          img3: require('@/assets/image/write/mokao.png'),
          img4: ''
        },
        routerpush: {
          push1: '/oralMoldTest',
          push2: '/generalPrediction',
          push3: '/lsMoldTest',
          push4: ''
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
.main {
  width: 13rem;
  margin-left: 1.0875rem;
  /deep/ .item {
    margin-top: 1.5625rem;
  }
}
.evaluation {
  & > div {
    margin-bottom: 0.75rem;
  }
  & > div > div:first-child {
    margin-right: 0.8rem;
  }
  .img {
    width: 1.1rem;
    height: 1.1rem;
    margin-top: 0.2375rem;
  }
  .evaluationLanguage {
    width: 7.4625rem;
    background: #ffffff;
    box-shadow: 0rem 0.0375rem 0.1875rem rgba(255, 207, 112, 0.16);
    border-radius: 0.1875rem;
    padding: 0.35rem 0.45rem;
    box-sizing: border-box;
    font-size: 0.3125rem;
    // font-family: Source Han Sans CN;
    line-height: 0.4375rem;
    color: #434a54;
  }
}
.curriculum {
  margin-left: 1.1rem;
}
.right_detail {
  margin-right: 0.45rem;
  margin-top: 2.7375rem;
  .user_img {
    float: left;
    width: 3.75rem;
    height: 3.4875rem;
  }
}
/deep/.title{
  .circle{
      background: #F78008;
    
  }
  .line{
    background: #FFCF70;
  }
}

</style>