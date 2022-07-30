<template>
  <div class="item">
    <div class="title">
      <div class="circle"></div>
      <div class="line">
        <p>
          <span class="serialNumber">{{ index + 1 }}.</span> {{ info.title }} <slot name="title"></slot>
        </p>
      </div>
    </div>
    <div class="contain">
      <div class="tit">{{ info.tit }}</div>
      <p v-for="(item, indexs) in info.contain" :key="indexs" v-html="item"></p>
      <slot name="sentiment"></slot>
    </div>
    <slot name="evaluation"></slot>
    <slot name="curriculum"></slot>
    <slot name="why_select"></slot>
  </div>
</template>
<script>
export default {
  props: {
    info: Object,
    index: Number
  }
}
</script>
<style lang="less" scoped>
.title {
  position: relative;
  height: 1.1rem;
  margin-bottom: 0.675rem;
  .circle {
    position: absolute;
    z-index: 1;
    width: 1.1rem;
    height: 1.1rem;
    background: #ffa277;
    border-radius: 50%;
  }
  .line {
    position: absolute;
    top: 0.775rem;
    left: 0.55rem;
    min-width: 2.875rem;
    width: auto;
    height: 0.325rem;
    background: #ffd6d7;
    border-radius: 0.1rem;
    padding-right: 0.25rem;
  }
  p {
    position: relative;
    z-index: 1;
    left: 0.075rem;
    top: -0.3125rem;
    font-size: 0.4375rem;
    font-weight: 700;
    color: #000000;
  }
}
.contain {
  margin-left: 0.5375rem;
  .tit {
    font-size: 0.525rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #ff5300;
    margin-bottom: 0.375rem;
  }
  p {
    width: 11.8125rem;
    color: #4f4f4f;
    line-height: 0.525rem;
    font-size: 0.35rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    margin-bottom: 0.8rem;
  }
}
</style>