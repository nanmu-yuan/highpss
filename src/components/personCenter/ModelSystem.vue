<template>
  <div class="model_system clearfix">
    <ul class="sidebar fl">
      <li @click="sideChange(1)" :style="{ color: sidebarIndex == 1 ? '#4F87E6' : '' }">模考记录</li>
      <li @click="sideChange(2)" :style="{ color: sidebarIndex == 2 ? '#4F87E6' : '' }">单项练习</li>
      <li @click="sideChange(3)" :style="{ color: sidebarIndex == 3 ? '#4F87E6' : '' }">批改权益</li>
    </ul>
    <!-- 模考记录 -->
    <div class="main1 fl" v-show="sidebarIndex == 1">
      <div class="item" v-for="item in 5" :key="item">
        <div class="title">
          <span class="name">LanguageCert C1 practice 1</span>
          <span class="date">考试时间：2022年6月28日</span>
        </div>
        <div class="contain">
          <div class="score">
            <div>
              <span>总分</span>
              <span></span>
              <p>
                <span class="btn">可批改</span>
              </p>
            </div>
            <div>
              <span>听力</span>
              <span>36</span>
              <p>
                <span class="btn">可批改</span>
              </p>
            </div>
            <div>
              <span>阅读</span>
              <span></span>
              <p>
                <span class="btn">可批改</span>
              </p>
            </div>
            <div>
              <span>口语</span>
              <span></span>
              <p>
                <span class="btn">可批改</span>
              </p>
            </div>
            <div>
              <span>写作</span>
              <span></span>
              <p>
                <span class="btn">可批改</span>
              </p>
            </div>
          </div>
          <div class="operation">
            <div>查看解析</div>
            <div>继续练习</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 单项练习 -->
    <div class="main2 fl" v-show="sidebarIndex == 2">
      <ul class="tab">
        <li @click="individualPracticeChange(1)" :style="{ color: individualPracticeIndex == 1 ? '#4F87E6' : '' }">
          全部
        </li>
        <li @click="individualPracticeChange(2)" :style="{ color: individualPracticeIndex == 2 ? '#4F87E6' : '' }">
          听力
        </li>
        <li @click="individualPracticeChange(3)" :style="{ color: individualPracticeIndex == 3 ? '#4F87E6' : '' }">
          阅读
        </li>
        <li @click="individualPracticeChange(4)" :style="{ color: individualPracticeIndex == 4 ? '#4F87E6' : '' }">
          写作
        </li>
        <li @click="individualPracticeChange(5)" :style="{ color: individualPracticeIndex == 5 ? '#4F87E6' : '' }">
          口语
        </li>
      </ul>
      <!-- 全部 -->
      <div v-show="individualPracticeIndex == 1"></div>
      <!-- 听力 -->
      <div class="listen" v-show="individualPracticeIndex == 2">
        <div class="item" v-for="item in 5" :key="item">
          <div class="title">
            <span class="name">LanguageCert C1 practice 1 listening_part 2</span>
            <span class="date">考试时间：2022年6月28日</span>
          </div>
          <div class="contain">
            <div class="score">
              <div>
                <span>正确率</span>
                <span></span>
              </div>
              <div>
                <span>题数</span>
                <span>36</span>
              </div>
              <div>
                <span>答对</span>
                <span></span>
              </div>
              <div>
                <span>用时</span>
                <span></span>
              </div>
            </div>
            <div class="operation">
              <div>查看解析</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 阅读 -->
      <div class="read" v-show="individualPracticeIndex == 3">
        <div class="item" v-for="item in 5" :key="item">
          <div class="title">
            <span class="name">LanguageCert C1 practice 1 Reading_part 2</span>
            <span class="date">考试时间：2022年6月28日</span>
          </div>
          <div class="contain">
            <div class="score">
              <div>
                <span>正确率</span>
                <span></span>
              </div>
              <div>
                <span>题数</span>
                <span>36</span>
              </div>
              <div>
                <span>答对</span>
                <span></span>
              </div>
              <div>
                <span>用时</span>
                <span></span>
              </div>
            </div>
            <div class="operation">
              <div>查看解析</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 写作 -->
      <div class="write" v-show="individualPracticeIndex == 4">
        <div class="item" v-for="item in 5" :key="item">
          <div class="title">
            <span class="name">LanguageCert C1 practice 1 Writing_task 2</span>
            <span class="date">考试时间：2022年6月28日</span>
          </div>
          <div class="contain">
            <div class="score">
              <div>
                <span>得分</span>
                <span></span>
                <p>
                  <span class="btn">可批改</span>
                </p>
              </div>
              <div>
                <span>任务完成度</span>
                <span>36</span>
                <p>
                  <span class="btn">可批改</span>
                </p>
              </div>
              <div>
                <span>语法</span>
                <span></span>
                <p>
                  <span class="btn">可批改</span>
                </p>
              </div>
              <div>
                <span>词汇量</span>
                <span></span>
                <p>
                  <span class="btn">可批改</span>
                </p>
              </div>
              <div>
                <span>文章组织结构</span>
                <span></span>
                <p>
                  <span class="btn">可批改</span>
                </p>
              </div>
              <div>
                <span>用时</span>
                <span></span>
                <p>
                  <span class="btn">可批改</span>
                </p>
              </div>
            </div>
            <div class="operation">
              <div>查看解析</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 口语 -->
      <div class="speak" v-show="individualPracticeIndex == 5">
        <div class="item" v-for="item in 5" :key="item">
          <div class="title">
            <span class="name">LanguageCert C1 practice 1 Speaking_part 2</span>
            <span class="date">考试时间：2022年6月28日</span>
          </div>
          <div class="contain">
            <div class="score">
              <div>
                <span>得分</span>
                <span></span>
                <p>
                  <span class="btn">可批改</span>
                </p>
              </div>
              <div>
                <span>任务完成度</span>
                <span>36</span>
                <p>
                  <!-- <span class="btn">可批改</span> -->
                </p>
              </div>
              <div>
                <span>语法</span>
                <span></span>
                <p>
                  <span class="btn">可批改</span>
                </p>
              </div>
              <div>
                <span>词汇量</span>
                <span></span>
                <p>
                  <span class="btn">可批改</span>
                </p>
              </div>
              <div>
                <span>文章组织结构</span>
                <span></span>
                <p>
                  <span class="btn">可批改</span>
                </p>
              </div>
              <div>
                <span>用时</span>
                <span></span>
                <p>
                  <span class="btn">可批改</span>
                </p>
              </div>
            </div>
            <div class="operation">
              <div>查看解析</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 批改权益 -->
    <div class="main3 fl clearfix" v-show="sidebarIndex == 3">
      <div v-if="true">
        <div class="img" v-for="item in 6" :key="item">
          <img src="@/assets/image/personcenter/quanyi.png" alt="" />
          <div class="dsc">
            <div class="title">口语批改券</div>
            <span @click="dialogVisible1 = true">点击使用</span>
            <p class="remain">剩余 5 张</p>
          </div>
        </div>
      </div>
      <div v-else-if="false" class="no_vouchers">
        <div style="width: 100%">
          <Coupons v-for="item in 3" :key="item" />
        </div>
        <p>
          当前未购批改次数，点击<span @click="dialogVisible3 = true" style="color: #029dfe; cursor: pointer"
            >购买权益</span
          >
          ,可叠加上述优惠券使用
        </p>
      </div>
      <div v-else class="no_p_y">
        <p>
          当前未购批改次数，点击<span @click="dialogVisible3 = true" style="color: #029dfe; cursor: pointer"
            >购买权益</span
          >
        </p>
      </div>
    </div>
    <el-dialog class="is_use" :visible.sync="dialogVisible2" width="26%" center>
      <span>使用批改券批改当前内容</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible2 = false">确认</el-button>
      </span>
    </el-dialog>
    <el-dialog
      class="list_dialog"
      title="可批改练习如下，选择需要批改内容"
      :visible.sync="dialogVisible1"
      width="54%"
      center
    >
      <div class="item" v-for="item in 5" :key="item">
        <div class="title">
          <span class="name">LanguageCert C1 practice 1 listening_part 2</span>
          <span class="date">考试时间：2022年6月28日</span>
        </div>
        <div class="contain">
          <div class="score">
            <div>
              <span>正确率</span>
              <span></span>
            </div>
            <div>
              <span>题数</span>
              <span>36</span>
            </div>
            <div>
              <span>答对</span>
              <span></span>
            </div>
            <div>
              <span>用时</span>
              <span></span>
            </div>
          </div>
          <div class="operation">
            <div @click="useCoupons()">使用批改</div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="text" @click="dialogVisible1 = false">取 消</el-button>
      </span>
    </el-dialog>
    <el-dialog class="buy_dialog" :visible.sync="dialogVisible3" width="955" :show-close="true">
      <div class="left fl">
        <div class="open">
          <p class="title">购买XX批改解锁名师反馈</p>
          <div class="member_list">
            <div>
              <div class="top">口语批改</div>
              <div class="bottom">
                <div class="round">单次</div>
                <span>￥XXX</span>
              </div>
            </div>
            <div>
              <div class="top">写作批改</div>
              <div class="bottom">
                <div class="round">单次</div>
                <s>￥XXX</s>
                <span>￥XXX</span>
              </div>
            </div>
          </div>
          <button @click=";(dialogVisible3 = false), (dialogVisible4 = true)">同意协议并支付</button>
        </div>
        <p>开通前请阅读《栗子朗思XXXXX》</p>
      </div>
      <div class="coupons fr" v-if="false">
        <div class="coupons_list">
          <Coupons v-for="item in 4" :key="item">
            <template slot="mask">
              <div class="mask"></div>
            </template>
          </Coupons>
        </div>
        <p>选择优惠卷</p>
      </div>
      <div v-else class="fr no_yhq">当前没有可使用优惠券</div>
    </el-dialog>
    <el-dialog class="pay" :visible.sync="dialogVisible4" width="955" :show-close="true">
      <div class="header clearfix">
        <div class="img fl">
          <img src="@/assets/image/personcenter/circle.png" alt="" />
        </div>
        <img class="tire" src="@/assets/image/personcenter/tire.png" alt="" />
        <div class="info fl">
          <div class="uname">小栗子28783</div>
          <img src="@/assets/image/personcenter/vip.png" alt="" class="vip" />
        </div>
      </div>
      <div class="main">
        <div class="goods">
          <div class="tag"><span>使用优惠券后</span></div>
          <div class="goods_name">栗子朗思单次写作批改</div>
          <div class="pay_amount">￥2899</div>
        </div>
        <div class="form_payment">
          <div class="pay_je">
            <span>应付金额：</span>
            <span style="color: #fcc55e">2899元</span>
          </div>
          <div class="pay_code">
            <img src="" alt="" />
          </div>
          <div class="pay_btn">
            <button class="wx" @click="payBtnIndex = 1" :class="{ current: payBtnIndex == 1 }">微信支付</button>
            <button class="zfb" @click="payBtnIndex = 2" :class="{ current: payBtnIndex == 2 }">支付宝支付</button>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Coupons from '@/components/personCenter/Coupons.vue'
