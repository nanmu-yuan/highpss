<template>
  <div>
    <div class="pre_next">
      <button
        class="fr"
        @click="next"
        v-show="id!=10"
        style="margin-left:.25rem"
      > Next </button>
      <button
        class="fr"
        @click="pre"
        v-show="id!=1"
      > Previous </button>

    </div>
    <div class="prompt">
      <div class="prompt_head fl"> </div>
      <div class="prompt_contain fl">
        <slot>You will hear some conversations.You will hear each conversation twice.Choose the correct answers for each conversation.</slot>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      // 音量
      value: 40,
      // 是否播放
      flag: false,
      // 是否静音
      is_muted: false,
      duration: '',
      audioValue: 0,
      timer: '',
      id: 1,
      progress: 0,
      // 路由
      routes: [
        {
          path: 'listen_part1'
        },
        {
          path: 'listen_part2'
        },
        {
          path: 'listen_part3'
        },
        {
          path: 'listen_part4'
        },
        {
          path: 'read_part1'
        },
        {
          path: 'read_part2'
        },
        {
          path: 'read_part3'
        },
        {
          path: 'read_part4'
        },
        {
          path: 'write_part1'
        },
        {
          path: 'write_part2'
        }
      ]
    }
  },
  mounted() {
    this.id = sessionStorage.getItem('id') - 0
  },
  destroyed() {},
  methods: {
    pre() {
      if (this.id <= 1) return
      this.$router.push({ path: this.routes[this.id - 2].path })
    },
    next() {
      if (this.id >= 10) return
      this.$router.push({ path: this.routes[this.id].path })
    }
  }
}
</script>
<style lang = "less" scoped>
.pre_next {
  float: right;
  margin: 0.2rem 0 0 0;
  width: 3.5rem;
  margin-bottom: 0.3125rem;
  button {
    width: 1.375rem;
    height: 0.4125rem;
    font-size: 0.25rem;
    background-color: #4f87e6;
    border-radius: 0.0625rem;
    color: #ffffff;
  }
}
.prompt {
  width: 100%;
  min-height: 0.5rem;
  margin: 0.3125rem auto;
  border-radius: 0.1rem;
  overflow: hidden;
  display: flex;
  .prompt_head {
    flex: 2;
    min-height: 0.5rem;
    background-color: #7c7c7c;
  }
  .prompt_contain {
    flex: 18;
    display: flex;
    align-items: center;
    min-height: 0.5rem;
    font-size: 0.25rem;
    color: #484848;
    padding: 0.1rem 0.25rem;
    background-color: #f5f5f5;
  }
}
</style>
