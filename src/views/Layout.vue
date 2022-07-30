      
<template>
  <div>
    <header style="width: 100%">
      <div class="head_contain">
        <router-link to="/">
          <div class="logo fl">
            <img src="@/assets/image/logo3.png" alt="" class="fl" />
          </div>
        </router-link>
        <!-- 导航栏 -->
        <ul class="nav fl">
          <li class="fl" v-for="(item, index) in navList" :key="index" @click="num = index"
            @mouseenter="showClass(index)" @mouseleave="isActive = false">
            <router-link class="a" replace :to="item.path" :style="{ color: item.flag ? '#4f87e6' : '' }">{{
                item.name
            }}</router-link>
            <div class="line" v-show="item.flag"></div>
            <div class="child_nav" v-show="isActive">
              <!-- <div class="child_btn" v-for="(items, index) in item.child_nav" :key="index" @click="gonav(items)"
                :style="{ color: items.flag ? '#4f87e6' : '' }">{{ items.name }}</div> -->
              <router-link class="child_btn" :to="items.path" :style="{ color: items.flag ? '#4f87e6' : '' }"
                v-for="(items, index) in item.child_nav" :key="index">{{ items.name }}</router-link>
            </div>
          </li>
        </ul>
        <!-- 返回 -->
        <div class="back fr" v-if="!isBack" @click="back">
          <span><span class="iconfont icon-fanhui" style="font-size: 0.325rem"></span>返回</span>
        </div>
        <!-- 登录 -->
        <div class="login fr">
          <span class="iconfont icon-zhanghaodenglu"></span>
          <span @click="login" v-if="!isLogin">登录</span>
          <span @click="exit" v-else>退出</span>
        </div>
      </div>
    </header>
    <router-view ref="child" @logo="logo" :islo="isLogin" @login="login" @exit="exit"></router-view>
    <footer class="clearfix">
      <div class="logo fl" style="position: relative">
        <img src="../assets/image/logo4.png" alt="" class="fl" />
        <div class="fl">
          <!-- <p style="color:#ffffff">栗子朗思</p>
          <span style="color:#ffffff">lizilangsi.com</span> -->
        </div>
        <div class="line fl"></div>
        <div class="fl langsi">你最专业的朗思助手</div>
        <div class="bottom_b" style="position: absolute; left: 3.25rem; bottom: 0.25rem">
          <p style="font-size: 0.225rem; text-align: left; color: #81807f; font-weight: bold">联系我们</p>
          <p style="
              line-height: 0.275rem;
              margin-top: 0.075rem;
              font-size: 0.175rem;
              text-align: left;
              color: #81807f;
              font-weight: bold;
            ">
            地址：陕西省西安市长安区学府大街鹏润悦秀城10号楼1单元7层10718-AL0101室<br />
            联系邮箱：lchighpass@163.com<br />
            西安朗思嗨趴教育咨询有限责任公司浙ICP备20022105号-1
            <!-- target="_blank" -->
            <!-- <a href="javascript:;" style="line-height: 0.275rem;margin-top: 0.075rem;font-size: 0.175rem;text-align: left;color: #81807f;font-weight: bold;"></a> -->
          </p>
          <p style="
              margin-top: 0.25rem;
              line-height: 0.275rem;
              font-size: 0.175rem;
              text-align: left;
              color: #81807f;
              font-weight: bold;
              display: flex;
              align-items: center;
            ">
            <img src="@/assets/image/bottom-a.png" style="width: 0.375rem; height: 0.375rem; margin: 0 0.0625rem"
              alt="" />微信服务号：栗子朗思
            <img src="@/assets/image/bottom-a.png"
              style="width: 0.375rem; height: 0.375rem; margin: 0 0.0625rem 0 0.25rem" alt="" />微信订阅号：朗思highpass
          </p>
        </div>
      </div>

      <!-- 右边 -->
      <div class="foot_fr">
        <div>
          <div>
            <span>客服微信</span>
            <img src="@/assets/image/kefu.png" alt="" />
          </div>
          <div>
            <span>朗思highpass</span>
            <img src="@/assets/image/highpass.png" alt="" />
          </div>
          <div>
            <span>栗子朗思</span>
            <img src="@/assets/image/lizi.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
    <!-- 登录弹窗 -->
    <div class="login_dialog" v-if="loginDialog">
      <span class="iconfont icon-guanbi" @click="close"></span>
      <div class="dsc fl">
        <div class="top">
          <p>LanguageCert Highpass</p>
          <h1>嗨趴朗思</h1>
          <p class="mock">在线模考</p>
        </div>
        <div class="p_con">
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
      </div>
      <div class="from fl">
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
    </div>
    <!-- 遮罩 -->
    <div class="mask" @click="close" v-show="loginDialog"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      path: '',
      is_agree: true,
      isLogin: false,
      num: 0,
      loginDialog: false,
      timer: '',
      key: '',
      imgUrl: '',
      loginInfo: {},
      closeAdvertis: true,
      isBack: true,
      isActive: false,
      navList: [
        {
          name: '首页',
          path: '/',
          flag: false
        },
        {
          name: '朗思百科',
          path: '/langsiwikipedia',
          flag: false
        },
        // {
        //   name: '朗思课程',
        //   path: '/langsiCurriculum',
        //   flag: false,
        //   child_nav: [
        //     {
        //       name: '朗思口语C1',
        //       path: '/langsiCurriculum',
        //       flag: false
        //     },
        //     {
        //       name: '朗思口语B2',
        //       path: '/langsiCurriculumB2',
        //       flag: false
        //     },
        //     {
        //       name: '朗思写作',
        //       path: '/langsiWriting',
        //       flag: false
        //     },
        //     {
        //       name: '朗思全科1V1',
        //       path: '/langsiPractice1v1',
        //       flag: false
        //     }
        //   ]
        // },
        {
          name: '朗思课程',
          path: '/langsiMouthSpecial',
          flag: false,
          child_nav: [
            {
              name: '朗思口语',
              path: '/langsiMouthSpecial',
              flag: false
            },
            {
              name: '朗思写作',
              path: '/langsiWritingSpecial',
              flag: false
            },
            {
              name: '朗思全科1V1',
              path: '/langsiPractice1v1',
              flag: false
            }
          ]
        },
        {
          name: '朗思模考',
          path: '/SingleExercise',
          flag: false
        },
        {
          name: '常见问题',
          path: '/langsiCommonProblem',
          flag: false
        },
        {
          name: '我的',
          path: '/personCenter',
          flag: false
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
  created() {
    let token = localStorage.getItem('token')
    if (token) {
      this.isLogin = true
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      const arr = [
        '/',
        '/langsiwikipedia',
        '/langsiCurriculum',
        '/langsiWriting',
        '/langsiPractice1v1',
        '/SingleExercise',
        '/langsigeneral',
        '/langsiCommonProblem',
        '/personCenter',
        'home'
      ]
      vm.isBack = arr.some((item) => {
        return to.path == item
      })
      vm.path = to.path
      vm.navList.forEach((item, index, arr) => {
        if (item.path == to.path) {
          item.flag = true
        } else {
          item.flag = false
        }
      })
    })
  },
  beforeRouteUpdate(to, from, next) {
    this.path = to.path
    const arr = [
      '/',
      '/langsiwikipedia',
      '/langsiCurriculum',
      '/langsiWriting',
      '/langsiPractice1v1',
      '/SingleExercise',
      '/langsigeneral',
      '/langsiCommonProblem',
      '/personCenter',
      'home'
    ]
    this.isBack = arr.some((item) => {
      return to.path == item
    })
    this.navList.forEach((item, index, arr) => {
      if (item.path == to.path) {
        item.flag = true
      } else {
        item.flag = false
      }
    })
    next()
  },
  methods: {

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
    // 退出
    exit() {
      this.$confirm('此操作将退出, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          const { data } = await this.$http.get('/user/logout')
          if (data.code == 200) {
            this.$router.replace('/')
            localStorage.removeItem('token')
            localStorage.removeItem('loginInfo')
            this.isLogin = false
            this.isBack = true
            this.$refs.child.layout()
            this.$message({
              type: 'success',
              message: '退出成功!'
            })
          }
        })
        .catch(() => {
          console.log(2)
        })
    },
    showClass(index) {
      if (index == 2) {
        this.isActive = true
      } else {
        this.isActive = false
      }
    },
    hideClass(index) {
      if (index != 2) {
        this.isActive = false
      } else {
        this.isActive = true
      }
    },
    // 登录
    login() {
      // if (this.path == '/') {
      //   return this.$refs.child.login()
      // }
      this.loginDialog = true
      
    },
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
    back() {
      if (this.$route.path == '/SingleExercise') {
        this.$router.push('/')
      } else {
        this.$router.go(-1)
      }
    },
    logo(val) {
      this.isLogin = val
    },
    // 关闭弹窗
    close() {
      this.loginDialog = false
      clearInterval(this.timer)
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
            this.$api.getLoginState(this.key).then((result) => {
              if (result.data.code == 200) {
                console.log(result.data.code)
                if (result.data.data.isLogin) {
                  clearInterval(this.timer)
                  this.loginInfo = result.data.data.loginInfo
                  localStorage.setItem('token', this.loginInfo.token)
                  localStorage.setItem('loginInfo', JSON.stringify(this.loginInfo.users))
                  this.isLogin = true
                  this.loginDialog = false
                  this.$message({
                    type: 'success',
                    message: '登录成功!'
                  })
                }
              }
            })
          }, 2000)
        })
        .catch((err) => { })
    },
    // gonav(item) {
    //   if (item.name == '朗思口语C1') {
    //     this.$router.push({
    //       path: "/langsiMouthSpecial"
    //     })
    //   }
    //   if (item.name == '朗思口语B2') {
    //     this.$router.push({
    //       path: "/langsiMouthSpecial"
    //     })
    //   }
    //   if (item.name == '朗思写作') {
    //     this.$router.push({
    //       path: "/langsiWritingSpecial"
    //     })
    //   }
    //   if (item.name == '朗思全科1V1') {
    //     this.$router.push({
    //       path: "/langsiPractice1v1"
    //     })
    //   }
    // }
  },
  components: {}
}
</script>

