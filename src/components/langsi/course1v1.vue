<template>
    <div class="course_box">
    <ul class="list">
    <li v-for="(item, index) in info.list_li" :key="index" :class="vShow == index ? 'active' : ''"
        @click="vShow = index">
        {{ item.text }}
    </li>
    </ul>
    <div class="tab">
    <div>
        <div class="tab_cont1 tab_cont" v-for="(item, index) in info.cont_zj" :key="index" v-show="vShow == 0">
        <!-- 内容区 -->
        </div>
    </div>
    <div>
        <div class="tab_cont tab_cont2" v-show="vShow == 1" v-for="(item, index) in info.tab_cont2" :key="index">
        <div class="tab_cont2_box1">
            <h2>{{ item.tit1 }}</h2>
            <p>{{ item.text1 }}</p>
            <p>{{ item.text2 }}</p>
        </div>
        <div>
            <div class="tab_cont2_box2" v-for="(item, index) in item.tab_cont2list" :key="index">
            <h2>{{ item.tit2 }}</h2>
            <div class="box2_list" v-for="(item, i) in item.box2_list" :key="i">
                <div class="box2_listleft">
                <i v-show="item.iShow"></i>
                <span v-show="item.spanShow"></span>
                </div>
                <div class="box2_listright">
                <p>{{ item.text1 }}</p>
                <p>{{ item.text2 }}</p>
                </div>
            </div>
            </div>
        </div>
        <div class="tab_cont2_btn" @click="startTest($event, item.push)">更多服务内容</div>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
export default {
    props: ['info'],
    data() {
    return {
        type: '',
        vShow: 0,
        isShow: false,
        trShow: true,
        isActive: 0,
        n: 0
    }
    },
    created() {
    this.type = this.info.cousetype
    console.log(this.type)
    },
    methods: {
    showClass(index, i) {
        this.isActive = index
        this.n = i
    },
    hideClass(index, i) {
        this.isActive = index
        this.n = i
    },
    costextPush(index, i, id, type) {
        let token = localStorage.getItem('token')
        if (token) {
        //执行内容
        return this.$router.push({ path: '/video', query: { id, type } })
        this.isActive = index
        this.n = i
        if (this.isActive == index && this.n == i) {
            if (path) {
            return this.$router.push(path)
            }
        }
        } else {
        this.$message({
            type: 'warning',
            message: '您还未进行登录，请先登录才可以学习内容！'
        })
        }
    },
    startTest(event, path) {
        if (path) {
        return this.$router.push(path)
        }
    },
    }
}
</script>

<style lang="less" scoped>
.course_box {
    .list {
    width: 11.1rem;
    display: flex;
    justify-content: center;

    li {
        width: 50%;
        height: 0.525rem;
        border-radius: 0.0375rem 0.0375rem 0px 0px;
        font-size: 0.25rem;
        color: #777777;
        text-align: center;
        line-height: 0.525rem;
        background: #f8fafd;
    }

    .active {
        background: #4f87e6;
        color: #ffffff;
    }
    }

    .tab {
    width: 11.1rem;
    border: 0.025rem solid #e9f4ff;
    border-top: none;
    padding: 0 0.45rem;
    box-sizing: border-box;
    box-shadow: 0 0 0.1125rem #c7e6ff;

    .tab_cont {
        h2 {
        font-size: 0.25rem;
        color: #333333;
        margin-bottom: 0.225rem;

        p {
            font-size: 0.2rem;
            color: #868686;
            font-weight: 400;
        }
        }

        .costext:last-child {
        margin-bottom: 0.3875rem;
        border: none;
        }

        .act {
        background: #e6f3ff;
        }

        .costext:first-child {
        border-bottom: none;
        border-top: none;
        }

        .costext {
        border-bottom: 0.0125rem solid #e6f3ff;
        // border-top: .0125rem dashed #e6f3ff;
        cursor: pointer;
        width: 9.4125rem;
        height: 0.375rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 0.35rem;
        box-sizing: border-box;

        div {
            display: flex;
            align-items: center;
            height: 100%;

            img {
            width: 0.375rem;
            height: 0.375rem;
            margin-left: -0.125rem;
            margin-right: 0.2rem;
            }

            span {
            width: 0.5rem;
            margin-right: 0.55rem;
            text-align: center;
            }

            p {
            font-size: 0.2rem;
            color: #202020;
            }
        }

        .btn {
            width: 1.25rem;
            height: 0.375rem;
            font-size: 0.225rem;
            line-height: 0.375rem;
            justify-content: center;
            display: flex;
            color: #ff4600;
        }

        .btn2 {
            color: #4f87e6;
        }
        }
    }

    .tab_cont1 {
        padding-top: 0.3625rem;

        .costext2 {
        width: 10.0125rem;
        background: #ffffff;
        border: 0.0125rem solid #e6f3ff;
        padding: 0 0.4rem;
        padding-top: 0.375rem;
        box-sizing: border-box;
        margin-bottom: 0.85rem;

        h2 {
            font-size: 0.3rem;
            font-weight: bold;
            color: #4374b9;
            margin-bottom: 0.3375rem;
        }

        p {
            font-size: 0.225rem;
            color: #051123;
            line-height: 0.3375rem;
            margin-bottom: 0.6125rem;
        }
        }
    }

    .tab_cont2 {
        padding-top: 1.075rem;

        .tab_cont2_box1 {
        width: 10.0125rem;
        background: #ffffff;
        border: 0.0125rem solid #e6f3ff;
        padding: 0 0.4rem;
        padding-top: 0.375rem;
        box-sizing: border-box;
        margin-bottom: 0.85rem;

        h2 {
            font-size: 0.3rem;
            font-weight: bold;
            color: #4374b9;
            margin-bottom: 0.3375rem;
        }

        p {
            font-size: 0.225rem;
            color: #051123;
            line-height: 0.3375rem;
            margin-bottom: 0.6125rem;
        }
        }

        .tab_cont2_box2 {
        padding: 0 0.4rem;
        margin-bottom: 0.7875rem;

        h2 {
            font-size: 0.3rem;
            font-weight: bold;
            color: #4374b9;
            margin-bottom: 0.425rem;
        }

        .box2_list {
            display: flex;

            .box2_listleft {
            position: relative;
            top: 0.0625rem;
            width: 0.1875rem;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;

            i {
                width: 0.1875rem;
                height: 0.1875rem;
                background: #e6f3ff;
                border-radius: 50%;
                display: block;
            }

            span {
                display: block;
                width: 2px;
                height: 1.275rem;
                background: #e6f3ff;
            }
            }

            .box2_listright {
            padding-left: 0.25rem;

            p:nth-child(1) {
                font-size: 0.225rem;
                margin-bottom: 0.0875rem;
                color: #051123;
            }

            p:nth-child(2) {
                font-size: 0.175rem;
                color: #777777;
            }
            }
        }
        }

        .tab_cont2_btn {
        margin: 1.1rem auto 1.125rem;
        width: 3.7125rem;
        height: 0.7125rem;
        background: #4f87e6;
        border-radius: 0.3125rem;
        font-size: 0.25rem;
        color: #ffffff;
        text-align: center;
        line-height: 0.7125rem;
        cursor: pointer;
        }
    }
    }
}
</style>