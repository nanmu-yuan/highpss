<template>
  <div class="box">
    <div class="contain clearfix">
      <div class="contain_le fr">
        <div class="clearfix top">
          <!-- 用户信息 -->
          <div class="user clearfix fl">
            <div class="img fl">
              <img
                src="@/assets/image/logo.png"
                alt=""
              >
            </div>
            <div
              class="fl"
              v-if="isLogin"
            >
              <p>小栗子考生</p>
              <span>ID:{{loginInfo.nickName}}</span>
            </div>
            <div
              class="fl"
              v-else
            >
              <p>游客</p>
              <span>未登录</span>
            </div>
          </div>
          <!-- 选择考试类型 -->
          <div class="type fr">
            <p v-if="testId==1">C1</p>
            <p v-else-if="testId==0">B2</p>
            <p v-else>B2</p>
            <span
              @click="typeChange"
              style="cursor:pointer"
              v-if="isLogin"
            > <span
                class="iconfont icon-xiugai"
                style="font-size:.275rem"
              ></span>修改考试类型 </span>
          </div>
        </div>
        <div style="width:11.25rem;margin:0 auto">
          <p style="height:.65rem;font-size:.325rem;font-weight:700;color:#353535">您已参加过 <span
              style="font-size:.5rem;"
              :style="{color:isLogin?'#ff4b40':''}"
            >{{isLogin?testNum:'--'}}</span> 场朗思模考 <span
              style="font-size:.225rem;font-weight:400;color:#c6c6c6;cursor: pointer;"
              @click="checkRecord"
              v-if="isLogin"
            >查看考试记录</span> </p>
          <p style="height: .4375rem;font-size:.325rem;font-weight:400;color:#353535;margin: .5rem 0 .375rem 0;">您的模考单次总分及多次单科最高成绩</p>
        </div>
        <!-- 分数 -->
        <div class="score">
          <div>
            <span>总分</span>
            <span>{{isLogin?(scoreTotal?scoreTotal:0):'- -'}}</span>
            <span
              style="font-size:.2rem;font-weight:400;color:#c6c6c6;margin-top: .175rem;"
              v-if="isLogin"
            >单次试卷成绩</span>
          </div>
          <div>
            <span>听力</span>
            <span :class="{current:scoreInfo.highListeningGoal<40&&isLogin}">{{isLogin?(scoreInfo.highListeningGoal?scoreInfo.highListeningGoal:0):'- -'}} <span v-if="scoreInfo.highListeningGoal<40&&isLogin">未达标</span></span>
            <div
              class="operation"
              v-if="scoreInfo.highListeningGoal<40&&isLogin"
            >
              <p
                class="p1"
                @click="toTestList"
              >继续练习</p>
              <p
                class="p2"
                @click="spoken"
              >预约课程</p>
            </div>
          </div>
          <div>
            <span>阅读</span>
            <span :class="{current:scoreInfo.highReadingGoal<40&&isLogin}">{{isLogin?(scoreInfo.highReadingGoal?scoreInfo.highReadingGoal:0):'- -'}} <span v-if="scoreInfo.highReadingGoal<40&&isLogin">未达标</span></span>
            <div
              class="operation"
              v-if="scoreInfo.highReadingGoal<40&&isLogin"
            >
              <p
                class="p1"
                @click="toTestList"
              >继续练习</p>
              <p
                class="p2"
                @click="toRead"
              >预约课程</p>
            </div>
          </div>
          <div>
            <span>写作</span>
            <span :class="{current:scoreInfo.highWritingGoal<40&&isLogin}">{{isLogin?(scoreInfo.highWritingGoal?scoreInfo.highWritingGoal:0):'- -'}}<span v-if="scoreInfo.highWritingGoal<40&&isLogin">未达标</span></span>
            <div
              class="operation"
              v-if="scoreInfo.highWritingGoal<40&&isLogin"
            >
              <p
                class="p1"
                @click="toTestList"
              >继续练习</p>
              <p
                class="p2"
                @click="toWrite"
              >预约课程</p>
            </div>
          </div>
          <div>
            <span>口语</span>
            <span :class="{current:scoreInfo.highSpeakingGoal<40&&isLogin}">{{isLogin?(scoreInfo.highSpeakingGoal?scoreInfo.highSpeakingGoal:0):'- -'}}<span v-if="scoreInfo.highSpeakingGoal<40&&isLogin">未达标</span></span>
            <div
              class="operation"
              v-if="scoreInfo.highSpeakingGoal<40&&isLogin"
            >
              <p
                class="p1"
                @click="toTestList"
              >继续练习</p>
              <p
                class="p2"
                @click="spoken"
              >预约课程</p>
            </div>
          </div>
        </div>
      </div>
      <div class="contain_fr fl">
        <div class="top clearfix">
          <div class="top_le fl">
            <div class="clearfix">
              <div class="line fl"></div>
              <p class="fl">累积学习时长 <span :style="{color:isLogin?'#ff4b40':''}">{{isLogin?(day.studyDayTime?day.studyDayTime:0):'--'}}</span> 天</p>
            </div>
            <div
              class="clearfix"
              style="position:relative"
            >
              <div class="line fl"></div>
              <p
                class="fl"
                style="position:relative"
              >距离考试还剩 <span :style="{color:isLogin?'#ff4b40':''}">{{isLogin?(day.betweenTime?day.betweenTime:0):'--'}}</span> 天 <span
                  v-if="setOrStart&&isLogin"
                  @click="set"
                  style="position:absolute;top:.1rem;right:-1.2rem;color:#c6c6c6;font-size: .25rem;cursor: pointer;"
                >设置目标</span></p>
            </div>
          </div>
          <div class="top_fr fr">
            <img
              src="@/assets/image/left.png"
              alt=""
            >
          </div>
        </div>
        <!-- 分数 -->
        <div class="score">
          <div>
            <span>{{isLogin?(scoreTotalGoal?scoreTotalGoal:0):'- -'}}</span>
            <span>总分</span>
          </div>
          <div>
            <span>{{isLogin?(scoreInfo.listeningGoal?scoreInfo.listeningGoal:0):'- -'}}</span>
            <span>听力</span>
          </div>
          <div>
            <span>{{isLogin?(scoreInfo.readingGoal?scoreInfo.readingGoal:0):'- -'}}</span>
            <span>阅读</span>
          </div>
          <div>
            <span>{{isLogin?(scoreInfo.writingGoal?scoreInfo.writingGoal:0):'- -'}}</span>
            <span>写作</span>
          </div>
          <div>
            <span>{{isLogin?(scoreInfo.speakingGoal?scoreInfo.speakingGoal:0):'- -'}}</span>
            <span>口语</span>
          </div>
        </div>
        <!-- 设置目标 -->
        <button
          @click="set"
          v-if="!setOrStart&&isLogin"
        >设置目标</button>
        <button
          v-if="setOrStart&&isLogin"
          class="btn2"
          @click="startTest"
        >开始模考</button>
      </div>
    </div>
    <div class="project">
      <div class="title">
        <h1>栗子朗思六大备考模块</h1>
      </div>
      <div class="project-list">
        <div class="item pro1">
          <div class="title">朗思模考</div>
          <div>
            <p>1比1高度还原</p>
            <p>考前模拟 真实模拟</p>
          </div>
          <button @click="startTest($event,'lsMoldTest')">查看详情</button>
        </div>
        <div class="item pro2">
          <div class="title">写作训练营</div>
          <div>
            <p>真题试炼 速通写作</p>
            <p>名师讲解 质量保证</p>
          </div>
          <button @click="startTest($event,'langsiWrite')">查看详情</button>
        </div>
        <div class="item pro3">
          <div class="title">口语保分班</div>
          <div>
            <p>口语保分 模考试炼</p>
            <p>课后答疑 语音纠错</p>
          </div>
          <button @click="startTest($event,'langsiSpoken')">查看详情</button>
        </div>
        <div class="item pro4">
          <div class="title">口语模考</div>
          <div>
            <p>1对1真实还原</p>
            <p>查缺补漏 定制分析</p>
          </div>
          <button @click="startTest($event,'oralMoldTest')">查看详情</button>
        </div>
        <div class="item pro5">
          <div class="title">写作批改</div>
          <div>
            <p>语法 词汇 逻辑 任务点回应</p>
            <p>定制批改 查缺补漏</p>
          </div>
          <button @click="startTest($event,'writingCorrections')">查看详情</button>
        </div>
        <div class="item pro6">
          <div class="title">全科预测</div>
          <div>
            <p>听力阅读写作稳定命中</p>
            <p>100%出分 0失误</p>
          </div>
          <button @click="startTest($event,'generalPrediction')">查看详情</button>
        </div>
      </div>
    </div>
    <!-- first -->
    <div class="main-item1 content1">
      <div class="title">
        <h1>栗子朗思六大核心优势</h1>
      </div>
      <div class="content w">
        <img
          src="@/assets/image/home_1.png"
          alt=""
        >
      </div>
    </div>
    <!-- second 写作 -->
    <div class="teacher clearfix">
      <div class="title">
        <p>Language Cert </p>
        <h2>栗子朗思主讲团队</h2>
      </div>
      <div class="teacher_info">
        <img
          v-show="teachNum==0"
          :src="teachList[teachNum].imgUrl"
          alt=""
          class="teach_big_img img1"
        >
        <img
          v-show="teachNum==1"
          :src="teachList[teachNum].imgUrl"
          alt=""
          class="teach_big_img img2"
        >
        <img
          v-show="teachNum==2"
          :src="teachList[teachNum].imgUrl"
          alt=""
          class="teach_big_img img3"
        >
        <img
          v-show="teachNum==3"
          :src="teachList[teachNum].imgUrl"
          alt=""
          class="teach_big_img img3"
        >
        <div class="info">
          <div class="uname">{{teachList[teachNum].uname}}</div>
          <div class="info_dsc">{{teachList[teachNum].dsc}}</div>
        </div>
      </div>
      <div class="teacher_list">
        <div
          @mouseenter="teachEnter(0)"
          @mouseleave="teachLeave(0)"
        >
          <!-- <div>朗思写作</div> -->
          <img
            src="@/assets/image/t1.png"
            alt=""
            v-show="teachNum==0?true:false"
          >
          <img
            src="@/assets/image/ta1.png"
            alt=""
            v-show="teachNum!=0?true:false"
          >
        </div>
        <div
          @mouseenter="teachEnter(1)"
          @mouseleave="teachLeave(1)"
        >
          <!-- <div>朗思口语</div> -->
          <img
            src="@/assets/image/t2.png"
            alt=""
            v-show="teachNum==1?true:false"
          >
          <img
            src="@/assets/image/ta2.png"
            alt=""
            v-show="teachNum!=1?true:false"
          >
        </div>
        <div
          @mouseenter="teachEnter(2)"
          @mouseleave="teachLeave(2)"
        >
          <!-- <div class="third"><span>朗思</span>
            <span class="zd">1v1</span>
          </div> -->
          <img
            src="@/assets/image/t3.png"
            alt=""
            v-show="teachNum==2?true:false"
          >
          <img
            src="@/assets/image/ta3.png"
            alt=""
            v-show="teachNum!=2?true:false"
          >
        </div>
        <div
          @mouseenter="teachEnter(3)"
          @mouseleave="teachLeave(3)"
        >
          <!-- <div class="third"><span>朗思</span>
            <span class="zd">1v1</span>
          </div> -->
          <img
            src="@/assets/image/t4.png"
            alt=""
            v-show="teachNum==3?true:false"
          >
          <img
            src="@/assets/image/ta4.png"
            alt=""
            v-show="teachNum!=3?true:false"
          >
        </div>
      </div>
    </div>
    <!-- third -->
    <div class="banner">
      <div class="banner_mask"></div>
      <div class="banner_con">
        <div class="title">
          <h2>以教学效果为导向，用实力彰显成果</h2>
          <p style="margin-top:.1875rem">因为真实，所以信任，专业源于专注</p>
        </div>
        <div class="container">
          <div class="container_le">
            <div class="contain_title">专注研究打造朗思课程</div>
            <ul>
              <li>通过对朗思考生的跟踪研究形成大数据系统</li>
              <li>通过数据分析，将总结出的朗思题目难点切片</li>
              <li>告别填鸭式教学，互动教学，互动答疑</li>
            </ul>
          </div>
          <div class="container_fr">
            <div class="contain_title">超千名学员口碑认证</div>
            <ul>
              <li>小班化教学，专注备考进程</li>
              <li>分阶段教学，高效助力备考</li>
              <li>互动式教学，解答考生疑惑</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 申请课程体验 -->
    <div class="toApplyFor">
      <p class="title">申请课程体验</p>
      <ul>
        <li
          @click="showImg(1)"
          @mouseenter="imgEnter(1)"
          @mouseleave="imgLeave(1)"
        >
          <img
            src="@/assets/image/project/write.png"
            alt=""
          >
          <img
            src="@/assets/image/code.png"
            alt=""
            class="img"
            v-show="imgNums[0].imgNum==1||imgNums[0].flag"
          >
        </li>
        <li
          @click="showImg(2)"
          @mouseenter="imgEnter(2)"
          @mouseleave="imgLeave(2)"
        >
          <img
            src="@/assets/image/project/spoken.png"
            alt=""
          >
          <img
            src="@/assets/image/code.png"
            alt=""
            class="img"
            v-show="imgNums[1].imgNum==2||imgNums[1].flag"
          >
        </li>
        <li
          @click="showImg(3)"
          @mouseenter="imgEnter(3)"
          @mouseleave="imgLeave(3)"
        >
          <img
            src="@/assets/image/project/listen.png"
            alt=""
          >
          <img
            src="@/assets/image/code.png"
            alt=""
            class="img"
            v-show="imgNums[2].imgNum==3||imgNums[2].flag"
          >
        </li>
        <li
          @click="showImg(4)"
          @mouseenter="imgEnter(4)"
          @mouseleave="imgLeave(4)"
        >
          <img
            src="@/assets/image/project/read.png"
            alt=""
          >
          <img
            src="@/assets/image/code.png"
            alt=""
            class="img"
            v-show="imgNums[3].imgNum==4||imgNums[3].flag"
          >
        </li>
      </ul>
    </div>
    <!-- 弹窗区 -->
    <!-- 考试类型弹窗 -->
    <div
      class="type_dialog"
      v-if="typeDialog"
    >
      <p class="title">请选择您参加的考试类型</p>
      <!-- select -->
      <div class="radio">
        <div
          class="radio-item clearfix"
          v-for="(item,index) in list"
          :key="index"
          @click="dio(index,item.id)"
        >
          <div class="btn fl">
            <div
              class="point"
              v-show="nums==item.id"
            ></div>
          </div>
          <div class="fl neirong">{{item.examName}}</div>
        </div>
      </div>
      <button @click="typeSure">确定</button>
    </div>
    <!-- 登录弹窗 -->
    <div
      class="login_dialog"
      v-if="loginDialog"
    >
      <span
        class="iconfont icon-guanbi"
        @click="close"
      ></span>
      <div class="dsc fl">
        <div class="top">
          <p>LanguageCert Highpass</p>
          <h1>嗨趴朗思</h1>
          <p class="mock">在线模考</p>
        </div>
        <p>
          <span class="iconfont">√</span>
          <span>一步快速注册</span>
        </p>
        <p>
          <span class="iconfont">√</span>
          <span>朗思在线模考</span>
        </p>
        <p>
          <span class="iconfont">√</span>
          <span>考试系统一比一还原</span>
        </p>
      </div>
      <div class="from fl">
        <div class="wx">
          <div class="wx_tit">
            <img
              src="@/assets/image/wx.png"
              alt=""
            />
            <span>微信扫码立即登录</span>
          </div>
          <div class="wx_code">
            <img
              :src="imgUrl"
              alt=""
            />
          </div>
        </div>
        <!-- 同意协议 -->
        <p class="argee">
          <el-checkbox v-model="is_agree">我已阅读并同意</el-checkbox>
        </p>
        <!-- 协议 -->
        <div class="contract">
          <router-link
            to="agreement"
            target="_blank"
          >《栗子朗思相关协议》</router-link>
        </div>
      </div>
    </div>
    <!-- 设置目标弹窗 -->
    <div
      class="set_dialog"
      v-if="setDialog"
    >
      <div class="time clearfix">
        <div class="line fl"></div>
        <div class="fl">预计考试时间 <input
            type="text"
            placeholder="--"
            v-model="testTime.year"
            v-focus
          />年<input
            type="text"
            placeholder="--"
            v-model="testTime.month"
          />月 <input
            type="text"
            placeholder="--"
            v-model="testTime.day"
          />日</div>
      </div>
      <!-- 成绩 -->
      <div class="score">
        <div>
          <span>{{totalCount?totalCount:'--'}}</span>
          <span>总分</span>
        </div>
        <div>
          <span><input
              type="text"
              placeholder="--"
              v-model="score.listeningGoal"
            > </span>
          <span>听力</span>
        </div>
        <div>
          <span><input
              type="text"
              placeholder="--"
              v-model="score.readingGoal"
            ></span>
          <span>阅读</span>
        </div>
        <div>
          <span><input
              type="text"
              placeholder="--"
              v-model="score.writingGoal"
            ></span>
          <span>写作</span>
        </div>
        <div>
          <span><input
              type="text"
              placeholder="--"
              v-model="score.speakingGoal"
            ></span>
          <span>口语</span>
        </div>
      </div>
      <button @click="setSure">确定</button>
    </div>
    <!-- 遮罩 -->
    <div
      class="mask"
      @click="close"
      v-show="typeDialog || loginDialog ||setDialog"
    ></div>
    <div
      class="codeDialog"
      v-show="dialog"
    >
      <span
        class="iconfont icon-guanbi1"
        @click="closeDialog"
      ></span>
      <img
        src="@/assets/image/code.png"
        alt=""
      >
      <p>关注公众号领取资料！</p>
    </div>
    <!-- 广告 -->
    <div
      class="adverti"
      v-if="closeAdvertis"
    >
      <!-- 关闭 -->
      <span
        class="close iconfont icon-guanbi"
        @click="closeAdvertis=false"
      ></span>
      <!-- 图片区 -->
      <div class="picture fl">
        <img
          style="width:3rem;height:2.8125rem;"
          src="@/assets/image/adverti_3.png"
          alt=""
        >
        <img
          style="width:2.8rem;height:3.25rem;"
          src="@/assets/image/adverti_1.png"
          alt=""
        >
        <img
          style="width:3.0375rem;height:2.8125rem"
          src="@/assets/image/adverti_2.png"
          alt=""
        >
      </div>
      <h1>栗子朗思独家预测</h1>
      <div class="logos fr">
        <img
          src="@/assets/image/logo2.png"
          alt=""
        >
      </div>
    </div>
  </div>
