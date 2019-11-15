import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
// import './styles.scss'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false
// router.beforeEach((to, from, next) => {
//   const role = sessionStorage.getItem('SID')
//   if (!role && to.path !== '/home') {
//    next({
//         path: '/home',
//         params: {indexShow:true}
//       })
//   } else {
//     // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
//     if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
//       Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
//         confirmButtonText: '确定'
//       })
//     } else {
//       next()
//     }
//   }
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