export default {
  data() {
    return {
      sidebarIndex: 1,
      individualPracticeIndex: 1,
      dialogVisible2: false,
      dialogVisible1: false,
      dialogVisible3: false,
      dialogVisible4: false,
      payBtnIndex: 1
    }
  },
  components: {
    Coupons
  },
  methods: {
    // 侧边栏
    sideChange(index) {
      this.sidebarIndex = index
    },
    // 单项练习
    individualPracticeChange(index) {
      this.individualPracticeIndex = index
    },
    // 使用批改券
    useCoupons() {
      this.dialogVisible2 = true
    }
  }
}
</script>
<style lang="less" scoped>
.sidebar {
  width: 1.625rem;
  background: #f8fbfe;
  border-radius: 0.3125rem 0rem 0rem 0.3125rem;
  padding: 0.375rem 0;
  li {
    margin: 0.625rem 0;
    width: 100%;
    text-align: center;
    font-size: 0.25rem;
    color: #858585;
    letter-spacing: 1px;
    cursor: pointer;
  }
}
.list_item_con {
  width: 11.5rem;
  height: 1.65rem;
  background: #ffffff;
  border-radius: 0.1rem;
  box-shadow: 0 0.0375rem 0.075rem0 #e2f1ff;
  margin-top: 0.4125rem;
  .title {
    width: 11.5rem;
    height: 0.525rem;
    background: #f1f8ff;
    border-radius: 0.1rem 0.1rem 0rem 0rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.25rem;
    box-sizing: border-box;
    .name {
      font-size: 0.25rem;
      color: #2058a8;
      line-height: 0.275rem;
      letter-spacing: 0.2px;
    }
    .date {
      font-size: 0.2rem;
      color: #868686;
      letter-spacing: 0.8px;
    }
  }
  .contain {
    display: flex;
    height: 1.125rem;
    .score {
      flex: 8.2;
      height: 100%;
      display: flex;
      text-align: center;
      div {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 0.15rem 0 0.1rem;
        justify-content: space-between;
        font-size: 0.175rem;
        color: #686868;
        .btn {
          height: 0.275rem;
          line-height: 0.275rem;
          padding: 0.05rem 0.1rem;
          border-radius: 0.125rem;
          font-size: 0.175rem;
          color: #ffffff;
          background-image: linear-gradient(#fec082, #ff9a38);
        }
      }
    }
    .operation {
      flex: 1.8;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: 0.175rem;
      text-align: center;
      align-items: center;
      div {
        cursor: pointer;
        width: 1.025rem;
        height: 0.275rem;
        color: #ff9900;
        background: #ffffff;
        border: 1.5px solid #ff9900;
        border-radius: 0.1563rem;
        box-shadow: 1px 1px 0.0375rem0 rgba(255, 128, 66, 0.25);
      }
    }
  }
}
.main1 {
  padding: 0 0.275rem 0.375rem;
  box-sizing: border-box;
  background-color: #fff;
  .item {
    .list_item_con();
    .operation {
      div:last-child {
        width: 1.025rem;
        height: 0.275rem;
        background: #ffffff;
        border: 1.5px solid #2058a8;
        color: #2058a8;
        border-radius: 0.1563rem;
        box-shadow: 1px 1px 0.0375rem0 rgba(54, 108, 185, 0.2);
      }
    }
  }
}
.main2 {
  padding: 0 0.275rem 0.375rem;
  width: 12.075rem;
  box-sizing: border-box;
  background-color: #fff;
  .tab {
    width: 100%;
    height: 0.65rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #ecf4fc;
    li {
      font-size: 0.225rem;
      color: #b2b2b2;
      letter-spacing: 0.9px;
      cursor: pointer;
    }
  }
  .listen,
  .read {
    .item {
      .list_item_con();
      height: 1.4rem;
      .contain {
        height: 0.875rem;
      }
    }
  }
  .speak,
  .write {
    .item {
      .list_item_con();
      .operation {
        div:last-child {
          width: 1.025rem;
          height: 0.275rem;
          background: #ffffff;
          border: 1.5px solid #2058a8;
          color: #2058a8;
          border-radius: 0.1563rem;
          box-shadow: 1px 1px 0.0375rem0 rgba(54, 108, 185, 0.2);
        }
      }
    }
  }
}
.main3 {
  & > div {
    background-color: #fff;
    width: 12.075rem;
    box-sizing: border-box;
    padding: 0.5625rem 0.525rem;
    display: flex;
    flex-wrap: wrap;
    .img {
      width: 3.275rem;
      height: 1.7875rem;
      position: relative;
      margin-bottom: 0.375rem;
      &:nth-child(3n -1) {
        margin: 0 0.6rem;
      }
      .dsc {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        .title {
          font-size: 0.275rem;
          font-weight: 500;
          color: #4f87e6;
          letter-spacing: 0.0138rem;
          margin: 0.35rem 0 0.275rem;
        }
        span {
          font-size: 0.2rem;
          color: #4f87e6;
          letter-spacing: 0.01rem;
          cursor: pointer;
        }
        p {
          font-size: 0.175rem;
          font-weight: 300;
          color: #b2b2b2;
        }
      }
    }
  }
  .no_vouchers {
    text-align: center;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    /deep/ .item {
      float: left;
      margin-left: 0.8rem;
    }
    .img {
      width: 2.4625rem;
      height: 2.4625rem;
    }
    p {
      font-size: 0.225rem;
      color: #b2b2b2;
      letter-spacing: 0.0112rem;
    }
  }
}
.list_dialog {
  /deep/ .el-dialog__header {
    padding-top: 0.625rem;
    span {
      font-size: 0.35rem;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      color: #245498;
      letter-spacing: 0.0175rem;
    }
  }
  /deep/ .el-dialog__body {
    max-height: 7.25rem;
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
      background-color: #91d5ff;
      border-radius: 0.0625rem;
    }
    // 滚动条轨道
    &::-webkit-scrollbar-track {
      width: 0.125rem;
    }
    // 滚动条没有滑块的轨道部分
    &::-webkit-scrollbar-track-piece {
      background-color: #f1f1f1;
    }
  }
  /deep/ .el-dialog--center {
    border-radius: 0.175rem;
  }
  .item {
    margin: 0 auto;
    .list_item_con();
    height: 1.4rem;
    .contain {
      height: 0.875rem;
    }
    .operation div {
      background-color: #3cc700 !important;
      color: #fff !important;
      border: none !important;
      box-shadow: 0 0 0 0 transparent !important;
    }
  }
  /deep/ .el-dialog__footer {
    text-align: right !important;
    span {
      font-size: 0.275rem;
    }
  }
}
.is_use {
  /deep/ .el-dialog--center {
    border-radius: 0.175rem;
  }
  /deep/ .el-dialog__body {
    text-align: center;
    span {
      font-size: 0.325rem;
      font-family: Source Han Sans CN, Source Han Sans CN-Normal;
      color: #245498;
      letter-spacing: 1.3px;
    }
  }
  /deep/ .el-dialog__footer {
    .el-button {
      border-radius: 0.125rem;
    }
  }
}
/deep/ .buy_dialog {
  .el-dialog {
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
            position: relative;
            border-radius: 0 0 0.3125rem 0.3125rem;
            .round {
              position: absolute;
              right: -0.475rem;
              bottom: -0.2375rem;
              width: 0.8375rem;
              height: 0.4625rem;
              background: #6fcaff;
              border-radius: 0.1875rem;
              font-size: 0.2375rem;
              text-align: center;
              color: #ffffff;
              line-height: 0.4625rem;
            }
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
    .no_yhq {
      margin: 2.5rem 1.25rem 0 0;
      text-align: center;
      font-size: 0.3rem;
      color: #4f709f;
    }
  }
}

