<template>
    <div class="introduce_box">
        <div class="introduce_list">
            <h2>讲师介绍</h2>
            <div>
                <p v-for="(item, index) in info.CBlist" :class="vShow == index ? 'active' : ''" @click="vShow = index"
                    :key="index">{{ item.B2C1 }}</p>
            </div>
        </div>
        <div class="introduce clearfix" v-for="(item, index) in info.infoList" :key="index" v-show="vShow == index">
            <div class="introduce_js">
                <img :src="`https://${item.post}`" alt="">
                <p class="text1">
                    <span>{{ item.teacherName }} {{ info.rightInfotit }}</span>
                    <span>{{ item.introduction }}</span>
                </p>
            </div>
            <div v-for="(items, indexs) in item.paragraphs" :key="indexs">
                <div v-if="items.paragraphType == 'PICTURE'" class="picture_box">
                    <div :style="items.picture.nameStyle" >
                        <h2 :style="`color:${items.picture.nameColor};fontSize:${items.picture.nameSize / 80}rem;`">
                            {{ items.picture.name }} </h2>
                    </div>
                    <div :style="items.picture.contentStyle">
                        <p :style="`color:${items.picture.contentColor};fontSize:${items.picture.contentSize / 80}rem;`">
                            {{ items.picture.content }}</p>
                    </div>
                    <img :src="`https:${items.picture.url}`" alt=""
                        :style="`width:${items.picture.weight / 80}rem;height:${items.picture.height / 80}rem;`">
                </div>
                <div v-if="items.paragraphType == 'TEXT'" class="text_box">
                    <div v-for="(itemI, indexes) in items.sentences" :key="indexes">
                        <div :style="items.style">
                            <p :style="`color:${items.color};fontSize:${items.size/80}rem;`">{{items.content}}</p>
                        </div>
                        <!-- <div>
                            <p class="text2">{{ itemI.content }}</p>
                        </div> -->
                    </div>
                </div>
                <div v-if="items.paragraphType == 'AUDIO'" class="audio_box">
                    <div :style="items.audio.nameStyle">
                        <h2 :style="`color:${items.audio.nameColor};fontSize:${items.audio.nameSize / 80}rem;`">{{
                                items.audio.name
                        }}
                        </h2>
                    </div>
                    <div :style="items.audio.contentStyle">
                        <p :style="`color:${items.audio.contentColor};fontSize:${items.audio.contentSize / 80}rem;`">
                            {{ items.audio.content }}</p>
                    </div>
                    <audio :src="`https:${item.audio.url}`" controls="controls"></audio>
                </div>
                <div v-if="items.paragraphType == 'VIDEO'" class="video_box">
                    <div :style="items.video.nameStyle">
                        <h2 :style="`color:${items.video.nameColor};fontSize:${items.video.nameSize / 80}rem;`">{{
                                items.video.name
                        }}
                        </h2>
                    </div>
                    <div :style="items.video.contentStyle">
                        <p :style="`color:${item.video.contentColor};fontSize:${items.video.contentSize / 80}rem;`">
                            {{ items.video.content }}</p>
                    </div>
                    <video :src="`https:${items.video.url}`" controls="controls"></video>
                </div>
            </div>
            <!-- <div>
                <p class="text2">英国约克大学管理学硕士，英语专业本科，高 中英语教师资格证。</p>
                <p class="text2">国内知名教培行业5年雅思听力和口语教师工 作经验，曾任环球雅思口语组负责人，深谙朗 思出题套路，口语规则，及具有独家口语难题 破解之法。</p>
            </div> -->
            <div class="btn fr" @click="startTest($event, item.push)">{{ item.text }}</div>
        </div>
        <div class="label">
            <h2>热门标签</h2>
            <div>
                <p v-for="(item, inex) in info.labelList" @click="jumpLabel(item)" :key="inex">{{ item }}</p>
            </div>
        </div>
        <div class="recommend">
            <h2>推荐课程</h2>
            <div class="rec_box">
                <div class="rec_list" v-for="(item, inex) in info.recommendList" :key="inex"
                    @click="startTest(item.path)">
                    <img :src="item.img" alt="">
                    <div class="rec_right">
                        <p>{{ item.title }}</p>
                        <p>{{ item.text }}</p>
                        <p>{{ item.time }}</p>
                    </div>
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
            vShow: 0
        }
    },
    methods: {
        startTest(path) {
            if (path) {
                return this.$router.push(path)
            }
        },
        jumpLabel(val) {
            console.log(val);
            this.$router.push({
                path:'/langsiCommonProblem',
                query:{
                    label:val
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.introduce_box {
    width: 6rem;
    padding-left: .15rem;

    .introduce_list {
        width: 6rem;
        height: .6125rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: .125rem;
        box-sizing: border-box;

        h2 {
            font-size: .275rem;
            color: #4374b9;
            font-weight: 400;
        }

        div {
            display: flex;
            align-items: center;

            p {
                width: .4375rem;
                font-size: .3125rem;
                color: #8f8f8f;
                margin-right: .1875rem;
            }

            .active {
                color: #4374B9;
            }
        }
    }

    .introduce {
        width: 6rem;
        border: .025rem solid #F4F4F4;
        padding: .325rem .25rem;
        box-sizing: border-box;
        box-shadow: 0 .0375rem .1125rem #e6f4ff;

        .introduce_js {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: .3125rem;
            margin-bottom: .55rem;

            img {
                width: 1.9625rem;
                height: 1.9625rem;
                margin-right: .3125rem;
            }

            .text1 {
                height: 100%;
                font-size: .325rem;
                color: #202020;
                text-align: right;

                span {
                    display: block;
                    margin-bottom: .225rem;
                }

                span:last-child {
                    color: #666666;
                    font-size: .25rem;
                }
            }
        }

        .text2 {
            font-size: 20px;
            color: #999999;
            line-height: .375rem;
            margin-bottom: 0.3875rem;
        }

        .btn {
            width: 1.25rem;
            height: .375rem;
            font-size: .25rem;
            color: #4f87e6;
            cursor: pointer;
            text-align: center;
            line-height: 0.375rem;
        }
    }

    .label {
        padding-top: .2625rem;

        h2 {
            margin-bottom: .2625rem;
            font-size: .275rem;
            color: #4374b9;
            font-weight: 400;
        }

        div {
            width: 100%;
            display: flex;
            flex-wrap: wrap;

            p {
                margin-right: .125rem;
                margin-bottom: .125rem;
                padding: .1375rem .1875rem;
                background: #F4F4F4;
                font-size: .225rem;
                color: #999999;
            }
        }
    }

    .recommend {
        padding-top: 0.45rem;

        h2 {
            margin-bottom: .2625rem;
            font-size: .275rem;
            color: #4374b9;
            font-weight: 400;
        }

        .rec_box {
            margin-bottom: .175rem;

            .rec_list {
                display: flex;
                margin-bottom: .1125rem;
                cursor: pointer;

                img {
                    width: 3.0625rem;
                    height: 1.1rem;
                    margin-right: .325rem;
                }

                .rec_right {
                    height: 100%;

                    p:first-child {
                        color: #202020;
                        font-size: .225rem;
                        margin-bottom: .225rem;
                    }

                    p {
                        width: 100%;
                        font-size: .2rem;
                        color: #b7b7b7;
                        margin-bottom: .0375rem;
                    }
                }
            }
        }
    }
}
</style>