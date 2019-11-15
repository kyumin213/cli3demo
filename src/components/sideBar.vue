<template>
	<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#eef1f6"
	 text-color="#56767f" active-text-color="#409eff" router>
		<el-submenu index="1">
			<template slot="title">
				<i class="el-icon-location"></i>
				<span>导航一</span>
			</template>
			<el-menu-item-group>
				<template slot="title">分组一</template>
				<el-menu-item index="1-1">选项1</el-menu-item>
				<el-menu-item index="1-2">选项2</el-menu-item>
			</el-menu-item-group>
			<el-menu-item-group title="分组2">
				<el-menu-item index="1-3">选项3</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<el-menu-item index="about">
			<i class="el-icon-menu"></i>
			<span slot="title">导航二</span>
		</el-menu-item>
		<el-menu-item index="table">
			<i class="el-icon-document"></i>
			<span slot="title">表格</span>
		</el-menu-item>
		<el-menu-item index="home">
			<i class="el-icon-setting"></i>
			<span slot="title">导航四</span>
		</el-menu-item>
	</el-menu>
</template>

<script>
	export default {
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style>
	.el-menu {
		border-right: none;
	}
</style>
