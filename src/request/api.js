import http from './http'
let examId = JSON.parse(sessionStorage.getItem('examId'))
let userId = JSON.parse(localStorage.getItem('loginInfo'))?.id
export const getExamId = (id) => {
  examId = id
}
export const getUserId = (id) => {
  userId = id
}
export default class Api {
  /**
   * 获取二维码  获取登录状态
   * @param {*} params
   * @returns
   */
  static getWxCode() {
    return http.get('/user/getQrCode')
  }
  static getLoginState(key) {
    return http.get('/user/getLoginStatus/' + key)
  }
  /**
   * 获取所有考试类型
   * /exam/all
   * @param {*} data
   * @returns
   */
  static getExamType() {
    return http.get('/exam/all')
  }

  /**
   * 听力 Listen
   */
  // 提交
  static async submitListen(data = {}) {
    return await http.post('listening/question/submit', data)
  }
  static async getListen(partId, params = {}) {
    return await http.get(`/listening/question/all/${examId}/${partId}`)
  }
  static async getRecord(partId, params = {}) {
    return await http.get(`/listening/conversation/all/${examId}/${partId}`)
  }
  static async getlistensubmitInfo(partId, params = {}) {
    return await http.get(`/listening/question/submitInfo/${examId}/${partId}`)
  }

  /**
   * 阅读 Read
   */

  static async getSubject(partId) {
    return await http.get(`/reading/question/all/${examId}/${partId}`)
  }
  static async getEssay(partId) {
    return await http.get(`/reading/text/all/${examId}/${partId}`)
  }
  // 提交
  static async submitRead(data = {}) {
    return await http.post('reading/question/submit', data)
  }
  static async getreadsubmitInfo(partId, params = {}) {
    return await http.get(`/reading/question/submitInfo/${examId}/${partId}`)
  }

  /**
   * 写作 Write
   */

  static async getWrite(partId) {
    return await http.get(`/writing/all/${examId}/${partId}`)
  }
  // 提交
  static async submitWrite(data = {}) {
    return await http.post('writing/question/submit', data)
  }
  static async getwritesubmitInfo(partId, params = {}) {
    return await http.get(`/writing/question/submitInfo/${examId}/${partId}`)
  }

  // 一次全部提交
  static async submitAnswer(data = {}) {
    return await http.post('/exam/submit', data)
  }
  /**
   * 获取考试结果
   */
  static async getResult(moduleId) {
    return await http.get(`exam/getExamModuleLog/${examId}/${userId}/${moduleId}`)
  }
  /**
   * 获取答案与解析
   */
  static async getAnswer(partId) {
    return await http.get(`/listening/question/answer/${examId}/${partId}/${userId}`)
  }
  static async getAnswer1(partId) {
    return await http.get(`/reading/question/answer/${examId}/${partId}/${userId}`)
  }
  /**
   * 获取所有试卷
   */
  static async getExam(id) {
    return await http.get(`https://lzls.zhieasy.cn/exam/all/${id}`)
  }

  /**
   * 不需要新手指导
   */
  static async noviceRefusedToKnow() {
    return await http.get('user/updateWelcomeStatus/')
  }

  /**
   * 设置目标
   */
  static async setMb(data = {}) {
    return await http.post('/user_exam/examinfo', data)
  }
  static async upTime(time) {
    return await http.get(`/user_study/examTime/${time}`)
  }
  /**
   * 获取分数
   */
  static async getScore() {
    return await http.get('/user_exam/')
  }
  /**
   * 获取时间
   */
  static async getTime() {
    return await http.get('/user_study/')
  }
  /**
   * 获取考试列表 次数
   */
  static async getTestNum() {
    return await http.get('exam_record/list_num')
  }
  static async getTestList() {
    return await http.get('/exam_record/list')
  }
  static async getTestListLog(id) {
    return await http.get(`exam_record/log/${id}`)
  }

  //会获得这个用户在这个考试的所有提交记录 以及得分
  static async getExamexamId(examId) {
    return await http.get(`/listening/question/isPractice/${examId}`)
  }
  //返回这个用户的某一场考试的提交记录 以及得分
  static async getExamRecord(examId, examLogId) {
    return await http.get(`/listening/question/isPractice/${examId}/${examLogId}`)
  }
  //获得听力部分是否已经全部练习
  static async getListening(examId) {
    return await http.get(`/listening/question/isPractice/${examId}`)
  }
  //可以获得听力部分是否已经全部练习
  static async getReading(examId) {
    return await http.get(`/reading/question/isPractice/${examId}`)
  }
  //可以获得阅读部分是否已经全部练习
  static async getWriting(examId) {
    return await http.get(`/writing/question/isPractice/${examId}`)
  }
  /**
   * 听力解析播放器
   *
   */
  static getListenAudio(partId) {
    return http.get(`/listening/conversation/audio/all/${examId}/${partId}`)
  }

