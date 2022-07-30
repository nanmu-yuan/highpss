<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
#app {
  @media screen and (max-width: 1280px) {
    width: 100vw;
  }
}
</style>

