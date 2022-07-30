<template>
  <div class="box">
    <div class="banner">
      <img class="banner_img1" src="@/assets/image/home/banner.png" alt="" v-if="!isLogin" />
      <img class="banner_img2" src="@/assets/image/home/banner2.png" alt="" v-else />
      <!-- <div class="wx_code" v-if="!isLogin">
        <img :src="imgUrl" alt="" />
      </div>
      <p v-if="!isLogin" class="banner_text">扫码关注 领取你的专属服务</p> -->
      <div class="from fl" v-if="!isLogin">
        <div class="form" v-show="inputShow">
          <div class="title">
            <span class="phone_icon"><img src="@/assets/image/phone_icon.png" alt=""></span>
            <span>手机号登录</span>
          </div>
            <div class="phone">
              <div>
                <span class="iconfont icon-shoujihao"></span>
                <input type="number" v-model="form.phone" placeholder="输入手机号码" />
              </div>
            </div>
            <div class="code clearfix">
              <div class="fl">
                <span class="iconfont icon-yanzhengma"></span>
                <input type="text" v-model="form.code" placeholder="输入验证码" />
              </div>
              <button class="fl" @click="send">{{ countDown }}</button>
            </div>
            <el-button type="primary" @click="sumbit" style="margin: 0 auto;display: block;width: 1.25rem;"> 提交</el-button>
            <div class="wxbtn" @click="wx_btn">
              <p><img src="@/assets/image/wx.png" alt="">使用微信登录</p>
            </div>
        </div>
        <div class="wx" v-show="wxShow">
            <div class="wx_tit">
              <img src="@/assets/image/wx.png" alt="" />
              <span>微信扫码立即登录</span>
            </div>
            <div class="wx_code">
              <img :src="imgUrl" alt="" />
            </div>
            <p  class="input_btn"><span class="iconfont icon-shoujihao" @click="input_btn">手机号登录</span></p>
          </div>
        <div class="argee_contract">
          <!-- 同意协议 -->
          <p class="argee">
            <el-checkbox v-model="is_agree">我已阅读并同意</el-checkbox>
          </p>
          <!-- 协议 -->
          <div class="contract">
            <router-link to="agreement" target="_blank">《栗子朗思相关协议》</router-link>
          </div>
        </div>
        
      </div>
      <p v-if="!isLogin" class="banner_text">注册登录  领取你的专属服务</p> -->
    </div>
    <div class="cont">
      <div class="con_pa1">
        <h2>朗思课程</h2>
        <div class="conpa1_list" v-for="(item, index) in conpa1_list" :key="index">
          <img :src="item.img" alt="" />
          <div class="conpa1_listtxt">
            <p>{{ item.text }}</p>
            <div @click="startTest($event, item.push)">{{ item.btn }}</div>
          </div>
        </div>
      </div>
      <div class="con_pa2">
        <h2>朗思批改·预测</h2>
        <div
          class="con_pa2list"
          v-for="(item, index) in conpa2_list"
          :key="index"
          @click="startTest($event, item.push)"
        >
          <img :src="item.img" alt="" />
          <div>
            <p>{{ item.text1 }}</p>
            <p>{{ item.text2 }}</p>
          </div>
        </div>
      </div>
      <div class="con_pa3">
        <h2>朗思全真模考</h2>
        <div class="con_pa3box">
          <div class="img fl">
            <img src="@/assets/image/home/cntpa3_1.png" alt="" />
          </div>
          <div class="con_pa3listbox fr">
            <div
              class="con_pa3list"
              v-for="(item, index) in conpa3_list"
              :key="index"
              :style="{ background: `url(${item.bgImg}) no-repeat right bottom` }"
            >
              <p>{{ item.text1 }}</p>
              <p>
                <span>{{ item.text2 }}</span>
                <span>{{ item.text3 }}</span>
              </p>
              <p @click="startTest($event, item.push)">{{ item.text4 }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="con_pa4">
        <img src="@/assets/image/home/cntpa4_1.png" alt="" />
        <div class="con_pa4text">
          <h2>朗思笔试全真模考</h2>
          <p>朗思机考模拟测试，提前实战演练，完整反馈听力和阅读测试结果</p>
        </div>
        <div class="con_pa4btn" @click="startTest($event, '/SingleExercise')">开始模考</div>
      </div>
      <div class="con_pa5">
        <h2>课程推荐</h2>
        <div class="con_pa5_box">
          <div class="con_pa5_list" v-for="(item, index) in conpa5_list" :key="index">
            <div class="con_pa5_video">
              <img :src="item.img" alt="" class="con_pa5_videoimg" />
              <img :src="item.btn" alt="" class="video_btn" />
            </div>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
      <div class="con_pa6">
        <img src="@/assets/image/home/cntpa6_bj.png" class="bj" alt="" />
        <div class="con_pa6_computer">
          <img src="@/assets/image/home/cntpa6_1.png" alt="" />
          <img src="@/assets/image/home/cntpa6_2.png" alt="" />
          <img src="@/assets/image/home/cntpa6_3.png" alt="" />
        </div>
        <div class="con_pa6text">
          <h2>栗子朗思你最好的学习助手</h2>
          <i></i>
          <p>口语 · 写作 · 模考 · 单项练习</p>
          <p>备考小程序 · 栗子朗思APP · 网页全真模考</p>
        </div>
        <p class="con_pa6loa">全科训练营，助考生顺利high pass</p>
      </div>
      <div class="con_pa7">
        <h2>栗子朗思主讲团队</h2>
        <div>
          <img src="@/assets/image/home/1ls.png" alt="" />
          <img src="@/assets/image/home/2ls.png" alt="" />
          <img src="@/assets/image/home/3ls.png" alt="" />
          <img src="@/assets/image/home/4ls.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 登录弹窗 -->
    <!-- <div class="login_dialog" v-if="loginDialog">
      <span class="iconfont icon-guanbi" @click="close"></span>
      <div class="dsc fl">
        <div class="top">
          <p>LanguageCert Highpass</p>
          <h1>嗨趴朗思</h1>
          <p class="mock">在线模考</p>
        </div>
        <p>
          <span class="iconfont">√</span>
          <span>一步快速注册</span>
        </p>
        <p>
          <span class="iconfont">√</span>
          <span>朗思在线模考</span>
        </p>
        <p>
          <span class="iconfont">√</span>
          <span>考试系统一比一还原</span>
        </p>
      </div>
      <div class="from fl">
        <div class="wx">
          <div class="wx_tit">
            <img src="@/assets/image/wx.png" alt="" />
            <span>微信扫码立即登录</span>
          </div>
          <div class="wx_code">
            <img :src="imgUrl" alt="" />
          </div>
        </div>
        <!~~ 同意协议 ~~>
        <p class="argee">
          <el-checkbox v-model="is_agree">我已阅读并同意</el-checkbox>
        </p>
        <!~~ 协议 ~~>
        <div class="contract">
          <router-link to="agreement" target="_blank">《栗子朗思相关协议》</router-link>
        </div>
      </div>
    </div> -->
    <!-- 遮罩 -->
    <!-- <div class="mask" @click="close" v-show="typeDialog || loginDialog || setDialog"></div> -->
  </div>
</template>

<script>
export default {
  props: {
    islo: Boolean
  },
  data() {
    return {
      dialog: false,
      flag1: true,
      isLogin: false,
      is_agree: true,
      nums: 1,
      loginInfo: {},
      form: {},
      imgUrl: '',
      key: '',
      testId: 1,
      tempId: 1,
      typeDialog: false,
      loginDialog: false,
      timer: '',
      setDialog: false,
      conpa1_list: [
        {
          img: require('@/assets/image/home/cntpa1_1.png'),
          text: '朗思口语保分班',
          btn: '查看课程',
          push: '/langsiMouthSpecial'
        },
        {
          img: require('@/assets/image/home/cntpa1_2.png'),
          text: '朗思写作训练营',
          btn: '查看课程',
          push: '/langsiWritingSpecial'
        },
        {
          img: require('@/assets/image/home/cntpa1_3.png'),
          text: '朗思全科1V1',
          btn: '查看课程',
          push: '/langsiPractice1v1'
        }
      ],
      conpa2_list: [
        {
          img: require('@/assets/image/home/cntpa2_1.png'),
          text1: '朗思写作批改',
          text2: '名师执笔，快速提分',
          push: '/langsiCorrectionSpecial'
        },
        {
          img: require('@/assets/image/home/cntpa2_2.png'),
          text1: '朗思全科预测',
          text2: '精准预测，一次处分，零失误全程陪伴，完美售后',
          push: '/langsiForecastSpecial'
        }
      ],
      conpa3_list: [
        {
          text1: '听力',
          text2: '精听解析，原文对照',
          text3: '倍速调节，个性化设置',
          text4: '去练习',
          push: '/SingleExercise',
          bgImg: require('@/assets/image/home/listen.png')
        },
        {
          text1: '阅读',
          text2: '官方样题，独家真题',
          text3: '错题解析，随时练习',
          text4: '去练习',
          push: '/SingleExercise',
          bgImg: require('@/assets/image/home/read.png')
        },
        {
          text1: '写作',
          text2: '还原考试界面，体验在线写作',
          text3: '官方样题+独家真题',
          text4: '去练习',
          push: '/SingleExercise',
          bgImg: require('@/assets/image/home/write.png')
        },
        {
          text1: '口语',
          text2: '名师点评，真题试练',
          text3: '模拟考试环境，建立考场信心',
          text4: '去练习',
          push: '/SingleExercise',
          bgImg: require('@/assets/image/home/spoken.png')
        }
      ],
      conpa5_list: [
        {
          img: require('@/assets/image/home/cntpa5_1.png'),
          btn: require('@/assets/image/home/cntpa5_btn.png'),
          text: '阅读技巧'
        },
        {
          img: require('@/assets/image/home/cntpa5_2.png'),
          btn: require('@/assets/image/home/cntpa5_btn.png'),
          text: '写作思路'
        },
        {
          img: require('@/assets/image/home/cntpa5_3.png'),
          btn: require('@/assets/image/home/cntpa5_btn.png'),
          text: '口语高分技巧'
        },
        {
          img: require('@/assets/image/home/cntpa5_4.png'),
          btn: require('@/assets/image/home/cntpa5_btn.png'),
          text: '听力捕捉技巧'
        }
      ],
      wxShow:false,
      inputShow:true,
      form: {
          code: '',
          phone: '',
      },
      countDown: "发送验证码", // 倒计时
      bVerification: false // 节流
    }
  },
  watch: {
    islo(newV, oddV) {
      this.isLogin = newV
    }
  },
  created() {
    let token = localStorage.getItem('token')
    if (token) {
      this.isLogin = true
    } else {
      this.getWxCode()
    }
    this.tempId = JSON.parse(sessionStorage.getItem('testId'))
    if (this.tempId != null) {
      this.testId = this.tempId
      this.nums = this.tempId
    }
    sessionStorage.setItem('testId', this.testId)
    if (this.isLogin) {
      this.loginInfo = JSON.parse(localStorage.getItem('loginInfo'))
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  beforeRouteLeave(to, form, next) {
    clearInterval(this.timer)
    next()
  },
  methods: {
        // 微信登录
    wx_btn(){
      this.wxShow = true
      this.inputShow = false
      this.getWxCode()
    },
    // 手机号登录显示
    input_btn(){
      this.wxShow = false
      this.inputShow = true
    },
    // 手机号码登录
    sumbit() {
        const { code, phone } = this.form
        if (!code || !phone) return this.$message("请输入手机号和验证码");
        this.$api.postFormdata(this.form.phone,this.form.code).then((res) => {
            if (res.data.code == 200) {
              this.loginInfo = res.data.data.loginInfo
              localStorage.setItem('token', res.data.data.token)
              localStorage.setItem('loginInfo', JSON.stringify(this.loginInfo))
              this.isLogin = true
              this.loginDialog = false
              this.$message({
                type: 'success',
                message: '登录成功'
              })
              
            }
          })
          .catch(() => {
            this.$message({
              type: 'error',
              message: '登录失败'
            })
          })
    },
    // 发送手机号获取验证码
    send() {
        if (!/^\d{11}$/.test(this.form.phone)) return this.$message("请先输入正确的手机号");
        if (this.bVerification) return;
        this.bVerification = true;
        this.$api.postFormphone(this.form.phone).then((res) => {
            if (res.data.code == 200) {
              this.$message({
                type: 'success',
                message: '发送成功'
              })
              
            }
          })
          .catch(() => {
            this.$message({
              type: 'error',
              message: '发送失败'
            })
          })

        let countDown = 59;
        const auth_time = setInterval(() => {
            this.countDown = countDown--;
            if (this.countDown <= 0) {
                this.bVerification = false;
                this.countDown = "发送验证码";
                clearInterval(auth_time);
            }
        }, 1000);
    },

    // 开始模考
    startTest(event, path) {
      console.log(path)
      if (path) {
        return this.$router.push(path)
      }
      this.$router.push('SingleExercise')
    },
    layout() {
      console.log('触发没')
      this.isLogin = false
      this.scoreInfo = {
        highListeningGoal: '',
        highReadingGoal: '',
        highWritingGoal: '',
        highSpeakingGoal: ''
      }
      this.testNum = 0
      this.day = {
        studyDayTime: '',
        studyDayTime: ''
      }
    },
    open() {
      this.dialog = true
    },
    closeDialog() {
      this.dialog = false
    },
    // 登录
    login() {
      // this.loginDialog = true
      this.getWxCode()
    },
    // 获取二维码
    getWxCode() {
      this.$api
        .getWxCode()
        .then((res) => {
          if (res.data.code == 200) {
            this.imgUrl = res.data.data.qrUrl
            this.key = res.data.data.eventKey
          }
          this.timer = setInterval(() => {
            console.log('lcx')
            this.$api.getLoginState(this.key).then((result) => {
              if (result.data.code == 200) {
                if (result.data.data.isLogin) {
                  clearInterval(this.timer)
                  let loginInfo = result.data.data.loginInfo
                  localStorage.setItem('token', loginInfo.token)
                  localStorage.setItem('loginInfo', JSON.stringify(loginInfo.users))
                  this.loginInfo = loginInfo.users
                  this.isLogin = true
                  this.loginDialog = false
                  this.$emit('logo', true)
                  this.$message({
                    type: 'success',
                    message: '登录成功!'
                  })
                }
              }
            })
          }, 2000)
        })
        .catch((err) => {})
    },
    // 关闭弹窗
    close() {
      this.typeDialog = false
      this.loginDialog = false
      this.setDialog = false
      clearInterval(this.timer)
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  padding-bottom: 3.625rem;
  .banner {
    width: 100%;
    position: relative;
    // .wx_code {
    //   width: 2.5875rem;
    //   height: 2.5875rem;
    //   border: 0.125rem solid #aadcfc;
    //   border-radius: 0.1rem;
    //   position: absolute;
    //   right: 3.7625rem;
    //   top: 3.475rem;
    // }
    .from {
          position: absolute;
    right: 2.375rem;
    top: 2.625rem;
    width: 5.2375rem;
    height: 100%;
    // padding: 0.2rem 0.9375rem;
    // box-sizing: border-box;
    text-align: center;
    
    .form {
        margin-left: 0.4875rem;
        .wxbtn{
          display: flex;
          justify-content: center;
          padding: .25rem;
          margin-bottom: 0 !important;
          p{
            color: #4f87e6;
            cursor: pointer;
            img{
            width: .475rem;
            height: .475rem;
            margin-right: .125rem;
          }
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: .2rem;
          }

        }   
        .title {
            margin: 0.5rem auto 0.275rem;
            font-size: .25rem;
            text-align: center;
            color: #5d5d5d;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            .phone_icon{
              width: .35rem;
              height: .35rem;
              margin-right: .1625rem;
            }
        }
        & > div {
            margin-bottom: 0.2875rem;
            div {
                width: 2.775rem;
                height: 0.4375rem;
                line-height: 0.4375rem;
                background: #f2f7fc;
                border-radius: 0.225rem;
                padding-left: 0.125rem;
                box-sizing: border-box;
                display: flex;
                overflow: hidden;
                span {
                    flex: 1;
              }
          }
            input {
                flex: 9;
                background-color: #f2f7fc;
          }
      }
        .code {
            button {
                padding: 0 0.125rem;
                height: 0.4375rem;
                background: #4f87e6;
                border-radius: 0.1875rem;
                font-size: 0.1625rem;
                color: #ffffff;
                margin-left: 0.35rem;
          }
      }
  }
  .argee_contract{
    display: flex;
    justify-content: center;
    align-items: center;
  }
    .argee {
        text-align: center;
        img {
            width: 0.275rem;
            height: 0.275rem;
            margin-right: 0.175rem;
            vertical-align: top;
            cursor: pointer;
      }
  }
    .contract {
      height: 0.275rem;
        text-align: center;
  }
   .wx{
     padding-top: .375rem;
      .wx_tit img {
      width: 0.475rem;
      height: 0.475rem;
      vertical-align: sub;
      margin-right: 0.225rem;
    }

    .wx_tit span {
      font-size: 0.2rem;
    }

    .wx_code {
      width: 2.5875rem;
      height: 2.5875rem;
      margin: 0 auto;
    }
    .input_btn{
      padding: .125rem;
      cursor: pointer;
      font-size: .2rem;
      color: #4f87e6;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }
   }

  }


    .banner_img1 {
      height: 8.625rem;
    }
    .banner_img2 {
      height: 7.375rem;
    }
    .banner_text {
      font-size: 0.3rem;
      color: #5aa3ef;
      font-weight: bold;
      position: absolute;
      top: 7.25rem;
      right: 3.325rem;
    }
  }
  .cont {
    padding-top: 0.4875rem;
    overflow: hidden;
    .con_pa1 {
      padding: 0 3.25rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      h2 {
        width: 100%;
        font-size: 0.35rem;
        font-weight: 700;
        color: #434a54;
        margin-bottom: 0.3125rem;
      }

      .conpa1_list {
        width: 5.1125rem;
        height: 3.575rem;
        border: 0.1rem solid #a5c8ee;
        border-radius: 0.125rem;
        position: relative;
        transition: all 0.3s;
        &:hover {
          transform: scale(1.1);
        }

        .conpa1_listtxt {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          p {
            text-align: right;
            padding: 0 0.4625rem;
            font-size: 0.475rem;
            font-weight: 700;
            color: #396198;
            margin-top: 0.4625rem;
          }
          div {
            width: 1.4125rem;
            height: 0.5125rem;
            border: 2px solid #2f5c9b;
            border-radius: 0.25rem;
            font-size: 0.2625rem;
            color: #104590;
            text-align: center;
            line-height: 0.5125rem;
            position: absolute;
            bottom: 0.3125rem;
            right: 0.2875rem;
            cursor: pointer;
            letter-spacing: 0.0131rem;
            overflow: hidden;
            z-index: 1;
            &:hover {
              color: #fff;
              border-color: transparent;
            }
            &::before {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              background-color: #2f5c9b;
              transform: translateX(-100%);
              transition: all 0.5s;
              z-index: -1;
            }
            &:hover::before {
              transform: translateX(0);
            }
          }
        }
      }
      .conpa1_list:nth-child(3) {
        border: 0.1rem solid #ffe7c6;
        .conpa1_listtxt {
          p {
            color: #26bdc7;
          }
          div {
            border: 2px solid #26bdc7;
            color: #26bdc7;
            &::before {
              background-color: #26bdc7;
            }
            &:hover {
              color: #fff;
              border-color: transparent;
            }
          }
        }
      }
      .conpa1_list:nth-child(4) {
        border: 0.1rem solid #dad8ff;
        .conpa1_listtxt {
          p {
            color: #5f6ea8;
          }
          div {
            border: 2px solid #5f6ea8;
            color: #5f6ea8;
            &::before {
              background-color: #5f6ea8;
            }
            &:hover {
              color: #fff;
              border-color: transparent;
            }
          }
        }
      }
    }
    .con_pa2 {
      padding: 0 3.25rem;
      padding-top: 1.1625rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      h2 {
        width: 100%;
        font-size: 0.35rem;
        font-weight: 700;
        color: #434a54;
        margin-bottom: 0.3125rem;
      }
      .con_pa2list {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        img {
          width: 4.425rem;
          height: 3.075rem;
          margin-right: 0.25rem;
          border-radius: 0.125rem;
          box-shadow: 0 0 0.125rem #b3c4db;
          transition: all 0.3s;
        }
        &:hover img {
          transform: scale(1.1);
        }
        div {
          p:nth-child(1) {
            font-size: 0.375rem;
            color: #4374b9;
            margin-bottom: 0.4875rem;
          }
          p:nth-child(2) {
            font-size: 0.25rem;
            color: #b3c4db;
            width: 3.4rem;
            line-height: 0.35rem;
          }
        }
      }
    }
    .con_pa3 {
      padding: 0 3.25rem;
      padding-top: 1.5625rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      h2 {
        width: 100%;
        font-size: 0.35rem;
        font-weight: 700;
        color: #434a54;
        margin-bottom: 0.3125rem;
      }
      .con_pa3box {
        display: flex;
        justify-content: center;
        align-items: center;
        .img {
          width: 4.7875rem;
          height: 8.975rem;
          margin-right: 0.2rem;
          img {
            transition: all 0.3s;
          }
          &:hover img {
            transform: scale(1.1);
          }
        }

        .con_pa3listbox {
          width: 12.7375rem;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          .con_pa3list:nth-child(2) {
            margin-right: 0 !important;
          }
          .con_pa3list:nth-child(4) {
            margin-right: 0 !important;
          }
          .con_pa3list {
            width: 6.1375rem;
            height: 4.3125rem;
            background: #ffffff;
            box-shadow: 0px 0.0375rem 0.075rem 0.0125rem #e6f3ff;
            border-radius: 0.125rem;
            padding-top: 1.1625rem;
            padding-left: 0.875rem;
            box-sizing: border-box;
            margin-right: 0.125rem;
            margin-bottom: 0.125rem;
            transition: all 0.3s;
            &:hover {
              transform: scale(1.05);
            }
            p:nth-child(1) {
              font-size: 0.45rem;
              color: #4374b9;
            }
            p:nth-child(2) {
              margin-top: 0.3125rem;
              margin-bottom: 0.6875rem;
              font-size: 0.25rem;
              color: #b3c4db;
              span {
                display: block;
                margin-bottom: 0.0625rem;
              }
            }
            p:nth-child(3) {
              font-size: 0.225rem;
              color: #4374b9;
              cursor: pointer;
            }
          }
        }
      }
    }
    .con_pa4 {
      width: 17.5rem;
      height: 4.3125rem;
      background: #ffffff;
      box-shadow: 0px 0.0375rem 0.075rem 0.0125rem #e6f3ff;
      border-radius: 0.125rem;
      opacity: 1;
      margin: 0.325rem auto 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0 0.675rem;
      box-sizing: border-box;
      transition: all 0.3s;
      &:hover {
        transform: scale(1.05);
      }
      img {
        width: 4.6125rem;
        height: 2.8375rem;
      }
      .con_pa4text {
        height: 100%;
        h2 {
          font-size: 0.45rem;
          color: #4374b9;
          margin: 1.575rem auto 0.5875rem;
        }
        p {
          font-size: 0.25rem;
          color: #b3c4db;
        }
      }
      .con_pa4btn {
        width: 2.0625rem;
        height: 0.6875rem;
        border-radius: 0.25rem;
        opacity: 1;
        border: 2px solid #4374b9;
        font-size: 0.325rem;
        color: #4374b9;
        text-align: center;
        line-height: 0.6875rem;
        cursor: pointer;
        transition: all 0.5s;
        z-index: 1;
        position: relative;
        overflow: hidden;
      }
      .con_pa4btn:before {
        content: '';
        position: absolute;
        z-index: -1;
        background: #4374b9;
        height: 199px;
        width: 249px;
        border-radius: 50%;
      }
      .con_pa4btn:hover {
        color: #fff;
        border-color: transparent;
      }

      .con_pa4btn:before {
        top: 100%;
        left: 100%;
        transition: all 0.7s;
      }

      .con_pa4btn:hover:before {
        top: -30px;
        left: -40px;
      }

      .con_pa4btn:active:before {
        background: #3a0ca3;
        transition: background 0s;
      }
    }
    .con_pa5 {
      padding: 0 3.25rem;
      padding-top: 1.8375rem;
      padding-bottom: 2rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      h2 {
        width: 100%;
        font-size: 0.35rem;
        font-weight: 700;
        color: #434a54;
        margin-bottom: 0.3625rem;
      }
      .con_pa5_box {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .con_pa5_list {
          .con_pa5_video {
            width: 4.2rem;
            height: 3.575rem;
            margin-bottom: 0.2875rem;
            position: relative;
            img {
              transition: all 0.3s;
            }
            &:hover img:first-child {
              transform: scale(1.1);
            }
            .con_pa5_videoimg {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background: #ffffff;
              border-radius: 0.125rem;
            }
            .video_btn {
              width: 1.3875rem;
              height: 1.3875rem;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
          p {
            font-size: 0.375rem;
            width: 100%;
            color: #4374b9;
            text-align: center;
          }
        }
      }
    }
    .con_pa6 {
      width: 100%;
      height: 8.8375rem;
      position: relative;
      .bj {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
      }
      .con_pa6_computer {
        top: 1.1rem;
        left: 0.875rem;
        position: relative;
        img:nth-child(1) {
          width: 9.925rem;
          height: 7.4375rem;
          position: absolute;
          left: 0;
          top: 0;
        }
        img:nth-child(2) {
          width: 6.8rem;
          height: 3.975rem;
          position: absolute;
          left: 1.5625rem;
          top: 0.9625rem;
        }
        img:nth-child(3) {
          width: 3.0125rem;
          height: 4.85rem;
          position: absolute;
          left: 6.125rem;
          top: 1.9875rem;
        }
      }
      .con_pa6text {
        position: absolute;
        right: 2.65rem;
        top: 2.2375rem;
        h2 {
          font-size: 0.7125rem;
          color: #ffffff;
          text-align: center;
        }
        i {
          width: 6.2rem;
          height: 0.0125rem;
          background: #ffffff;

          display: block;
          margin: 0 auto;
          margin-top: 1.05rem;
          margin-bottom: 0.7875rem;
        }
        p:nth-child(3) {
          font-size: 36px;
          color: #ffffff;
          text-align: center;
          margin-bottom: 0.4375rem;
        }
        p:nth-child(4) {
          font-size: 28px;
          color: #ffffff;
          text-align: center;
        }
      }
      .con_pa6loa {
        font-size: 0.8375rem;
        color: #ffffff;
        position: absolute;
        bottom: -0.2rem;
        right: 1.875rem;
        opacity: 0.23;
        font-weight: bold;
      }
    }
    .con_pa7 {
      padding: 0 1.75rem;
      padding-top: 2.4125rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      h2 {
        width: 100%;
        font-size: 0.35rem;
        font-weight: 700;
        color: #434a54;
        margin-bottom: 0.3625rem;
        padding-left: 1.2125rem;
      }
      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          width: 5.225rem;
          height: 7.15rem;
        }
      }
    }
  }
  // 弹窗
  .type_dialog,
  .login_dialog,
  .set_dialog {
    position: fixed;
    top: 1.375rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 101;
  }
  .type_dialog {
    width: 12.475rem;
    height: 7.375rem;
    background: url(@/assets/image/dialog.png) no-repeat right bottom;
    background-color: #fff;
    box-shadow: 0rem 0.0375rem 0.1875rem rgba(79, 135, 230, 0.3);
    border-radius: 0.1875rem;
    .title {
      text-align: center;
      padding: 0.9375rem 0 0.75rem 0;
      height: 0.5rem;
      font-size: 0.5rem;
      font-family: Source Han Sans CN;
      font-weight: 500;
      line-height: 0.85rem;
      color: #4a6b9a;
    }
    .radio {
      width: 7.875rem;
      margin: 0 auto;
      .radio-item {
        position: relative;
        cursor: pointer;
      }
      .btn {
        position: absolute;
        top: 0.275rem;
        left: 0rem;
        width: 0.3rem;
        height: 0.3rem;
        text-align: center;
        border-radius: 50%;
        border: 0.0125rem solid #b6b6b6;
        .point {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 0.2rem;
          height: 0.2rem;
          border-radius: 50%;
          display: inline-block;
          background-color: #4f87e6;
        }
      }
      .neirong {
        width: 7.175rem;
        padding-left: 0.475rem;
        font-size: 0.45rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 0.7625rem;
        color: #656363;
      }
    }
    button {
      display: block;
      width: 3.0375rem;
      height: 0.9rem;
      background: rgba(79, 135, 230, 1);
      border-radius: 0.1rem;
      margin: 0.625rem auto 0.625rem;
      font-size: 0.4375rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
    }
  }
  .login_dialog {
    width: 698px;
    height: 430px;
    background-color: #fff;
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.16);
    /deep/ .el-checkbox__input.is-checked + .el-checkbox__label {
      color: #606266;
    }
    .icon-guanbi {
      position: absolute;
      top: -54px;
      right: -54px;
      font-size: 32px;
      color: #ffffff;
      cursor: pointer;
    }
    .dsc {
      background-color: #568be6;
      width: 279px;
      height: 100%;
      padding: 0 50px;
      box-sizing: border-box;
      color: #fff;
      & > p {
        padding: 16px 0;
        font-size: 15px;
        font-weight: 400;
      }
      .iconfont {
        padding-right: 20px;
      }
    }
    .from {
      width: 419px;
      height: 100%;
      padding: 16px 75px;
      box-sizing: border-box;
      text-align: center;
      .wx_tit img {
        width: 38px;
        height: 38px;
        vertical-align: sub;
        margin-right: 18px;
      }
      .wx_tit span {
        font-size: 16px;
      }
      .wx_code {
        width: 270px;
        height: 270px;
      }
      .argee {
        margin-top: 15px;
        img {
          width: 22px;
          height: 22px;
          margin-right: 14px;
          vertical-align: top;
          cursor: pointer;
        }
      }
      .contract {
        margin-top: 18px;
      }
    }
    .top {
      width: 148px;
      text-align: center;
      margin: 72px auto;
      p {
        font-size: 12px;
        font-family: Comic Sans MS;
        text-align: right;
      }
      h1 {
        font-size: 34px;
        font-family: Microsoft YaHei;
      }
      .mock {
        text-align: left;
        font-size: 16px;
        font-family: Microsoft YaHei;
      }
    }
  }
}
</style>