</template>
<script>
import layoutProject from '@/components/layoutProject.vue'
export default {
  props: {
    islo: Boolean
  },
  data() {
    return {
      dialog: false,
      flag1: true,
      is_agree: true,
      closeAdvertis: true,
      loginInfo: {},
      nums: 1,
      imgUrl: '',
      key: '',
      testId: 1,
      tempId: 1,
      hidden1: false,
      hidden2: false,
      hidden3: false,
      examList: [],
      list: [
        {
          id: 1,
          examName: 'LanguageCert International ESOL C1 Expert'
        },
        {
          id: 0,
          examName: 'LanguageCert International ESOL B2 Communicator'
        }
      ],
      project: [
        {
          title: '朗思模考',
          contain: '1比1高度还原考前模拟 真实模拟'
        },
        {
          title: '写作训练营',
          contain: '真题试炼 速通写作 名师讲解 质量保证',
          path: 'langsiWrite'
        },
        {
          title: '口语保分班',
          contain: '口语保分 模考试炼 课后答疑 语音纠错',
          path: 'langsiSpoken'
        },
        {
          title: '口语模考',
          contain: '1对1真实还原查缺补漏 定制分析'
        },
        {
          title: '写作批改',
          contain: '语法 词汇 逻辑 任务点回应 定制批改 查缺补漏 '
        },
        {
          title: '全科预测',
          contain: '听力阅读写作稳定命中 100%出分 0失误'
        }
      ],
      typeDialog: false,
      loginDialog: false,
      setDialog: false,
      flag: false,
      isLogin: false,
      isshow: 0,
      setOrStart: false,
      num: 0,
      teachNum: 0,
      teachList: [
        {
          uname: '朱均超',
          imgUrl: require('@/assets/image/dt1.png'),
          dsc: `本科毕业于南京师范大学，后于美国进修英语教育。托福113分，雅思8分，通
过TEM-8，教师资格证书。`
        },
        {
          uname: '马慧慧',
          imgUrl: require('@/assets/image/dt2.png'),
          dsc: `英国约克大学管理学硕士，英语专业本科，高中英语教师资格证
国内知名教培行业5年雅思听力和口语教师工作经验，曾任环球雅思口语组负责人，
获得最受学生欢迎老师称号，现专研朗思教育一年有余，深谙朗思出题套路，口语
规则，及具有独家口语难题破解之法。`
        },
        {
          uname: '许茜',
          imgUrl: require('@/assets/image/dt3.png'),
          dsc: `曾就职于英国文化协会雅思考试中心北京办公室，担任雅思阅读听力阅卷老师，
并参与雅思监考等工作。托业960分（满分990） 独创朗思口语 16字真言 雅思
官方认证教师 托福官方认证教师`
        },
        {
          uname: '陈涂',
          imgUrl: require('@/assets/image/dt4.png'),
          dsc: `掌握多种语言，深谙语言学习的本质。总结出适合于各个阶段考 生的语言学习理论，帮助同学们补充基础英语的功底。讲解基础 语法，高级语法。 致力于帮助广大考生在提高英语表达水平的基 础上掌握考试的规律和特点。`
        }
      ],
      imgNums: [
        {
          imgNum: 0,
          flag: false
        },
        {
          imgNum: 0,
          flag: false
        },
        {
          imgNum: 0,
          flag: false
        },
        {
          imgNum: 0,
          flag: false
        }
      ],

      timer: '',
      // 提交
      testTime: {
        year: '20',
        month: '',
        day: ''
      },
      score: {
        listeningGoal: '',
        readingGoal: '',
        writingGoal: '',
        speakingGoal: ''
      },
      //  获取到的数据
      scoreInfo: {
        highListeningGoal: '',
        highReadingGoal: '',
        highWritingGoal: '',
        highSpeakingGoal: ''
      },
      testNum: 0,
      day: {
        betweenTime: '',
        studyDayTime: ''
      }
    }
  },
  computed: {
    scoreTotal() {
      let scoreTotal = this.scoreInfo.highSpeakingGoal + this.scoreInfo.highWritingGoal + this.scoreInfo.highReadingGoal + this.scoreInfo.highListeningGoal
      return scoreTotal
    },
    scoreTotalGoal() {
      let scoreTotal = this.scoreInfo.writingGoal + this.scoreInfo.speakingGoal + this.scoreInfo.readingGoal + this.scoreInfo.listeningGoal
      return scoreTotal
    },
    totalCount() {
      let total = Number(this.score.listeningGoal) + Number(this.score.readingGoal) + Number(this.score.writingGoal) + Number(this.score.writingGoal)
      return total
    }
  },
  watch: {
    islo(newV, oddV) {
      this.isLogin = newV
    }
  },
  created() {
    let token = localStorage.getItem('token')
    if (token) {
      this.isLogin = true
    }
    this.tempId = JSON.parse(sessionStorage.getItem('testId'))
    if (this.tempId != null) {
      this.testId = this.tempId
      this.nums = this.tempId
    }
    sessionStorage.setItem('testId', this.testId)
    if (this.isLogin) {
      this.getScore()
      this.getTime()
      this.getTestNum()
      this.loginInfo = JSON.parse(localStorage.getItem('loginInfo'))
    }
  },
  destroyed() {
    clearInterval(this.timer)
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    }
  },
  methods: {
    teachEnter(i) {
      this.teachNum = i
    },
    teachLeave() {},

    toTestList() {
      this.$router.push('SingleExercise')
    },
    toRead() {
      this.$router.push('langsigeneral')
    },
    toWrite() {
      this.$router.push('langsiWrite')
    },
    spoken() {
      this.$router.push('langsiSpoken')
    },
    // 退出
    layout() {
      this.isLogin = false
      this.scoreInfo = {
        highListeningGoal: '',
        highReadingGoal: '',
        highWritingGoal: '',
        highSpeakingGoal: ''
      }
      this.testNum = 0
      this.day = {
        studyDayTime: '',
        studyDayTime: ''
      }
    },
    open() {
      this.dialog = true
    },
    closeDialog() {
      this.dialog = false
    },
    // 登录
    login() {
      this.loginDialog = true
      this.getWxCode()
    },
    // 获取二维码
    getWxCode() {
      this.$api
        .getWxCode()
        .then((res) => {
          if (res.data.code == 200) {
            this.imgUrl = res.data.data.qrUrl
            this.key = res.data.data.eventKey
          }
          this.timer = setInterval(() => {
            this.$api.getLoginState(this.key).then((result) => {
              if (result.data.code == 200) {
                if (result.data.data.isLogin) {
                  clearInterval(this.timer)
                  let loginInfo = result.data.data.loginInfo
                  localStorage.setItem('token', loginInfo.token)
                  localStorage.setItem('loginInfo', JSON.stringify(loginInfo.users))
                  this.loginInfo = loginInfo.users
                  this.isLogin = true
                  this.getScore()
                  this.getTime()
                  this.getTestNum()
                  this.$emit('logo', this.isLogin)
                  this.loginDialog = false
                  this.$message({
                    type: 'success',
                    message: '登录成功!'
                  })
                }
              }
            })
          }, 2000)
        })
        .catch((err) => {})
    },
    // 关闭弹窗
    close() {
      this.typeDialog = false
      this.loginDialog = false
      this.setDialog = false
      clearInterval(this.timer)
    },
    // 考试类型选择
    dio(index, id) {
      this.nums = id
      this.tempId = id
    },
    // 类型确认
    typeSure() {
      this.testId = this.tempId
      console.log(this.tempId)
      sessionStorage.setItem('testId', this.testId)
      this.typeDialog = false
    },
    // 查看考试记录
    checkRecord() {
      if (!this.isLogin) {
        this.getWxCode()
        return (this.loginDialog = true)
      }
      this.$router.push('testRecords')
    },
    // 考试类型选择
    typeChange() {
      if (!this.isLogin) {
        this.getWxCode()
        return (this.loginDialog = true)
      }
      this.typeDialog = true
    },
    // 设置目标
    set() {
      if (!this.isLogin) {
        this.getWxCode()
        return (this.loginDialog = true)
      }
      this.setDialog = true
    },
    // 设置目标确认
    async setSure() {
      let date = new Date()
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let day = date.getDate()
      if (this.testTime.year < year) {
        return this.$message({
          type: 'warning',
          message: '请填写正确时间！'
        })
      }
      if (this.testTime.year == year && this.testTime.month < month) {
        return this.$message({
          type: 'warning',
          message: '请填写正确时间！'
        })
      }
      if (this.testTime.year == year && this.testTime.month == month && this.testTime.day < day) {
        return this.$message({
          type: 'warning',
          message: '请填写正确时间！'
        })
      }
      let score = this.score
      if (score.listeningGoal <= 0 || score.readingGoal <= 0 || score.writingGoal <= 0 || score.speakingGoal <= 0) {
        return this.$message({
          type: 'warning',
          message: '所填分数必须大于0！'
        })
      }
      if (score.listeningGoal > 50 || score.readingGoal > 50 || score.writingGoal > 50 || score.speakingGoal > 50) {
        return this.$message({
          type: 'warning',
          message: '所填分数不能大于50！'
        })
      }
      let time = this.testTime.year + '-' + this.testTime.month + '-' + this.testTime.day
      let endTime = +new Date(time)
      this.setDialog = false
      let obj = {
        examTime: endTime,
        ...this.score
      }
      if (this.flag1) {
        this.flag1 = false
        await this.$api.upTime(endTime).then((res) => {
          console.log(res)
        })
        await this.$api
          .setMb(JSON.stringify(obj))
          .then((res) => {
            if (res.data.code == 200) {
              this.flag1 = true
              this.$message({
                type: 'success',
                message: '设置成功'
              })
            }
          })
          .catch((err) => {
            this.flag1 = true
            this.$message({
              type: 'error',
              message: '设置失败'
            })
          })
        this.getScore()
        this.getTime()
      }
    },
    // 开始模考
    startTest(event, path) {
      if (path) {
        return this.$router.push(path)
      }
      this.$router.push('SingleExercise')
    },
    // 单项练习
    SingleExercise(event, path) {
      if (path) {
        return this.$router.push(path)
      }
      this.$router.push('SingleExercise')
    },
    // 获取分数
    getScore() {
      this.$api.getScore().then((res) => {
        console.log(res)
        console.log(this.setOrStart)
        if (res.data.code == 200) {
          if (!res.data.data) {
            return (this.scoreInfo = {
              highListeningGoal: '',
              highReadingGoal: '',
              highWritingGoal: '',
              highSpeakingGoal: ''
            })
          }
          this.scoreInfo = res.data.data
          console.log(this.scoreInfo)
          this.testTime.year = this.scoreInfo.examTime?.substring(0, 4)
          this.testTime.month = this.scoreInfo.examTime?.substring(5, 7)
          this.testTime.day = this.scoreInfo.examTime?.substring(8, 10)
          this.score.listeningGoal = this.scoreInfo.listeningGoal
          this.score.readingGoal = this.scoreInfo.readingGoal
          this.score.writingGoal = this.scoreInfo.writingGoal
          this.score.speakingGoal = this.scoreInfo.speakingGoal
          let obj = res.data.data
          if (obj.listeningGoal || obj.readingGoal || obj.speakingGoal || obj.writingGoal) {
            this.setOrStart = true
          }
          console.log(this.setOrStart)
        }
      })
    },
    // 获取时间
    getTime() {
      this.$api.getTime().then((res) => {
        if (res.data.code == 200) {
          this.day = res.data.data
          console.log(this.day)
        }
      })
    },
    // 获取考试次数
    getTestNum() {
      this.$api.getTestNum().then((res) => {
        if (res.data.code == 200) {
          console.log(res.data.data)
          this.testNum = res.data.data
        }
      })
    },
    imgLeave(index) {
      this.imgNums[index - 1].imgNum = 0
    },
    imgEnter(index) {
      this.imgNums[index - 1].imgNum = index
    },
    showImg(index) {
      this.imgNum = index
      this.imgNums[index - 1].flag = !this.imgNums[index - 1].flag
    }
  },
  components: {
    layoutProject
  }
}
</script>
<style lang="less" scoped>
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
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(67, 74, 84, 0.48);
  z-index: 100;
}
.contain {
  padding: 0.675rem 0 0 0;
  width: 94%;
  min-width: 19.5rem;
  margin: 0 auto;
  .contain_le {
    width: 63.3%;
    height: 7.85rem;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0rem 0.0375rem 0.1875rem rgba(79, 135, 230, 0.3);
    border-radius: 0.1875rem;
    padding: 0.3rem 0.425rem;
    box-sizing: border-box;
    .user {
      .img {
        width: 1.55rem;
        height: 1.55rem;
        border-radius: 50%;
        padding: 0.1875rem;
        box-sizing: border-box;
        overflow: hidden;
      }
      p {
        margin-top: 0.35rem;
        font-size: 0.35rem;
        font-weight: bold;
        line-height: 0.4625rem;
        color: #353535;
      }
      span {
        font-size: 0.25rem;
        font-weight: 400;
        line-height: 0.325rem;
        color: #c6c6c6;
      }
    }
    .type {
      p {
        font-size: 0.5rem;
        font-weight: bold;
        line-height: 0.65rem;
        color: #4f87e6;
        text-align: right;
        text-shadow: 0rem 0.0375rem 0.075rem rgba(67, 74, 84, 0.28);
      }
      span {
        font-size: 0.225rem;
        font-weight: 400;
        line-height: 0.3rem;
        color: #c6c6c6;
      }
    }
    .score {
      width: 98%;
      height: 3.0125rem;
      margin: 0 auto;
      background: rgba(245, 247, 250, 1);
      box-shadow: 0rem 0.0375rem 0.075rem rgba(79, 135, 230, 0.3);
      border-radius: 0.1rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0.4375rem 0.775rem 0.375rem;
      box-sizing: border-box;
      & > div {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        span.current {
          color: #ff4b40 !important;
        }
        & > span:nth-child(-n + 2) {
          height: 0.5rem;
          font-size: 0.375rem;
          font-weight: bold;
          line-height: 0.5rem;
          color: #434a54;
        }
        & > span:nth-child(2) {
          position: relative;
          span {
            position: absolute;
            top: 0.025rem;
            left: 0.375rem;
            font-size: 0.2rem;
            font-weight: 400;
            width: 1.25rem;
          }
        }
        .operation {
          p {
            padding: 0 0.125rem;
            height: 0.375rem;
            border-radius: 0.1rem;
            font-size: 0.2rem;
            font-weight: 400;
            line-height: 0.375rem;
            color: #ffffff;
            text-align: center;
            margin: 0.175rem 0;
            cursor: pointer;
          }
          .p1 {
            background: rgba(129, 167, 231, 1);
            box-shadow: 0rem 0.0375rem 0.075rem rgba(79, 135, 230, 0.3);
          }
          .p2 {
            background: rgba(255, 129, 122, 1);
            box-shadow: 0rem 0.0375rem 0.075rem rgba(0, 0, 0, 0.16);
          }
        }
      }
    }
  }
  .contain_fr {
    width: 31.7%;
    height: 7.85rem;
    background: rgba(255, 255, 255, 0.39);
    box-shadow: 0rem 0.0375rem 0.1875rem rgba(79, 135, 230, 0.3);
    border-radius: 0.1875rem;
    box-sizing: border-box;
    .top_le {
      width: 67.9%;
    }
    .top_le > div {
      padding: 0.475rem 0 0.475rem 6%;

      &:first-child {
        border-bottom: 1px solid #ccc;
      }
      .line {
        width: 0.125rem;
        height: 0.5rem;
        background: rgba(79, 135, 230, 1);
        border-radius: 0px 8px 8px 0px;
        margin-right: 5%;
      }
      p {
        font-size: 0.4375rem;
        font-family: Microsoft YaHei;
        font-weight: bold;
        line-height: 0.45rem;
        color: #434a54;
      }
    }
    .top_fr {
      width: 32%;
      margin-top: 0.5rem;
      margin-right: -0.475rem;
    }
    .score {
      width: 90%;
      height: 2.2375rem;
      background: rgba(250, 250, 250, 1);
      border-radius: 0.1rem;
      margin: 0 auto;
      display: flex;
      padding: 0.45rem 0.4rem 0.275rem 0.4rem;
      box-sizing: border-box;
      justify-content: space-around;
      div {
        height: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-size: 0.375rem;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #434a54;
      }
    }
    button {
      display: block;
      margin: 0.875rem auto 0 auto;
      width: 3.0375rem;
      height: 0.9rem;
      background: rgba(79, 135, 230, 1);
      border-radius: 0.1rem;
      font-size: 0.4375rem;
      font-weight: 400;
      line-height: 0.575rem;
      color: #ffffff;
    }
    .btnGrop {
      width: 90%;
      margin: 0.875rem auto 0;
      display: flex;
      justify-content: space-between;
      button {
        margin: 0;
        width: 3.0375rem;
        height: 0.9rem;
        font-size: 0.4375rem;
        border-radius: 0.1875rem;
      }
      .btn1 {
        background-color: #fff;
        border: 0.0375rem solid #4f87e6;
        box-shadow: 0.0375rem 0.0375rem 0.075rem rgba(79, 135, 230, 0.3);
        color: #4f87e6;
        box-sizing: border-box;
      }
      .btn2 {
        background: #4f87e6;
        box-shadow: 0rem 0.0375rem 0.075rem rgba(79, 135, 230, 0.3);
        color: #fff;
      }
    }
  }
}
.project {
  margin-top: 0.625rem;
  .project-list {
    width: 20.35rem;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .pro1 {
      .title {
        color: #fbcf4b;
      }
      background: url(@/assets/image/project/1.png) no-repeat center;
      background-size: contain;
    }
    .pro2 {
      .title {
        color: #b1e1ff;
      }
      background: url(@/assets/image/project/2.png) no-repeat center;
      background-size: contain;
    }
    .pro3 {
      .title {
        color: #ffaaa5;
      }
      background: url(@/assets/image/project/6.png) no-repeat center;
      background-size: contain;
    }
    .pro4 {
      .title {
        color: #30e7a9;
      }
      background: url(@/assets/image/project/3.png) no-repeat center;
      background-size: contain;
    }
    .pro5 {
      .title {
        color: #ff8d98;
      }
      background: url(@/assets/image/project/5.png) no-repeat center;
      background-size: contain;
    }
    .pro6 {
      .title {
        color: #55beff;
      }
      background: url(@/assets/image/project/7.png) no-repeat center;
      background-size: contain;
    }
    .item {
      width: 6.675rem;
      height: 4.0625rem;
      border-radius: 0.1875rem;
      @media screen and (max-width: 23.3rem) {
        .title {
          font-size: 0.625rem !important;
        }
        p {
          font-size: 0.275rem !important;
        }
      }
      @media screen and (max-width: 18.3125rem) {
        .title {
          font-size: 0.575rem !important;
        }
        p {
          font-size: 0.2rem !important;
        }
      }
      .title {
        width: 100%;
        height: 0.9625rem;
        font-size: 0.675rem;
        font-family: FZFW Qing Yin TiS E;
        font-weight: 400;
        line-height: 0.9625rem;
        margin-top: 0.5625rem;
        -webkit-text-stroke-color: #353535;
        -webkit-text-stroke-width: 1px;
      }
      p {
        width: 70%;
        margin: 0.0625rem auto;
        font-size: 0.35rem;
        font-weight: 400;
        line-height: 0.4375rem;
        color: #434a54;
      }
      button {
        display: block;
        margin: 0.175rem auto 0 auto;
        font-size: 0.35rem;
        font-family: Microsoft YaHei;
        background-color: transparent;
        font-weight: 400;
        color: #ffffff;
      }
    }
  }
  & > .title {
    height: 2.5rem;
    line-height: 2.5rem;
    background: url(@/assets/image/project.png) no-repeat center;
    text-align: center;
    h1 {
      font-size: 0.625rem;
      font-weight: bold;
      color: #434a54;
    }
  }
  /deep/ .item {
    margin-bottom: 1.125rem;
  }
}
.main-item1 {
  text-align: center;
  padding: 0.675rem 0;
  box-sizing: border-box;
  background-color: #f5f7fa;
  h1 {
    margin: 0.8125rem 0;
    font-size: 0.625rem;
    font-family: Source Han Sans CN;
    font-weight: bold;
    line-height: 1.0625rem;
    color: #434a54;
  }
  .content1 {
    width: 17.175rem;
    margin: 0 auto;
  }
}
.teacher {
  width: 95.3%;
  min-width: 22.2125rem;
  margin: 0 auto;
  padding: 1.65rem 0 2.625rem 0;
  .title {
    text-align: center;
    p {
      font-size: 0.625rem;
      font-family: Microsoft YaHei-Bold, Microsoft YaHei;
      font-weight: bold;
      color: rgba(79, 135, 230, 0.17);
    }
    h2 {
      position: relative;
      top: -0.425rem;
      font-size: 0.625rem;
      font-family: Source Han Sans CN-Bold, Source Han Sans CN;
      font-weight: bold;
      color: #434a54;
      letter-spacing: 0.2rem;
    }
  }
  .teacher_info {
    margin-top: 0.5rem;
    height: 3.8125rem;
    background: #6584b0;
    padding: 0.525rem 0;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    .yh1 {
    }
    .yh2 {
    }
    .teach_big_img {
      position: absolute;
      top: -0.925rem;
      left: 1.35rem;
      width: auto;
      height: auto;
    }
    .img1 {
      width: 6.5875rem;
      height: 7.65rem;
    }
    .img2 {
      width: 6.575rem;
      height: 7.65rem;
    }
    .img3 {
      width: 5.8125rem;
      height: 7.5875rem;
    }
    .info {
      margin-left: 8.6125rem;
      width: 12.3rem;
      .uname {
        font-size: 0.55rem;
        font-family: Microsoft YaHei-Bold, Microsoft YaHei;
        font-weight: bold;
        color: #ffffff;
        line-height: 0.5625rem;
        margin-bottom: 0.3rem;
      }
      .info_dsc {
        width: 12.3rem;
        font-size: 0.325rem;
        font-family: Microsoft YaHei-Regular, Microsoft YaHei;
        color: #ffffff;
        line-height: 0.4375rem;
      }
    }
  }
  .teacher_list {
    float: right;
    margin-right: 3.1125rem;
    margin-top: 0.4rem;
    width: 11.075rem;
    display: flex;
    justify-content: space-between;
    & > div {
      width: 2.075rem;
      height: 1.8125rem;
      overflow: hidden;
      position: relative;
      // &:first-child {
      //   img {
      //     height: auto;
      //   }
      // }
      // &:last-child {
      //   img {
      //     width: calc(2.075rem - .6rem);
      //   }
      // }
      // &:nth-child(3) {
      //   img {
      //     width: calc(2.075rem - 0.47rem);
      //   }
      // }
      .teach_mask {
        position: absolute;
        z-index: 5;
        width: 100%;
        height: 100%;
        background: rgba(79, 79, 79, 0.53);
      }
      div {
        float: left;
        width: 0.75rem;
        height: 100%;
        font-size: 0.2875rem;
        text-align: center;
        font-family: Microsoft YaHei-Bold, Microsoft YaHei;
        font-weight: bold;
        color: #434a54;
        padding: 0 0.2rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        .zd {
          letter-spacing: 0.025rem;
        }
      }
      .third {
        flex-direction: column;
        justify-content: center;
      }
      img {
        position: absolute;
        bottom: 0;
        right: 0;
        // width: calc(2.075rem - 0.57rem);
        width: 100%;
        height: 100%;
      }
    }
  }
  // & > div {
  //   width: 30.3%;
  //   height: 8.125rem;
  //   background-color: #f5f7fa;
  //   .teacher_head {
  //     height: 5.35rem;
  //     display: flex;
  //     justify-content: space-between;
  //     align-items: center;
  //     img {
  //       width: auto;
  //       height: 5.7rem;
  //     }
  //     div {
  //       text-align: center;
  //       width: 23.7%;
  //       height: 100%;
  //       font-size: 0.625rem;
  //       font-weight: bold;
  //       color: #434a54;
  //       box-sizing: border-box;
  //       padding: 0.95rem 0.25rem 0;
  //     }
  //   }
  // }
  // .teacher_info {
  //   padding: 0.1625rem 0.4375rem 0;
  //   height: 2.775rem;
  //   box-sizing: border-box;
  //   position: relative;
  //   .name {
  //     font-size: 0.375rem;
  //     font-weight: bold;
  //     line-height: 0.5625rem;
  //     color: #434a54;
  //   }
  //   .dsc {
  //     font-size: 0.325rem;
  //     font-weight: 400;
  //     line-height: 0.4375rem;
  //     color: #434a54;
  //     margin-top: 0.25rem;
  //     @media screen and (max-width: 21.25rem) {
  //       font-size: 0.275rem;
  //     }
  //     @media screen and (max-width: 18.5rem) {
  //       font-size: 0.25rem;
  //     }
  //   }
  //   span {
  //     position: absolute;
  //     font-size: 0.45rem;
  //     bottom: 0.125rem;
  //     right: 0.325rem;
  //     cursor: pointer;
  //   }
  //   .hidden_con {
  //     width: 100%;
  //     position: absolute;
  //     top: 2.775rem;
  //     z-index: 3;
  //     left: 0;
  //     background-color: #f5f7fa;
  //     font-size: 0.325rem;
  //     font-weight: 400;
  //     line-height: 0.5625rem;
  //     color: #434a54;
  //     padding: 0 0.4375rem;
  //     box-sizing: border-box;
  //     @media screen and (max-width: 21.25rem) {
  //       font-size: 0.275rem;
  //     }
  //     @media screen and (max-width: 18.5rem) {
  //       font-size: 0.25rem;
  //     }
  //   }
  // }
}
.banner {
  width: 100%;
  min-width: 12.275rem;
  height: 8.8125rem;
  background: url(@/assets/image/banner.png) no-repeat;
  position: relative;
  .banner_mask {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(61, 61, 61, 0.8);
  }
  .banner_con {
    width: 100%;
    height: 8.8125rem;
    position: absolute;
    z-index: 2;
  }
  .title {
    width: 10rem;
    margin: 0 auto;
    padding: 0.75rem 0;
    h2 {
      text-align: center;
      font-size: 0.625rem;
      font-weight: 400;
      line-height: 0.825rem;
      color: #ffffff;
    }
    p {
      text-align: right;
      font-size: 0.35rem;
      font-weight: 400;
      line-height: 0.4625rem;
      color: #ffffff;
    }
  }
  .container {
    margin-top: 2.75rem;
    display: flex;
    justify-content: space-around;
    .contain_title {
      font-size: 0.5rem;
      font-weight: bold;
      line-height: 0.65rem;
      color: #b1e1ff;
      padding: 0.25rem 0;
    }
    li {
      position: relative;
      height: 0.4625rem;
      font-size: 0.35rem;
      font-weight: 400;
      line-height: 0.4625rem;
      color: #ffffff;
      padding-left: 0.425rem;
      &::before {
        content: '';
        position: absolute;
        top: 0.15rem;
        left: 0;
        width: 0.175rem;
        height: 0.175rem;
        background-color: #fff;
        border-radius: 50%;
      }
    }
  }
}
.toApplyFor {
  .title {
    font-size: 0.5625rem;
    margin: 1.9375rem 0 1.0875rem 0;
    font-weight: bold;
    line-height: 0.5625rem;
    color: #434a54;
    text-align: center;
  }
  ul {
    width: 83.5%;
    margin: 0 auto 1.6875rem;
    display: flex;
    justify-content: space-between;
  }
  ul li {
    width: 21.9%;
    height: 3.35rem;
    box-shadow: 0rem 0.0375rem 0.1875rem rgba(79, 135, 230, 0.28);
    position: relative;
    cursor: pointer;
    .img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      width: 58%;
      height: 74%;
    }
    p {
      font-size: 0.4375rem;
      text-align: center;
      font-weight: bold;
      color: #4a6b9a;
      text-shadow: 0rem 0.0375rem 0.075rem rgba(255, 255, 255, 0.16);
      margin: 0.85rem 0 1.3125rem 0;
    }
    button {
      display: block;
      margin: auto;
      width: 3.3625rem;
      height: 0.625rem;
      background: rgba(79, 135, 230, 1);
      box-shadow: 0rem 0.0375rem 0.075rem rgba(5, 38, 93, 0.25);
      border-radius: 0.1875rem 0.1875rem 0rem 0rem;
      margin-bottom: 0;
      font-size: 0.3125rem;
      font-weight: 400;
      color: #ffffff;
    }
  }
}
// 弹窗
.type_dialog,
.login_dialog,
.set_dialog {
  position: fixed;
  top: 1.375rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 101;
}
.type_dialog {
  width: 12.475rem;
  height: 7.375rem;
  background: url(@/assets/image/dialog.png) no-repeat right bottom;
  background-color: #fff;
  box-shadow: 0rem 0.0375rem 0.1875rem rgba(79, 135, 230, 0.3);
  border-radius: 0.1875rem;
  .title {
    text-align: center;
    padding: 0.9375rem 0 0.75rem 0;
    height: 0.5rem;
    font-size: 0.5rem;
    font-family: Source Han Sans CN;
    font-weight: 500;
    line-height: 0.85rem;
    color: #4a6b9a;
  }
  .radio {
    width: 7.875rem;
    margin: 0 auto;
    .radio-item {
      position: relative;
      cursor: pointer;
    }
    .btn {
      position: absolute;
      top: 0.275rem;
      left: 0rem;
      width: 0.3rem;
      height: 0.3rem;
      text-align: center;
      border-radius: 50%;
      border: 0.0125rem solid #b6b6b6;
      .point {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0.2rem;
        height: 0.2rem;
        border-radius: 50%;
        display: inline-block;
        background-color: #4f87e6;
      }
    }
    .neirong {
      width: 7.175rem;
      padding-left: 0.475rem;
      font-size: 0.45rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      line-height: 0.7625rem;
      color: #656363;
    }
  }
  button {
    display: block;
    width: 3.0375rem;
    height: 0.9rem;
    background: rgba(79, 135, 230, 1);
    border-radius: 0.1rem;
    margin: 0.625rem auto 0.625rem;
    font-size: 0.4375rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
  }
}
.login_dialog {
  width: 698px;
  height: 430px;
  background-color: #fff;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.16);
  /deep/ .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #606266;
  }
  .icon-guanbi {
    position: absolute;
    top: -54px;
    right: -54px;
    font-size: 32px;
    color: #ffffff;
    cursor: pointer;
  }
  .dsc {
    background-color: #568be6;
    width: 279px;
    height: 100%;
    padding: 0 50px;
    box-sizing: border-box;
    color: #fff;
    & > p {
      padding: 16px 0;
      font-size: 15px;
      font-weight: 400;
    }
    .iconfont {
      padding-right: 20px;
    }
  }
  .from {
    width: 419px;
    height: 100%;
    padding: 16px 75px;
    box-sizing: border-box;
    text-align: center;
    .wx_tit img {
      width: 38px;
      height: 38px;
      vertical-align: sub;
      margin-right: 18px;
    }
    .wx_tit span {
      font-size: 16px;
    }
    .wx_code {
      width: 270px;
      height: 270px;
    }
    .argee {
      margin-top: 15px;
      img {
        width: 22px;
        height: 22px;
        margin-right: 14px;
        vertical-align: top;
        cursor: pointer;
      }
    }
    .contract {
      margin-top: 18px;
    }
  }
  .top {
    width: 148px;
    text-align: center;
    margin: 72px auto;
    p {
      font-size: 12px;
      font-family: Comic Sans MS;
      text-align: right;
    }
    h1 {
      font-size: 34px;
      font-family: Microsoft YaHei;
    }
    .mock {
      text-align: left;
      font-size: 16px;
      font-family: Microsoft YaHei;
    }
  }
}
.set_dialog {
  width: 13.9625rem;
  height: 8.8125rem;
  background: url(@/assets/image/dialog.png) no-repeat right top;
  background-color: #fff;
  box-shadow: 0rem 0.0375rem 0.1875rem rgba(79, 135, 230, 0.3);
  border-radius: 0.1875rem;
  border: 0.0125rem solid transparent;
  .time {
    margin: 2rem 0 0 1.2rem;
    line-height: 0.575rem;
    .line {
      width: 0.125rem;
      height: 0.5rem;
      background: rgba(79, 135, 230, 1);
      border-radius: 0rem 0.1rem 0.1rem 0rem;
      margin-right: 0.275rem;
      margin-top: 0.025rem;
    }
    font-size: 0.4375rem;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #434a54;
    input {
      color: #8c8c8c;
      width: 1rem;
      line-height: 0.4375rem;
      font-size: 0.4375rem;
      text-align: center;
    }
  }
  .score {
    width: 12.0125rem;
    height: 2.2375rem;
    margin: 1.2rem auto 1.275rem;
    background: rgba(250, 250, 250, 1);
    border-radius: 0.1rem;
    display: flex;
    justify-content: space-between;
    padding: 0.45rem 1.475rem 0.2875rem;
    box-sizing: border-box;
    div {
      height: 1.25rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      font-size: 0.375rem;
      font-family: Microsoft YaHei;
      font-weight: bold;
      line-height: 0.5rem;
      color: #434a54;
      input {
        color: #8c8c8c;
        width: 1rem;
        line-height: 0.4375rem;
        font-size: 0.4375rem;
        text-align: center;
        background-color: transparent;
      }
    }
  }
  button {
    width: 3.0375rem;
    height: 0.9rem;
    display: block;
    margin: auto;
    background: rgba(79, 135, 230, 1);
    border-radius: 0.1rem;
    font-size: 0.4375rem;
    font-weight: 400;
    color: #ffffff;
  }
}
.adverti {
  position: fixed;
  z-index: 999;
  left: 50%;
  transform: translate(-50%);
  bottom: 0.25rem;
  width: 96%;
  min-width: 17rem;
  height: 2.45rem;
  background: rgba(67, 74, 84, 0.48);
  border-radius: 0.1875rem;
  .close {
    position: absolute;
    top: 0.15rem;
    right: 0.15rem;
    font-size: 0.5rem;
    color: #fff;
    cursor: pointer;
  }
  .picture {
    width: 6.2rem;
    height: 100%;
    position: relative;
    img {
      width: auto;
      height: auto;
    }
    img:nth-child(2) {
      position: absolute;
      bottom: 0;
      left: 1.675rem;
    }
    img:nth-child(1) {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
    }
    img:nth-child(3) {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 1;
    }
  }
  h1 {
    float: left;
    display: inline-block;
    height: 1.3125rem;
    font-size: 1.15rem;
    font-family: FZShaoEr-M11S;
    font-weight: 400;
    line-height: 1.3125rem;
    color: #ffffff;
    margin-top: 0.675rem;
    margin-left: 1.25rem;
    text-shadow: 0rem 0.0375rem 0.075rem #ff4b40;
    @media screen and (max-width: 21.75rem) {
      font-size: 1rem;
    }
    @media screen and (max-width: 20.5rem) {
      font-size: 0.875rem;
    }
    @media screen and (max-width: 19.375rem) {
      font-size: 0.75rem;
    }
    @media screen and (max-width: 18.5rem) {
      font-size: 0.575rem;
    }
  }
  .logos {
    width: 2.7rem;
    height: 2.7rem;
    margin-right: 1.25rem;
    margin-top: 0.25rem;
  }
}
</style>