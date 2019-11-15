<template>
<!-- 	<el-container>
		<el-header>
			<nav-header></nav-header>
		</el-header>
		<el-main>
			<router-view></router-view>
		</el-main>
		<el-footer>Footer</el-footer>
	</el-container> -->
	<el-container>
	  <el-header style='background: #f6db63;'>
		  <nav-header></nav-header>
	  </el-header>
	  <el-container>
	    <el-aside width="200px">
			<side-Bar></side-Bar>
		</el-aside>
	    <el-main><router-view></router-view></el-main>
	  </el-container>
	</el-container>
</template>

<script>
	import navHeader from './navHeader.vue';
	import sideBar from './sideBar.vue'
	// import bus from './bus';
	export default {
		data() {
			return {
				tagsList: [],
				collapse: false
			}
		},
		components: {
			sideBar,navHeader
		},
		created() {
			// bus.$on('collapse', msg => {
			// 	this.collapse = msg
			// })

			// 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
			// bus.$on('tags', msg => {
			//   let arr = []
			//   for (let i = 0, len = msg.length; i < len; i++) {
			//     msg[i].name && arr.push(msg[i].name)
			//   }
			//   this.tagsList = arr
			// })
		},

	}
</script>

<style>
	.el-header, .el-footer {
	    background-color: #B3C0D1;
	    color: #333;
	    /* text-align: center; */
	    line-height: 60px;
	  }
	  
	  .el-aside {
	    background-color: #eef1f6;
	    color: #333;
	    /* text-align: center; */
	    line-height: 200px;
		}
	  
	  .el-main {
	    background-color: #fff;
	    color: #333;
	    /* text-align: center; */
	    /* line-height: 160px; */
		height: 100%;
	  }
	  
	  body > .el-container {
	    margin-bottom: 40px;
	  }
	  
	  .el-container:nth-child(5) .el-aside,
	  .el-container:nth-child(6) .el-aside {
	    line-height: 260px;
	  }
	  
	  .el-container:nth-child(7) .el-aside {
	    line-height: 320px;
	  }
</style>
