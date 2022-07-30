<template>
  <div class="box">
    <Banner
      :info="bannerInfo"
      :sign="false"
    >
      <template slot="con">
        <p>全套朗思测试样题</p>
        <p>提前实战演练</p>
        <p>完整反馈听力和阅读测试结果</p>
      </template>
    </Banner>
    <div class="contain">
      <div class="title">
        <img
          src="@/assets/image/class/bg1.png"
          alt=""
        >
        <!-- <div>
          栗子朗思<span style="color:#FF4B40">专业在线</span>模考
        </div> -->
      </div>
      <div class="dsc">
        <p>
          栗子朗思为各位考生提供朗思模考平台，帮助考生深入了解朗思考试，通过水平测试了解当前的英语等级，
          及不足之处，提供定制化的备考计划，帮助考生通过有针对性的自主练习和模考测试，不断提升英语能力，
          从而获得理想分数。
        </p>
        <p>
          栗子朗思online是全新的朗思学习网站，成功帮助上万名考生通过朗思考试，数千名考生取得high pass。
          提供朗思自测样题，试卷答案解析，定制可视化单项提分计划，跟踪学习进度。
        </p>
      </div>
      <!-- <div class="hot">
        <div>
          <div>
            <p>设置目标分数并持续跟踪备考进度</p>
          </div>
        </div>
        <div>
          <div>
            <p>全套朗思测试样题</p>
          </div>
        </div>
        <div>
          <div>
            <p>写作测试及范文小程序，帮助考生了解考场得分点</p>
          </div>
        </div>
        <div>
          <div>
            <p>完整反馈听力和阅读测试结果</p>
          </div>
        </div>
        <div>
          <div>
            <p>朗思机考模拟考试</p>
          </div>
        </div>
        <div>
          <div>
            <p>提前实战演练</p>
          </div>
        </div>
      </div> -->
    </div>
    <!-- 设置目标分数并持续跟踪备考进度 -->
    <div class="set_goal">
      <div class="title">设置目标分数并持续跟踪备考进度</div>
      <div class="main">
        <div class="img1">
          <img
            src="@/assets/image/class/d1.png"
            alt=""
          >
        </div>
        <div class="img2">
          <img
            src="@/assets/image/class/d2.png"
            alt=""
          >
        </div>
        <div></div>
      </div>
    </div>
    <div class="xcx">
      <div class="title">朗思写作及口语小程序，助你了解考试，掌握考试信息</div>
      <div
        class="main"
        style="position: relative;"
      >
        <div class="ell1"></div>
        <div class="ell2"></div>

        <div
          class="main_box"
          style=""
        >
          <div class="img1">
            <img
              src="@/assets/image/class/p1.png"
              alt=""
            >
            <img
              src="@/assets/image/class/x1.png"
              alt=""
            >
          </div>
          <div class="img2">
            <img
              src="@/assets/image/class/p3.png"
              alt=""
            >
            <img
              src="@/assets/image/class/x2.png"
              alt=""
            >
          </div>
          <div class="img3">
            <img
              src="@/assets/image/class/p3.png"
              alt=""
            >
            <img
              src="@/assets/image/class/x4.png"
              alt=""
            >
          </div>
          <div class="img4">
            <img
              src="@/assets/image/class/p5.png"
              alt=""
            >
            <img
              src=""
              alt=""
            >
          </div>
        </div>
        <div class="ell1"></div>
        <div class="ell2"></div>
      </div>
    </div>
    <div class="computer-bas">
      <div class="title">朗思机考模拟考试，提前实战演练</div>
      <div class="main">
        <div class="img1">
          <img
            src="@/assets/image/class/j1.png"
            alt=""
          >
        </div>
        <div class="img2">
          <img
            src="@/assets/image/class/j2.png"
            alt=""
          >
        </div>
        <div class="img3">
          <img
            src="@/assets/image/class/pc.png"
            alt=""
          >
          <img
            src="@/assets/image/class/j4.png"
            alt=""
          >
        </div>
        <div class="img4">
          <img
            src="@/assets/image/class/j4.png"
            alt=""
          >
        </div>
        <div class="img5">
          <img
            src="@/assets/image/class/j5.png"
            alt=""
          >
        </div>
      </div>
    </div>
    <!-- 反馈 -->
    <div class="feedback">
      <div class="title">完整反馈听力和阅读测试结果</div>
      <div class="main">
        <div class="img1">
          <img
            src="@/assets/image/class/w1.png"
            alt=""
          >
        </div>
        <div class="img2">
          <img
            src="@/assets/image/class/w2.png"
            alt=""
          >
        </div>
        <div class="img3">
          <img
            src="@/assets/image/class/w3.png"
            alt=""
          >
        </div>
        <div class="img4">
          <img
            src="@/assets/image/class/w4.png"
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
        title: '朗思全真在线模考',
        bannerImg: require('@/assets/image/class/mokao.png'),
        btn: '开始模考'
      }
    }
  },
  mounted() {},

  components: { Banner },
  methods: {}
}
</script>
<style lang="less" scoped>
.contain {
  text-align: center;
  .title {
    width: 11.875rem;
    margin: 0 auto 2rem;
    font-size: 0.75rem;
    font-weight: bold;
    line-height: 0.9875rem;
    color: #434a54;
    position: relative;
    div {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .dsc {
    width: 18.5rem;
    font-size: 0.375rem;
    line-height: 0.5rem;
    color: #051123;
    margin: 0 auto;
    p {
      margin: 0.7125rem 0;
    }
  }
}
.title_con {
  text-align: center;
  height: 0.8375rem;
  font-size: 0.75rem;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #434a54;
}
.set_goal {
  height: 10.225rem;
  background-color: #f5f7fa;
  .title {
    padding: 1.025rem 0 0.8125rem;
    .title_con();
  }
  .main {
    overflow: hidden;
    margin: 0 1.7rem 0 1.45rem;
    .img1 {
      float: left;
      width: 6.625rem;
      height: 4.1875rem;
      margin-top: 1.45rem;
    }
    .img2 {
      width: 13.4625rem;
      height: 6.6625rem;
      float: right;
    }
  }
}
.xcx {
  height: 14.8125rem;
  .title {
    padding: 2.25rem 0 1.125rem;
    .title_con();
  }
  .main {
    width: 22.05rem;
    height: 9.5rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 0 3.375rem 0;
    box-sizing: border-box;
    .main_box {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 3.375rem 0;
      box-sizing: border-box;
      z-index: 9;
    }
    .img_con {
      img:first-child {
        z-index: 1;
      }
      img:last-child {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 84%;
        height: 90%;
      }
    }
    .img1 {
      width: 2.75rem;
      height: 5.425rem;
      position: relative;
      margin-top: 0.6875rem;
      img {
        position: absolute;
        top: 0;
        left: 0;
      }
      .img_con();
    }
    .img2 {
      width: 3.45rem;
      height: 6.8125rem;
      position: relative;
      img {
        position: absolute;
        top: 0;
        left: 0;
      }
      .img_con();
    }
    .img3 {
      width: 3.45rem;
      height: 6.8125rem;
      position: relative;
      img {
        position: absolute;
        top: 0;
        left: 0;
      }
      .img_con();
    }
    .img4 {
      width: 2.75rem;
      height: 5.425rem;
      position: relative;
      margin-top: 0.6875rem;
      img {
        position: absolute;
        top: 0;
        left: 0;
      }
      .img_con();
    }
    .ell1,
    .ell2 {
      width: 22.0375rem;
      height: 8rem;
      position: absolute;
      left: 0;
      top: 0;
      border: 2px solid #4f87e6;
      border-radius: 100%;
      -o-border-radius: 100%;
      -ms-border-radius: 100%;
      -moz-border-radius: 100%;
      -webkit-border-radius: 100%;
    }
    .ell1 {
      transform: rotate(-10deg);
    }
    .ell2 {
      transform: rotate(10deg);
    }
  }
}
.computer-bas {
  height: 11.875rem;
  background-color: #f5f7fa;
  .title {
    padding: 1.5rem 0 0.675rem;
    .title_con();
  }
  .main {
    position: relative;
    margin: 0 0.625rem;
    box-sizing: border-box;
    div {
      position: absolute;
    }
    .img1 {
      width: 4.4625rem;
      height: 2.625rem;
      margin-top: 2.05rem;
    }
    .img2 {
      width: 6.125rem;
      height: 3.5875rem;
      left: 3.0125rem;
      z-index: 2;
      margin-top: 1.55rem;
    }
    .img3 {
      width: 11.45rem;
      height: 8.5875rem;
      left: 5.75rem;
      z-index: 3;
      img:first-child {
      }
      img:last-child {
        position: absolute;
        width: 71%;
        height: 54%;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .img4 {
      right: 3.5rem;
      width: 6.3625rem;
      height: 3.8125rem;
      z-index: 2;
      margin-top: 1.55rem;
    }
    .img5 {
      right: 0;
      width: 4.6875rem;
      height: 2.8375rem;
      margin-top: 2.05rem;
    }
  }
}
.feedback {
  height: 10.625rem;
  .title {
    padding: 2rem 0 1.25rem;
    .title_con();
  }
  .main {
    margin: 0 1.175rem;
    position: relative;
    div {
      position: absolute;
      background-color: #fff;
    }
    .img1 {
      width: 9.05rem;
      height: 6.925rem;
      z-index: 12;
    }
    .img2 {
      left: 6.6125rem;
      width: 6.9875rem;
      height: 5.35rem;
      z-index: 11;
      margin-top: 0.7875rem;
    }
    .img3 {
      margin-top: 1.225rem;
      left: 11.6rem;
      width: 5.8375rem;
      height: 4.475rem;
      z-index: 10;
    }
    .img4 {
      margin-top: 1.5375rem;
      right: 0;
      width: 3.8875rem;
      height: 3.875rem;
      z-index: -1;
    }
  }
}

.hot {
  width: 18.5rem;
  margin: 1.9625rem auto 0;
  & > div {
    position: relative;
    height: 0.375rem;
    border: 0.0125rem solid transparent;
    margin: 0 auto 0.75rem;
    div {
      background-color: #ffb5b1;
      border-radius: 0.1rem;
      padding: 0 0.25rem;
      margin: 0 auto;
      width: auto;
      height: 0.325rem;
      min-width: 3.125rem;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      p {
        position: relative;
        top: -0.225rem;
        font-size: 0.3875rem;
        font-weight: bold;
        line-height: 0.5125rem;
        color: #051123;
      }
    }
  }
}
</style>