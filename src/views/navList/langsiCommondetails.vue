<template>
  <div class="details" >
    
    <div >
       <div class="nav clearfix">
        <p class="fl" v-if="getProblemMorelist.wikiType"><span></span>{{getProblemMorelist.wikiType.substring(7, 20)}}</p>
        <p class="fr"><img src="@/assets/image/langsi/iconhome.png" alt="" />您当前位置 ><span v-if="getProblemMorelist.wikiType">{{getProblemMorelist.wikiType.substring(7, 20)}}</span></p>
      </div>
      <div class="cont">
        <div class="cont_left">
          <h2>{{getProblemMorelist.title}}</h2>
          <div class="cont_leftbox" v-for="(item,index) in getProblemMorelist.paragraphs" :key="index">
              <div v-if="item.paragraphType=='PICTURE'" class="picture_box">
                  <div :style="item.picture.nameStyle">
                      <h2 :style="`color:${item.picture.nameColor};fontSize:${item.picture.nameSize/80}rem;`">{{item.picture.name}}</h2>
                  </div>
                  <div :style="item.picture.contentStyle">
                      <p :style="`color:${item.picture.contentColor};fontSize:${item.picture.contentSize/80}rem;`">{{item.picture.content}}</p>
                  </div>
                  <img :src="`https:${item.picture.url}`" alt="" :style="`width:${item.picture.weight/80}rem;height:${item.picture.height/80}rem;`">
              </div>
              <div v-if="item.paragraphType=='TEXT'" class="text_box">
                <div  v-for="(items,indexs) in item.sentences" :key="indexs">
                  <!-- <div :style="items.style">
                      <p :style="`color:${items.color};fontSize:${items.size/80}rem;`">{{items.content}}</p>
                  </div> -->
                  <div  >
                      <p >{{items.content}}</p>
                  </div>
                </div>
              </div>
              <div v-if="item.paragraphType=='AUDIO'" class="audio_box">
                <div :style="item.audio.nameStyle">
                      <h2 :style="`color:${item.audio.nameColor};fontSize:${item.audio.nameSize/80}rem;`">{{item.audio.name}}</h2>
                  </div>
                  <div :style="item.audio.contentStyle">
                      <p :style="`color:${item.audio.contentColor};fontSize:${item.audio.contentSize/80}rem;`">{{item.audio.content}}</p>
                  </div>
                  <audio :src="`https:${item.audio.url}`" controls="controls"></audio>
              </div>
              <div v-if="item.paragraphType=='VIDEO'" class="video_box">
                <div :style="item.video.nameStyle">
                      <h2 :style="`color:${item.video.nameColor};fontSize:${item.video.nameSize/80}rem;`">{{item.video.name}}</h2>
                  </div>
                  <div :style="item.video.contentStyle">
                      <p :style="`color:${item.video.contentColor};fontSize:${item.video.contentSize/80}rem;`">{{item.video.content}}</p>
                  </div>
                  <video :src="`https:${item.video.url}`" controls="controls"></video>
              </div>

          </div>




        </div>
        <div class="cont_right">
          <predia-right :info="rightInfo"></predia-right>
        </div>
      </div>
    </div>
<div>

</div>
  </div>
</template>

<script>
import prediaRight from '@/components/langsi/prediaRight.vue'
import Video from '@/components/langsi/video.vue'
export default {
  components: {
    prediaRight,
    Video
  },
  data() {
    return {
      id:'',
      rightInfo: {
        list1: [],
        list2: []
      },
      getProblemMorelist:[]
    }
  },
  created(){
    
    this.getProblemlist()
    
    this.id = this.$route.query.id
        this.getProblemMore(this.id)
        console.log(this.id,'this.id')
  },
  methods: {
    // 获取详情
    getProblemMore(id){
      this.$api.getProblemMore(id).then((res) => {
        console.log(res.data.data)
        this.getProblemMorelist=res.data.data
        console.log('1231232')
      })
    },
    // 获取热门内容  考生再看
    getProblemlist(){
      this.$api.getProblemlist("其他热门问题,考生在看",1).then((res) => {
        this.rightInfo.list1=res.data.data.resList
      })
      this.$api.getProblemlist("其他热门问题,热门内容",1).then((res) => {
        this.rightInfo.list2=res.data.data.resList
      })
    }
  },
  watch: { 
    // 监听路由变化，路由变化的时候请求页面数据
    '$route': function() {
      this.id = this.$route.query.id
        this.getProblemMore(this.id)
        console.log(this.id,'this.id')
    }
  },
}
</script>

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
        padding-bottom: .8875rem;
            h2 {
              font-size: 0.35rem;
              font-weight: 400;
              color: #000000;
              padding-bottom: 0.2125rem;
              // border-bottom: 0.0125rem dashed #e3e8f0;
            }
            .cont_leftbox{
              .picture_box,.text_box,.audio_box,.video_box{
                
                h2{
                  font-size: .3rem;
                  padding-top: .125rem;
                  text-align: left;
                  font-weight: bold;
                  color: #000000;
                }
                p{
                  line-height: .375rem;
                  font-size: .225rem;
                  color: #505050;
                  text-align: left;
                  margin: 0 auto;
                  width: 85%;
                }
                img,video{
                  margin: 0 auto .425rem;
                  width: 11.4125rem;
                  height: 5.0875rem;
                  display: block;
                }
                audio{
                  display: block;
                  margin: 0 auto .425rem;
                }
              }
            }
        }
        .cont_right {
        width: 4.0125rem;
        }
    }
}
</style>
