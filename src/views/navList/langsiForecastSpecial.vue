<template>
    <div class="box">
        <div class="hader">
        <img src="@/assets/image/langsi/yucebannder.png" alt="" />
        <p class="bannder_text1">朗思写作遇到瓶颈？栗⼦朗思名师为你⽀招！</p>
        <h2>朗思全科预测</h2>
        <div class="pic">
            <p>课程价格：<span>￥2688 </span>/</p>
            <p>原价：<span>￥5688</span></p>
        </div>
        <div class="bannder_btn" @click="open">咨询课程详情</div>
        </div>
        <div class="cont">
        <div class="cnt_nav" :class="{ tab_nav: isSticky }">
            <div class="nav_list" v-for="(item, index) in nav_list" :key="index">
            <p @click="tabChange(index)" style="cursor: pointer" :style="{ color: num == index ? '#4F87E6' : '' }">
                {{ item.text }}
            </p>
            <span v-show="num == index"></span>
            </div>
        </div>
        <div class="cnt_box1">
            <h2 class="title">
            <span>LIZI languageCert</span>
            <p>栗子朗思 值得信赖</p>
            </h2>
            <div class="cnt_box1tab">
            <div class="box1tab_list" v-for="(item, index) in box1tab_list" :key="index">
                <span>
                <img :src="item.icon" alt="" />
                </span>
                <div>
                <h3>{{ item.tite }}</h3>
                <p>{{ item.text }}</p>
                <p>{{ item.text2 }}</p>
                </div>
            </div>
            </div>
        </div>
        <!-- 批改服务 -->
        <div class="cnt_box2" >
            <div :style="{ background: `url(${xtbj}) no-repeat` }">
            <div class="title">
                <img src="@/assets/image/zhuanti/LIZI languageCert.png" alt="" />
                <h1>行业最新 预测内容</h1>
            </div>
            <ul>
                <li>
                    <i></i>
                    <div>
                        <img src="@/assets/image/langsi/yc1.png" alt="" />
                    </div>
                    <p class="small_tit">一次缴费 直至出分</p>
                </li>
                <li>
                    <i></i>
                    <div>
                        <img src="@/assets/image/langsi/yc2.png" alt="" />
                    </div>
                    <p class="small_tit">全科预测 答案解析</p>
                </li>
                <li>
                    <i></i>
                    <div>
                        <img src="@/assets/image/langsi/yc3.png" alt="" />
                    </div>
                    <p class="small_tit">极高命中率</p>
                </li>
                <li>
                    <i></i>
                    <div>
                        <img src="@/assets/image/langsi/yc4.png" alt="" />
                    </div>
                    <p class="small_tit">预测失败 报销考费</p>
                </li>
            </ul>
            </div>
        </div>
        <!-- 适合学员 -->
        <div class="cnt_box3">
            <div >
            <div class="title">
                <img src="@/assets/image/zhuanti/LIZI languageCert.png" alt="" />
                <h1>适合学员</h1>
            </div>
            <ul>
                <li>
                <div class="img">
                    <img src="@/assets/image/langsi/pcimg1.png" alt="" />
                </div>
                <p class="small_tit">朗思萌新</p>
                <p>英语基础水平</p>
                <p>雅思4.5-5.5</p>
                </li>
                <li>
                <div class="img">
                    <img src="@/assets/image/langsi/pcimg2.png" alt="" />
                </div>
                <p class="small_tit">学习目标</p>
                <p>朗思38+ high pass</p>
                <p></p>
                </li>
                <li>
                <div class="img">
                    <img src="@/assets/image/langsi/pcimg3.png" alt="" />
                </div>
                <p class="small_tit">学习周期</p>
                <p>小于一个月</p>
                <p></p>
                </li>
            </ul>
            </div>
        </div>
        <div class="cnt_box4">
            <div :style="{ background: `url(${xtbj2}) no-repeat` }">
                <div class="title">
                    <img src="@/assets/image/zhuanti/LIZI languageCert.png" alt="" />
                    <h1>模考系统 真题试练</h1>
                </div>
                <div class="pc_ti">
                    <img src="@/assets/image/langsi/pcti1.png" alt="">
                    <img src="@/assets/image/langsi/pcti2.png" alt="">
                    <img src="@/assets/image/langsi/pcti3.png" alt="">
                    <img src="@/assets/image/langsi/pcti4.png" alt="">
                    <img src="@/assets/image/langsi/pcti5.png" alt="">
                </div>
            </div>
        </div>
        <div class="cnt_box5">
            <div class="title">
                <img src="@/assets/image/zhuanti/LIZI languageCert.png" alt="" />
                <h1>与雅思相比朗思的优势</h1>
            </div>
            <img src="@/assets/image/langsi/yc_box5.png" class="img" alt="">
        </div>
        <!-- 口语成绩展示 -->
        <div class="cnt_box6">
            <div class="title">
            <img src="@/assets/image/zhuanti/LIZI languageCert.png" alt="" />
            <h1>考生成绩反馈</h1>
            </div>
            <ul>
            <li v-for="(item, index) in box6tab_list" :key="index">
                <img src="@/assets/image/langsi/ren.png" class="ren_zheng" alt="" />
                <img :src="item.imgUrl" alt="" />
            </li>
            </ul>
        </div>
        </div>
        <div class="codeDialog" v-show="dialog">
            <span class="iconfont icon-guanbi1" @click="closeDialog"></span>
            <img src="@/assets/image/code.png" alt="" />
            <p>关注公众号速抢名额！</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        num: 0,
        isSticky: false,
        offsetTop: 0,
        xtbj: require('@/assets/image/langsi/xtbj4.png'),
        xtbj2: require('@/assets/image/langsi/xtbj5.png'),
        dialog: false,
        nav_list: [
            { text: '项目亮点' },
            { text: '项目特色' },
            { text: '适合学员' },
            { text: '项目服务' },
            { text: '对比雅思' },
            { text: '成绩反馈' }
        ],
        box1tab_list: [
            {
            icon: require('@/assets/image/langsi/icon11.png'),
            tite: '精准预测 作文解析',
            text: '学生的命中反馈良好',
            text2: '高分范文+思路解析'
            },
            {
            icon: require('@/assets/image/langsi/icon12.png'),
            tite: '真实成绩 零失误率',
            text: '学生出分均达到需求分数',
            text2: ''
            },
            {
            icon: require('@/assets/image/langsi/icon13.png'),
            tite: '完整预测 一次出分',
            text: '听力阅读写作 笔试原题重现 一次购买 全部包含',
            text2: '新题预测 及时更新 出现失误 我们付款'
            },
            {
            icon: require('@/assets/image/langsi/icon14.png'),
            tite: '全程陪伴 完美售后',
            text: '全程无忧 静候出分 专业老师 答疑解惑',
            text2: ''
            }
        ],
        box6tab_list: [
            {
            imgUrl: require('@/assets/image/spoken_zhuanti/forecast1.png')
            },
            {
            imgUrl: require('@/assets/image/spoken_zhuanti/forecast2.png')
            },
            {
            imgUrl: require('@/assets/image/spoken_zhuanti/forecast3.png')
            },
            {
            imgUrl: require('@/assets/image/spoken_zhuanti/forecast4.png')
            },
            {
            imgUrl: require('@/assets/image/spoken_zhuanti/forecast5.png')
            },
            {
            imgUrl: require('@/assets/image/spoken_zhuanti/forecast6.png')
            }
        ]
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scroll)
        this.offsetTop = document.querySelector('.cont').offsetTop
    },
    methods: {
        // 获取每个模块距离页面顶部的距离
        getdistance() {
        let list = document.querySelectorAll('.cont>div')
        let lists = [...list]
        lists.splice(0, 1)
        const offsetTopArr = []
        lists.forEach((item) => {
            offsetTopArr.push(item.offsetTop)
        })
        return offsetTopArr
        },
        tabChange(index) {
        this.num = index
        const arr = this.getdistance()
        document.documentElement.scrollTop = arr[index] - 140
        },
        scroll() {
        // 获取滚动值
        let scroll_top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        const arr = this.getdistance()
        for (let i = 0; i < arr.length; i++) {
            if (scroll_top >= arr[i] - 200) {
            this.num = i
            }
        }
        // 控制台查看滚动值
        if (scroll_top > 110) {
            return (this.isSticky = true)
        }
        this.isSticky = false
        },
        open() {
            this.dialog = true
        },
        closeDialog() {
            this.dialog = false
        }
    }
}
</script>
<style lang="less" scoped>
.tab_nav {
    position: sticky;
    top: 1.375rem;
}
.box {
    .hader {
        height: 5.625rem;
        background: #e6f3ff;
        position: relative;
        img {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        }
        .pic {
        position: absolute;
        top: 2.825rem;
        left: 13.4625rem;
        display: flex;
        align-items: center;
        p:nth-child(1) {
            color: #F12A7E;
            font-size: 0.325rem;
            span {
            display: inline-block;
            font-weight: bold;
            font-size: 0.5rem;
            margin-right: 0.375rem;
            }
        }
        p:nth-child(2) {
            color: #000000;
            font-size: 0.325rem;
            padding-left: 0.375rem;
            span {
            text-decoration: line-through;
            }
        }
        }
        h2 {
        position: absolute;
        left: 13.4625rem;
        top: 1.55rem;
        font-weight: 700;
        font-size: 0.6rem;
        color: #0E679A;
        }
        .bannder_text1 {
        font-size: 0.25rem;
        position: absolute;
        top:.3625rem;
        left: 15.825rem;
        color: #006199;
        }
        .bannder_btn {
        position: absolute;
        top: 4.175rem;
        left: 13.4625rem;
        width: 3.375rem;
        height: 0.6rem;
        background: #0f8efc;
        border-radius: 0.3rem;
        font-size: 0.25rem;
        color: #ffffff;
        line-height: 0.6rem;
        text-align: center;
        cursor: pointer;
        }
    }
    .cont {
        .cnt_nav {
        height: 0.7375rem;
        background: #ffffff;
        z-index: 2;
        box-shadow: 0 0.0375rem 0.075rem 0 #e6f3ff;
        padding: 0 3.25rem;
        display: flex;
        align-items: center;
        .nav_list {
            width: 1rem;
            height: 100%;
            line-height: 0.7375rem;
            color: #051123;
            font-size: 0.25rem;
            margin-right: 0.825rem;
            position: relative;
            span {
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            height: 0.075rem;
            background: #4f87e6;
            border-radius: 0.0375rem 0.0375rem 0 0;
            display: block;
            }
        }
        .active {
            color: #4f87e6;
        }
        }
        .cnt_box1 {
        h2 {
            height: 1.3875rem;
            position: relative;
            margin-bottom: 0.875rem;
            span {
            width: 100%;
            position: absolute;
            top: 0.4rem;
            left: 0;
            text-align: center;
            display: block;
            font-size: 0.55rem;
            font-weight: 700;
            color: #e6f3ff;
            }
            p {
            width: 100%;
            text-align: center;
            position: absolute;
            bottom: 0;
            left: 0;
            font-size: 0.45rem;
            font-weight: 700;
            color: #3a466b;
            }
        }
        .cnt_box1tab {
            width: 17.5rem;
            display: flex;
            margin: 0 auto;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            .box1tab_list {
            margin-right: 0.75rem;
            width: 8.375rem;
            height: 2.625rem;
            background: #ffffff;
            border-radius: 0.1875rem;
            box-shadow: 0px 0.0375rem 0.1875rem 0px #9bbcf3;
            margin-bottom: 0.675rem;
            display: flex;
            justify-content: center;
            align-items: center;
            span {
                display: block;
                width: 1.6625rem;
                height: 1.6625rem;
                position: relative;
                margin-right: 0.225rem;
                img {
                background-size: 100% 100%;
                width: 1.6625rem;
                height: 1.6625rem;
                position: absolute;
                left: 0;
                top: 0;
                }
            }
            div {
                width: 5.85rem;
                h3 {
                font-size: 0.275rem;
                font-weight: 400;
                text-align: left;
                color: #3a466b;
                margin: 0 auto 0.2625rem;
                }
                p {
                font-size: 0.225rem;
                font-weight: 400;
                text-align: left;
                color: #777777;
                }
            }
            }
            .box1tab_list:nth-child(2),
            .box1tab_list:nth-child(4) {
            margin-right: 0 !important;
            }
        }
        }
        .cnt_box2 {
            width: 100%;
            height: 7.7125rem;
            background: #fafdff;
            & > div {
                width: 100%;
                padding: 0 3.25rem;
                box-sizing: border-box;
                margin: 0 auto;
                padding-top: 1px;
                height: 100%;
            }
            text-align: center;
            background-color: #fafdff;
            .lcx();
            ul {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            li:nth-child(1) div{
                    width: 1.85rem;
                    height: 1.3875rem;
                }
            li {
                width: 4rem;
                height: 3.175rem;
                background: #ffffff;
                border-radius: .1875rem;
                box-shadow: 0px .0375rem .125rem 0px #c0d8ff; 
                
                position: relative;
                i{
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: .275rem;
                    background: #4f87e6;
                    border-radius: .1875rem .1875rem 0px 0px;
                }
                div{
                    margin: .5875rem auto .225rem;
                    width: 1.475rem;
                    height: 1.475rem;
                    display: flex;
                    justify-content: center;
                    .img {
                        width: 1.475rem;
                    }
                    
                }
                
                .small_tit {
                    width: 100%;
                font-weight: 700;
                font-size: .3rem;
                color: #4374b9;
                }
            }
        }
        .lcx {
        .title {
            position: relative;
            margin-bottom: 0.7125rem;
            margin-top: 0.8625rem;
            img {
            width: 4.9125rem;
            height: 0.75rem;
            }
            h1 {
            position: absolute;
            top: 0.35rem;
            left: 50%;
            transform: translateX(-50%);
            font-size: 0.45rem;
            // font-family: Microsoft YaHei, Microsoft YaHei-Bold;
            font-weight: 700;
            color: #3a466b;
            }
        }
        }
        .cnt_box3 {
        width: 100%;
        height: 7.1375rem;
        & > div {
            width: 17.5rem;
            margin: 0 auto;
            padding-top: 1px;
            height: 100%;
        }
        text-align: center;
        .lcx();
        ul {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        li {
            width: 4.8125rem;
            height: 3.175rem;
            background: #ffffff;
            border-radius: 0.1875rem;
            box-shadow: 0rem 0.0375rem 0.125rem 0rem #c0d8ff;
            .img {
                width: 1.6125rem;
                height: 1.6125rem;
                border-radius: 50%;
                margin: .2125rem auto 0;
            }
            .small_tit {
            height: .3rem;
            line-height: .3rem;
            font-size: 0.3rem;
            // font-family: Microsoft YaHei, Microsoft YaHei-Bold;
            font-weight: 700;
            color: #4374b9;
            margin-bottom: 0.125rem;
            }
            p {
            font-size: 0.225rem;
            // font-family: Microsoft YaHei, Microsoft YaHei-Regular;
            font-weight: 400;
            color: #777777;
            }
        }
        }
        .cnt_box4{
            width: 100%;
            height: 8.6875rem;
            background: #fafdff;
            & > div {
                width: 100%;
                padding: 0 3.1375rem;
                box-sizing: border-box;
                margin: 0 auto;
                padding-top: 1px;
                height: 100%;
            }
            text-align: center;
            .lcx();
            .pc_ti{
                width: 100%;
                height: 6.125rem;
                position: relative;
                img:nth-child(1){
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 4.6875rem;
                    height: 2.8375rem;
                }
                img:nth-child(2){
                    position: absolute;
                    left: 1.7rem;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 6.3625rem;
                    height: 3.8125rem;
                    z-index: 1;
                }
                img:nth-child(3){
                    position: absolute;
                    left: 4.7625rem;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 8.075rem;
                    height: 4.8125rem;
                    z-index: 2;
                }
                img:nth-child(4){
                    position: absolute;
                    left: 9.55rem;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 6.3625rem;
                    height: 3.8125rem;
                    z-index: 1;
                }
                img:nth-child(5){
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 4.6875rem;
                    height: 2.8375rem;
                }
            }
        }
        .cnt_box5{
            margin-bottom: 2.0625rem;
            padding-top: 1.175rem;
            width: 100%;
            .lcx();
            .title{
                img{
                    display: block ;
                    margin: 0 auto;
                }
            }
            .img{
                
                height: 13.2rem;
            }
        }
        .cnt_box6 {
        width: 17.5rem;
        margin: .5rem auto 0;
        text-align: center;
        .lcx();

        ul {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        li {
            width: 4.8375rem;
            height: 4.025rem;
            margin-bottom: 1.125rem;
            position: relative;
            .ren_zheng {
            width: 0.9375rem;
            height: 0.9375rem;
            position: absolute;
            top: -0.375rem;
            left: -0.375rem;
            }
        }
        }
    }
    .codeDialog {
        .iconfont {
            position: absolute;
            top: 0.125rem;
            right: 0.125rem;
            font-size: 0.35rem;
            font-weight: 700;
            color: #ccc;
            cursor: pointer;
        }
        position: fixed;
        top: 1.625rem;
        left: 50%;
        transform: translate(-50%);
        z-index: 3;
        width: 5.375rem;
        height: 6rem;
        background-color: #fff;
        border-radius: 0.125rem;
        text-align: center;
        box-shadow: 0rem 0.0375rem 0.1875rem rgba(79, 135, 230, 0.3);
        img {
            width: 4.5rem;
            height: 4.5rem;
            margin-top: 0.5rem;
        }
        p {
            padding: 0.25rem 0;
            font-size: 0.3rem;
            font-weight: 700;
        }
    }
}
</style>