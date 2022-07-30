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
      >
      </detailItem>
      <detailItem
        :info="list_3"
        :index="3"
      >
        <template slot="sentiment">
          <p style="color:#FF9E48;font-size:.55rem;text-align: center;font-weight: 700;line-height: .9375rem;">最后祝各位考生早日hp早日嗨趴！<br />
            栗子朗思助力每位同学的梦想！</p>
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
      </detailRight>
    </div>
  </div>
</template>
<script>
import detailItem from '@/components/detailItem.vue'
import Banner from '@/components/Banner.vue'
import detailRight from '@/components/detailRight.vue'
export default {
  data() {
    return {
      info: {
        title: '朗思写作训练营',
        bannerImg: require('@/assets/image/write/banner_write.png'),
        btn: '速抢名额'
      },
      list: [
        {
          title: '名师授课，解决写作中常见型错误',
          contain: [
            `
                  为同学讲解思路、写作方法、如何拓展内容 并且结合着不同的题型 以实战的方式带同学去了解朗思写作  最后为同学们进行查漏补缺，专项诊治替同学去解决问题从认识朗思考试到朗思写作的介绍，朱老师带你一步步领略“写作的魅力”，从个方面精准切入不同分数段的特点
                `
          ]
        },
        {
          title: '栗子朗思写作训练营',
          contain: [
            `
                  朗思考试的知名度与接受度日益增长，考试费用也水涨船高。线下培训，往往价格高昂，又受制于各地疫情管控政策，作为一家专注于朗思培训的机构，栗子朗思提供在线培训，全真模考，考点预测，押题保分等多项服务，为朗思考生保驾护好，尽快获得理想分数。在朗思写作训练营中，考生不仅能够获得highpass，同时也能提升英文写作能力。
                `
          ]
        },
        {
          title: '课程介绍',
          contain: [
            `
                  朗思写作按话题分类⾼频词汇、朗思写作⼩程序会员、考前考后答疑服务、官方评分标准讲解、以及无限制的课程录播回放每节课1.5小时，提前规划时间，结合课程资料，做好笔记，获取知识，提升分数。书山有路勤为径，学海⽆涯苦作舟。知识的积和能力的提升，从来都不是⼀蹴而就的。视频网站上充斥着几分钟，十几分钟的教学视频，用耸动的标题和花哨的话术，给考生一种英语学习可以速成的错觉。看完这种视频，往往记不住有效信息，无法对备考形成有体系有规则的计划。长此以往，非但得不到积极效果，反而会极大消磨考生耐心，甚至逐渐丧失对学习英语的激情。
                `
          ]
        }
      ],
      list_3: {
        title: '面向对象',
        contain: [
          `
              留学⽣ <br />
              准备留学 <br />
              需要进⾏移⺠ <br />
              想要提升写作能⼒ <br />
              `
        ]
      },
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
  components: {
    Banner,
    detailItem,
    detailRight
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
    width: 3.15rem;
    height: 3.6625rem;
  }
}
</style>