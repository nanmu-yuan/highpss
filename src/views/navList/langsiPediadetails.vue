<template>
  <div class="details">
    <div class="nav clearfix">
      <p class="fl"><span></span>百科详情</p>
      <p class="fr">
        <img src="@/assets/image/langsi/iconhome.png" alt="" />您当前位置><span>朗思百科 > 百科详情</span>
      </p>
    </div>
    <div class="cont">
      <div class="cont_left">
        <h2>{{ introductoryDetailsName }}</h2>
        <div style="text-align: center; margin-top: 0.25rem" v-for="(item, index) in articleList" :key="index">
          <div v-if="item.paragraphType == 'TEXT'" style="margin-bottom: 0.25rem">
            <div v-for="(items, indexs) in item.sentences" :key="indexs">
              <div :style="items.nameStyle" class="title">
                <p
                  :style="`fontSize:${items.nameSize / 80}rem;color:${items.nameColor};lineHeight:${
                    items.nameSize / 80
                  }rem;`"
                >
                  {{ items.name }}
                </p>
              </div>
              <div :style="items.contentStyle">
                <p :style="`fontSize:${items.contentSize / 80}rem;color:${items.contentColor};`">{{ items.content }}</p>
              </div>
            </div>
          </div>
          <div v-if="item.paragraphType == 'PICTURE'" style="margin-bottom: 0.25rem">
            <div :style="item.picture.nameStyle" class="title">
              <p
                :style="`fontSize:${item.picture.nameSize / 80}rem;color:${item.picture.nameColor};lineHeight:${
                  item.picture.nameSize / 80
                }rem;`"
              >
                {{ item.picture.name }}
              </p>
            </div>
            <div :style="item.picture.contentStyle">
              <p :style="`fontSize:${item.picture.contentSize / 80}rem;color:${item.picture.contentColor};`">
                {{ item.picture.content }}
              </p>
            </div>
            <img
              :src="'https://' + item.picture.url"
              alt=""
              :style="`width:${item.picture.weight / 80}rem;height:${item.picture.height / 80}rem;`"
            />
          </div>
          <div v-if="item.paragraphType == 'AUDIO'" style="margin-bottom: 0.25rem">
            <div :style="item.audio.nameStyle" class="title">
              <p
                :style="`fontSize:${item.audio.nameSize / 80}rem;color:${item.audio.nameColor};lineHeight:${
                  item.audio.nameSize / 80
                }rem;`"
              >
                {{ item.audio.name }}
              </p>
            </div>
            <div :style="item.audio.contentStyle">
              <p :style="`fontSize:${item.audio.contentSize / 80}rem;color:${item.audio.contentColor};`">
                {{ item.audio.content }}
              </p>
            </div>
            <audio :src="'https://' + item.audio.url" controls="controls"></audio>
          </div>
          <div v-if="item.paragraphType == 'VIDEO'" style="margin-bottom: 0.25rem">
            <div :style="item.video.nameStyle" class="title">
              <p
                :style="`fontSize:${item.video.nameSize / 80}rem;color:${item.video.nameColor};lineHeight:${
                  item.video.nameSize / 80
                }rem;`"
              >
                {{ item.video.name }}
              </p>
            </div>
            <div :style="item.video.contentStyle">
              <p :style="`fontSize:${item.video.contentSize / 80}rem;color:${item.video.contentColor};`">
                {{ item.video.content }}
              </p>
            </div>
            <video :src="'https://' + item.video.url" v-if="item.type == 'video'" controls="controls"></video>
          </div>
        </div>
        <div class="btn">完成学习</div>
      </div>
      <div class="cont_right">
        <predia-right :info="rightInfo"></predia-right>
      </div>
    </div>
  </div>
</template>

<script>
import prediaRight from '@/components/langsi/prediaRight.vue'
export default {
  components: {
    prediaRight
  },
  data() {
    return {
      articleList: [],
      introductoryDetailsName: '',
      rightInfo: {
        list1: [],
        list2: []
      },
    }
  },
  created() {
    this.getProblemlist()
    this.detailId = this.$route.query.id
    this.getDetailId(this.detailId)
    
  },
  methods: {
    // 获取详情数据
    getDetailId(id) {
      this.$api
        .getDetailId(id)
        .then((res) => {
          if (res.data.code == 200) {
            console.log(res.data.data)
            this.articleList = res.data.data.paragraphs
            this.introductoryDetailsName = res.data.data.introductoryDetailsName
          }
        })
        .catch((err) => {
          console.log(err)
          // this.$message({
          //   type: 'warning',
          //   message: '暂无数据'
          // })
        })
    },
    // 完成学习
    completeStudy() {
      this.$api.completeStudy(this.detailId).then((res) => {
        if (res.data.code == 200) {
          console.log(res.data.data)
        }
      })
    },
    // 获取热门内容  考生再看
    getProblemlist(){
      this.$api.getProblemlist("其他热门问题,考生在看",1).then((res) => {
        console.log(res.data.data.resList,'getProblemlist')
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
<style>
</style>
<style lang="less" scoped>
.details {
  padding: 0 3.25rem;
  padding-top: 1.7375rem;
  padding-bottom: 3.275rem;
  background: #f5f7fa;
  .nav {
    border-bottom: 0.0125rem solid #d4d4d4;
    margin-bottom: 0.5375rem;
    p {
      color: #000000;
      font-size: 0.225rem;
      line-height: 0.35rem;
    }
    p:nth-child(1) {
      height: 0.3125rem;
      padding-left: 0.15rem;
      display: flex;
      align-items: center;
      span {
        display: inline-block;
        margin-right: 0.125rem;
        width: 0.125rem;
        height: 0.3125rem;
        background: #4f87e6;
        border-radius: 0 0.0625rem 0.0625rem 0;
      }
    }
    p:nth-child(2) {
      display: flex;
      justify-content: center;

      img {
        width: 0.3125rem;
        margin-right: 0.1rem;
      }
    }
  }
  .cont {
    display: flex;
    justify-content: center;
    .cont_left {
      width: 13.2875rem;
      background: #ffffff;
      margin-right: 0.2rem;
      padding: 0 0.4rem;
      padding-top: 0.2375rem;
      h2 {
        font-size: 0.35rem;
        font-weight: 400;
        color: #000000;
        padding-bottom: 0.2125rem;
        border-bottom: 0.0125rem dashed #e3e8f0;
      }
      .title {
        padding: 0.25rem 0;
      }
      img,
      video,
      audio {
        margin-top: 0.625rem;
      }
      .btn {
        width: 2.0875rem;
        height: 0.75rem;
        background: #4f87e6;
        border-radius: 0.125rem;
        font-size: 0.35rem;
        color: #ffffff;
        line-height: 0.75rem;
        text-align: center;
        margin: 0.25rem auto 0.5375rem;
      }
    }
    .cont_right {
      width: 4.0125rem;
    }
  }
}
</style>