<style lang="less" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(67, 74, 84, 0.48);
  z-index: 100;
}

.login_dialog {
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 101;
    width: 8.725rem;
    height: 5.375rem;
    background-color: #fff;
    box-shadow: 0.0625rem 0.0625rem 0.1rem rgba(0, 0, 0, 0.16);
    /deep/ .el-checkbox__input.is-checked+.el-checkbox__label {
        color: #606266;
  }
    .icon-guanbi {
        position: absolute;
        top: -0.675rem;
        right: -0.675rem;
        font-size: 0.4rem;
        color: #ffffff;
        cursor: pointer;
  }
    

  .dsc {
    background-color: #568be6;
    width: 3.4875rem;
    height: 100%;
    padding: 0 0.625rem;
    box-sizing: border-box;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .p_con p {
        padding: 0.2rem 0;
        font-size: 0.1875rem;
        font-weight: 400;
    }
    

    .iconfont {
      padding-right: .175rem;
    }

    .top {
      width: 1.975rem;
      text-align: center;
      margin: 0 auto 0;

      p {
        font-size: 0.15rem;
        font-family: Comic Sans MS;
        text-align: right;
      }

      h1 {
        font-size: 0.425rem;
        font-family: Microsoft YaHei;
      }

      .mock {
        text-align: left;
        font-size: 0.2rem;
        font-family: Microsoft YaHei;
      }
    }
  }

  .from {
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
            margin: 0.5rem auto 0.475rem;
            font-size: .3rem;
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
      width: 3.375rem;
      height: 3.375rem;
      margin: 0 auto;
    }
    .input_btn{
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
}

/deep/ .box {
  margin-top: 1.375rem;
}

.a:hover {
  color: #4f87e6 !important;

  &::after {
    width: 100%;
  }
}

.a {
  position: relative;
  color: #000000;

  &::after {
    position: absolute;
    content: '';
    left: 0;
    bottom: -0.125rem;
    width: 0;
    height: 0.0375rem;
    background-color: #4f87e6;
    -webkit-transition: 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    transition: 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  }
}

header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}

