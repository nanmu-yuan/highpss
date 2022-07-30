<template>
  <div class="box">
    <div class="ww">
      <div class="top">
        <div>朗思百科</div>
        <p>为你讲解朗思各科结构及备考方法</p>
        <div class="img">
          <img src="@/assets/image/wikipedia.png" alt="" />
        </div>
      </div>
      <div class="main clearfix" style="margin-top: 0.5875rem">
        <div class="main-left fl">
          <div class="tab">
            <div
              :class="{ current: tabIndex == index }"
              @click="tabChange(index)"
              v-for="(item, index) in tabList"
              :key="item.id"
            >
              <i class="line" v-show="tabIndex == item.id"></i><span>{{ item.introductoryName }}</span>
            </div>
          </div>
          <div class="container">
            <div class="item" v-for="(items, indexs) in dataList[tabIndex]" :key="items.id">
              <div class="title clearfix">
                <div class="digital fl">{{ indexs + 1 }}</div>
                <div class="title_dsc fl">
                  <p class="font_style">{{ items.introductoryChapterName }}</p>
                  <p class="title_right2">{{ items.content }}</p>
                </div>
              </div>
              <div class="item_contain">
                <div class="clearfix" v-for="item1 in items.introductoryDetails" :key="item1.id">
                  <div class="point fl"></div>
                  <div style="height: 100%" class="info fl">
                    <div class="fl clearfix font_style" style="font-size: 0.2rem">
                      <span class="fl">{{ item1.introductoryDetailsName }}</span>
                      <div class="fl option">
                        <i><span class="iconfont icon-zuoti"></span>例题</i>
                        <i><span class="iconfont icon-tuwenxiangqing"></span>图文</i>
                      </div>
                    </div>
                    <span class="fr font_style" style="font-size: 0.2rem" @click="toDetail(item1.id)" :class="item1.finish?'infocolor':'infocoloract'">{{item1.finish?'重新学习':"查看内容"}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main-right fr">
          <predia-right :info="rightInfo"></predia-right>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import prediaRight from '@/components/langsi/prediaRight.vue'
export default {
  components: { prediaRight },
  data() {
    return {
      tabIndex: 0,
      rightInfo: {
        list1: [],
        list2: []
      },
      tabList: [],
      dataList: []
    }
  },
  created() {
    this.getData()
    this.getProblemlist()
  },
  methods: {
    // 获取数据
    getData() {
      this.$api.getClassification(1).then((res) => {
        console.log(res.data.data)
        const arr = []
        const arr1 = ['听力', '阅读', '口语', '写作']
        arr1.forEach((item) => {
          res.data.data.forEach((element, index) => {
            if (element.introductoryName == item) {
              arr.push(element)
            }
          })
        })
        console.log(arr)
        this.tabList = arr

        this.tabList.forEach((item) => {
          this.dataList.push(item.introductoryChapters)
        })
      })
    },
    // // 获取章节
    // getChapter(id) {
    //   this.$api.getTestChapter(this.tabIndex).then((res) => {
    //     console.log(res.data.data)
    //   })
    // },
    // // 获取百科所有问题
    // getWikiQuestion() {
    //   this.$api.getWikiQuestion(0, 1).then((res) => {
    //     console.log(res.data.data)
    //   })
    // },
    tabChange(index) {
      this.tabIndex = index
      // this.getChapter(index)
    },
    toDetail(id) {
      this.$router.push({ path: 'langsiPediadetails', query: { id } })
    },
    // 获取热门内容  考生再看
    getProblemlist(){
      this.$api.getProblemlist("其他热门问题,考生在看",1).then((res) => {
        console.log(res.data.data.resList)
        this.rightInfo.list1=res.data.data.resList
      })
      this.$api.getProblemlist("其他热门问题,热门内容",1).then((res) => {
        console.log(res.data.data.resList)
        this.rightInfo.list2=res.data.data.resList
      })
    }
  }
}
</script>
<style lang="less" scoped>
.infocolor{
  color: #D82424 !important;
}
.infocoloract{
  color: #4F87E6 !important;
;
}
.font_style {
  font-size: 0.225rem;
  text-align: left;
  color: #202020;
  letter-spacing: 0.0225rem;
}

.box {
  background-color: #f5f7fa;
  padding-bottom: 1.375rem;
  box-sizing: border-box;
  .ww {
    width: 17.5rem !important;
    margin: 0 auto;
  }
}

.top {
  position: relative;
  div {
    height: 0.3875rem;
    font-size: 0.3rem;
    font-weight: 700;
    text-align: left;
    color: #4374b9;
    letter-spacing: 0.03rem;
    padding-top: 0.5rem;
  }
  p {
    height: 0.3rem;
    font-size: 0.225rem;
    text-align: left;
    color: #202020;
    letter-spacing: 0.0225rem;
    margin-top: 0.225rem;
  }
  .img {
    position: absolute;
    top: -0.8125rem;
    right: 0.675rem;
    width: 5.9375rem;
    height: 3.525rem;
  }
}

.main-left {
  width: 13.3375rem;
  .tab {
    display: flex;
    width: 8rem;
    height: 0.6rem;
    font-size: 0.225rem;
    // font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    color: #202020;
    letter-spacing: 0.0225rem;
    div {
      cursor: pointer;
      flex: 1;
      border-radius: 0.125rem 0.125rem 0 0;
      background-color: #f0f2f5;
      height: 100%;
      text-align: center;
      line-height: 0.75rem;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
    }
    .line {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 0.0875rem;
      background-color: #4f87e6;
    }
    div.current {
      background-color: #fff;
      color: #4f87e6;
    }
  }
  .container {
    position: relative;
    z-index: 2;
    box-sizing: border-box;
    padding: 0.5rem 0.325rem 0.5rem 0.425rem;
    width: 13.3375rem;
    background-color: #fff;
    border-radius: 0rem 0.1rem 0.1rem 0.1rem;
    box-shadow: 0.025rem 0.025rem 0rem 0rem #e6f3ff;
    .item {
      .title {
        height: 0.975rem;
        .digital {
          margin-right: 0.175rem;
          font-size: 0.9rem;
          height: 0.975rem;
          line-height: 0.975rem;
          // font-family: Tensentype JiaLiChaoCuYuanJ, Tensentype JiaLiChaoCuYuanJ-ExtraBold;
          font-weight: ExtraBold;
          text-align: left;
          color: #4f87e6;
        }
        .title_dsc {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
      .item_contain {
        :first-child,
        :last-child {
          .info {
            border: none;
          }
        }
        & > div {
          height: 0.525rem;
          line-height: 0.525rem;

          .info {
            width: 12.0875rem;
            border-radius: 0.0375rem;
            box-sizing: border-box;
            padding-left: 0.225rem;
            padding-right: 0.1625rem;
            border-top: 0.0125rem dashed #f5f7fa;
            border-bottom: 0.0125rem dashed #f5f7fa;
            cursor: pointer;
            &:hover {
              background-color: #e6f3ff;

              .font_style {
                color: #4f87e6;
              }
            }
          }
        }
        .option {
          font-size: 0.175rem;
          color: #b1b1b1;
          margin-left: 0.25rem;
          .iconfont {
            color: #bae7ff;
          }
          i {
            padding-left: 0.1875rem;
            font-style: normal;
          }
        }
        .point {
          width: 0.1375rem;
          height: 0.1375rem;
          background: #e6f3ff;
          border-radius: 50%;
          margin: 0.2125rem 0.125rem 0 0.225rem;
        }
      }
      .title_right2 {
        font-size: 0.2rem;
        // font-family: Microsoft YaHei, Microsoft YaHei-Regular;
        text-align: left;
        color: #686868;
        letter-spacing: 0.02rem;
      }
    }
  }
}
.main-right {
  position: relative;
  z-index: 2;
  width: 4.0125rem;
  margin-top: 0.6rem;
}
</style>