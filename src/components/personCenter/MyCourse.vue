<template>
  <div>
    <!-- 我的购买 -->
    <div class="purchase">
      <div class="title">我的购买</div>
      <div class="purchase_records clearfix">
        <div
          class="item fl"
          v-for="(item, index) in purchase"
          :key="index"
          :style="{ background: `url(${item.imgUrl}) no-repeat right bottom` }"
        >
          <div class="name">朗思听力训练营</div>
          <p class="period_validity">课程有效期：2022年8月15日</p>
          <div class="has_been_learn clearfix">
            <span>已学习</span>
            <el-progress :text-inside="true" :stroke-width="11" :percentage="70"></el-progress>
          </div>
          <button>开始学习</button>
        </div>
      </div>
    </div>
    <!-- 历史记录 -->
    <div class="historical">
      <div class="title">历史记录</div>
      <div class="historical_record clearfix">
        <div class="item fl" v-for="(item, index) in historical" :key="index">
          <div class="img">
            <div class="mask">
              <div class="img">
                <img src="https://s1.ax1x.com/2022/07/21/jLJ1AK.png" alt="" />
              </div>
            </div>
            <img :src="item.imgUrl" alt="" />
          </div>
          <div class="course_info">
            <p class="name">朗思口语保分班</p>
            <span>第一章第三节</span>
          </div>
          <div class="have_to_watch clearfix">
            <span>观看至 08：45</span>
            <button>继续学习</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      purchase: [
        {
          imgUrl: 'https://s1.ax1x.com/2022/07/21/jL3kkD.png'
        },
        {
          imgUrl: 'https://s1.ax1x.com/2022/07/21/jL3iTO.png'
        },
        {
          imgUrl: 'https://s1.ax1x.com/2022/07/21/jL3Cm6.png'
        }
      ],
      historical: [
        {
          imgUrl: 'https://s1.ax1x.com/2022/07/21/jLQRnf.png'
        },
        {
          imgUrl: 'https://s1.ax1x.com/2022/07/21/jLQgjP.png'
        },
        {
          imgUrl: 'https://s1.ax1x.com/2022/07/21/jLQWB8.png'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.title {
  font-size: 0.3rem;
  font-family: Source Han Sans CN, Source Han Sans CN-Regular;
  color: #36537c;
  line-height: 0.5375rem;
  letter-spacing: 0.015rem;
  padding-bottom: 0.125rem;
}
.purchase_records {
  .item {
    width: 4.25rem;
    height: 2.75rem;
    border-radius: 0.1rem;
    margin-right: 0.1875rem;
    padding: 0.425rem 0 0 0.325rem;
    box-sizing: border-box;
    transition: all 0.3s;
    background-color: #fff !important;
    &:hover {
      transform: scale(1.1);
    }
    .name {
      font-size: 0.25rem;
      color: #518abd;
      letter-spacing: 0.0125rem;
    }
    .period_validity {
      font-size: 0.175rem;
      color: #b2b2b2;
      letter-spacing: 0.0087rem;
    }
    .has_been_learn {
      margin-top: 0.2375rem;
      font-size: 0.175rem;
      color: #b2b2b2;
      letter-spacing: 0.0087rem;
      span {
        float: left;
      }
      .el-progress {
        width: 2rem;
        float: left;
        margin-left: 0.175rem;
        /deep/ .el-progress-bar__innerText {
          font-size: 0.15rem;
          margin-bottom: 0.0375rem;
        }
      }
    }
    button {
      margin-top: 0.6625rem;
      width: 1.25rem;
      height: 0.3875rem;
      background: #ffffff;
      border: 0.0187rem solid #366dbb;
      border-radius: 0.1875rem;
      box-shadow: 0.0125rem 0.0125rem 0.0375rem 0rem #d3dbe7;
      font-size: 0.175rem;
      color: #366dbb;
      letter-spacing: 0.0087rem;
    }
  }
}
.historical {
  margin-top: 0.45rem;
  .historical_record {
    .item {
      width: 4.125rem;
      height: 3.5875rem;
      background: #ffffff;
      border-radius: 0.3125rem;
      box-shadow: 0rem 0.0375rem 0.0625rem 0rem rgba(172, 168, 168, 0.12);
      margin-right: 0.3125rem;
      margin-bottom: 0.525rem;
      padding: 0.225rem 0.2125rem;
      box-sizing: border-box;

      .img {
        position: relative;
        width: 3.7rem;
        height: 1.925rem;
        border-radius: 0.125rem;
        overflow: hidden;
        box-shadow: 0rem 0.0375rem 0.075rem 0rem rgba(0, 0, 0, 0.16);
        .mask {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 1;
          background: rgba(0, 0, 0, 0.3);
          .img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 0.75rem;
            height: 0.75rem;
          }
        }
      }
      .course_info {
        margin-top: 0.175rem;
        .name {
          font-size: 0.25rem;
          color: #515151;
          line-height: 0.2125rem;
          letter-spacing: 0.0125rem;
          margin-bottom: 0.125rem;
        }
        span {
          font-size: 0.2rem;
          color: #777777;
          line-height: 0.175rem;
          letter-spacing: 0.01rem;
        }
      }
      .have_to_watch {
        font-size: 0.2rem;
        color: #515151;
        letter-spacing: 0.01rem;
        margin-top: 0.225rem;
        span {
          float: left;
        }
        button {
          float: right;
          width: 1.25rem;
          height: 0.3rem;
          background: #ffffff;
          border: 0.0187rem solid #366dbb;
          border-radius: 0.1688rem;
          box-shadow: 0.0125rem 0.0125rem 0.0375rem 0rem #d3dbe7;
          font-size: 0.175rem;
          color: #366dbb;
          letter-spacing: 0.0087rem;
        }
      }
    }
  }
}
</style>