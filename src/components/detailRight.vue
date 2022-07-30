<template>
  <div>
    <div class="title">朗思名师</div>
    <div
      class="info"
      v-for="(items,indexs) in info.infoList"
      :key="indexs"
    >
      <div class="clearfix">
        <slot :name="'userImg'+indexs"></slot>
        <div class="infos">
          <p class="name">{{items.uname}}</p>
          <p class="zhu">{{items.speaker}}</p>
        </div>
      </div>
      <div class="dsc">
        <p
          v-for="(item,index) in items.userDsc"
          :key="index"
        >{{item}}</p>
      </div>
    </div>
    <div class="course">
      <div class="tit">相关课程</div>
      <div class="imgs">
        <div
          class="img"
          v-if="info.imgs.img1"
        >
          <img
            :src="info.imgs.img1"
            alt=""
            @click="startTest($event,info.routerpush.push1)"
          >
        </div>
        <div
          class="img"
          v-if="info.imgs.img2"
        >
          <img
            :src="info.imgs.img2"
            alt=""
            @click="startTest($event,info.routerpush.push2)"
          >
        </div>
        <div
          class="img"
          v-if="info.imgs.img3"
        >
          <img
            :src="info.imgs.img3"
            alt=""
            @click="startTest($event,info.routerpush.push3)"
          >
        </div>
        <div
          class="img"
          v-if="info.imgs.img4"
        >
          <img
            :src="info.imgs.img4"
            alt=""
            @click="startTest($event,info.routerpush.push4)"
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['info'],
  methods: {
    startTest(event, path) {
      if (path) {
        return this.$router.push(path)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.title {
  font-size: 0.525rem;
  font-weight: bold;
  color: #434a54;
  margin-bottom: 0.65rem;
}
.info {
  overflow: hidden;
}
.infos {
  float: left;
  text-align: center;
  color: #434a54;
  font-weight: bold;
  margin-top: 1.5625rem;
}
.name {
  font-size: 0.55rem;
}
.zhu {
  font-size: 0.35rem;
}
.dsc {
  width: 6.3rem;
  background: #fafbfc;
  border-radius: 0.1875rem;
  font-size: 0.25rem;
  font-weight: 400;
  line-height: 0.4375rem;
  color: #434a54;
  padding: 0.525rem 0.275rem;
  box-sizing: border-box;
  p {
    margin-bottom: 0.25rem;
  }
}
.course {
  margin-top: 1.2125rem;
  .tit {
    font-size: 0.525rem;
    font-weight: bold;
    color: #434a54;
  }
  .imgs {
    margin-top: 0.2rem;
    width: 6.8625rem;
    .img {
      width: 6.8625rem;
      height: 3.45rem;
      cursor: pointer;
    }
  }
}
</style>