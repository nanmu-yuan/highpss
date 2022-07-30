<template>
  <div class="box">
    <Banner
      :info="bannerInfo"
      :sign="true"
    />
    <div class="contain">
      <div class="top">
        <div class="title">口语<span>总</span>练不好？不知道自己的<span>真实</span>水平？</div>
        <p>栗子朗思限时推出特价1:1考场还原模考体验，老师将严格按照官方评分标准，出具分数及点评报告。<br>针对性反馈口语问题和提升建议，让你快速了解自己的短板，补全自己的不足，短时间内迅速提升口语分数。</p>
      </div>
      <div class="brightSpot">
        <div class="title">模考亮点</div>
        <div class="radar">
          <div class="round">
            <div class="small-round1">
              <span>名师点评</span>
              <p>栗子朗思对口语教师有着极其严格的发音筛选<br>专业教师助你提升口语能力</p>
              <img
                src="@/assets/image/class/1.png"
                alt=""
              >
            </div>
            <div class="small-round2">
              <span>模拟考试环境，建立考场信心</span>
              <p>自主研发一站式学习系统学习监督+随时练习</p>
              <img
                src="@/assets/image/class/2.png"
                alt=""
              >
            </div>
            <div class="small-round3">
              <span>真题试炼</span>
              <p>根据考情实时更新真题内容专注中国考生口语能力提升</p>
              <img
                src="@/assets/image/class/3.png"
                alt=""
              >
            </div>
            <div class="round1">
              <div class="round2"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="object-orient">
        <div class="title">面向对象</div>
        <div class="functionTree">
          <p
            class="p1"
            style="width:7.8rem"
          >复习进入瓶颈，不知道该如何提升？</p>
          <p
            class="p2"
            style="width:6.375rem"
          >真实考察能力，考前准确估分</p>
          <p
            class="p3"
            style="width:8.375rem"
          >需要提分建议，短时间内迅速找出问题</p>
          <p
            class="p4"
            style="width:7.3125rem"
          >做过大量练习，却还是找不到感觉缺少互动性</p>
          <img
            src="@/assets/image/class/tree.png"
            alt=""
          >
          <img
            class="img1"
            src="@/assets/image/class/4.png"
            alt=""
          >
          <img
            class="img2"
            src="@/assets/image/class/5.png"
            alt=""
          >
          <img
            class="img3"
            src="@/assets/image/class/6.png"
            alt=""
          >
          <img
            class="img4"
            src="@/assets/image/class/7.png"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from '@/components/Banner.vue'