  // 获取考试类型
  static getobtain() {
    return http.get('/introductory/admin/exam')
  }

  // 获取所有考试引导
  static getguide() {
    return http.get('introductory/admin/introductory')
  }

  // 获取某个考试下面的所有引导
  static getTestguide(examId) {
    return http.get(`introductory/admin/introductory/${examId}`)
  }

  // 获取所有章节
  static getChapter() {
    return http.get('introductory/admin/introductory/chapter')
  }

  // 获取某个考试下面的所有章节
  static getTestChapter(introductoryId) {
    return http.get(`introductory/admin/introductory/chapter/${introductoryId}`)
  }

  // 获取某个章节下面的所有文章
  static getChapterId(chapterId) {
    return http.get(`/introductory/admin/introductory/chapter/detail/${chapterId}`)
  }
  /**朗斯百科 */
  // 通过考试名字获取目前已有的考试分类
  static getClassification(examType) {
    return http.get(`/introductory/all/${examType}`)
  }
  // 通过detailId获取具体的detial内容
  static getDetailId(detailId) {
    return http.put(`/introductory/details/${detailId}`)
  }
  // 完成学习
  static completeStudy(detailId) {
    return http.post(`/details/study/${detailId}`)
  }
  /**常见问题 */
  // 获取问题列表
  static getProblemlist(type, pageNum) {
    return http.get(`/wiki/type/${type}/page/${pageNum}`)
  }
  //获取详情
  static getProblemMore(wiliId) {
    return http.put(`/wiki/${wiliId}`)
  }
  //搜索
  static getCommonSearch(keyword, pageNum) {
    return http.get(`/wiki/search/${keyword}/page/${pageNum}`)
  }
  /**朗思课程 */
  // 通过type获取所有的课程
  static getCoursetype(type) {
    return http.get(`/course/type/${type}`)
  }
  //获取某一个course的所有内容
  static getCoursecontent(courseId) {
    return http.get(`/course/${courseId}`)
  }
  // 获取某节课详情
  static getCoursedetailId(detailId) {
    return http.get(`/course/detail/${detailId}`)
  }
  // 更新该同学是否学习了这节课的内容
  static postCoursestudy(data = {}) {
    return http.post('/course/study/detail', data)
  }
  // 获取当前视频所在的list
  static getCoursechapterId(chapterId, detailId) {
    return http.get(`/course/details/video/list/chapter/${chapterId}/detial/${detailId}`)
  }
  /**老师展示*/
  // 获取老师个人课程信息
  static getTeacherMessage(type) {
    return http.get(`/teacher/type/${type}`)
  }
  //获取某个老师详情
  static getTeacherdetails(teacherId) {
    return http.get(`teacher/${teacherId}`)
  }

	/**我的页面 */
	// 我的信息
	static getMyinformation() {
		return http.get('/user/info')
	}
	// 发送短信
	static postFormphone(phone) {
		return http.post(`/sms/${phone}`)
	}
	// 手机号码登录
	static postFormdata(phone,code) {
		return http.post(`/user/login/phone?phone=${phone}&code=${code}`)
	}
	// 修改绑定手机号
	static putPhone(phone,code) {
		return http.put(`/user/info/phone?phone=${phone}&code=${code}`)
	}
	static getQiniuToken() {
		return http.get('/file/getToken')
	}
	// 修改头像
	static modifyHeadImg(data) {
		return http.put(`/user/info/img?img=${data.img}`)
	}
	// 修改昵称
	static modifyNickname(data) {
		return http.put(`/user/info/nickName?nickName=${data.nickName}`)
	}
	// 获取支付二维码
	static getPayCode(data = {}) {
		return http.post(`/wx/nativePay`, data)
	}
	// 我的购买的课程
	static getMyBuyCourse() {
		return http.get('/userCourse/buy/list')
	}
	// 分页获取订单信息
	static getOrder(state, type, pageNum) {
		return http.get(`/coupon/state/${state}/type/${type}/page/${pageNum}`)
	}
	// 获取订单详情
	static getOrderDetail(orderId) {
		return http.get(`/coupon/${orderId}`)
	}
}
