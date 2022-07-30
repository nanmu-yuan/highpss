<template>
    <div class="cont">
        <div class="cont_box1">
            <h2>热门问题</h2>
            <ul class="box1_con" >
                <h2 v-show="info.total!=0?false:true">未查找到与您输入关键字有关的信息</h2>
                <li v-for="(item,index) in info.resList" :key="index">
                    <h3><i>{{item.title}}</i>
                    <span v-for="(items,indexs) in item.tagList" :class="{'sp1':String(items)==='环境','sp2':String(items)==='考试','sp3':String(items)==='报考','sp4':String(items)==='院校'}" :key="indexs">{{items}}</span>
                    </h3>
                    <p>{{item.introduction}}</p>
                    <div @click="insurance(item.id)">查看内容  ></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['info'],
    data(){
        return{
            hideshow:false
        }
    },
    created(){

    },
    methods:{
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
    }
}
</script>

<style lang="less" scoped>
// 环境
.sp1{background: #3bbb33;}
// 考试
.sp2{background: #00b7d3;}
// 报考
.sp3{background: #FFC015;}
// 院校
.sp4{background: #ff8042;}
.tab_nav {
    position: sticky;
    top: 1.375rem;
}
.cont{
    background: #f5f7fa;
    .ul{
        ul{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 100%;
        li{
            width: 5.3625rem;
            height: 2.9125rem;
            background: #ffffff;
            border-radius: .1875rem;
            box-shadow: 0px .0375rem .125rem 0px rgba(187,212,255,0.25);
            margin-bottom: .5375rem;
            padding-left: .4875rem;
            padding-top: .5625rem;
            padding-bottom: .35rem;
            box-sizing: border-box;
            h3{
            font-size: .325rem;
            font-weight: 400;
            color: #4374b9;
            display: flex;
            align-items: center;
            i{
                width: 2.6rem;
                font-style: normal;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            span{
                width: .675rem;
                height: .325rem;
                // background: #00b7d3;
                border-radius: .1rem;
                line-height: .325rem;
                text-align: center;
                margin-left: .275rem;
                color: #ffffff;
                font-size: .2125rem;
                display:inline-block;
            }
            }
            p{
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
            div{
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
    .cont_box1{
        padding: 0 3.25rem;
        h2{
        padding-top: .95rem;
        font-size: .35rem;
        font-weight: 500;
        color: #084c94;
        margin-bottom: .5rem;
        }
        .ul();
    }
}
</style>