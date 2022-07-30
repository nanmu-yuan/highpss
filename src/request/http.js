// 导入axios
import axios from 'axios'
import router from '@/router'
import { Message } from 'element-ui'

const service = axios.create({
	baseURL: 'https://lzls.zhieasy.cn',
	headers: {
		"Content-Type": "application/json"
	}
})

axios.defaults.baseURL = 'https://lzls.zhieasy.cn'
// 请求拦截
service.interceptors.request.use(config => {
	let token = localStorage.getItem('token')
	if (token) {
		config.headers['token'] = token
	}
	return config
}, error => {
	return Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use(response => {
	const res = response.data
	if (res.code !== 200) {
		Message({
			message: res.message || 'Error',
			type: 'error',
			duration: 3000
		})
		if (res.code == 500) {
			// router.push('err500')
		} else if (res.code == 401) {
			localStorage.removeItem('token')
			router.replace('/')
		}
		if (res.code == 404) {
			// router.push('err404')
		}
	} else {
		return response
	}
}, error => {
	if (error && error.response) {
		switch (error.response.status) {
			case 400:
				console.log('错误请求')
				break
			case 401:
				localStorage.removeItem('token')
				router.replace('/')
				console.log('token失效')
				break
			default:
				console.log('连接错误')
		}
	} else {
		console.log('连接服务器失败')
	}
	return Promise.reject(error)
})
/**
 * get post
 *
 */
export default class Http {
	static get(url, params) {
		return new Promise((resolve, reject) => {
			service.get(url, params).then(res => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	}
	static post(url, data) {
		return new Promise((resolve, reject) => {
			service.post(url, data).then(res => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	}
	static put(url, data) {
		return new Promise((resolve, reject) => {
			service.put(url, data).then(res => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	}
}