.head_contain {
  padding-left: 3.25rem;
  min-width: 14.625rem;
  width: 100%;
  box-sizing: border-box;
  height: 1.375rem;
  background-color: #fff;
  position: relative;

  .back {
    cursor: pointer;
    position: absolute;
    top: 0.6rem;
    right: 4.3rem;
    font-size: 0.25rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #4f87e6;

    .iconfont {
      font-size: 0.3rem;
      padding-right: 0.0625rem;
    }
  }

  .login {
    cursor: pointer;
    position: absolute;
    top: 0.625rem;
    right: 3.25rem;
    font-size: 0.25rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #4f87e6;

    .iconfont {
      font-size: 0.3rem;
    }
  }
}

.logo {
  padding: 0.275rem 0 0.225rem 0;
  box-sizing: border-box;
  height: 100%;
  margin-right: 0.475rem;

  img {
    width: 2.825rem;
    height: 0.875rem;
    // margin-right: 0.2rem;
  }

  div {
    text-align: right;
  }

  div p {
    font-family: 'FZFW Qing Yin TiS E';
    color: #484848;
    font-size: 0.4375rem;
  }

  div span {
    font-family: Alibaba Sans;
    font-size: 0.1625rem;
    color: #7f7f7f;
  }
}

.nav {
  height: 100%;
  width: 68%;
  padding-left: 0.975rem;

  li {
    position: relative;
    height: 100%;
    margin-right: 6.5%;
    padding: 0.6125rem 0 0.4375rem 0;
    box-sizing: border-box;
    font-size: 0.25rem;
    font-weight: 400;
    color: #000000;

    .line {
      width: 100%;
      height: 0.0375rem;
      margin-top: 0.025rem;
      border-radius: 0.025rem;
      background-color: #4f87e6;
      -webkit-transition: 0.5s cubic-bezier(0.77, 0, 0.175, 1);
      transition: 1s cubic-bezier(0.77, 0, 0.175, 1);
    }

    .child_nav {
      position: absolute;
      top: 1.375rem;
      left: 50%;
      transform: translateX(-50%);
      background-color: #ffffff;
      font-size: .2rem;
      font-family: Microsoft YaHei, Microsoft YaHei-Regular;
      font-weight: 400;
      display: flex;
      flex-direction: column;
      text-align: center;
      line-height: .3rem;
      border-radius: 0rem 0rem .0625rem .0625rem;
      box-shadow: 0rem .0375rem .075rem 0rem rgba(0, 0, 0, 0.07);

      .child_btn {
        width: 1.2rem;
        padding: 0.0375rem;
        padding-bottom: 0;
      }

      .child_btn:first-child {
        padding-top: 0.125rem;
      }

      .child_btn:last-child {
        padding-bottom: 0.125rem;
      }

      .child_btn:hover {
        color: #4f87e6 !important;

        &::after {
          background-color: none !important;
        }
      }
    }
  }
}

