<template>
    <div>
        <h3>账号管理</h3>
        <el-button type="primary" @click="addNew">新增</el-button>
        <el-table :data="adminData" style="width: 100%">
            <el-table-column prop="user_name" label="账号"></el-table-column>
            <el-table-column prop="real_name" label="真名"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button 
                      size="mini"
                      @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
          :page-size="page_size"
          :total="total"
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :current-page="current_page"></el-pagination>
    </div>
</template>

<script>
export default {
    name: "AdminList",
    data: function() {
        return {
            page_size: 20,
            total: 0,
            current_page: 1,
            screen_loading: false,
            adminData: [],
        }
    },
    created: function() {
        this.fetchData()
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row)
        },
        addNew() {},
        handleCurrentChange() {},
        fetchData() {},
    },
}
</script>
