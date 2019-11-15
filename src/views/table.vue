<template>
	<div>
		<div class="searchBox">
			<el-input class="searchInp"></el-input>
			<el-input class="searchInp"></el-input>
			<el-button type="primary" size="medium">搜索</el-button>
			<el-button size="medium">重置</el-button>
		</div>
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column prop="date" label="日期" width="180">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
			<el-table-column prop="status" label="状态">
			</el-table-column>
			<el-table-column label='操作'>
				<template slot-scope="{row}">
					<el-button type="primary" size="mini" @click="handleUpdate(row)">
						Edit
					</el-button>
					<el-button v-if="row.status!='published'" size="mini" type="success">
						Publish
					</el-button>
					<el-button v-if="row.status!='draft'" size="mini">
						Draft
					</el-button>
					<el-button v-if="row.status!='deleted'" size="mini" type="danger">
						Delete
					</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
					status: "draft"
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄',
					status: "draft"
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
					status: "draft"
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}]
			}
		}
	}
</script>

<style scoped>
	.searchBox {
		margin-bottom: 20px;
	}

	.searchInp {
		width: 200px;
		margin-right: 20px;
	}
</style>
