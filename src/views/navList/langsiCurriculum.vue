<template>
  <!-- 朗思写作训练营 -->
  <div class="box">
    <langsiHeader></langsiHeader>
    <div class="contion">
      <langsi-price :info="pirce"></langsi-price>
      <div class="course_introduce">
        <langsi-course :info="course"></langsi-course>
        <langsi-introduce :info="rightInfo"> </langsi-introduce>
      </div>
      <langsi-video :info="bottomVideo"></langsi-video>
    </div>
  </div>
</template>

<script>
import langsiHeader from '@/components/langsi/header.vue'
import langsiPrice from '@/components/langsi/price.vue'
import langsiCourse from '@/components/langsi/course.vue'
import langsiIntroduce from '@/components/langsi/introduce.vue'
import langsiVideo from '@/components/langsi/video.vue'
export default {
  data() {
    return {
      detailId: '',
      pirce: {
        cousetype: '朗思口语保分班C1',
        videopirce: []
      },
      rightInfo: {
        CBlist: [
          {
            B2C1: ''
          },
          {
            B2C1: ''
          }
        ],
        rightInfotit: '口语C1主讲',
        infoList: [
          {
            imgUrl: require('@/assets/image/langsi/tic3.png'),
            uname: '朱均超 写作主讲',
            speaker: '好评率:100%',
            userDsc1: '本科毕业于南京师范大学，后于美国进修英语教育。',
            userDsc2: '托福113分，雅思8分，通过TEM-8，拥有英语教师资格证书。',
            text: '他的课程',
            push: '/'
          }
        ],
        labelList: [`听力`, `阅读`, `口语`, `写作`, `朗思真题`, `保分班`],
        recommendList: [
          {
            img: require('@/assets/image/langsi/kouyu.png'),
            title: '朗思口语保分班',
            text: '名师授课',
            time: '2022-11-12',
            path: '/langsiMouthSpecial'
          },
          {
            img: require('@/assets/image/langsi/quanke.png'),
            title: '朗思全科1V1',
            text: '朗思最快3天出分',
            time: '2022-11-12',
            path: '/langsiPractice1v1'
          },
          {
            img: require('@/assets/image/langsi/pigai.png'),
            title: '朗思写作批改',
            text: '名师批改',
            time: '2022-11-12',
            path: '/langsiCorrectionSpecial'
          },
          {
            img: require('@/assets/image/langsi/xunlian.png'),
            title: '朗思写作训练营',
            text: '作文头脑风暴',
            time: '2022-11-12',
            path: '/langsiWritingSpecial'
          },
          {
            img: require('@/assets/image/langsi/mokao.png'),
            title: '朗思全真模考',
            text: '全真模拟考场环境',
            time: '2022-11-12',
            // path: '/langsiForecastSpecial'
          }
        ],
        routerpush: {
          push1: '/langsiSpoken',
          push2: '/langsigeneral',
          push3: '/writingCorrections'
        }
      },
      bottomVideo: {
        videoList: [
          {
            img1: require('@/assets/image/langsi/yuedu.png'),
            img2: require('@/assets/image/home/cntpa5_btn.png'),
            text1: '阅读技巧',
            push: '/'
          },
          {
            img1: require('@/assets/image/langsi/xiezuo.png'),
            img2: require('@/assets/image/home/cntpa5_btn.png'),
            text1: '写作思路',
            push: '/'
          },
          {
            img1: require('@/assets/image/langsi/ky.png'),
            img2: require('@/assets/image/home/cntpa5_btn.png'),
            text1: '口语高分技巧',
            push: '/'
          },
          {
            img1: require('@/assets/image/langsi/tingli.png'),
            img2: require('@/assets/image/home/cntpa5_btn.png'),
            text1: '听力捕捉技巧',
            push: '/'
          }
        ]
      },
      course: {
        cousetype: '朗思口语保分班C1',
        tabShow: true,
        list_li: [
          {
            text: '课程章节'
          },
          {
            text: '课程介绍'
          }
        ],
        cont_zj: [],
        costext: [],
        tab_cont2: [
          {
            tit1: '课程特点',
            text1:
              '适合留学生，准备留学，想要移民或提升英语写作能力的考生。为同学讲解思路、写 作方法、如何拓展内容并且结合着不同的题型以实战的方式带同学去了解朗思写作。',
            text2: '',
            tab_cont2list: [
              {
                tit2: '课程亮点',
                box2_list: [
                  {
                    iShow: true,
                    spanShow: true,
                    text1: '严卡单词正确率',
                    text2: ' 课程小助理帮你打好学习基础'
                  },
                  {
                    iShow: true,
                    spanShow: true,
                    text1: '讲练结合',
                    text2: '严格按照课程安排将所有学习任务执行到位'
                  },
                  {
                    iShow: true,
                    spanShow: true,
                    text1: '作业及时批改',
                    text2: '拒绝错误惯性思维'
                  },
                  {
                    iShow: true,
                    spanShow: true,
                    text1: '考前心理疏导',
                    text2: '给你的关心不止学习本身'
                  },
                  {
                    iShow: true,
                    spanShow: false,
                    text1: '全程私人督导',
                    text2: '课程助力一对一助力'
                  }
                ]
              }
            ],
            push: '/'
          }
        ]
      }
    }
  },
  created() {
    this.getCoursetype()
    this.getTeacherInformation('许茜')
  },
  methods: {
    //获取课程
    getCoursetype() {
      this.$api.getCoursetype('朗思口语保分班C1').then((res) => {
        console.log(res.data.data)
        this.pirce.videopirce = res.data.data
        this.pirce.videopirce.forEach((item) => {
          this.getCoursecontent(item.id)
        })
      })
    },
    //获取章节
    getCoursecontent(id) {
      this.$api.getCoursecontent(id).then((res) => {
        console.log(res.data.data)
        this.course.cont_zj = res.data.data.chapters
      })
    },
    //获取老师个人详情
    getTeacherInformation(type) {
      this.$api.getTeacherMessage(type).then((res) => {
        console.log(res.data.data)
        this.rightInfo.infoList = res.data.data
        console.log(this.infoList)
      })
    },
    //跳转热门标签
    jumpLabel() {
      if (labelList == '听力') {
        this.$router.push(path)
      }
    }
  },
  components: {
    langsiHeader,
    langsiPrice,
    langsiIntroduce,
    langsiCourse,
    langsiVideo
  }
}
</script>

<style lang="less" scoped>
.contion {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 3.125rem;

  .course_introduce {
    display: flex;
  }
}
</style>
