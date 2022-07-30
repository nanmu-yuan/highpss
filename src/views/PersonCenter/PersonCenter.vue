<template>
  <div class="box">
    <div class="banner">
      <div class="img">
        <img src="@/assets/image/personcenter/banner.png" alt="" />
      </div>
      <div class="user_info">
        <img v-show="information.isVip" class="tire" src="@/assets/image/personcenter/tire.png" alt="" />
        <div class="head_img">
          <img :src="information.headImgUrl" alt="" v-if="information.headImgUrl" />
          <img v-else src="@/assets/image/personcenter/circle.png" alt="" />
        </div>
        <p v-if="isLogin">
          <span>昵称：{{ information.nickName }}</span>
          <span style="padding-left: 0.25rem">ID：{{ information.id }}</span>
        </p>
        <p v-if="isLogin" class="clearfix" style="text-align: right">
          <img v-show="information.isVip" class="vip fl" src="@/assets/image/personcenter/vip.png" alt="" />
          <span class="moify fr" @click="modifyInfo">修改信息</span>
        </p>
        <button v-if="!isLogin" class="login_submit" @click="login">登录</button>
      </div>
    </div>
    <div class="main ww">
      <!-- 侧边栏 -->
      <ul class="sidebar">
        <li :class="{ current: sideIndex == 1 }" @click="sideChange(1)">账号管理</li>
        <li :class="{ current: sideIndex == 2 }" @click="sideChange(2)">我的课程</li>
        <li :class="{ current: sideIndex == 3 }" @click="sideChange(3)">订单中心</li>
        <li :class="{ current: sideIndex == 4 }" @click="sideChange(4)">会员权益</li>
        <li :class="{ current: sideIndex == 5 }" @click="sideChange(5)">我的优惠券</li>
        <li :class="{ current: sideIndex == 6 }" @click="sideChange(6)">模考系统</li>
        <li :class="{ current: sideIndex == 7 }" @click="sideChange(7)">联系客服</li>
      </ul>
      <!-- 右侧内容区 -->
      <article>
        <div class="account_management" v-show="sideIndex == 1">
          <div class="baseInfo">
            <div class="img">
              <img :src="information.headImgUrl" alt="" v-if="information.headImgUrl" />
              <img v-else src="@/assets/image/personcenter/circle.png" alt="" />
            </div>
            <p>昵称：{{ information.nickName }}</p>
            <p>ID：{{ information.id }}</p>
          </div>
          <div class="accountBind">
            <div>
              <span class="name">{{ isLogin ? '微信账号已绑定' : '微信账号未绑定' }}</span>
              <span v-if="isLogin" class="phone">{{ information.nickName }}</span>
              <span v-if="isLogin" class="operation" @click="exit">退出登录</span>
              <span v-if="!isLogin" class="submit" @click="login">扫码登录</span>
            </div>
            <div>
              <span class="name">手机号已绑定</span>
              <span v-if="isLogin" class="phone">{{ information.phoneNum }}</span>
              <span v-if="isLogin" class="operation" @click="phoneDialog = true">修改手机号</span>
              <!-- <span v-if="isLogin" class="unbundl">解绑</span> -->
              <span v-if="!isLogin" class="submit" @click="phonebtn">点击绑定</span>
            </div>
          </div>
        </div>
        <div class="my_course" v-show="sideIndex == 2">
          <MyCourse />
        </div>
        <div class="order_center" v-show="sideIndex == 3">
          <MyOrder />
        </div>
        <div class="rights_interests_members" v-show="sideIndex == 4">
          <RightsInterestsMember />
        </div>
        <div class="my_coupons" v-show="sideIndex == 5">
          <MyCoupons />
        </div>
        <div class="model_test_system" v-show="sideIndex == 6">
          <ModelSystem />
        </div>
        <div class="contact_customer_service" v-show="sideIndex == 7">
          <div class="img">
            <img src="@/assets/image/kefu.png" alt="" />
          </div>
          <p>扫描二维码栗子朗思24小时为你服务</p>
        </div>
      </article>
    </div>
    <!-- 登录弹窗 -->
    <div class="phone_dialog" v-if="phoneDialog">
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
        <div class="title">
          <span class="phone_icon"><img src="@/assets/image/phone_icon.png" alt=""></span>
          <span>手机号绑定</span>
        </div>
        <div class="form">
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
        </div>
        <el-button type="primary" @click="sumbit" style="margin: 0 auto;display: block;width: 1.25rem;"> 提交</el-button>
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
    <!-- 遮罩 -->
    <div class="mask" @click="close" v-show="phoneDialog"></div>
    <el-dialog class="is_use" center="" :visible.sync="modifydialogVisible" width="35%" :show-close="false">
      <div class="head_img">
        <span>我的头像</span>
        <div class="img">
          <img :src="fileUrl" alt="" v-if="information.headImgUrl" />
          <img v-else src="@/assets/image/personcenter/circle.png" alt="" />
        </div>
        <el-upload class="upload-demo" ref="upload" :action="upload" :data="qiniuData" :before-upload="beforeUpload"
          :on-success="handleSuccess">
          <el-button size="small" type="text">点击上传</el-button>
        </el-upload>
      </div>
      <div class="call">
        <span>我的昵称</span>
        <span class="uname"><input type="text" v-model="nickName" :disabled="isDisabled" /> </span>
        <el-button type="text" @click="isDisabled = false">修 改</el-button>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="modifydialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="infoSure">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>
