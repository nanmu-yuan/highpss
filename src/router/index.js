import Vue from 'vue'
import VueRouter from 'vue-router'
const startTest = () => import('@/views/startTest.vue')
const Layout = () => import('@/views/Layout.vue')
const agreement = () => import('@/views/agreement.vue')
const Home = () => import('@/views/Home.vue')
const Home2 = () => import('@/views/Home2.vue')
const langsiWrite = () => import('@/views/navList/langsiWrite.vue')
// 朗思口语保分班详情页
const langsiCurriculum = () => import('@/views/navList/langsiCurriculum.vue')
// 朗思口语B2详情页
const langsiCurriculumB2 = () => import('@/views/navList/langsiCurriculumB2.vue')
// 朗思写作训练营详情页
const langsiWriting = () => import('@/views/navList/langsiWriting.vue')
// 朗思全科1V1详情页
const langsiPractice1v1 = () => import('@/views/navList/langsiPractice1v1.vue')
// 朗思写作课程专题页
const langsiWritingSpecial = () => import('@/views/navList/langsiWritingSpecial.vue')
// 常见问题
const langsiCommonProblem = () => import('@/views/navList/langsiCommonProblem.vue')
// 常见问题详情
const langsiCommondetails = () => import('@/views/navList/langsiCommondetails.vue')
// 朗思口语课程专题页
const langsiMouthSpecial = () => import('@/views/navList/langsiMouthSpecial.vue')
//朗思百科
const langsiwikipedia = () => import('@/views/navList/langsiwikipedia.vue')
// 朗思写作批改课程专题页
const langsiCorrectionSpecial = () => import('@/views/navList/langsiCorrectionSpecial.vue')
// 全科预测专题页

