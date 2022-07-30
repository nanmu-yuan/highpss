<template>
    <div class="videobox">
        <h2>
            <p>WHAT INTERESTS YOU</p>
            <p><i></i><span>你感兴趣的</span><i></i></p>
        </h2>
        <p class="text">1对1在线辅导，最新教育方式<br>专业，可靠，高效。课程种类多，名师辅导，符合朗思考试需求，助力你高分highpass</p>
        <div class="video_cnt">
            <div class="video_list" v-for="(item,index) in info.videoList" :key="index" @click="startTest($event,item.push)">
                <div class="video_listimg">
                    <img :src="item.img1" class="video" alt="">
                    <img :src="item.img2" class="video_btn" alt="">
                </div>
                <p>{{item.text1}}</p>
            </div>
        </div>
        <div class="gen_btn" @click="open">查看更多视频</div>
    </div>
</template>

<script>
export default {
    props: ['info'],
    methods: {
       open(){
            this.$message({
                type: 'success',
                message: '努力更新中!'
            })
       }
    }
}
</script>

<style lang="less" scoped>
    .videobox{
        padding-top: .675rem;
        h2{
            font-size: .35rem;
            color: #4374B9;
            p{
                margin-bottom: .2875rem;
                display: flex;
                justify-content: center;
                align-items: center;
                i{
                    width: 80px;
                    height: 1px;
                    background: #4374B9;
                }
                span{
                    margin: 0 .2125rem;
                    font-weight: 400;
                }
            }
        }
        .text{
            font-size: .25rem;
            color: #4374B9;
            line-height: .4rem;
            text-align: center;
            margin-bottom: .475rem;
        }
        .video_cnt{
            display: flex;
            justify-content: space-between;
            margin-bottom: .8375rem;
            .video_list{
                width: 4.425rem;
                .video_listimg{
                    position: relative;
                    width: 4.425rem;
                    height: 3.8rem;
                    cursor: pointer;
                    .video{
                        width: 100%;
                        height: 3.8rem;
                        position: absolute;
                        top: 0;
                        left: 0;
                    }
                    img:last-child{
                        width: 1.3875rem;
                        height: 1.3875rem;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%,-50%);
                    }
                }
                
                p{
                    font-size: .375rem;
                    color: #4374b9;
                    width: 100%;
                    text-align: center;
                    padding-top: .1375rem;
                }
            }
        }
        .gen_btn{
            margin: 0 auto;
            font-size: .3125rem;
            line-height:.775rem;
            text-align: center;
            color: #3b6fb8;
            width: 2.625rem;
            height: .775rem;
            border: .025rem solid #3d6dbe;
            border-radius: .3125rem;
            cursor: pointer;
            margin-bottom: 1.1875rem;
        }
    }
</style>

