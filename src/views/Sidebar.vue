<template>
  <el-container
    class="box"
    :style="{
      transform: `scale(${scalesNum})`,
      '-webkit-transform': `scale(${scalesNum})`,
      '-moz-transform': `scale(${scalesNum}) `,
      '-o-transform': `scale(${scalesNum})`,
      '-ms-transform': `scale(${scalesNum}) `
    }"
  >
    <el-header height="1.25rem">
      <Header :start="start" />
    </el-header>
    <el-container>
      <el-aside width="3rem">
        <!-- 听 -->
        <div class="listen">
          <div class="listen_title">Listening</div>
          <div class="listen_contain">
            <div class="item" v-for="(item, indexs) in route.listen" :key="item.id">
              <img :src="routes[item.id - 1].flag ? img2 : img1" alt="" />
              <router-link replace :to="{ path: start ? item.path : $route.fullPath }"
                ><span :class="item.id == index ? 'current' : ''">Listening Part {{ indexs + 1 }}</span></router-link
              >
            </div>
          </div>
        </div>
        <!-- 读 -->
        <div class="read">
          <div class="read_title">Reading</div>
          <div class="read_contain">
            <div class="item" v-for="(item, indexs) in route.read" :key="item.id">
              <img :src="routes[item.id - 1].flag ? img2 : img1" />
              <router-link replace :to="{ path: start ? item.path : $route.fullPath }"
                ><span :class="item.id == index ? 'current' : ''">Reading Part {{ indexs + 1 }}</span></router-link
              >
            </div>
          </div>
        </div>
        <!-- 写 -->
        <div class="write">
          <div class="write_title">Writing</div>
          <div class="write_contain">
            <div class="item" v-for="(item, indexs) in route.write" :key="item.id">
              <img :src="routes[item.id - 1].flag ? img2 : img1" />
              <router-link replace :to="{ path: start ? item.path : $route.fullPath }"
                ><span :class="item.id == index ? 'current' : ''">Writing Part {{ indexs + 1 }}</span></router-link
              >
            </div>
          </div>
        </div>
      </el-aside>
      <el-main>
        <router-view ref="mychild" @submitAnswer="submitAnswer" @curr="curr"></router-view>
      </el-main>
    </el-container>
    <el-footer style="height: 0.8rem">
      <button v-if="!flag" class="submit fr" @click="submitAnswer">submit</button>
    </el-footer>
  </el-container>
