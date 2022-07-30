<template>
  <el-container
    class="box"
    :style="{'transform':`scale(${scalesNum})`,
    '-webkit-transform':`scale(${scalesNum})`,
    '-moz-transform':`scale(${scalesNum}) `,
    '-o-transform':`scale(${scalesNum})`,
    '-ms-transform':`scale(${scalesNum}) `}"
  >
    <el-header height="1.25rem">
      <div class="zoom">
        <span @click="iszoom=!iszoom">zoom</span>
        <ul v-show="iszoom">
          <li @click="zoomIn">zoom in</li>
          <li @click="zoomOut">zoom out</li>
          <li @click="reset">reset</li>
        </ul>
      </div>
      <button
        style="float: left;font-size: .2rem;margin:.0875rem .3rem;color:#000000;border-radius: .05rem;border: .0125rem solid #7C7C7C;background-color: #fff;padding: 0.025rem 0.1625rem;"
        @click="toHome"
      > 首页</button>
      <!-- 顶部标题 -->
      <div class="title clearfix">
        <div class="img fl">
          <img
            src="@/assets/image/logo.png"
            alt="朗思教育"
          />
        </div>
        <!-- 朗思HigHPass模考系统 -->
        <div class="title_text fl">
          <p style="font-family: Source Han Sans CN;font-weight: 500;">栗子朗思 在线模考</p>
          <p>Lizi LanguageCert</p>
        </div>
      </div>
      <!-- 倒计时 -->
      <div
        class="countdown"
        v-if="isRead&&!isAnalysis"
      >{{value}}</div>
    </el-header>
    <el-main>
      <router-view
        ref="child"
        @submitAnswer="submitAnswer"
      ></router-view>
    </el-main>
    <el-footer style="height:.8rem">
      <p>
        <span v-if="testId==1">LanguageCert C1</span>
        <span v-else>LanguageCert B2</span>
        <span></span>
        <span>{{partName}}</span>
      </p>
      <button
        v-if="!isAnalysis"
        class="submit fr"
        @click="submit"
      >submit</button>
      <button
        style="background:#ff6969"
        v-if="isAnalysis"
        class="submit fr"
        @click="edit"
      >edit</button>
    </el-footer>
  </el-container>
