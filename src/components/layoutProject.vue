<template>
    <div class="item">
        <div class="title">{{ project.title }}</div>
        <p>{{ project.contain }}</p>
        <button @click="jump">查看详情</button>
    </div>
</template>
<script>
export default {
    props: ['project'],
    methods: {
        jump() {
        this.$emit('startTest')
        }
    }
}
</script>
<style lang="less" scoped>
.item {
    width: 6.1125rem;
    height: 3.5rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0rem 0.0375rem 0.1875rem rgba(16, 38, 128, 0.16);
    border-radius: 0.1875rem;
    .title {
        width: 6.1125rem;
        height: 0.8375rem;
        box-shadow: 0rem 0.0375rem 0.075rem rgba(5, 38, 93, 0.16);
        font-size: 0.4375rem;
        font-weight: bold;
        line-height: 0.8375rem;
        color: #05265d;
    }
    p {
        width: 3.75rem;
        margin: 0.4rem auto;
        font-size: 0.35rem;
        font-weight: 400;
        line-height: 0.625rem;
        color: #05265d;
    }
    button {
        display: block;
        margin-bottom: 0;
        margin: 0 auto 0 auto;
        width: 3.3625rem;
        height: 0.625rem;
        background: rgba(79, 135, 230, 1);
        box-shadow: 0rem 0.0375rem 0.075rem rgba(5, 38, 93, 0.25);
        border-radius: 0.1875rem 0.1875rem 0rem 0rem;
        font-size: 0.375rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
    }
}
</style>