.no_p_y {
  height: 6.125rem;
  align-content: center;
  align-items: center;
  font-size: 0.225rem;
  p {
    flex: 1;
    text-align: center;
  }
}
/deep/ .pay {
  .el-dialog {
    height: auto;
    background-color: #fff;
  }
  .el-dialog__header {
    padding: 0;
  }
  .el-dialog__body {
    padding: 0.4rem 0.5rem;
    margin: 0;
  }
  .header {
    position: relative;
    .img {
      width: 0.775rem;
      height: 0.775rem;
      border-radius: 50%;
      margin-right: 0.325rem;
    }
    .tire {
      position: absolute;
      top: -0.35rem;
      left: -0.175rem;
      width: 0.7625rem;
      height: 0.65rem;
    }
    .vip {
      width: 0.65rem;
      height: 0.3125rem;
    }
    .uname {
      font-size: 0.3rem;
      font-family: Source Han Sans CN, Source Han Sans CN-Medium;
      font-weight: 500;
      color: #36537c;
      line-height: 0.3375rem;
      margin-bottom: 0.125rem;
    }
  }
  .main {
    margin-top: 0.575rem;
    .goods {
      display: flex;
      justify-content: space-around;
      width: 100%;
      height: 1.525rem;
      line-height: 1.525rem;
      font-size: 0.35rem;
      border: 0.025rem solid #d4a934;
      border-radius: 0.1rem;
      position: relative;
      .tag {
        position: absolute;
        top: -0.225rem;
        right: -0.25rem;
        width: 1.8125rem;
        height: 0.45rem;
        line-height: 0.45rem;
        text-align: center;
        background: #ffae26;
        border-radius: 0.1875rem;
        font-size: 0.225rem;
        color: #ffffff;
        z-index: 1;
      }
      .goods_name {
        color: #5f5f5f;
      }
      .pay_amount {
        color: #ffae26;
      }
    }
    .form_payment {
      margin-top: 0.3375rem;
      width: 100%;
      display: flex;
      justify-content: space-around;
      height: 3.3625rem;
      line-height: 3.3625rem;
      background: #ffffff;
      border: 0.0125rem dashed #b7b7b7;
      border-radius: 0.1875rem;
      .pay_je {
        color: #8f8f8f;
        font-size: 0.3rem;
      }
      .pay_code {
        display: flex;
        height: 100%;
        align-items: center;
      }
      img {
        width: 2.35rem;
        height: 2.35rem;
      }
      .pay_btn {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        button {
          display: block;
          width: 2.4375rem;
          height: 0.625rem;
          background: #b7b7b7;
          border-radius: 0.3125rem;
          font-size: 0.3rem;
          color: #ffffff;
        }
        .wx {
          margin-bottom: 0.45rem;
        }
        .wx.current {
          background-color: #47cd4b;
        }
        .zfb.current {
          background-color: #619ff2;
        }
      }
    }
  }
}
</style>