<script>
import MyCourse from '@/components/personCenter/MyCourse.vue'
import MyOrder from '@/components/personCenter/MyOrder.vue'
import MyCoupons from '@/components/personCenter/MyCoupons.vue'
import ModelSystem from '@/components/personCenter/ModelSystem.vue'
import RightsInterestsMember from '@/components/personCenter/RightsInterestsMember.vue'
export default {
  props: ['islo'],
  data() {
    return {
      sideIndex: 1,
      upload: 'https://upload-cn-east-2.qiniup.com',
      qiniuData: {
        key: '',
        token: ''
      },
      fileUrl: '',
      qiniuAddr: 'img.lizilangsi.zhieasy.cn',
      isLogin: false,
      phoneDialog: false,
      is_agree: true,
      modifydialogVisible: false,
      information: {},
      form: {
        code: '',
        phone: '',
      },
      countDown: "发送验证码", // 倒计时
      bVerification: false, // 节流
      isDisabled: true,
      nickName: ''
    }
  },
  created() {
    let token = localStorage.getItem('token')
    if (token) {
      this.isLogin = true
      this.getMyinformation()
    } else {

    }
    this.getQiniuToken()
  },
  watch: {
    islo(newV, oddV) {
      this.isLogin = newV
      if (newV) {
        this.getMyinformation()
      }
    }
  },
  methods: {
    // 绑定手机号弹窗按钮
    phonebtn(){
      
      if (this.isLogin) {
        return this.phoneDialog = true
      }
      this.$message({
        type: 'warning',
        message: '请先登录哟~'
      })
      return false
    },
    // 修改绑定手机号
    sumbit() {
      const { code, phone } = this.form
      if (!code || !phone) return this.$message("请输入手机号和验证码");
      this.$api.putPhone(this.form.phone, this.form.code).then((res) => {
        if (res.data.code == 200) {
          this.isLogin = true
          this.phoneDialog = false
          this.getMyinformation()
          this.$message({
            type: 'success',
            message: '绑定成功'
          })

        }
      })
        .catch(() => {
          this.$message({
            type: 'error',
            message: '绑定失败'
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
    // 判断是否登录
    islogin() {
      if (this.isLogin) {
        return true
      }
      this.$message({
        type: 'warning',
        message: '请先登录哟~'
      })
      return false
    },
    // 侧边栏切换
    sideChange(index) {
      if (index == 1 && !this.islogin()) return
      if (this.islogin()) {
        this.sideIndex = index
      }
    },
    // 我的信息
    getMyinformation() {
      this.$api.getMyinformation().then((res) => {
        this.information = res.data.data
      })
    },
    beforeUpload(file) {
      this.qiniuData.key = `img/headImg/upload_pic_${file.name}`
    },
    handleSuccess(res) {
      this.fileUrl = `https://${this.qiniuAddr}/${res.key}`
      console.log(this.fileUrl)
    },
    getQiniuToken() {
      this.$api.getQiniuToken().then((res) => {
        this.qiniuData.token = res.data.data.token
      })
    },
    modifyInfo() {
      this.modifydialogVisible = true
      this.nickName = this.information.nickName
      this.fileUrl = this.information.headImgUrl
    },
    // 确认修改信息
    async infoSure() {
      let res1 = null
      let res2 = null
      if (this.fileUrl !== this.information.headImgUrl) {
        try {
          res1 = await this.$api.modifyHeadImg({ img: this.fileUrl })
        } catch (error) {
          return this.$message({
            type: 'error',
            message: '修改失败！'
          })
        }
      }
      if (this.nickName !== this.information.nickName) {
        try {
          res2 = await this.$api.modifyNickname({ nickName: this.nickName })
        } catch (error) {
          return this.$message({
            type: 'error',
            message: '修改失败！'
          })
        }
      }
      if ((res1?.data.code == 200 || res1 === null) && (res2?.data.code == 200 || res2 === null)) {
        this.$message({
          type: 'success',
          message: '修改成功~'
        })
        this.getMyinformation()
        this.modifydialogVisible = false
        this.isDisabled = true
      } else {
        this.$message({
          type: 'error',
          message: '修改失败！'
        })
      }
    },
    login() {
      this.$emit('login')
    },
    close() {
      this.phoneDialog = false
    },
    exit() {
      this.$emit('exit')
    }
  },
  components: {
    MyCourse,
    MyOrder,
    ModelSystem,
    MyCoupons,
    RightsInterestsMember
  }
}
</script>
<style lang="less" scoped>
/deep/ .el-upload-list {
  display: none;
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(67, 74, 84, 0.48);
  z-index: 100;
}

.box {
  background-color: #f5f7fa;
}

.banner {
  height: 4.5875rem;
  position: relative;

  .img {
    height: 100%;
  }

  .user_info {
    position: absolute;
    bottom: 0.8rem;
    left: 6.4125rem;
    font-size: 0.35rem;
    font-weight: 500;
    text-align: left;
    color: #36537c;
    letter-spacing: 0.0175rem;

    .tire {
        position: absolute;
        top: -1.8rem;
        left: -3.2rem;
        width: 1.4375rem;
        height: 1.225rem;
        z-index: 1;
    }
  }

  .head_img {
    position: absolute;
    bottom: -0.475rem;
    left: -3.175rem;
    width: 2.725rem;
    height: 2.725rem;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 0.0375rem 0 #b2b2b2;
  }

  .vip {
    width: 0.725rem;
    height: 0.3625rem;
  }

  .moify {
    font-size: 0.2rem;
    color: #777777;
    cursor: pointer;

    &:hover {
      color: #4f87e6;
    }
  }

  .login_submit {
    width: 2.375rem;
    height: 0.5875rem;
    background: #5ec5ee;
    border-radius: 0.3rem;
    font-size: 0.35rem;
    color: #ffffff;
    letter-spacing: 0.035rem;
    margin-left: 1.5rem;
  }
}

.main {
  margin: 1.075rem auto 0.8rem;
  display: flex;
  justify-content: space-between;
}

.sidebar {
  li {
    width: 3.2875rem;
    height: 0.75rem;
    line-height: 0.75rem;
    border-radius: 0.375rem;
    margin-bottom: 0.15rem;
    background-color: #fff;
    box-shadow: 0rem 0.0375rem 0.0625rem 0rem rgba(184, 200, 217, 0.14);
    font-size: 0.275rem;
    font-weight: 400;
    text-align: center;
    color: #051123;
    letter-spacing: 0.0138rem;
    cursor: pointer;
  }

  li.current {
    background-color: #4f87e6;
    color: #ffffff;
  }
}

article {
  width: 13.8375rem;
  height: auto;
  border-radius: 0.4375rem;
  box-shadow: 0rem 0.0375rem 0.0625rem 0rem rgba(232, 244, 255, 0.34);
  position: relative;

  &>div {
    width: 100%;
    margin-bottom: 1.25rem;
  }

  .account_management {
    height: 5.25rem;
    background: #ffffff;
    display: flex;

    .baseInfo {
      width: 4.5rem;

      .img {
        width: 2.6rem;
        height: 2.6rem;
        margin: 0.625rem auto 0.475rem;

        img {
          border-radius: 50%;
          box-shadow: 0 0 0.0375rem 0 #b2b2b2;
        }
      }

      p {
        font-size: 0.225rem;
        font-weight: 400;
        text-align: center;
        color: #515151;
        letter-spacing: 0.0112rem;
      }
    }

    .accountBind {
      width: 8.8125rem;
      border-left: 0.0125rem solid #9ab8eb;
      margin-top: 0.5rem;
      margin-bottom: 0.45rem;
      padding-left: 0.925rem;
      box-sizing: border-box;

      div {
        display: flex;
        margin-top: 0.9375rem;
        align-items: center;

        .name {
          font-size: 0.3125rem;
          color: #4374b9;
          letter-spacing: 0.0156rem;
          flex: 3;
        }

        .phone {
          font-size: 0.275rem;
          color: #051123;
          letter-spacing: 0.0138rem;
          flex: 3;
        }

        .operation {
          flex: 2;
          font-size: 0.2rem;
          color: #777777;
          letter-spacing: 0.01rem;
          cursor: pointer;
        }

        .unbundl {
          flex: 1;
          cursor: pointer;
          font-size: 0.2rem;
          color: #777777;
          letter-spacing: 0.01rem;

          &:hover {
            color: #4f87e6;
          }
        }

        .submit {
          flex: 6;
          text-align: center;
          font-size: 0.275rem;
          color: #051123;
          letter-spacing: 0.0138rem;
          cursor: pointer;
        }
      }
    }
  }

  .contact_customer_service {
    background-color: #fff;
    height: 5.2375rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 0.225rem;
    color: #b2b2b2;
    letter-spacing: .0112rem;

    .img {
      width: 2.4625rem;
      height: 2.4625rem;
    }
  }
}

.your_coupon {
  background-color: #fff;
  height: 5.2375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 0.225rem;
  color: #b2b2b2;
  letter-spacing: .0112rem;

  .img {
    width: 2.4625rem;
    height: 2.4625rem;
  }
}

.phone_dialog {
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
        padding-right: 0.175rem;
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
    .title {
        margin: 1rem auto 0.875rem;
        font-size: 0.2rem;
        text-align: center;
        color: #5d5d5d;
        display: flex;
        align-items: center;
        justify-content: center;
      .phone_icon {
        width: .35rem;
        height: .35rem;
        margin-right: .1625rem;
      }
    }

    .form {
        margin-left: 0.875rem;
        &>div {
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

    .argee {
        margin-top: 0.375rem;
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
        margin-top: 0.225rem;
        text-align: center;
    }
  }
}

.is_use {
    /deep/ .el-dialog--center {
        border-radius: 0.175rem;
  }
    /deep/ .el-dialog__body {
        &>div {
            margin: 0.4375rem 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
            span:nth-child(1) {
                font-size: 0.3rem;
                color: #051123;
                letter-spacing: 0.0125rem;
          }
            span:last-child {
                font-size: 0.25rem;
                color: #4f87e6;
                letter-spacing: 0.0125rem;
          }
            .uname {
                font-size: 0.25rem;
                color: #686868;
                letter-spacing: 0.0125rem;
          }
            .img {
                width: 1.575rem;
                height: 1.575rem;
                overflow: hidden;
                border-radius: 50%;
                background-color: skyblue;
          }
      }
        .call {
            input {
                width: 1.875rem;
                font-size: 0.25rem;
                background-color: #fff;
          }
      }
  }
    /deep/ .el-dialog__footer {
        .el-button {
            border-radius: 0.125rem;
      }
  }
}
</style>