export default {
  data() {
    return {
      bannerInfo: {
        title: '口语模考',
        bannerImg: require('@/assets/image/class/spoken.png'),
        btn: '速抢名额'
      }
    }
  },
  mounted() {},

  components: { Banner },
  methods: {}
}
</script>
<style lang="less" scoped>
.top {
  .title {
    text-align: center;
    color: #051123;
    font-size: 0.8375rem;
    font-family: SourceHanSansCN-Medium;
    font-weight: 500;
    span {
      color: #ff4b40;
      font-size: 0.9375rem;
    }
  }
  p {
    width: 17.725rem;
    margin: 1.75rem auto 3.475rem;
    font-size: 0.35rem;
    font-family: Source Han Sans CN;
    color: #051123;
  }
}
.brightSpot {
  height: 11.65rem;
  background-color: #f5f7fa;
  .title {
    margin: 0 0 1.25rem 0;
    padding-top: 1.025rem;
    text-align: center;
    font-size: 0.75rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #434a54;
  }
  .round {
    width: 5.2875rem;
    height: 5.2875rem;
    margin: 0 auto;
    background-color: #e4eeff;
    border-radius: 50%;
    position: relative;
  }
  .small-con {
    width: 1.2rem;
    height: 1.2rem;
    text-align: center;
    line-height: 1.2rem;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
  }
  .small-span {
    display: block;
    font-size: 0.4875rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #434a54;
  }
  .small-round1 {
    .small-con();
    top: 0.2375rem;
    left: -0.25rem;
    img {
      width: 0.6625rem;
      height: 0.6625rem;
      vertical-align: middle;
    }
    span {
      .small-span();
      position: absolute;
      left: -2.5rem;
      width: 2rem;
    }
    p {
      position: absolute;
      top: 1.075rem;
      right: 1.7rem;
      width: 6.725rem;
      height: 0.95rem;
      font-size: 0.3125rem;
      font-family: Microsoft YaHei-Regular, Microsoft YaHei;
      color: #434a54;
      line-height: 0.5375rem;
      text-align: right;
    }
  }
  .small-round2 {
    .small-con();
    top: 1.5875rem;
    right: -0.7625rem;
    img {
      width: 0.625rem;
      height: 0.625rem;
      vertical-align: middle;
    }
    span {
      .small-span();
      position: absolute;
      left: 1.7rem;
      width: 6.35rem;
    }
    p {
      position: absolute;
      top: 1.075rem;
      left: 4.4rem;
      width: 3.6875rem;
      height: 0.95rem;
      text-align: right;
      font-size: 0.3125rem;
      font-family: Microsoft YaHei-Regular, Microsoft YaHei;
      color: #434a54;
      line-height: 0.5375rem;
    }
  }
  .small-round3 {
    .small-con();
    bottom: -0.7rem;
    left: 50%;
    transform: translateX(-50%);
    img {
      width: 0.775rem;
      height: 0.775rem;
      vertical-align: middle;
    }
    span {
      .small-span();
      position: absolute;
      top: 0.5875rem;
      left: 0.1rem;
      width: 2rem;
      transform: translateX(-2.35rem);
    }
    p {
      position: absolute;
      top: 1.65rem;
      right:1.35rem;
      width: 4.025rem;
      height: 0.95rem;
      font-size: 0.3125rem;
      font-family: Microsoft YaHei-Regular, Microsoft YaHei;
      color: #434a54;
      line-height: 0.5375rem;
    }
  }
  .lcx {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .round1 {
    .lcx();
    width: 3.975rem;
    height: 3.975rem;
    margin: auto;
    background-color: #b0ccfa;
    border-radius: 50%;
  }
  .round2 {
    .lcx();
    width: 2.15rem;
    height: 2.15rem;
    margin: auto;
    background-color: #6b99e7;
    border-radius: 50%;
  }
}
.object-orient {
  .title {
    padding: 2.45rem 0 1.825rem;
    text-align: center;
    font-size: 0.75rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #434a54;
  }
  .functionTree {
    width: 6.1125rem;
    height: 5.6125rem;
    margin: 0 auto;
    position: relative;
    .tree {
      position: absolute;
    }
    p {
      position: absolute;
      font-size: 0.4875rem;
      font-family: Source Han Sans CN;
      font-weight: bold;
      line-height: 0.8375rem;
      color: #434a54;
    }
    .p1 {
      left: -7.925rem;
      top: 0.875rem;
      width: 7.825rem !important;
    }
    .p2 {
      top: 0.75rem;
      right: -5.2875rem;
    }
    .p3 {
      left: -8rem;
      bottom: 1.5rem;
    }
    .p4 {
      right: -7rem;
      bottom: 0.675rem;
    }
    .img1 {
      .tree();
      width: 1.0375rem;
      height: 1.1875rem;
      top: 0.8rem;
      left: 1.4rem;
    }
    .img2 {
      .tree();
      width: 1.0375rem;
      height: 1.1625rem;
      top: 1.775rem;
      right: 1.575rem;
    }
    .img3 {
      .tree();
      width: 0.925rem;
      height: 0.85rem;
      left: 1.4rem;
      bottom: 1.7875rem;
    }
    .img4 {
      .tree();
      width: 0.55rem;
      height: 0.6rem;
      right: 1.7375rem;
      bottom: 1.325rem;
    }
  }
}
</style>