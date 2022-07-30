<template>
  <div class="prediaright">
    <div class="predia_list" >
      <h2>考生再看</h2>
      <p
        v-for="(item, i) in info.list1"
        :key="i"
        @mouseenter="showClass1(i)"
        @mouseleave="hideClass1(i)"
        @click="insurance(item.id)"
        
      >
      <!-- :class="i == 1 ? 'icon-wenhao' : 'icon-tuwenxiangqing'" -->
        <span class="iconfont icon-wenhao" ></span>
        <span :class="isActive1 == i ? 'act' : ''">{{ item.title }}</span>
      </p>
    </div>
    <div class="predia_list" >
      <h2>热门内容</h2>
      <p
        v-for="(item, i) in info.list2"
        :key="i"
        @mouseenter="showClass2(i)"
        @mouseleave="hideClass2(i)"
        @click="insurance(item.id)"
      >
      <!-- :class="i == 1 ? 'icon-wenhao' : 'icon-tuwenxiangqing'" -->
        <span class="iconfont icon-tuwenxiangqing" ></span>
        <span :class="isActive2 == i ? 'act' : ''">{{ item.title }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['info'],
  data() {
    return {
      isActive1: -1,
      isActive2: -1,
    }
  },
  methods: {
    showClass1(i) {
      this.isActive1 = i
    },
    hideClass1(i) {
      this.isActive1 = i
    },
    showClass2(i) {
      this.isActive2 = i
    },
    hideClass2(i) {
      this.isActive2 = i
    },
    // 内容跳转
    insurance(id) {
      console.log(id)
      this.$router.push({ path: 'langsiCommondetails', query: { id } })
    },
  }
}
</script>

<style lang="less" scoped>
.prediaright {
  width: 100%;
  .predia_list {
    background: #ffffff;
    border-radius: 0.1rem;
    box-shadow: 0px 3px 0.075rem 0px #e6f3ff;
    padding: 0.275rem 0.275rem;
    padding-bottom: 0.4rem;
    margin-bottom: 0.1875rem;
    h2 {
      font-size: 0.225rem;
      font-weight: 400;
      color: #202020;
      margin-bottom: 0.25rem;
    }
    p {
      display: flex;
      align-items: center;
      padding: 0.175rem 0;
      border-bottom: 0.0125rem dashed #e3e8f0;
      .iconfont {
        color: #9bb5d9;
        flex: 2;
      }
      span {
        flex: 18;
        width: 3.05rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 0.2rem;
        color: #202020;
        cursor: pointer;
      }
      .act {
        color: #4f87e6;
      }
    }
  }
}
</style>