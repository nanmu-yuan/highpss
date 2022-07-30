<template>
  <div>
    <!-- tab栏 -->
    <ul class="tab-list clearfix">
      <li :class="{ current: tabIndex == 1 }">全部订单</li>
      <li :class="{ current: tabIndex == 2 }">待付款</li>
      <li :class="{ current: tabIndex == 3 }">已付款</li>
      <li :class="{ current: tabIndex == 4 }">已取消</li>
    </ul>
    <div class="main">
      <ul class="tab-child clearfix">
        <li :style="{ color: tabChildIndex == 1 ? '#4f87e6' : '' }" @click="tabChildIndex = 1">课程</li>
        <li :style="{ color: tabChildIndex == 2 ? '#4f87e6' : '' }" @click="tabChildIndex = 2">加油包</li>
        <li :style="{ color: tabChildIndex == 3 ? '#4f87e6' : '' }" @click="tabChildIndex = 3">批改</li>
        <li :style="{ color: tabChildIndex == 4 ? '#4f87e6' : '' }" @click="tabChildIndex = 4">预测</li>
      </ul>
      <!-- 课程 -->
      <div class="contain1 clearfix" v-show="tabChildIndex == 1">
        <div class="item box_shadow fl" v-for="item in 5" :key="item">
          <div>
            <span class="title">朗思听力训练营</span>
            <span class="state fr">已付款</span>
          </div>
          <div class="period_validity">课程有效期：2022年8月15日</div>
          <button>开始学习</button>
        </div>
      </div>
      <!-- 加油包 -->
      <div class="contain2 clearfix" v-show="tabChildIndex == 2">
        <div class="item box_shadow fl" v-for="item in 3" :key="item">
          <div class="bg_img">
            <img src="@/assets/image/personcenter/goods.png" alt="" />
          </div>
          <div class="clearfix">
            <p class="title fl">写作批改(6次) + 口语1V1(1次) + 全真模考(1次)</p>
            <span class="state fr">已付款</span>
          </div>
          <div class="as_the_date">无截至日期</div>
        </div>
      </div>
      <!-- 批改 -->
      <div class="contain3 clearfix" v-show="tabChildIndex == 3">
        <div class="item box_shadow" v-for="item in 5" :key="item">
          <div class="bg_img">
            <img src="@/assets/image/personcenter/pigai.png" alt="" />
          </div>
          <div class="clearfix">
            <p class="title fl">写作批改(1次)</p>
            <span class="state fr">已付款</span>
          </div>
          <div class="as_the_date">无截至日期</div>
        </div>
      </div>
      <!-- 预测 -->
      <div class="contain4 clearfix" v-show="tabChildIndex == 4">
        <div class="item box_shadow" v-for="item in 5" :key="item">
          <div class="bg_img">
            <img src="@/assets/image/personcenter/yuce.png" alt="" />
          </div>
          <div class="clearfix">
            <p class="title fl">预测一档XXXXX</p>
            <span class="state fr">已付款</span>
          </div>
          <p class="update_time">2022年8月15日更新</p>
          <div class="as_the_date">无截至日期</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabIndex: 1,
      tabChildIndex: 1
    }
  },
  created() {
    // this.getOrder(-1, -1, -1)
  },
  methods: {
    // 获取订单
    getOrder(state, type, pageNum) {
      this.$api
        .getOrder(state, type, pageNum)
        .then((res) => {
          console.log(res.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang="less" scoped>
.tab-list {
  margin-bottom: 0.325rem;
  li {
    float: left;
    font-size: 0.225rem;
    font-weight: 700;
    color: #b4b4b4;
    letter-spacing: 0.0112rem;
    padding: 0 0.375rem;
    height: 0.55rem;
    line-height: 0.55rem;
    background-color: #fff;
    border-radius: 0.3125rem;
    margin-right: 0.3125rem;
    cursor: pointer;
  }
  li.current {
    background-color: #ffc24a;
    background-image: linear-gradient(#ffdd9a, #ffc24a);
    color: #ffffff;
  }
}
.main {
  width: 13.7rem;
  background: #ffffff;
  border-radius: 0.3125rem;
  padding: 0.25rem 0.3375rem;
  box-sizing: border-box;
  box-shadow: 0rem 0.0375rem 0.075rem 0rem rgba(172, 168, 168, 0.12);
  .tab-child {
    border-bottom: 0.0125rem solid #f4f8fc;
    margin-bottom: 0.4rem;
    li {
      float: left;
      margin-right: 0.8625rem;
      padding-bottom: 0.175rem;
      padding-left: 0.25rem;
      font-size: 0.225rem;
      color: #b2b2b2;
      letter-spacing: 0.0112rem;
      cursor: pointer;
    }
  }
  .state {
    font-size: 0.2rem;
    color: #479924;
    letter-spacing: 0.01rem;
    padding-right: 0.2rem;
  }
  .box_shadow {
    box-shadow: 0 0 0.075rem 0 rgba(172, 168, 168, 0.12);
  }
  .as_the_date {
    position: absolute;
    bottom: 0.35rem;
    font-size: 0.175rem;
    color: #b2b2b2;
    letter-spacing: 0.0087rem;
  }
  .bg_img {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0.95rem;
    height: 0.95rem;
  }
  .contain1 {
    .item {
      padding-top: 0.275rem;
      width: 2.825rem;
      height: 2.025rem;
      margin: 0 0.2125rem 0.425rem;
      box-sizing: border-box;
      padding-left: 0.25rem;
    }
    .title {
      font-size: 0.225rem;
      color: #518abd;
      letter-spacing: 0.0112rem;
    }
    .period_validity {
      font-size: 0.15rem;
      color: #b2b2b2;
      letter-spacing: 0.0075rem;
    }
    button {
      margin-top: 0.475rem;
      width: 1.05rem;
      height: 0.325rem;
      background: #ffffff;
      border: 0.0187rem solid #366dbb;
      border-radius: 0.1812rem;
      box-shadow: 0.0125rem 0.0125rem 0.0375rem 0rem #d3dbe7;
      font-size: 0.175rem;
      color: #366dbb;
    }
  }
  .contain2 {
    .item {
      width: 6.025rem;
      height: 2.025rem;
      margin-left: 0.3125rem;
      margin-bottom: 0.425rem;
      padding: 0.275rem;
      box-sizing: border-box;
      position: relative;
      .bg_img {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0.95rem;
        height: 0.95rem;
      }
      .title {
        width: 3.4375rem;
        font-size: 0.225rem;
        color: #518abd;
        line-height: 0.3rem;
        letter-spacing: 0.0112rem;
      }
    }
  }
  .contain3 {
    .item {
      float: left;
      width: 2.95rem;
      height: 2.025rem;
      padding: 0.275rem 0 0 0.275rem;
      box-sizing: border-box;
      margin: 0 0.15rem 0.375rem;
      position: relative;
      .title {
        font-size: 0.225rem;
        color: #518abd;
        line-height: 0.3625rem;
        letter-spacing: 0.0112rem;
      }
    }
  }
  .contain4 {
    .item {
      float: left;
      width: 2.95rem;
      height: 2.025rem;
      padding: 0.275rem 0 0 0.275rem;
      box-sizing: border-box;
      margin: 0 0.15rem 0.375rem;
      position: relative;
      .title {
        font-size: 0.225rem;
        color: #518abd;
        line-height: 0.3625rem;
        letter-spacing: 0.0112rem;
      }
      .update_time {
        font-size: 0.175rem;
        color: #b2b2b2;
        letter-spacing: 0.0087rem;
        margin-top: 0.175rem;
      }
    }
  }
}
</style>