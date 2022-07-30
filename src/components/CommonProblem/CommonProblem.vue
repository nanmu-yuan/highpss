<template>
    <div class="cont">
        <div class="cont_box1">
            <h2>热门问题</h2>
            <ul class="box1_con">
                <li v-for="(item, index) in cont_box1" :key="index">
                    <h3><i>{{ item.title }}</i>
                        <span v-for="(items, indexs) in item.tagList"
                            :class="{ 'sp1': String(items) === '环境', 'sp2': String(items) === '考试', 'sp3': String(items) === '报考', 'sp4': String(items) === '院校' }"
                            :key="indexs">{{ items }}</span>
                    </h3>
                    <p>{{ item.introduction }}</p>
                    <div @click="insurance(item.id)">查看内容 ></div>
                </li>
            </ul>
        </div>
        <div class="boxcont">
            <div class="cnt_nav" :class="{ tab_nav: isSticky }" v-show="isSticky">
                <div class="nav_list" v-for="(item, index) in nav_list" :key="index">
                    <p @click="tabChange(index)" style="cursor: pointer"
                        :style="{ color: num == index ? '#4F87E6' : '' }">
                        {{ item.text }}
                    </p>
                    <span v-show="num == index"></span>
                </div>
            </div>
            <div class="cont_box2">
                <h2>
                    <img src="../../assets/image/langsi/cj_h1.png" alt="">
                    <p>朗思考试报名</p>
                </h2>
                <ul>
                    <li v-for="(item, index) in cont_box2" :key="index">
                        <h3><i>{{ item.title }}</i>
                            <span v-for="(items, indexs) in item.tagList"
                                :class="{ 'sp1': String(items) === '环境', 'sp2': String(items) === '考试', 'sp3': String(items) === '报考', 'sp4': String(items) === '院校' }"
                                :key="indexs">{{ items }}</span>
                        </h3>
                        <p>{{ item.introduction }}</p>
                        <div @click="insurance(item.id)">查看内容 ></div>
                    </li>
                </ul>
                <div class="box_bottom">
                    <h4>其他热门问题</h4>
                    <div class="text" v-for="(item, index) in box_bottom1" :key="index">
                        <p @click="insurance(item.id)"><span></span>{{ item.title }}</p>
                    </div>
                    <div class="btn_gd" @click="btnpath(0)">更多问题</div>
                </div>
            </div>
            <div class="cont_box3">
                <h2>
                    <img src="../../assets/image/langsi/cj_h2.png" alt="">
                    <p>考场网络问题</p>
                </h2>
                <ul>
                    <li v-for="(item, index) in cont_box3" :key="index">
                        <h3><i>{{ item.title }}</i>
                            <span v-for="(items, indexs) in item.tagList"
                                :class="{ 'sp1': String(items) === '环境', 'sp2': String(items) === '考试', 'sp3': String(items) === '报考', 'sp4': String(items) === '院校' }"
                                :key="indexs">{{ items }}</span>
                        </h3>
                        <p>{{ item.introduction }}</p>
                        <div @click="insurance(item.id)">查看内容 ></div>
                    </li>
                </ul>
                <div class="box_bottom">
                    <h4>其他热门问题</h4>
                    <div class="text" v-for="(item, index) in box_bottom2" :key="index">
                        <p @click="insurance(item.id)"><span></span>{{ item.title }}</p>
                    </div>
                    <div class="btn_gd" @click="btnpath(1)">更多问题</div>
                </div>
            </div>
            <div class="cont_box4">
                <h2>
                    <img src="../../assets/image/langsi/cj_h3.png" alt="">
                    <p>考试过程常见问题</p>
                </h2>
                <ul>
                    <li v-for="(item, index) in cont_box4" :key="index">
                        <h3><i>{{ item.title }}</i>
                            <span v-for="(items, indexs) in item.tagList"
                                :class="{ 'sp1': String(items) === '环境', 'sp2': String(items) === '考试', 'sp3': String(items) === '报考', 'sp4': String(items) === '院校' }"
                                :key="indexs">{{ items }}</span>
                        </h3>
                        <p>{{ item.introduction }}</p>
                        <div @click="insurance(item.id)">查看内容 ></div>
                    </li>
                </ul>
                <div class="box_bottom">
                    <h4>其他热门问题</h4>
                    <div class="text" v-for="(item, index) in box_bottom3" :key="index">
                        <p @click="insurance(item.id)"><span></span>{{ item.title }}</p>
                    </div>
                    <div class="btn_gd" @click="btnpath(2)">更多问题</div>
                </div>
            </div>
            <div class="cont_box5">
                <h2>
                    <img src="../../assets/image/langsi/cj_h4.png" alt="">
                    <p>院校朗思语言要求</p>
                </h2>
                <ul>
                    <li v-for="(item, index) in cont_box5" :key="index">
                        <h3><i>{{ item.title }}</i>
                            <span v-for="(items, indexs) in item.tagList"
                                :class="{ 'sp1': String(items) === '环境', 'sp2': String(items) === '考试', 'sp3': String(items) === '报考', 'sp4': String(items) === '院校' }"
                                :key="indexs">{{ items }}</span>
                        </h3>
                        <p>{{ item.introduction }}</p>
                        <div @click="insurance(item.id)">查看内容 ></div>
                    </li>
                </ul>
                <div class="box_bottom">
                    <h4>其他热门问题</h4>
                    <div class="text" v-for="(item, index) in box_bottom4" :key="index">
                        <p @click="insurance(item.id)"><span></span>{{ item.title }}</p>
                    </div>
                    <div class="btn_gd" @click="btnpath(3)">更多问题</div>
                </div>
            </div>
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
            nav_list: [
                { text: '朗思考试报名' },
                { text: '考试网络问题' },
                { text: '考试过程问题' },
                { text: '院校朗思要求' },
            ],
            cont_box1: [],
            cont_box2: [],
            cont_box3: [],
            cont_box4: [],
            cont_box5: [],
            box_bottom1: [],
            box_bottom2: [],
            box_bottom3: [],
            box_bottom4: [],
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scroll)
        this.offsetTop = document.querySelector('.boxcont').offsetTop
    },
    created() {
        this.getProblemlist()
    },
    methods: {
        // 获取问题列表
        getProblemlist() {
            this.$api.getProblemlist("非常热门问题,热门问题", 1).then((res) => {
                console.log(res.data.data.resList)
                this.cont_box1 = res.data.data.resList
            })
            this.$api.getProblemlist("非常热门问题,朗思考试报名", 1).then((res) => {
                console.log(res.data.data.resList)
                this.cont_box2 = res.data.data.resList
            })
            this.$api.getProblemlist("非常热门问题,考场网络问题", 1).then((res) => {
                console.log(res.data.data.resList)
                this.cont_box3 = res.data.data.resList
            })
            this.$api.getProblemlist("非常热门问题,考试过程常见问题", 1).then((res) => {
                console.log(res.data.data.resList)
                this.cont_box4 = res.data.data.resList
            })
            this.$api.getProblemlist("非常热门问题,院校朗思语言要求", 1).then((res) => {
                console.log(res.data.data.resList)
                this.cont_box5 = res.data.data.resList
            })
            // 其他热门问题
            this.$api.getProblemlist("其他热门问题,朗思考试报名", 1).then((res) => {
                console.log(res.data.data.resList)
                this.box_bottom1 = res.data.data.resList
            })
            this.$api.getProblemlist("其他热门问题,考场网络问题", 1).then((res) => {
                console.log(res.data.data.resList)
                this.box_bottom2 = res.data.data.resList
            })
            this.$api.getProblemlist("其他热门问题,考试过程常见问题", 1).then((res) => {
                console.log(res.data.data.resList)
                this.box_bottom3 = res.data.data.resList
            })
            this.$api.getProblemlist("其他热门问题,院校朗思语言要求", 1).then((res) => {
                console.log(res.data.data.resList)
                this.box_bottom4 = res.data.data.resList
            })
        },
        //查看内容
        insurance(id) {
            // console.log(id)
            let token = localStorage.getItem('token')
            if (token) {
                //执行内容
                return this.$router.push({ path: 'langsiCommondetails', query: { id } })
            } else {
                this.$message({
                    type: 'warning',
                    message: '您还未进行登录，请先登录才可以查看！'
                })
            }
            // this.$router.push({ path: 'langsiCommondetails', query: { id } })
        },
        // 更多问题
        btnpath(id) {
            console.log(id)
            this.$router.push({ path: 'langsiCommonProblemMore', query: { id } })
        },
        // 获取每个模块距离页面顶部的距离
        getdistance() {
            let list = document.querySelectorAll('.boxcont>div')
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
    }
}
</script>

