import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'bootstrap/dist/css/bootstrap.min.css'
import '@/plugins/element'
import '@/assets/icofont/iconfont.css'
import '@/assets/common.css'
import '@/assets/common.less'
import '@/assets/flexible'
import axios from 'axios'
import Http from "./request/http";
import Api from "./request/api";

const load = () => {
  return Vue.prototype.$loading.service({
    lock: true,
    text: '正在计算成绩，请稍等',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.3)'
  });
}
Vue.prototype.$load = load;
Vue.prototype.$http = Http;
Vue.prototype.$api = Api;
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
