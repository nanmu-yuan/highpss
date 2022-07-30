<template>
  <div class="yhq clearfix">
    <Coupons v-for="item in 6" :key="item" />
  </div>
</template>
<script>
import Coupons from '@/components/personCenter/Coupons.vue'
export default {
  components: {
    Coupons
  }
}
</script>
<style lang="less" scoped>
.yhq {
  background-color: #fff;
  min-height: 490px;
  padding-top: 20px;
}
/deep/ .item {
  float: left;
}
</style>