</template>
<script>
import Header from '@/components/Header.vue'
export default {
  components: { Header },
  data() {
    return {
      test: {},
      userId: '',
      flag: 0,
      isRead: true,
      maxtime: 600,
      value: '10:00',
      iszoom: false,
      scalesNum: 1,
      force: false,
      isAnalysis: '',
      ois: true,
      partName: ''
    }
  },
  created() {
    this.userId = JSON.parse(localStorage.getItem('loginInfo')).id
    this.isAnalysis = JSON.parse(sessionStorage.getItem('isAnalysis'))
    this.testId = JSON.parse(sessionStorage.getItem('testId'))

    window.addEventListener('beforeunload', (e) => this.beforeunloadHandler(e))
  },
  mounted() {
    this.partName = sessionStorage.getItem('partName')
    if (!this.isAnalysis) {
      this.timer = setInterval(this.CountDown, 1000)
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (to.path == '/listen1_2_4' || to.path == '/listen3') {
        vm.maxtime = 600
        vm.value = '10:00'
      } else if (to.path == '/write1' || to.path == '/write2') {
        vm.maxtime = 3600
        vm.value = '60:00'
      } else {
        vm.isRead = false
        clearInterval(vm.timer)
      }
    })
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    beforeunloadHandler(e) {
      this._beforeUnload_time = new Date().getTime()
      e = e || window.event
      if (e) {
        e.returnValue = '关闭提示'
      }
      return '关闭提示'
    },
    toHome() {
      this.$confirm('此操作将退出考试, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          this.$router.push('/')
        })
        .catch(() => {
          console.log(2)
        })
    },
    edit() {
      this.$confirm('是否退出解析, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          this.$router.push('/SingleExercise')
        })
        .catch(() => {
          console.log(2)
        })
    },
    zoomIn() {
      this.scalesNum = this.scalesNum + 0.1
    },
    zoomOut() {
      this.scalesNum = this.scalesNum - 0.1
    },
    reset() {
      this.scalesNum = 1
    },
    CountDown() {
      if (this.maxtime >= 0) {
        let minutes = Math.floor((this.maxtime % 3600) / 60)
        if (minutes < 10) minutes = '0' + minutes
        let seconds = Math.floor(this.maxtime % 60)
        if (seconds < 10) seconds = '0' + seconds
        this.value = minutes + ':' + seconds
        --this.maxtime
      } else {
        clearInterval(this.timer)
        alert('时间到，结束!')
        this.force = true
        this.submit()
        this.forcedToSubmit(this.test)
      }
    },
    submit() {
      this.$refs.child.submitAnswer()
    },
    forcedToSubmit(obj) {
      console.log(obj)
      if ((obj.partId == 1 || obj.partId == 2 || obj.partId == 3 || obj.partId == 4) && this.ois) {
        this.ois = false
        this.$api
          .submitListen(obj)
          .then((result) => {
            if (result.data.code == 200) {
              this.$message({
                type: 'success',
                message: '提交成功'
              })
              this.ois = true
              sessionStorage.setItem('isAnalysis', true)
              location.reload()
            } else {
              this.ois = true
            }
          })
          .catch((error) => {
            console.log(error)
            this.ois = true
          })
      } else if ((obj.partId == 5 || obj.partId == 6 || obj.partId == 7 || obj.partId == 8) && this.ois) {
        this.ois = false
        this.$api
          .submitRead(obj)
          .then((result) => {
            if (result.data.code == 200) {
              this.$message({
                type: 'success',
                message: '提交成功'
              })
              this.ois = true
              sessionStorage.setItem('isAnalysis', true)
              location.reload()
            } else {
              this.ois = true
            }
          })
          .catch((error) => {
            console.log(error)
            this.ois = true
          })
      } else {
        this.ois = false
        this.$api
          .submitWrite(obj)
          .then((result) => {
            if (result.data.code == 200) {
              this.$message({
                type: 'success',
                message: '提交成功'
              })
              this.ois = true
              sessionStorage.setItem('isAnalysis', true)
              location.reload()
            } else {
              this.ois = true
            }
          })
          .catch((error) => {
            console.log(error)
            this.ois = true
          })
      }
    },
    submitAnswer(obj) {
      console.log(obj)
      this.test = JSON.parse(JSON.stringify(obj))
      this.test.userId = this.userId
      if (this.force) return
      this.$confirm('此操作将结束考试, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          this.forcedToSubmit(this.test)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang="less" scoped>
.box {
  margin: 0;
  padding: 0;
  transform-origin: 0 0;
  position: relative;
  width: 100%;
  height: 100%;
  left: 0;
}
.el-header {
  padding: 0;
  position: relative;
  height: 1.25rem;
  line-height: 1.25rem;
  border-bottom: 0.0125rem solid #000;
  .zoom {
    margin-top: 0.025rem;
    float: right;
    // width: 1.225rem;
    margin-right: 0.25rem;
    border: 0.0125rem solid #000;
    position: relative;
    // height: 0.3125rem;
    line-height: 0.3125rem;
    padding: 2px 0.1625rem;
    box-sizing: border-box;
    text-align: center;
    border-radius: 0.05rem 0.05rem 0 0;
    color: #000000;
    font-size: 0.2rem;
    cursor: pointer;
    ul {
      width: 100%;
      position: absolute;
      z-index: 1;
      top: 0.3rem;
      left: -0.0125rem;
      border: 0.0125rem solid #000;
      border-top: none;
      font-size: 0.175rem;
      background-color: #fff;
      li {
        width: 100%;
        cursor: pointer;
        height: 0.2875rem;
        line-height: 0.2875rem;
      }
    }
  }
  .title {
    margin: auto;
    width: 5.75rem;
    font-size: 0.4375rem;
    color: #484848;
  }
  .countdown {
    position: absolute;
    top: 0.575rem;
    right: 0.25rem;
    width: 1.4rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    color: #ffff;
    font-size: 0.3125rem;
    border-radius: 0.075rem;
    background-color: #4f87e6;
    box-shadow: 0.0375rem 0.0375rem 0rem rgba(0, 0, 0, 0.16);
  }
  .img {
    height: 1.15rem;
    width: 1.15rem;
    margin-top: 0.075rem;
    margin-right: 0.25rem;
  }
  .title_text {
    margin-top: 0.25rem;
    p {
      font-family: KaiTi;
      line-height: normal;
      font-size: 0.4375rem;
    }
    p:last-child {
      font-size: 0.175rem;
      text-align: right;
    }
  }
}
.el-main {
  height: 86vh;
  /deep/ .box {
    padding: 0 100px;
    box-sizing: border-box;
  }
}
.el-footer {
  border-top: 0.0125rem solid #000;
  z-index: 99;
  background-color: #fff;
  p {
    float: left;
    width: 8.75rem;
    height: 100%;
    line-height: 0.8rem;
    font-size: 0.275rem;
    line-height: 0.275rem;
    font-weight: Bold;
    color: #4f87e6;
    display: flex;
    align-items: center;
    span {
      padding-right: 0.25rem;
    }
  }
  .submit {
    width: 1.325rem;
    height: 0.55rem;
    background-color: #4f87e6;
    box-shadow: 0.0375rem 0.0375rem 0rem rgba(0, 0, 0, 0.16);
    border-radius: 0.1rem;
    font-size: 0.275rem;
    color: #fff;
    margin: 0.125rem 0;
    cursor: pointer;
    margin-left: 0.25rem;
  }
}
</style>