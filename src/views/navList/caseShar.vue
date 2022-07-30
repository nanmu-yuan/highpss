<template>
  <div class="box">
    <div class="clearfix">
      <h2>考生案例分享</h2>
    </div>
    <div class="case_list">
      <div
        class="item"
        v-for="(item,index) in 6"
        :key="index"
        @click="toDetail"
      >
        <div class="title">
          <div class="line"></div>
          <p>我的成功你也可以复制｜朗思首考就实现High Pass换offer！
          </p>
        </div>
        <div class="dsc">
          <p>与很多机构不同，我们的老师有着多年一线实战经验，一直深耕一线教学，相当了解同学们的错误因素与很多机构不同，我们的老师
            有着多年一线实战经验，一直深耕一线教学，相当了解同学们的错误因素
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toDetail() {
      this.$router.push('caseSharDetail')
    }
  }
}
</script>
<style lang="less" scoped>
h2 {
  height: 0.65rem;
  float: right;
  margin: 0.55rem 1.075rem 0 0;
  font-size: 0.5rem;
  font-weight: bold;
  line-height: 0.65rem;
  color: #4a6b9a;
  text-shadow: 0rem 0.0375rem 0.075rem rgba(79, 135, 230, 0.3);
}
.case_list {
  padding: 0 1.075rem 0 1.25rem;
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.375rem;
}
.line {
  width: 13.25rem;
  height: 0.3rem;
  background: rgba(79, 135, 230, 0.3);
  border-radius: 0.1rem;
}
.item {
  padding-bottom: 0.875rem;
}
.title {
  position: relative;
  p {
    position: absolute;
    top: -0.325rem;
    left: 0.4rem;
    font-size: 0.4375rem;
    color: #000000;
    font-weight: 700;
  }
}
.dsc {
  padding-left: 0.375rem;
  box-sizing: border-box;
  p {
    font-size: 0.35rem;
    color: #4f4f4f;
    line-height: 0.475rem;
    padding-top: 0.375rem;
  }
}
</style>