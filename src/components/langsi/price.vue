<template>
    <div class="pricebox">
        <div v-for="(item,index) in info.videopirce" :key="index">
            <div class="nav clearfix" >
                <p class="fl"><span></span>{{item.title}}</p>
                <p class="fr"><img src="@/assets/image/langsi/iconhome.png" alt=""><span>{{item.tags}}</span></p>
            </div>
            <div class="videopirce">
                <div class="video" @click="costextPush(item.url,type)">
                    <img :src="`https://${item.post}`" alt="">
                    <img src="@/assets/image/home/cntpa5_btn.png" alt="">
                </div>
                <div class="pirce">
                    <h2>{{item.title}}</h2>
                    <p class="text">
                        课节: <span>共<i>{{item.totalDetailTime}}</i>节课</span><br>
                        课时:<span>共<i>{{item.totalTime}}</i>课时</span> 授课老师:<span><i>{{item.teacherInfo.teacherName}}</i></span>
                    </p>
                    <div class="picretext" v-for="(items,indexs) in item.spu.skus" :key="indexs">
                        <p>现价:<span>￥<i>{{items.promotionPrice}}</i></span></p>
                        <p>原价:<b></b><span>￥<i>{{items.price}}</i></span></p>
                    </div>
                    <div class="picrebtn">
                        <div @click="open">课程咨询</div>
                        <div @click="open">立即购买</div>
                    </div>
                </div>
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
    props: ['info'],
    data(){
        return{
            dialog:false,
            type:''    
        }
    },
    created(){
        this.type = this.info.cousetype
    },
    methods:{
        open() {
            this.dialog = true
        },
        closeDialog() {
            this.dialog = false
        },
        costextPush( url,type) {
            let token = localStorage.getItem('token')
            if (token) {
                //执行内容
                return this.$router.push({ path: '/video', query: { url,type } })
            } else {
                this.$message({
                type: 'warning',
                message: '您还未进行登录，请先登录才可以学习内容！'
                })
            }
        },
    }
}
</script>

<style lang="less" scoped>
.pricebox{
    padding-top: .5rem;
    .nav{
        border-bottom: .0125rem solid #d4d4d4;
        padding-bottom: .1125rem;
        p{
            color: #000000;
            font-size: .225rem;
            line-height: .35rem;
        }
        p:nth-child(1){
            height: .3125rem;
            padding-left: .15rem;
            display: flex;
            align-items: center;
            span{
                display: inline-block;
                margin-right: .125rem;
                width: .125rem;
                height: .3125rem;
                background: #4f87e6;
                border-radius: 0 .0625rem .0625rem 0;
            }
        }
        p:nth-child(2){
            display: flex;
            justify-content: center;

            img{
                width: .3125rem;
                margin-right: .1rem;
            }
        }
    }
    .videopirce{
        padding-top: .6125rem;
        display: flex;
        justify-content: center;
        padding-bottom: .6125rem;
        .video{
            width: 9.4875rem;
            height: 5.275rem;
            margin-right: .375rem;
            position: relative;
            cursor: pointer;
            img:nth-child(1){
                width: 9.4875rem;
                height: 5.275rem;
                position: absolute;
                left: 0;
                top: 0;
            }
            img:nth-child(2){
                width: 1.925rem;
                height: 1.925rem;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
            }
        }
        .pirce{
            h2{
                font-size: .4rem;
                font-weight: 400;
                color: #333333;
                margin-bottom: .65rem;
            }
            .text{
                font-size: .3rem;
                font-weight: 400;
                color: #999999;
                span{
                    margin-right: .3125rem;
                    margin-bottom: .3rem;
                    display: inline-block;
                    i{
                        font-style: normal;
                        color: #78A3EB;
                        margin: 0 .125rem;
                    }
                }
                margin-bottom: .4375rem;
            }
            .picretext{
                width: 7.8625rem;
                height: .775rem;
                display: flex;
                align-items: center;
                padding-left: .35rem;
                margin-bottom: .4375rem;
                p:nth-child(1){
                    font-size: .45rem;
                    color: #FF5400;
                    margin-right: .7125rem;
                    span{
                        padding-left: .25rem;
                        font-weight: bold;
                        i{
                            font-style: normal;
                        }
                    }
                }
                p:nth-child(2){
                    font-size: .3rem;
                    color: #737373;
                    position: relative;
                    b{
                        width: 1.125rem;
                        position: absolute;
                        right: -0.1875rem;
                        top: 0.2rem;
                        height: .025rem;
                        background: #737373;
                        transform: rotate(5deg);
                    }
                    span{
                        padding-left: .125rem;
                        i{
                            font-style: normal;
                        }
                    }
                }
            }
            .picrebtn{
                display: flex;
                div{
                    width: 2.4875rem;
                    height: .6875rem;
                    border-radius: .1rem;
                    font-size: .3rem;
                    text-align: center;
                    line-height: .6875rem;
                    cursor: pointer;
                }
                div:nth-child(1){
                    border: .0375rem solid #78a3eb;
                    margin-right: .6125rem;
                    color: #78a3eb;
                }
                div:nth-child(2){
                    border: .0375rem solid #FF8F38;
                    color: #FF8F38;
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
</style>>

