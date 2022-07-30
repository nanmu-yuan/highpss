<template>
  <div class="box">
    <!-- 成绩正在计算中 -->

    <!-- 成绩结果分析 -->
    <div class="result-analysis">
      <h2>模考成绩结果分析</h2>
      <!-- Exam -->
      <div class="exam">
        <p class="tit">Exam</p>
        <p>LanguageCert Level 1 Certificate in ESOL International（B2）</p>
      </div>
      <!-- Result -->
      <div class="result">
        <p class="tit">Result</p>
        <p>High Pass</p>
      </div>
      <!-- Result Analysis -->
      <table border="1">
        <tr>
          <td colspan="3" class="tit">Result Analysis</td>
        </tr>
        <tr>
          <td>Listening（out of 50）</td>
          <td>Reading（out of 50）</td>
          <td>Writing（out of 50）</td>
        </tr>
        <tr>
          <td>{{ achievement.listeningScore }}</td>
          <td>{{ achievement.readingScore }}</td>
          <td>50（写作请自己评分）</td>
        </tr>
      </table>
      <!-- 看解析 -->
      <button @click="view">回到考试查看错题解析</button>
    </div>
  </div>
</template>
<script>
import { getUserId } from '@/request/api'
export default {
  data() {
    return {
      readPoint: 0,
      listenPoint: 0
    }
  },
  created() {
    this.achievement = this.$route.query
  },
  methods: {
    view() {
      sessionStorage.setItem('isAnalysis', true)
      this.$router.replace('/listen_part1')
      let userId = JSON.parse(localStorage.getItem('loginInfo')).id
      getUserId(userId)
    }
  }
}
</script>
<style lang="less" scoped>
button {
  cursor: pointer;
  display: block;
  border-radius: 0.15rem;
  background-color: #4f87e6;
  color: #fffcfc;
  font-size: 0.45rem;
  width: 6rem;
  height: 0.875rem;
  margin: 1.25rem auto;
}
.loading {
  width: 11.725rem;
  height: 3.775rem;
  box-shadow: 0 0 0.125rem 0.0625rem #f5f5f5;
  margin: 2.5rem auto;
  box-sizing: border-box;
  padding: 1.05rem 0;
  text-align: center;
  font-size: 0.55rem;
  color: #999999;
}
.result-analysis {
  padding: 0.75rem;
  margin: 0.75rem 1.25rem;
  background: url('../assets/image/home-bg.png') no-repeat right bottom;
  background-color: #fffcfc;
  h2 {
    font-size: 0.45rem;
    color: #484848;
  }
}
.tit {
  font-size: 0.45rem;
  font-weight: 700;
  color: #464646;
}
.exam,
.result {
  border: 2px solid #000;
  margin: 0.625rem 0;
  p {
    height: 0.75rem;
    line-height: 0.75rem;
    padding: 0 0.5rem;
  }
  p:last-child {
    font-size: 0.325rem;
    border-top: 2px solid #000;
  }
}
table {
  width: 100%;
  border-collapse: collapse;
  td {
    border: 2px solid #000;
    height: 0.75rem;
    line-height: 0.75rem;
    padding: 0 0.5rem;
    font-size: 0.325rem;
  }
}
</style>