footer {
  bottom: 0;
  width: 100%;
  min-width: 17.925rem;
  background: rgba(0, 0, 0, 1);
  box-shadow: 0rem 0.0375rem 0.075rem rgba(18, 63, 130, 0.16);

  // margin-top: 3.35rem;
  .logo {
    margin: 0.65rem 0 0 0;
    box-sizing: border-box;
    width: 55%;
    padding: 0;
    padding-left: 3.25rem;
    height: 3.5rem;

    img {
      width: 3.0375rem;
      height: 1.075rem;
      margin-top: -0.125rem;
    }

    p {
      font-size: 0.625rem;

      @media screen and (max-width: 19.5rem) {
        font-size: 0.55rem;
      }
    }

    span {
      font-size: 0.225rem;
    }

    .line {
      margin: 0.1rem 3% 0;
      background-color: #fff;
      width: 0.0125rem;
      height: 0.6875rem;
    }

    .langsi {
      font-size: 0.4375rem;
      font-weight: bold;
      color: #ffffff;
      line-height: 0.875rem;

      @media screen and (max-width: 19.5rem) {
        font-size: 0.3875rem;
      }
    }
  }

  .foot_fr {
    float: right;
    height: 100%;
    width: 45%;
    padding: 0.65rem 0 0.4rem 0;
    box-sizing: border-box;

    &>div {
      float: right;
      margin-right: 3.25rem;
      font-size: 0.3125rem;
      font-weight: 400;
      color: #e2e2e2;

      div {
        float: left;
        height: 2.275rem;
        margin: 0 0.2375rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        img {
          width: 1.4625rem;
          height: 1.4625rem;
        }
      }
    }
  }
}


</style>

    