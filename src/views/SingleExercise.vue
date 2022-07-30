<template>
  <div class="box">
    <div class="banner">
      <h1>记录考试数据，高效备考</h1>
      <img src="@/assets/image/examinationPaper.png" alt="" />
    </div>
    <div class="tab">
      <ul class="tablist">
        <li @click="tabChange(0)" :style="{ color: 0 == testId ? '#4F87E6' : '' }">
          B2 模拟试题
          <div class="line" v-show="0 == testId"></div>
        </li>
        <li @click="tabChange(1)" :style="{ color: 1 == testId ? '#4F87E6' : '' }">
          C1 模拟试题
          <div class="line" v-show="1 == testId"></div>
        </li>
      </ul>
    </div>
    <div class="contain">
      <div class="contain_le">
        <div class="part1 con">
          <h2>官方样题</h2>
          <div class="part1_box clearfix">
            <div class="part1_box1 fl">
              <img src="@/assets/image/write/sample.png" alt="" />
            </div>
            <div class="part1_box2 fr">
              <el-collapse v-model="idx" accordion>
                <div v-for="(item, index) in examList.slice(0, 4)" :key="item.id" @click="getListening(item.id, index)">
                  <el-collapse-item @change="idx = index" :name="index">
                    <template slot="title">
                      <span class="text1" :title="item.examName">{{ item.examName.substring(86, 110) }}</span>
                      <span class="text2" v-if="item.infos != null ? true : false">已练习</span>
                      <span class="text3" v-if="item.infos != null ? true : false" v-show="idx !== index">pass</span>
                      <span class="text4" v-show="idx !== index">选择试卷</span>
                    </template>
                    <div class="cont">
                      <ul class="tab_list">
                        <li
                          v-for="(item, index) in list_li"
                          :key="item.text"
                          @click="isshow = index"
                          :class="isshow == index ? 'active' : ''"
                        >
                          <p class="tablist_icon">
                            <img :src="item.icon" alt="" />
                          </p>
                          <span>{{ item.text }}</span>
                          <i></i>
                        </li>
                      </ul>
                      <div class="tab_con">
                        <div
                          v-for="(items, index) in list_cot"
                          :key="items.id"
                          v-show="isshow == index"
                          class="tab_conbox"
                        >
                          <ul>
                            <li v-for="(value, i) in items.list_test" :key="value.partId">
                              <span>{{ value.part }}</span>
                              <span v-show="value.isPractice != 0 ? true : false">已练习</span>
                              <span v-show="value.isPractice != 0 && index != 2 ? true : false">{{
                                value.correct | glq
                              }}</span>

                              <span
                                v-show="value.isPractice != 0 ? true : false"
                                @click="StartPractice(index, i, item.id)"
                                >{{ value.cxlian }}</span
                              >
                              <span>
                                <i
                                  v-show="value.isPractice == 0 ? true : false"
                                  @click="StartPractice(index, i, item.id)"
                                  >开始练习</i
                                >
                                <i v-show="value.isPractice != 0 ? true : false" @click="Resolution(index, i, item.id)"
                                  >查看解析</i
                                >
                              </span>
                              <span v-show="!vshow">新题</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="part1_box2_btn" v-if="item.infos != null ? true : false">
                        <div @click="confirmTest(item.id)">重新模考</div>
                        <div @click="checkPars(item.id)">查看解析</div>
                      </div>
                      <div class="part1_box2_btn" v-if="item.infos == null ? true : false">
                        <div @click="confirmTest(item.id)" class="confirmTest">全卷模考</div>
                      </div>
                    </div>
                  </el-collapse-item>
                </div>
              </el-collapse>
            </div>
          </div>
        </div>
        <div class="part2 con" v-show="vshow">
          <h2>栗子朗思独家真题</h2>
          <div class="part1_box clearfix">
            <div class="part1_box1 fl">
              <img src="@/assets/image/write/sole.png" alt="" />
            </div>
            <div class="part1_box2 fr">
              <el-collapse v-model="idx2" accordion>
                <div
                  v-for="(item, index) in examList.slice(4, 10)"
                  :key="item.id"
                  @click="getListening(item.id, index)"
                >
                  <el-collapse-item @change="idx2 = index" :name="index">
                    <template slot="title">
                      <span class="text1" :title="item.examName">{{ item.examName.substring(4) }}</span>
                      <span class="text2" v-if="item.infos != null ? true : false">已练习</span>
                      <span class="text3" v-if="item.infos != null ? true : false" v-show="idx2 !== index">pass</span>
                      <span class="text4" v-show="idx2 !== index">选择试卷</span>
                    </template>
                    <div class="cont">
                      <ul class="tab_list">
                        <li
                          v-for="(item, index) in list_li"
                          :key="item.text"
                          @click="isshow2 = index"
                          :class="isshow2 == index ? 'active' : ''"
                        >
                          <p class="tablist_icon">
                            <img :src="item.icon" alt="" />
                          </p>
                          <span>{{ item.text }}</span>
                          <i></i>
                        </li>
                      </ul>
                      <div class="tab_con">
                        <div
                          v-for="(items, index) in list_cot"
                          :key="items.id"
                          v-show="isshow2 == index"
                          class="tab_conbox"
                        >
                          <ul>
                            <li v-for="(value, i) in items.list_test" :key="i">
                              <span>{{ value.part }}</span>
                              <span v-show="value.isPractice != 0 ? true : false">已练习</span>
                              <span v-show="value.isPractice != 0 && index != 2 ? true : false">{{
                                value.correct | glq
                              }}</span>

                              <span
                                v-show="value.isPractice != 0 ? true : false"
                                @click="StartPractice(index, i, item.id)"
                                >{{ value.cxlian }}</span
                              >
                              <span>
                                <i
                                  v-show="value.isPractice == 0 ? true : false"
                                  @click="StartPractice(index, i, item.id)"
                                  >开始练习</i
                                >
                                <i v-show="value.isPractice != 0 ? true : false" @click="Resolution(index, i, item.id)"
                                  >查看解析</i
                                >
                              </span>
                              <span v-show="!vshow">新题</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="part1_box2_btn" v-if="item.infos != null ? true : false">
                        <div @click="confirmTest(item.id)">重新模考</div>
                        <div @click="checkPars(item.id)">查看解析</div>
                      </div>
                      <div class="part1_box2_btn" v-if="item.infos == null ? true : false">
                        <div @click="confirmTest(item.id)" class="confirmTest">全卷模考</div>
                      </div>
                    </div>
                  </el-collapse-item>
                </div>
              </el-collapse>
            </div>
          </div>
        </div>
        <div class="con_pa5">
          <h2>课程推荐</h2>
          <div class="con_pa5_box">
            <div class="con_pa5_list" v-for="(item, index) in conpa5_list" :key="index">
              <div class="con_pa5_video">
                <img :src="item.img" alt="" class="con_pa5_videoimg" />
                <img :src="item.btn" alt="" class="video_btn" />
              </div>
              <p>{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="contain_ri fr">
        <div class="part">
          <h2>课程推荐</h2>
          <img src="@/assets/image/write/write.png" alt="" @click="startTest($event, 'langsiWrite')" />
          <img src="@/assets/image/write/yuce.png" alt="" @click="startTest($event, 'generalPrediction')" />
          <img src="@/assets/image/write/mokao.png" alt="" @click="startTest($event, 'lsMoldTest')" />
        </div>
        <div class="part" v-show="!vshow">
          <h2>案例分享</h2>
          <div class="fdfsef clearfix">
            <p>
              我的成功你也可以复制｜朗思首考fdfsef就...
              <span></span>
            </p>
            <p>
              与很多机构不同，我们的老师有着多年一线实战经验，一直深耕一线教学，相当了解同学们的错误因素与很多机有着多年一线实战经验，一直深耕一线教学，相当了解同学们的错误因素
            </p>
            <div>查看内容</div>
          </div>
          <div class="fdfsef">
            <p>
              我的成功你也可以复制｜朗思首考fdfsef就...
              <span></span>
            </p>
            <p>
              与很多机构不同，我们的老师有着多年一线实战经验，一直深耕一线教学，相当了解同学们的错误因素与很多机有着多年一线实战经验，一直深耕一线教学，相当了解同学们的错误因素
            </p>
            <div>查看内容</div>
          </div>
          <div class="fdfsef">
            <p>
              我的成功你也可以复制｜朗思首考fdfsef就...
              <span></span>
            </p>
            <p>
              与很多机构不同，我们的老师有着多年一线实战经验，一直深耕一线教学，相当了解同学们的错误因素与很多机有着多年一线实战经验，一直深耕一线教学，相当了解同学们的错误因素
            </p>
            <div>查看内容</div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import { getExamId, getUserId } from '@/request/api'
export default {
  name: 'SingleExercise',
  data() {
    return {
      userId: '',
      title: [
        {
          tit: '标题1',
          ico: '已练习',
          pass: 'pass'
        },
        {
          tit: '标题2',
          ico: '已练习',
          pass: 'pass'
        },
        {
          tit: '标题3',
          ico: '已练习',
          pass: 'pass'
        },
        {
          tit: '标题4',
          ico: '已练习',
          pass: 'pass'
        }
      ],
      conpa5_list: [
        {
          img: require('@/assets/image/home/cntpa5_1.png'),
          btn: require('@/assets/image/home/cntpa5_btn.png'),
          text: '阅读技巧'
        },
        {
          img: require('@/assets/image/home/cntpa5_2.png'),
          btn: require('@/assets/image/home/cntpa5_btn.png'),
          text: '写作思路'
        },
        {
          img: require('@/assets/image/home/cntpa5_3.png'),
          btn: require('@/assets/image/home/cntpa5_btn.png'),
          text: '口语高分技巧'
        },
        {
          img: require('@/assets/image/home/cntpa5_4.png'),
          btn: require('@/assets/image/home/cntpa5_btn.png'),
          text: '听力捕捉技巧'
        }
      ],
      idx: -1,
      idx2: -1,
      list_li: [
        {
          text: '听力',
          icon: require('@/assets/image/write/singleicon1.png')
        },
        {
          text: '阅读',
          icon: require('@/assets/image/write/singleicon2.png')
        },
        {
          text: '写作',
          icon: require('@/assets/image/write/singleicon3.png')
        },
        {
          text: '口语',
          icon: require('@/assets/image/write/singleicon4.png')
        }
      ],
      list_cot: [
        {
          id: 1,
          list_test: [
            {
              part: 'Listening Part1',
              gaopin: '高频',
              correct: 0,
              isPractice: 0,
              cxlian: '重新练习',
              btn: '查看解析',
              xinti: '新题'
            },
            {
              part: 'Listening Part2',
              gaopin: '高频',
              correct: 0,
              isPractice: 0,
              cxlian: '重新练习',
              btn: '查看解析',
              xinti: '新题'
            },
            {
              part: 'Listening Part3',
              gaopin: '高频',
              correct: 0,
              isPractice: 0,
              cxlian: '重新练习',
              btn: '查看解析',
              xinti: '新题'
            },
            {
              part: 'Listening Part4',
              gaopin: '高频',
              correct: 0,
              isPractice: 0,
              cxlian: '重新练习',
              btn: '查看解析',
              xinti: '新题'
            }
          ]
        },
        {
          id: 2,
          list_test: [
            {
              part: 'Reading Part1',
              gaopin: '高频',
              correct: 0,
              isPractice: 0,
              cxlian: '重新练习',
              btn: '查看解析',
              xinti: '新题'
            },
            {
              part: 'Reading Part2',
              gaopin: '高频',
              correct: 0,
              isPractice: 0,
              cxlian: '重新练习',
              btn: '查看解析',
              xinti: '新题'
            },
            {
              part: 'Reading Part3',
              gaopin: '高频',
              correct: 0,
              isPractice: 0,
              cxlian: '重新练习',
              btn: '查看解析',
              xinti: '新题'
            },
            {
              part: 'Reading Part4',
              gaopin: '高频',
              correct: 0,
              isPractice: 0,
              cxlian: '重新练习',
              btn: '查看解析',
              xinti: '新题'
            }
          ]
        },
        {
          id: 3,
          list_test: [
            {
              part: 'Writing Task1',
              gaopin: '高频',
              correct: 0,
              cxlian: '重新练习',
              btn: '查看解析',
              xinti: '新题'
            },
            {
              part: 'Writing Task2',
              gaopin: '高频',
              correct: 0,
              cxlian: '重新练习',
              btn: '查看解析',
              xinti: '新题'
            }
          ]
        },
        {
          id: 4,
          list_test: []
        }
      ],
      isshow: 0,
      isshow2: 0,
      testId: 1,
      examList: [],
      vshow: true,
      cont: false
    }
  },
  created() {
    let token = localStorage.getItem('token')
    if (!token) {
      return this.$message({
        type: 'warning',
        message: '请先登陆'
      })
    }
    // this.testId = JSON.parse(sessionStorage.getItem('testId'))
    this.userId = JSON.parse(localStorage.getItem('loginInfo'))?.id
    sessionStorage.setItem('start', false)
    // this.getExamAll()
    this.tabChange(this.testId)
  },
  methods: {
    // 获取所有官方试题
    getExamAll() {
      this.$api.getExam(this.testId).then((res) => {
        if (res.data.code == 200) {
          this.examList = res.data.data
        }
      })
    },
    // 开始考试
    StartPractice(index, i, id) {
      sessionStorage.setItem('isAnalysis', false)
      sessionStorage.setItem('examId', id)
      getExamId(id)
      if (index == 0) {
        console.log(index)
        if (i == 0) {
          this.$router.push({ path: 'listen1_2_4', query: { partId: '1' } })
          sessionStorage.setItem('partName', 'Listening Part1')
        } else if (i == 1) {
          this.$router.push({ path: 'listen1_2_4', query: { partId: '2' } })
          sessionStorage.setItem('partName', 'Listening Part2')
        } else if (i == 3) {
          this.$router.push({ path: 'listen1_2_4', query: { partId: '4' } })
          sessionStorage.setItem('partName', 'Listening Part4')
        } else {
          this.$router.push({ path: 'listen3' })
          sessionStorage.setItem('partName', 'Listening Part3')
        }
      } else if (index == 1) {
        if (i == 0) {
          this.$router.push({ path: 'read1' })
          sessionStorage.setItem('partName', 'Reading Part1')
        } else if (i == 1) {
          this.$router.push({ path: 'read2' })
          sessionStorage.setItem('partName', 'Reading Part2')
        } else if (i == 2) {
          this.$router.push({ path: 'read3' })
          sessionStorage.setItem('partName', 'Reading Part3')
        } else if (i == 3) {
          this.$router.push({ path: 'read4' })
          sessionStorage.setItem('partName', 'Reading Part4')
        }
      } else if (index == 2) {
        if (i == 0) {
          this.$router.push({ path: 'write1' })
          sessionStorage.setItem('partName', 'Writing Part1')
        } else if (i == 1) {
          this.$router.push({ path: 'write2' })
          sessionStorage.setItem('partName', 'Writing Part2')
        }
      }
    },
    // 查看练习解析
    Resolution(index, i, id) {
      sessionStorage.setItem('isAnalysis', true)
      sessionStorage.setItem('examId', id)
      getExamId(id)
      getUserId(this.userId)
      if (index == 0) {
        console.log(index)
        if (i == 0) {
          this.$router.push({ path: 'listen1_2_4', query: { partId: '1' } })
          sessionStorage.setItem('partName', 'Listening Part1')
        } else if (i == 1) {
          this.$router.push({ path: 'listen1_2_4', query: { partId: '2' } })
          sessionStorage.setItem('partName', 'Listening Part2')
        } else if (i == 3) {
          this.$router.push({ path: 'listen1_2_4', query: { partId: '4' } })
          sessionStorage.setItem('partName', 'Listening Part4')
        } else {
          this.$router.push({ path: 'listen3' })
          sessionStorage.setItem('partName', 'Listening Part3')
        }
      } else if (index == 1) {
        if (i == 0) {
          this.$router.push({ path: 'read1' })
          sessionStorage.setItem('partName', 'Reading Part1')
        } else if (i == 1) {
          this.$router.push({ path: 'read2' })
          sessionStorage.setItem('partName', 'Reading Part2')
        } else if (i == 2) {
          this.$router.push({ path: 'read3' })
          sessionStorage.setItem('partName', 'Reading Part3')
        } else if (i == 3) {
          this.$router.push({ path: 'read4' })
          sessionStorage.setItem('partName', 'Reading Part4')
        }
      } else if (index == 2) {
        if (i == 0) {
          this.$router.push({ path: 'write1' })
          sessionStorage.setItem('partName', 'Writing Part1')
        } else if (i == 1) {
          this.$router.push({ path: 'write2' })
          sessionStorage.setItem('partName', 'Writing Part2')
        }
      }
    },
    getListening(id, index) {
      // this.testId = JSON.parse(sessionStorage.getItem('testId'))
      sessionStorage.setItem('start', false)
      this.cont = true
      this.$api.getListening(id).then((res) => {
        this.list_cot[0].list_test.forEach((item, index) => {
          item.isPractice = res.data.data[index].isPractice
          item.correct = res.data.data[index].correct
        })
      })
      this.$api.getReading(id).then((res) => {
        this.list_cot[1].list_test.forEach((item, index) => {
          item.isPractice = res.data.data[index].isPractice
          item.correct = res.data.data[index].correct
        })
      })
      this.$api.getWriting(id).then((res) => {
        this.list_cot[2].list_test.forEach((item, index) => {
          item.isPractice = res.data.data[index].isPractice
          // item.correct=res.data.data[index].correct
        })
      })
      console.log(id)
    },
    // 查看解析
    checkPars(id) {
      sessionStorage.setItem('isAnalysis', true)
      sessionStorage.setItem('examId', id)
      getExamId(id)
      getUserId(this.userId)
      this.$router.push('/listen_part1')
    },
    // 确认考试 重新模考
    confirmTest(id) {
      sessionStorage.setItem('isAnalysis', false)
      sessionStorage.setItem('examId', id)
      getExamId(id)
      this.$router.push('/startTest')
    },
    //课程推荐
    startTest(event, path) {
      if (path) {
        return this.$router.push(path)
      }
      this.$router.push('testPaperList')
    },
    tabChange(ind) {
      this.idx = -1
      this.idx2 = -1
      this.testId = ind
      this.$api.getExam(this.testId).then((res) => {
        if (res.data.code == 200) {
          this.examList = res.data.data
        }
      })
    }
  },
  filters: {
    glq(num) {
      return (num * 100).toFixed(0) + '%'
    }
  }
}
</script>
<style lang="less" scoped>
.banner {
  height: 245px;
  position: relative;
  h1 {
    position: absolute;
    top: 58px;
    right: 360px;
    font-size: 50px;
    font-family: YouSheBiaoTiHei, YouSheBiaoTiHei-Regular;
    font-weight: 400;
    color: #81ccf2;
    letter-spacing: 5px;
  }
}
.tab {
  height: 0.95rem;
  background: #ffffff;
  box-shadow: 0px 3px 6px 0px #e6f3ff;
  .tablist {
    width: 17.5rem;
    height: 100%;
    margin: 0 auto;
    li {
      float: left;
      height: 100%;
      line-height: 0.95rem;
      margin-right: 1.05rem;
      font-size: 0.325rem;
      font-family: Source Han Sans CN, Source Han Sans CN-Normal;
      font-weight: normal;
      color: #515151;
      position: relative;
      cursor: pointer;
    }
    .line {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 1.7875rem;
      height: 0.1rem;
      background: #4f87e6;
      border-radius: 8px 8px 0px 0px;
    }
  }
}
.contain {
  i {
    font-style: normal;
  }
  margin-top: 0.725rem;
  .contain_le {
    width: 16.775rem;
    margin: 0 auto;
    .con {
      margin-bottom: 1.3625rem;
      width: 100%;
      h2 {
        height: 0.6875rem;
        background: rgba(243, 251, 255, 0.39);
        box-shadow: 0rem 0.025rem 0.0625rem rgba(167, 194, 240, 0.3);
        opacity: 1;
        font-size: 0.325rem;
        font-weight: 400;
        line-height: 0.6875rem;
        color: #4f87e6;
        opacity: 1;
        padding-left: 0.325rem;
        box-sizing: border-box;
      }
      .part1_box {
        padding: 0.1875rem 0.2625rem;
        padding-right: 0.4875rem;
        // display: flex;
        // justify-content: space-between;
        .part1_box1 {
          margin-left: 0.375rem;
          width: 4.55rem;
          height: 3.35rem;
        }
        .part1_box2 {
          width: 9.1rem;
          /deep/ .el-collapse {
            .is-active {
              background-color: #f3fbff;
              border-bottom: none !important;
              opacity: 1;
              border-radius: 0.1875rem 0.1875rem 0 0;
            }
            .is-active .text1 {
              width: 6.25rem;
              max-width: 6.25rem !important;
              color: #406ba8;
            }

            border: none;
            .el-collapse-item {
              background-color: none;
              .el-collapse-item__header {
                height: 1.0125rem;
                display: flex;
                align-items: center;
                line-height: 0.6875rem;
                background: none;
                color: #4f4f4f;
                cursor: pointer;
                border-bottom: none;
                font-size: 0.4375rem;
                font-weight: 400;
                border-bottom: 1px solid rgba(79, 135, 230, 0.12);
                position: relative;
              }
              .el-collapse-item__wrap {
                border-bottom: none;
              }
              .el-collapse-item__content {
                padding-bottom: 0;
                .cont {
                  padding: 0 0.25rem 0.2625rem 0.25rem;
                  background-color: #f3fbff;
                  box-shadow: 0px 0.025rem 0.0625rem rgba(167, 194, 240, 0.3);
                  border-radius: 0 0 0.1875rem 0.1875rem;
                  opacity: 1;
                  .tab_list {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    margin-bottom: 0.2625rem;
                    .active i {
                      display: block;
                    }
                    li {
                      display: flex;
                      justify-content: space-around;
                      align-items: center;
                      position: relative;
                      .tablist_icon {
                        width: 0.375rem;
                        height: 0.375rem;
                        border-radius: 50%;
                        opacity: 1;
                        margin-right: 0.1rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                      }

                      span {
                        height: 0.375rem;
                        font-size: 0.3125rem;
                        font-weight: 400;
                        line-height: 0.4125rem;
                        color: #434a54;
                        opacity: 1;
                        cursor: pointer;
                      }
                      i {
                        display: none;
                        position: absolute;
                        bottom: -0.0375rem;
                        right: 0.0375rem;
                        width: 0.525rem;
                        height: 0.0375rem;
                        background-color: #4f87e6;
                      }
                    }
                    li:nth-child(1) .tablist_icon {
                      background: #4b97e5;
                      border: 0.05rem solid #d9ecff;
                    }
                    li:nth-child(1) .tablist_icon img {
                      width: 0.25rem;
                      height: 0.2375rem;
                    }
                    li:nth-child(2) .tablist_icon {
                      background: #ff6a57;
                      border: 0.05rem solid #ffd4ce;
                    }
                    li:nth-child(2) .tablist_icon img {
                      width: 0.25rem;
                      height: 0.225rem;
                    }
                    li:nth-child(3) .tablist_icon {
                      background: #fff1bd;
                      border: 0.05rem solid #f8db73;
                    }
                    li:nth-child(3) .tablist_icon img {
                      width: 0.2875rem;
                      height: 0.275rem;
                    }
                    li:nth-child(4) .tablist_icon {
                      background: #4eaeac;
                      border: 0.05rem solid #c7f2f2;
                    }
                    li:nth-child(4) .tablist_icon img {
                      width: 0.2125rem;
                      height: 0.225rem;
                    }
                  }
                  .tab_con {
                    height: 2.975rem;
                    background: #ffffff;
                    box-shadow: 0px 3px 8px 0px rgba(167, 194, 240, 0.3);
                    opacity: 1;
                    .tab_conbox {
                      ul {
                        padding: 0.325rem 0;
                        box-sizing: border-box;
                        li {
                          width: 95%;
                          height: 0.5875rem;
                          display: flex;
                          align-items: center;
                          position: relative;
                          margin: 0 auto;
                          border-bottom: 1px solid rgba(79, 135, 230, 0.12);
                          &:hover {
                            background-color: #f3fbff;
                          }
                          span {
                            float: left;
                          }
                          span:nth-child(1) {
                            margin-right: 0.25rem;
                            max-width: 2rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            padding-left: 0.3625rem;
                            box-sizing: border-box;
                            font-size: 0.225rem;
                          }
                          span:nth-child(2) {
                            padding: 0 0.1rem;
                            height: 0.35rem;
                            background: #ffd1b7;
                            border-radius: 0.1rem;
                            margin: 0 0.1rem;
                            font-size: 0.175rem;
                            font-weight: 400;
                            line-height: 0.2375rem;
                            color: #ffffff;
                            line-height: 0.35rem;
                            opacity: 1;
                          }
                          span:nth-child(3) {
                            text-align: center;
                            width: 0.5rem;
                            height: 0.35rem;
                            background: #ffb7b9;
                            border-radius: 0.1rem;
                            margin: 0 0.1rem;
                            font-size: 0.175rem;
                            font-weight: 400;
                            line-height: 0.2375rem;
                            color: #ffffff;
                            line-height: 0.35rem;
                            opacity: 1;
                          }
                          span:nth-child(4) {
                            height: 100%;
                            font-size: 0.225rem;
                            font-weight: 400;
                            line-height: 0.5875rem;
                            color: #ff4b40;
                            opacity: 1;
                            position: absolute;
                            right: 1.4125rem;
                            top: 0;
                            cursor: pointer;
                          }
                          span:nth-child(5) {
                            height: 100%;
                            font-size: 0.225rem;
                            font-weight: 400;
                            line-height: 0.5875rem;
                            color: #4f87e6;
                            opacity: 1;
                            position: absolute;
                            right: 0.325rem;
                            top: 0;
                            cursor: pointer;
                          }
                          span:nth-child(6) {
                            width: 0.325rem;
                            height: 100%;
                            position: absolute;
                            top: 0;
                            right: -0.1625rem;
                            background: #47e36c;
                            opacity: 1;
                            font-size: 0.1875rem;
                            font-weight: 400;
                            line-height: 0.25rem;
                            color: #ffffff;
                            text-align: center;
                            padding-top: 0.0625rem;
                            box-sizing: border-box;
                          }
                        }
                      }
                    }
                  }
                  .part1_box2_btn {
                    width: 100%;
                    display: flex;
                    margin: 0.2625rem 0 0 0;
                    justify-content: space-around;
                    align-items: center;
                    div {
                      margin: 0 0.2125rem;
                      width: 2.5625rem;
                      height: 0.6375rem;
                      opacity: 1;
                      border-radius: 0.125rem;
                      font-size: 0.325rem;
                      font-weight: 400;
                      line-height: 0.6375rem;
                      text-align: center;
                      cursor: pointer;
                    }
                    div:nth-child(1) {
                      border: 2px solid #4f87e6;
                      box-shadow: 0 0.0375rem 0.075rem rgba(0, 0, 0, 0.1);
                      color: #4f87e6;
                    }
                    div:nth-child(2) {
                      border: 2px solid #4f87e6;
                      background: #4f87e6;
                      box-shadow: 0 0.0375rem 0.075rem rgba(0, 0, 0, 0.1);
                      color: #ffffff;
                    }
                    .confirmTest {
                      border: 2px solid #4f87e6;
                      background: #4f87e6;
                      box-shadow: 0 0.0375rem 0.075rem rgba(0, 0, 0, 0.1);
                      color: #ffffff !important;
                    }
                  }
                }
              }
              .text1 {
                margin-right: 1.425rem;
                max-width: 3.75rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                padding-left: 0.5875rem;
                box-sizing: border-box;
              }
              .text2,
              .text3 {
                padding: 0 0.1rem;
                height: 0.35rem;
                background: #ff7b7b;
                border-radius: 0.1rem;
                margin: 0 0.075rem;
                font-size: 0.175rem;
                font-weight: 400;
                line-height: 0.2375rem;
                color: #ffffff;
                line-height: 0.35rem;
                opacity: 1;
              }
              .text3 {
                background: #ff9c51;
              }
              .text4 {
                height: 1.0125rem;
                font-size: 0.325rem;
                font-weight: 400;
                line-height: 1.0125rem;
                color: #4f87e6;
                opacity: 1;
                position: absolute;
                right: 0;
                top: 0;
              }
            }
            .el-collapse-item:last-child {
              margin-bottom: 0;
            }
            .el-icon-arrow-right:before {
              content: none;
            }
          }
        }
      }
    }
    .part1 {
      background: rgba(255, 255, 255, 1);
      box-shadow: 0rem 0.0375rem 0.1875rem rgba(167, 194, 240, 0.3);
    }
    .part2 {
      background: rgba(255, 255, 255, 1);
      box-shadow: 0rem 0.0375rem 0.1875rem rgba(167, 194, 240, 0.3);
    }
  }
  // .contain_ri {
  //   width: 6.8625rem;
  //   .part {
  //     margin-bottom: 1.6rem;
  //     h2 {
  //       width: 100%;
  //       height: 0.6875rem;
  //       font-size: 0.525rem;
  //       font-weight: bold;
  //       line-height: 0.6875rem;
  //       color: #434a54;
  //       opacity: 1;
  //       margin-bottom: 0.2rem;
  //       padding-left: 0.275rem;
  //     }
  //     img {
  //       cursor: pointer;
  //       width: 6.8625rem;
  //       height: 3.45rem;
  //     }
  //     .fdfsef {
  //       width: 6.3rem;
  //       height: 2.35rem;
  //       background: rgba(255, 255, 255, 0.39);
  //       border: 0.0125rem solid #b1e1ff;
  //       box-shadow: 0rem 0.0375rem 0.075rem rgba(79, 135, 230, 0.3);
  //       opacity: 1;
  //       border-radius: 0.1875rem;
  //       margin: 0.2rem 0 0.475rem 0.275rem;
  //       p:nth-child(1) {
  //         margin: 0 auto;
  //         width: 5.1375rem;
  //         font-size: 0.2375rem;
  //         font-family: Microsoft YaHei;
  //         font-weight: bold;
  //         line-height: 0.2375rem;
  //         color: #000000;
  //         text-align: center;
  //         padding-top: 0.3rem;
  //         position: relative;
  //       }
  //       p:nth-child(1) span {
  //         width: 5.6rem;
  //         height: 0.1625rem;
  //         background: rgba(79, 135, 230, 0.32);
  //         opacity: 1;
  //         border-radius: 0.1rem;
  //         position: absolute;
  //         left: -0.2rem;
  //         bottom: -0.07rem;
  //       }
  //       p:nth-child(2) {
  //         margin: 0 auto;
  //         width: 4.9rem;
  //         font-size: 0.175rem;
  //         font-weight: 400;
  //         line-height: 0.2375rem;
  //         color: #4f4f4f;
  //         padding-top: 0.375rem;
  //       }
  //       div {
  //         width: 0.75rem;
  //         height: 0.2375rem;
  //         font-size: 0.175rem;
  //         font-weight: 400;
  //         line-height: 0.2375rem;
  //         color: #4f87e6;
  //         float: right;
  //         margin-top: 0.1875rem;
  //         margin-right: 0.375rem;
  //       }
  //     }
  //   }
  // }
}
.con_pa5 {
  width: 17.7rem;
  padding-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  h2 {
    width: 100%;
    font-size: 0.35rem;
    font-weight: 700;
    color: #434a54;
    margin-bottom: 0.3625rem;
  }
  .con_pa5_box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .con_pa5_list {
      .con_pa5_video {
        width: 4.425rem;
        height: 3.8rem;
        margin-bottom: 0.2125rem;
        position: relative;
        .con_pa5_videoimg {
          position: absolute;
          width: 97%;
          height: 97%;
          top: 0;
          left: 0;
          background: #ffffff;
          border-radius: 0.125rem;
        }
        .video_btn {
          width: 1.3875rem;
          height: 1.3875rem;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      p {
        font-size: 0.375rem;
        width: 100%;
        color: #4374b9;
        text-align: center;
      }
    }
  }
}
</style>