</template>
<script>
import Header from '@/components/Header.vue'
export default {
  data() {
    return {
      scalesNum: 1,
      index: 1,
      isaudio: false,
      start: false,
      img1: require('@/assets/image/flag.png'),
      img2: require('@/assets/image/flag1.png'),
      route: {
        listen: [
          { id: 1, path: 'listen_part1' },
          { id: 2, path: 'listen_part2' },
          { id: 3, path: 'listen_part3' },
          { id: 4, path: 'listen_part4' }
        ],
        read: [
          { id: 5, path: 'read_part1' },
          { id: 6, path: 'read_part2' },
          { id: 7, path: 'read_part3' },
          { id: 8, path: 'read_part4' }
        ],
        write: [
          { id: 9, path: 'write_part1' },
          { id: 10, path: 'write_part2' }
        ]
      },
      routes: [
        {
          path: '/listen_part1'
        },
        {
          path: '/listen_part2'
        },
        {
          path: '/listen_part3'
        },
        {
          path: '/listen_part4'
        },
        {
          path: '/read_part1'
        },
        {
          path: '/read_part2'
        },
        {
          path: '/read_part3'
        },
        {
          path: '/read_part4'
        },
        {
          path: '/write_part1'
        },
        {
          path: '/write_part2'
        }
      ],
      userId: '',
      test1: [],
      test2: [],
      test3: [],
      isDi: true
    }
  },
  created() {
    this.flag = JSON.parse(sessionStorage.getItem('isAnalysis'))
    this.start = JSON.parse(sessionStorage.getItem('start'))
    if (this.flag) {
      sessionStorage.setItem('start', true)
      this.start = true
    }
    this.userId = JSON.parse(localStorage.getItem('loginInfo')).id
    this.examId = JSON.parse(sessionStorage.getItem('examId'))
    sessionStorage.setItem('back', false)
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.routes.forEach((item, index) => {
        if (to.path == item.path) {
          vm.index = index + 1
        }
      })
    })
  },
  beforeRouteUpdate(to, from, next) {
    let path = to.path
    if (!this.flag) {
      if (path == '/read_part1') {
        this.start = true
        sessionStorage.setItem('start', true)
      }
      this.routes.forEach((item, index) => {
        if (to.path == item.path) {
          this.index = index + 1
        }
      })
    } else {
      this.routes.forEach((item, index) => {
        if (to.path == item.path) {
          this.index = index + 1
        }
      })
    }

    next()
  },
  beforeRouteLeave(to, from, next) {
    let back = JSON.parse(sessionStorage.getItem('back'))
    if (!back && (to.path == '/startTest' || from.path == '/listen_part1')) {
      return this.$confirm('此操作将退出, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          this.$store.commit('del')
          next()
        })
        .catch((err) => {
          console.log(err)
        })
    }
    this.$store.commit('del')
    next()
  },
  methods: {
    // 退出解析()
    // 控制页面的放大缩小
    resize_window1() {
      this.scalesNum = this.scalesNum + 0.1
    },
    resize_window2() {
      this.scalesNum = this.scalesNum - 0.1
    },
    resize_window3() {
      this.scalesNum = 1
    },
    // 标记
    tag(index) {
      if (this.routes[index]?.imgFlag) {
        return (this.routes[index].imgFlag = false)
      }
      this.$set(this.routes[index], 'imgFlag', true)
      this.$forceUpdate()
    },
    // addInfo1(obj, index) {
    //   this.test1[index] = obj
    // },
    // addInfo2(obj, index) {
    //   this.test2[index] = obj
    // },
    // addInfo3(obj, index) {
    //   this.test3[index] = obj
    // },
    // 结束考试
    endTest() {
      this.$confirm('此操作将结束考试, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$router.replace('ResultsSummary')
        })
        .catch(() => {
          console.log(2)
        })
    },
    // current(index) {
    //   console.log(this.nav_change)
    //   if (!this.nav_change) return
    //   this.index = index
    // },
    curr(val, index) {
      this.$set(this.routes[index], 'flag', val)
      this.$forceUpdate()
    },
    submitAnswer() {
      this.test1[0] = {
        answer: this.$store.state.part1,
        partId: 1,
        timeUsing: this.$store.state.often.timeUsing1
      }
      this.test1[1] = {
        answer: this.$store.state.part2,
        partId: 2,
        timeUsing: this.$store.state.often.timeUsing2
      }
      this.test1[2] = {
        answer: this.$store.state.part3,
        partId: 3,
        timeUsing: this.$store.state.often.timeUsing3
      }
      this.test1[3] = {
        answer: this.$store.state.part4,
        partId: 4,
        timeUsing: this.$store.state.often.timeUsing4
      }
      this.test1[4] = {
        answer: this.$store.state.part5,
        partId: 5,
        timeUsing: this.$store.state.often.timeUsing5
      }
      this.test1[5] = {
        answer: this.$store.state.part6,
        partId: 6,
        timeUsing: this.$store.state.often.timeUsing6
      }
      this.test1[6] = {
        answer: this.$store.state.part7,
        partId: 7,
        timeUsing: this.$store.state.often.timeUsing7
      }
      this.test1[7] = {
        answer: this.$store.state.part8,
        partId: 8,
        timeUsing: this.$store.state.often.timeUsing8
      }
      this.test1[8] = {
        answer: this.$store.state.part9,
        partId: 9,
        timeUsing: this.$store.state.often.timeUsing9
      }
      this.test1[9] = {
        answer: this.$store.state.part10,
        partId: 10,
        timeUsing: this.$store.state.often.timeUsing10
      }
      console.log(this.test1)
      if (this.isDi) {
        if (this.test1.length != 10) {
          return this.$message({
            type: 'error',
            message: '还有part未完成'
          })
        }
        this.test1.forEach((item) => {
          item.userId = this.userId
          item.examId = this.examId
        })
        let arr1 = []
        let arr2 = []
        this.test1[5].answer.forEach((item) => {
          arr1.push(item.toLowerCase())
        })
        this.test1[6].answer.forEach((item) => {
          arr2.push(item.toLowerCase())
        })
        this.test1[5].answer = arr1
        this.test1[6].answer = arr2
        console.log(this.test1)
        this.$confirm('此操作将结束考试, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(async () => {
            this.isDi = false
            this.$load()
            this.$api
              .submitAnswer(this.test1)
              .then((result) => {
                if (result.data.code == 200) {
                  let achievement = result.data.data
                  this.isDi = true
                  this.$load().close()
                  this.$router.replace({ path: 'ResultsSummary', query: achievement })
                } else {
                  return this.$load().close()
                }
              })
              .catch((error) => {
                this.isDi = true
                this.$load().close()
                console.log(error)
              })
          })
          .catch((err) => {
            console.log(err)
            this.isDi = true
            this.$load().close()
          })
      }
    }
  },
  components: {
    Header
  }
}
</script>
<style lang="less" scoped>
.el-header {
  padding: 0;
}
.el-main {
  padding: 0 0.25rem;
  height: 87vh;
  overflow: visible;
}
.el-aside {
  height: 87vh;
  background-color: #f5f5f5;
  padding: 0.2rem 0.125rem;
  box-sizing: border-box;
  color: #5d5d5d;
  .listen,
  .read,
  .write {
    margin-bottom: 0.25rem;
  }
  .listen_title,
  .read_title,
  .write_title {
    font-size: 0.275rem;
    font-weight: 700;
    color: #5d5d5d;
  }
  .listen_contain,
  .read_contain,
  .write_contain {
    padding-left: 0.125rem;
    .item {
      display: flex;
      height: 0.5rem;
      line-height: 0.5rem;
      margin: 0.125rem auto;
      box-sizing: content-box;
      a {
        width: 1.875rem;
        display: inline-block;
      }
      span {
        display: block;
        height: 0.5rem;
        width: 100%;
        line-height: 0.5rem;
        text-align: center;
        border: 0.0125rem solid #000;
        border-radius: 0.1rem;
        background-color: #fff;
        font-size: 0.225rem;
        color: #5d5d5d;
        @media screen and (max-width: 1140px) {
          font-size: 0.175rem;
        }
      }
      img {
        width: 0.375rem;
        height: 0.375rem;
        margin: 0.075rem 0.125rem 0 0;
      }
    }
  }
}

.el-footer {
  // position: fixed;
  // bottom: 0;
  // left: 0;
  width: 100%;
  border-top: 0.0125rem solid #000;
  z-index: 99;
  background-color: #fff;
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
.box {
  margin: 0;
  padding: 0;
  transform-origin: 0 0;
  position: relative;
  width: 100%;
  height: 100%;
  left: 0;
}
.current {
  background-color: #4f87e6 !important;
  color: #fff !important;
}
</style>
