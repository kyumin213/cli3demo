<template>
	 <img alt="Vue logo" class="logo" src="../assets/sys-logo.png">
</template>
<script>
	// import bus from './bus'
	export default {
		name: 'navHeader',
		data() {
			return {
				activeIndex2: '1'
			}
		},
		created() {
			// 通过 Event Bus 进行组件间通信，来折叠侧边栏
			// bus.$on('collapse', msg => {
			// 	this.collapse = msg
			// })
		},
		computed: {
			onRoutes() {
				return this.$route.path.replace('/', '')
			}
		},
		methods: {
			// handleSelect(key, keyPath) {
			// 	console.log(key, keyPath);
			// }
		}
	}
</script>

<style>
	.logo{
		line-height: 60px;
	}
</style>
