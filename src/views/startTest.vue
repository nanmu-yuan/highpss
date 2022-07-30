<template>
  <div class="box">
    <div class="contain">
      <h1>欢迎进入 朗思模考</h1>
      <button
        @click="jump"
        style="box-shadow: 0rem 0.0375rem 0.075rem rgba(0, 0, 0, 0.16);"
      >开始考试</button>
      <p class="tit">点击按钮进入考试 如未登录则跳转登录界面</p>
    </div>
  </div>
</template>
    <script>
export default {
  data() {
    return {
      isWelcomed: 0
    }
  },
  created() {
    this.isWelcomed = JSON.parse(localStorage.getItem('loginInfo')).isWelcomed
  },
  methods: {
    jump() {
      if (!this.isWelcomed) {
        return this.$router.push('/navigationPage')
      }
      this.$router.push('/listen_part1')
    }
  }
}
</script>
<style lang="less" scoped>
header {
  height: 1.25rem;
  line-height: 1.25rem;
  border-bottom: 1px solid #000;
  .title {
    overflow: hidden;
    margin: auto;
    width: 5.8125rem;
    font-size: 0.5rem;
    color: #000;
  }
  .img {
    height: 1.25rem;
    width: 1.4rem;
    margin: 0rem 0.25rem 0 0;
  }
  .title_text {
    margin-top: 0.25rem;
    p {
      font-family: KaiTi;
      line-height: normal;
    }
    p:last-child {
      font-size: 0.175rem;
      text-align: right;
    }
  }
}
.contain {
  width: 90%;
  height: 94vh;
  text-align: center;
  margin: 0 auto;
  background: url('../assets/image/home-bg.png') no-repeat center;
  background-size: 100% 100%;
}
h1 {
  font-size: 0.75rem;
  color: #777;
  padding: 1.25rem 0;
}
button {
  width: 5.75rem;
  height: 1.125rem;
  background-color: #4f87e6;
  border-radius: 0.15rem;
  color: #fff;
  font-size: 0.625rem;
}
p.tit {
  width: 4.75rem;
  color: #7c7c7c;
  font-size: 0.4rem;
  margin: 0.75rem auto;
}
</style>