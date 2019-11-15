import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
const routes = [{
		path: '/',
		redirect: '/home'
	}, {
		path: '/',
		name: 'menu',
		component: () => import('../components/menu.vue'),
		children: [{
				path: '/home',
				name: 'home',
				component: resolve => require(['../views/Home.vue'], resolve)
			},
			{
				path: '/about',
				name: 'about',
				component: resolve => require(['../views/About.vue'], resolve)
			},
			{
				path:'/table',
				name:'table',
				component:resolve => require(['../views/table.vue'],resolve)
			}
		]
	},

]

const router = new VueRouter({
	routes
})

export default router