const langsigeneral = () => import('@/views/navList/langsigeneral.vue')
const langsiSpoken = () => import('@/views/navList/langsiSpoken.vue')
const caseShar = () => import('@/views/navList/caseShar.vue')
const caseSharDetail = () => import('@/views/navList/caseSharDetail.vue')
const ueberTestdaf = () => import('@/views/navList/ueberTestdaf.vue')
const testRecords = () => import('@/views/testRecords.vue')
const writingCorrections = () => import('@/views/Class/writingCorrections.vue')
const generalPrediction = () => import('@/views/Class/generalPrediction.vue')
const lsMoldTest = () => import('@/views/Class/lsMoldTest.vue')
const oralMoldTest = () => import('@/views/Class/oralMoldTest.vue')
const ResultsSummary = () => import('@/views/ResultsSummary.vue')
const Sidebar = () => import('@/views/Sidebar.vue')
const NavigationPage = () => import('@/views/NavigationPage.vue')
const Listen_part1 = () => import('@/views/Listen/Listen_part1.vue')
const Listen_part2 = () => import('@/views/Listen/Listen_part2.vue')
const Listen_part3 = () => import('@/views/Listen/Listen_part3.vue')
const Listen_part4 = () => import('@/views/Listen/Listen_part4.vue')
const Read_part1 = () => import('@/views/Read/Read_part1.vue')
const Read_part2 = () => import('@/views/Read/Read_part2.vue')
const Read_part3 = () => import('@/views/Read/Read_part3.vue')
const Read_part4 = () => import('@/views/Read/Read_part4.vue')
const Write_part1 = () => import('@/views/Write/Write_part1.vue')
const Write_part2 = () => import('@/views/Write/Write_part2.vue')
const lay = () => import('@/views/aSeparateTest/lay.vue')
const listen1_2_4 = () => import('@/views/aSeparateTest/listen/listen1_2_4.vue')
const listen3 = () => import('@/views/aSeparateTest/listen/listen3.vue')
const read1 = () => import('@/views/aSeparateTest/read/read1.vue')
const read2 = () => import('@/views/aSeparateTest/read/read2.vue')
const read3 = () => import('@/views/aSeparateTest/read/read3.vue')
const read4 = () => import('@/views/aSeparateTest/read/read4.vue')
const write1 = () => import('@/views/aSeparateTest/write/write1.vue')
const write2 = () => import('@/views/aSeparateTest/write/write2.vue')
const err404 = () => import('@/views/error/404.vue')
const err500 = () => import('@/views/error/500.vue')
const SingleExercise = () => import('@/views/SingleExercise.vue')
Vue.use(VueRouter)
// 朗思百科
const wikipedia = [
	{
		path: 'langsiwikipedia',
		component: langsiwikipedia,
		meta: {
			title: '朗思百科'
		}
	},
	{
		path: 'langsiPediadetails',
		component: () => import('@/views/navList/langsiPediadetails.vue'),
		meta: {
			title: '朗思百科详情'
		}
	}
]
// 朗思课程
const course = [
	{
		path: 'langsiCurriculum',
		component: langsiCurriculum,
		meta: {
			title: '朗思口语保分班'
		}
	},
	{
		path: 'langsiWriting',
		component: langsiWriting,
		meta: {
			title: '朗思写作训练营'
		}
	},
	{
		path: 'langsiPractice1v1',
		component: langsiPractice1v1,
		meta: {
			title: '朗思全科1V1'
		}
	},
	{
		path: 'langsiCurriculumB2',
		component: langsiCurriculumB2,
		meta: {
			title: '朗思口语B2'
		}
	}
]
// 朗思攻略
const strategy = []
// 常见问题
const faq = [
	{
		path: 'langsiCommonProblem',
		component: langsiCommonProblem,
		meta: {
			title: '常见问题'
		}
	},
	{
		path: 'langsiCommondetails',
		component: () => import('@/views/navList/langsiCommondetails.vue'),
		meta: {
			title: '常见问题详情'
		},
	},
	{
		path: 'langsiCommonProblemMore',
		component: () => import('@/views/navList/langsiCommonProblemMore.vue'),
		meta: {
			title: '常见问题更多问题'
		},
	}
]
// 模考页面
const simulationTest = [
	{
		path: '/listen_part1',
		component: Listen_part1
	},
	{
		path: '/listen_part2',
		component: Listen_part2
	},
	{
		path: '/listen_part3',
		component: Listen_part3
	},
	{
		path: '/listen_part4',
		component: Listen_part4
	},
	{
		path: '/read_part1',
		component: Read_part1
	},
	{
		path: '/read_part2',
		component: Read_part2
	},
	{
		path: '/read_part3',
		component: Read_part3
	},
	{
		path: '/read_part4',
		component: Read_part4
	},
	{
		path: '/write_part1',
		component: Write_part1
	},
	{
		path: '/write_part2',
		component: Write_part2
	},
]
// 单项练习页面
const individualPractice = [
	{
		path: '/listen1_2_4',
		component: listen1_2_4
	},
	{
		path: '/listen3',
		component: listen3
	},
	{
		path: '/read1',
		component: read1
	},
	{
		path: '/read2',
		component: read2
	},
	{
		path: '/read3',
		component: read3
	},
	{
		path: '/read4',
		component: read4
	},
	{
		path: '/write1',
		component: write1
	},
	{
		path: '/write2',
		component: write2
	},
]
// 旧页面
const oddpage = [
	{
		path: 'langsiWrite',
		component: langsiWrite,
		meta: {
			title: '朗思写作'
		}
	},
	{
		path: 'langsiSpoken',
		component: langsiSpoken,
		meta: {
			title: '朗思口语'
		}
	},
	{
		path: 'langsigeneral',
		component: langsigeneral,
		meta: {
			title: '朗思1v1'
		}
	},
	{
		path: 'caseShar',
		component: caseShar,
		meta: {
			title: '案例分享'
		}
	},
	{
		path: 'caseSharDetail',
		component: caseSharDetail,
		meta: {
			title: '案例分享详情'
		}
	},
	{
		path: 'ueberTestdaf',
		component: ueberTestdaf,
		meta: {
			title: '备考资料'
		}
	},
	{
		path: 'writingCorrections',
		component: writingCorrections,
		meta: {
			title: '写作批改'
		}
	},
	{
		path: 'oralMoldTest',
		component: oralMoldTest,
		meta: {
			title: '口语模考'
		}
	},
	{
		path: 'lsMoldTest',
		component: lsMoldTest,
		meta: {
			title: '朗思模考'
		}
	},
	{
		path: 'generalPrediction',
		component: generalPrediction,
		meta: {
			title: '全科预测'
		}
	},
]
const routes = [
	{
		path: '/',
		component: Layout,
		redirect: 'home',
		children: [
			// {
			// 	path: '/home',
			// 	component: Home,
			// 	alias: '/',
			// 	meta: {
			// 		keepAlive: true
			// 	}
			// },
			{
				path: 'home',
				component: Home2,
				alias: '/',
			},
			...wikipedia,
			...oddpage,
			...faq,
			...course,
			{
				path: 'langsiMouthSpecial',
				component: langsiMouthSpecial,
				meta: {
					title: '朗思口语课程专题页'
				}
			},
			{
				path: 'video',
				component: () => import('@/views/navList/video.vue'),
				meta: {
					title: '视频播放'
				}
			},
			{
				path: 'langsiWritingSpecial',
				component: () => import('@/views/navList/langsiWritingSpecial.vue'),
				meta: {
					title: '朗思写作专题'
				}
			},
			{
				path: 'langsiCorrectionSpecial',
				component: () => import('@/views/navList/langsiCorrectionSpecial.vue'),
				meta: {
					title: '写作批改专题页'
				}
			},
			{
				path: 'langsiForecastSpecial',
				component: () => import('@/views/navList/langsiForecastSpecial.vue'),
				meta: {
					title: '全科预测'
				}
			},
			{
				path: 'personCenter',
				component: () => import('@/views/PersonCenter/PersonCenter.vue'),
				meta: {
					title: '我的'
				}
			},
			{
				path: 'test',
				component: () => import('@/views/navList/test.vue'),
				meta: {
					title: 'test'
				}
			},

			{
				path: 'testRecords',
				component: testRecords,
				meta: {
					title: '考试记录'
				}

			},
			{
				path: 'startTest',
				component: startTest,
				meta: {
					title: '开始考试'
				}
			},

			{
				path: 'SingleExercise',
				component: SingleExercise,
				meta: {
					title: '试卷选择'
				}
			}
		]
	},

	{
		path: '/agreement',
		component: agreement,
		meta: {
			title: '基本协议'
		}
	},
	// {
	// 	path: '/ListenList',
	// 	component: ListenList,
	// },
	// {
	// 	path: '/listenDetail',
	// 	component: listenDetail,
	// },
	// {
	// 	path: '/EvaluationReport',
	// 	component: EvaluationReport,
	// },
	{
		path: '/ResultsSummary',
		component: ResultsSummary,
		meta: {
			title: '成绩页面'
		}
	},
	{
		path: '/navigationPage',
		component: NavigationPage,
		meta: {
			title: '新手指导'
		}
	},
	{
		path: '/sidebar',
		component: Sidebar,
		redirect: 'listen_part1',
		children: [...simulationTest]
	},
	{
		path: '/lay',
		component: lay,
		redirect: '/listen1_2_4',
		children: [...individualPractice]
	},
	{
		path: '/err500',
		component: err500,
		meta: {
			title: '500'
		}
	},

	{
		path: '*',
		component: err404,
		meta: {
			title: '404'
		}
	},

]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
	scrollBehavior(to, from, saveTop) {
		if (saveTop) {
			return saveTop;
		} else {
			return { x: 0, y: 0 }
		}
	},
	mode: 'history',
	routes
})
// 路由守卫
router.beforeEach((to, from, next) => {
	window.document.title = to.meta.title || '栗子朗思'
	next()

})

export default router