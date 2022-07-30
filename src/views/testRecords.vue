<template>
  <div class="box">
    <div class="list">
      <el-empty
        description="暂无考试记录"
        v-if="list.length<=0"
      ></el-empty>
      <div v-else>
        <div
          class="item"
          v-for="(item,index) in list"
          :key="index"
        >
          <div class="top">
            <div class="title">IESOL B2 模拟套题1</div>
            <div class="time">于 {{item.examTime | dateFmart}}参加模考</div>
          </div>
          <div class="con">
            <div>
              <span>总分</span>
              <span>{{item.listeningScore+item.readingScore+item.writingScore}}</span>
            </div>
            <div>
              <span>听力</span>
              <span>{{item.listeningScore?item.listeningScore:0}}</span>
            </div>
            <div>
              <span>阅读</span>
              <span>{{item.readingScore?item.readingScore:0}}</span>
            </div>
            <div>
              <span>写作</span>
              <span>{{item.writingScore?item.writingScore:0}}</span>
            </div>
            <div>
              <span>口语</span>
              <span>未模考</span>
            </div>
            <div>
              <span
                style="color:#4F87E6;cursor: pointer;"
                @click="checkPars(item.examLogId)"
              >查看解析</span>
              <span
                style="color:#FF4B40;cursor: pointer;"
                @click="toTest(item.examLogId)"
              >重新考试</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getExamId } from '@/request/api'
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    this.getTestList()
  },
  filters: {
    dateFmart: function (val) {
      return val.substring(0, 10)
    }
  },
  methods: {
    getTestList() {
      this.$api.getTestList().then((res) => {
        console.log(res)
        if (res.data.code == 200) {
          this.list = res.data.data
          console.log(this.list)
        }
      })
    },
    // 查看解析
    checkPars(id) {
      this.$api
        .getTestListLog(id)
        .then((res) => {
          console.log(res.data)
          if (res.data.code == 200) {
            this.examId = res.data.data.examId
            sessionStorage.setItem('isAnalysis', true)
            sessionStorage.setItem('examId', this.examId)
            getExamId(this.examId)
            this.$router.push('/listen_part1')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 重新考试
    toTest(id) {
      this.$api
        .getTestListLog(id)
        .then((res) => {
          console.log(res.data)
          if (res.data.code == 200) {
            this.examId = res.data.data.examId
            sessionStorage.setItem('isAnalysis', false)
            sessionStorage.setItem('examId', this.examId)
            sessionStorage.setItem('start', false)
            getExamId(this.examId)
            this.$router.push('/startTest')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang="less" scoped>
.list {
  width: 100%;
  padding: 0.4rem 0.7125rem 0;
  box-sizing: border-box;
  .item {
    margin-bottom: 0.5rem;
    .top {
      width: 100%;
      height: 0.8125rem;
      line-height: 0.8125rem;
      background: rgba(243, 251, 255, 1);
      box-shadow: 0rem 0.0375rem 0.075rem rgba(167, 194, 240, 0.3);
      border-radius: 0.1875rem 0.1875rem 0rem 0rem;
      display: flex;
      justify-content: space-between;
      padding: 0 0.375rem;
      box-sizing: border-box;
      .title {
        font-size: 0.375rem;
        font-weight: 400;
        color: #434a54;
      }
      .time {
        font-size: 0.275rem;
        font-weight: 400;
        color: #c0c0c0;
      }
    }
    .con {
      width: 100%;
      height: 1.7125rem;
      display: flex;
      justify-content: space-between;
      padding: 0 0.375rem;
      box-sizing: border-box;
      background-color: #fff;
      box-shadow: 0rem 0.0375rem 0.1875rem rgba(167, 194, 240, 0.3);
      div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        span:first-child {
          font-size: 0.375rem;
          font-weight: 400;
          color: #434a54;
        }
        span:last-child {
          font-size: 0.325rem;
        }
      }
      div:last-child {
        span {
          font-size: 0.325rem;
        }
      }
    }
  }
}
</style>
