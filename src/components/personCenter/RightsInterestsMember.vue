<template>
  <div class="member">
    <div class="no_buy">
      <div class="img">
        <img src="@/assets/image/personcenter/no-buy_right.png" alt="" />
      </div>
      <div class="info">
        <div class="img fl">
          <img src="@/assets/image/personcenter/no_buy.png" alt="" />
          <h2>成为栗子朗思 全平台会员</h2>
        </div>
        <div class="checkbox fl clearfix">
          <div v-for="(item, index) in checkboxList" :key="index" class="fl">
            <img class="fl" src="@/assets/image/personcenter/no.png" alt="" />
            <p class="fl">{{ item }}</p>
          </div>
        </div>
      </div>
    </div>
    <p class="floot">当前未购买会员权益，点击 <span @click="dialogVisible = true">成为会员</span></p>
    <el-dialog :visible.sync="dialogVisible" width="955" :show-close="true">
      <div class="left fl">
        <div class="open">
          <p class="title">购买会员解锁10+会员权益</p>
          <div class="member_list">
            <div>
              <div class="top">XXX会员</div>
              <div class="bottom">
                <span>￥XXX</span>
              </div>
            </div>
            <div>
              <div class="top">XXX会员</div>
              <div class="bottom">
                <s>￥XXX</s>
                <span>￥XXX</span>
              </div>
            </div>
          </div>
          <button>同意协议并支付</button>
        </div>
        <p>开通前请阅读《栗子朗思XXXXX》</p>
      </div>
      <div class="coupons fr">
        <div class="coupons_list">
          <Coupons v-for="item in 4" :key="item">
            <template slot="mask">
              <div class="mask"></div>
            </template>
          </Coupons>
        </div>
        <p>选择优惠卷</p>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Coupons from '@/components/personCenter/Coupons.vue'
export default {
  data() {
    return {
      dialogVisible: false,
      checkboxList: [
        '官方试卷全真模考',
        '口语模考助考生熟悉考试流程',
        '1 : 1 还原朗思线上考试',
        '最全试卷写作解析',
        '听力阅读错题解析',
        '写作参考答案思路解析',
        '精听、原文多模式听力学习'
      ]
    }
  },
  components: {
    Coupons
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.member {
  .no_buy {
    width: 14.1625rem;
    height: 6.2125rem;
    position: relative;
  }
  .img {
    width: 14.1625rem;
    height: 6.2125rem;
  }
  .info {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    .img {
      position: relative;
      width: 3rem;
      height: 4.9375rem;
      margin: 0.55rem 0 0 0.875rem;
      h2 {
        position: absolute;
        left: 0.425rem;
        top: 0.675rem;
        width: 2.2125rem;
        font-size: 0.35rem;
        font-family: Source Han Sans CN, Source Han Sans CN-Bold;
        font-weight: 700;
        color: #ffffff;
        line-height: 0.475rem;
        letter-spacing: 0.0175rem;
      }
    }
    .checkbox {
      width: 7.5rem;
      margin-top: 0.725rem;
      margin-left: 0.8rem;
      div {
        width: 3.75rem;
        padding: 0.3125rem 0;
      }
      img {
        width: 0.375rem;
        height: 0.375rem;
        vertical-align: baseline;
        margin-right: 0.3rem;
      }
      p {
        font-size: 0.2rem;
        font-family: Source Han Sans CN, Source Han Sans CN-Regular;
        font-weight: 400;
        color: #051123;
        letter-spacing: 0.01rem;
      }
    }
  }
  .floot {
    font-size: 0.225rem;
    color: #8f8f8f;
    letter-spacing: 0.0112rem;
    text-align: center;
    span {
      font-size: 0.25rem;
      color: #6294e8;
    }
  }
  /deep/ .el-dialog {
    background-color: #e2f0ff;
    height: 6.875rem;
    .el-dialog__header {
      padding: 0.4375rem 0;
    }
    .el-dialog__body {
      padding: 0;
      margin: 0 0 0 0.9375rem;
    }
    .left {
      width: 5.275rem;
      text-align: center;
      & > p {
        color: #8f8f8f;
        font-size: 0.225rem;
        margin-top: 0.3rem;
      }
    }
    .open {
      width: 5.275rem;
      height: 4.85rem;
      background: #f8fcff;
      border-radius: 0.3125rem;
      text-align: center;
      box-shadow: 0 0.0375rem 0.1875rem 0 rgba(103, 149, 214, 0.53);
      .title {
        font-size: 0.275rem;
        color: #ff9651;
        padding: 0.55rem 0;
      }
      .member_list {
        display: flex;
        justify-content: space-between;
        width: 3.45rem;
        margin: 0 auto;
        & > div {
          width: 1.425rem;
          height: 1.8rem;
          border-radius: 0.3125rem;
          box-shadow: 0 0.0375rem 0.075rem 0 #a9d6f1;
          overflow: hidden;

          .top {
            font-size: 0.275rem;
            color: #ffffff;
            width: 1.425rem;
            height: 0.65rem;
            line-height: 0.65rem;
            background: #649ff3;
            border-radius: 0.3125rem 0.3125rem 0 0;
            box-shadow: 0 0.0375rem 0.075rem 0 #bad2fe;
          }
          .bottom {
            height: 1.15rem;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            span {
              font-size: 0.35rem;
              color: #ff6600;
            }
            s {
              font-size: 0.225rem;
              color: #ff6600;
            }
          }
          &:last-child {
            .bottom {
              background-color: #fff1da;
              box-shadow: 0 0.0375rem 0.075rem 0 #a9d6f1;
            }
          }
        }
      }
      button {
        display: block;
        margin: 0.6rem auto 0;
        width: 3.95rem;
        height: 0.6375rem;
        background: #ffae26;
        border-radius: 0.1875rem;
        font-size: 0.275rem;
        color: #fff;
      }
    }
    .coupons {
      margin-right: 0.4375rem;
      margin-top: 0.125rem;
      .coupons_list {
        height: 4.75rem;
        overflow-y: auto;
        // 整个滚动条
        &::-webkit-scrollbar {
          width: 0.125rem;
        }
        // 滚动条上的按钮 (上下箭头)
        &::-webkit-scrollbar-button {
          display: none;
        }
        // 滚动条上的滚动滑块
        &::-webkit-scrollbar-thumb {
          width: 0.125rem;
          background-color: #ffffff;
        }
        // 滚动条轨道
        &::-webkit-scrollbar-track {
          width: 0.125rem;
        }
        // 滚动条没有滑块的轨道部分
        &::-webkit-scrollbar-track-piece {
          background-color: #cde1f3;
        }
      }
      .mask {
        position: absolute;
        top: 0.0625rem;
        left: 0.125rem;
        width: 4.0625rem;
        height: 1.925rem;
        border-radius: 0.2rem;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.2);
      }
      & > p {
        font-size: 0.225rem;
        color: #4f709f;
        text-align: right;
        margin-top: 0.125rem;
      }
    }
  }
}
</style>