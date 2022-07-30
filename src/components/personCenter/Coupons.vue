<template>
  <div class="item">
    <slot name="mask"></slot>
    <img src="@/assets/image/personcenter/youhuiquan_y.png" alt="" />
    <div class="dsc">
      <div class="title clearfix">
        <div class="img fl">
          <img src="@/assets/image/personcenter/head/head1.png" alt="" />
        </div>
        <div class="name fl">满200-20</div>
      </div>
      <p>仅适用于XXXXXXXXXX XXXXXXXXXXXX</p>
    </div>
    <div class="right"><p>满200-20</p></div>
  </div>
</template>
<style lang="less" scoped>
.item {
  width: 4.3rem;
  height: 2.4125rem;
  position: relative;
  margin-left: 18px;
  .dsc {
    position: absolute;
    top: 0.0625rem;
    left: 0.15rem;
    width: 3.3rem;
    height: 1.925rem;
    padding: 0.25rem;
    box-sizing: border-box;
    .title {
      font-size: 0.35rem;
      font-weight: 700;
      text-align: center;
      height: 0.7125rem;
      line-height: 0.7125rem;
      color: #7594ea;
      letter-spacing: 0.0175rem;
      .img {
        width: 0.7125rem;
        height: 0.7125rem;
        margin-right: 0.475rem;
        vertical-align: baseline;
      }
    }
    p {
      width: 2.075rem;
      font-size: 0.2rem;
      color: #8f8f8f;
      text-align: right;
      margin-top: 0.175rem;
      margin-left: 0.625rem;
    }
  }
  .right {
    height: 0.7rem;
    width: 1.925rem;
    position: absolute;
    top: 0.675rem;
    right: -0.5rem;
    font-size: 0.3rem;
    font-weight: 700;
    text-align: center;
    color: #ffffff;
    letter-spacing: 0.015rem;
    transform: rotate(90deg);
    text-align: center;
    line-height: 0.7rem;
    p {
    }
  }
}
</style>