<style lang="less" scoped>
// 环境
.sp1 {
    background: #3bbb33;
}

// 考试
.sp2 {
    background: #00b7d3;
}

// 报考
.sp3 {
    background: #FFC015;
}

// 院校
.sp4 {
    background: #ff8042;
}

.tab_nav {
    position: sticky;
    top: 1.375rem;
}

.cont {
    background: #f5f7fa;

    .cnt_nav {
        height: 1.2375rem;
        background: #ffffff;
        z-index: 2;
        box-shadow: 0 0.0375rem 0.075rem 0 #e6f3ff;
        padding: 0 3.25rem;
        display: flex;
        align-items: center;
        justify-content: space-around;

        .nav_list {
            width: 1.65rem;
            height: 100%;
            color: #051123;
            font-size: 0.25rem;
            position: relative;
            text-align: center;

            p {
                padding-top: .525rem;
            }

            span {
                width: 1.25rem;
                height: .025rem;
                position: absolute;
                left: 50%;
                bottom: .225rem;
                transform: translateX(-50%);
                background: #376dca;
                border-radius: 0.0375rem 0.0375rem 0 0;
                display: block;
            }
        }

        .active {
            color: #4f87e6;
        }
    }

    .ul {
        ul {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 100%;

            li {
                width: 5.3625rem;
                height: 2.9125rem;
                background: #ffffff;
                border-radius: .1875rem;
                box-shadow: 0px .0375rem .125rem 0px rgba(187, 212, 255, 0.25);
                margin-bottom: .5375rem;
                padding-left: .4875rem;
                padding-top: .5625rem;
                padding-bottom: .35rem;
                box-sizing: border-box;

                h3 {
                    font-size: .325rem;
                    font-weight: 400;
                    color: #4374b9;
                    display: flex;
                    align-items: center;

                    i {
                        width: 3.5rem;
                        font-style: normal;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }

                    span {
                        width: .675rem;
                        height: .325rem;
                        // background: #00b7d3;
                        border-radius: .1rem;
                        line-height: .325rem;
                        text-align: center;
                        margin-left: .375rem;
                        color: #ffffff;
                        font-size: .2125rem;
                        display: inline-block;
                    }
                }

                p {
                    margin-top: .3375rem;
                    padding-right: 0.4875rem;
                    height: .75rem;
                    font-size: .25rem;
                    color: #aca8a8;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                }

                div {
                    color: #4f87e6;
                    font-size: .25rem;
                    width: 1.375rem;
                    text-align: center;
                    float: right;
                    margin-right: .45rem;
                    cursor: pointer;
                }
            }

            // li:nth-child(1) h3 span,li:nth-child(4) h3 span{
            //   background: #3bbb33;
            // }
        }
    }

    .h2 {
        h2 {
            display: flex;
            align-items: center;
            padding: 0 2.975rem;
            margin-bottom: .2625rem;

            img {
                width: 2.025rem;
                height: 2.025rem;
            }

            p {
                font-size: .4rem;
                color: #4374b9;
                font-weight: 500;
            }
        }
    }

    .bot {
        .box_bottom {
            display: flex;
            padding: 0 3.25rem;

            h4 {
                color: #4374b9;
                font-size: .25rem;
                font-weight: 400;
                margin-right: 1.75rem;
            }

            .text {
                display: flex;

                p {
                    width: 3.25rem;
                    font-size: .25rem;
                    color: #b9b9b9;
                    margin-right: 1.0625rem;
                    cursor: pointer;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;

                    span {
                        display: inline-block;
                        width: .2rem;
                        height: .2rem;
                        background: #b9b9b9;
                        border-radius: 50%;
                        margin-right: .2rem;
                    }
                }
            }

            .btn_gd {
                color: #4374b9;
                font-size: .25rem;
                cursor: pointer;
            }
        }
    }

    .cont_box1 {
        height: 9.5375rem;
        padding: 0 3.25rem;

        h2 {
            padding-top: .95rem;
            font-size: .35rem;
            font-weight: 500;
            color: #084c94;
            margin-bottom: .5rem;
        }

        .ul();
    }

    .cont_box2 {
        padding-top: 1.075rem;
        .h2();
        .ul();

        ul {
            padding: 0 3.25rem;
            box-sizing: border-box;

            li:nth-child(1) {
                width: 10.7125rem;
            }

            li {
                p {
                    margin-top: .25rem;
                    height: .75rem;
                    font-size: 18px;
                    color: #aca8a8;
                }

                // h3 span{
                //   background: #FFC015 !important;
                // }
            }
        }

        .bot();
    }

    .cont_box3 {
        padding-top: 1.075rem;
        .h2();
        .ul();

        ul {
            padding: 0 3.25rem;
            box-sizing: border-box;

            li {
                width: 5.3625rem;

                p {
                    margin-top: .25rem;
                    height: .75rem;
                    font-size: .25rem;
                    color: #aca8a8;
                }

                // h3 span{
                //   background: #3BBB33 !important;
                // }
            }
        }

        .bot();
    }

    .cont_box4 {
        padding-top: 1.075rem;
        .h2();
        .ul();

        ul {
            padding: 0 3.25rem;
            box-sizing: border-box;
            flex-wrap: wrap;

            li:nth-child(1) {
                width: 17.5rem;
            }

            li {
                width: 8.325rem;

                p {
                    margin-top: .25rem;
                    height: .75rem;
                    font-size: .25rem;
                    color: #aca8a8;
                }

                // h3 span:first-child{
                //   background: #00b7d3 !important;
                // }
                // h3 span:last-child{
                //   background: #3BBB33 !important;
                //   margin-left: .125rem
                // }
            }
        }

        .bot();
    }

    .cont_box5 {
        padding-top: 1.075rem;
        .h2();
        .ul();

        ul {
            padding: 0 3.25rem;
            box-sizing: border-box;

            li {
                width: 8.325rem;

                p {
                    margin-top: .25rem;
                    height: .75rem;
                    font-size: .25rem;
                    color: #aca8a8;
                }

                // h3 span:first-child{
                //   background: #00b7d3 !important;
                // }
                // h3 span:last-child{
                //   background: #3BBB33 !important;
                //   margin-left: .125rem
                // }
            }

            li:nth-child(2) {
                // h3 span{
                //   background: #FF8042 !important;
                // }
            }
        }

        .bot();
    }

}
</style>