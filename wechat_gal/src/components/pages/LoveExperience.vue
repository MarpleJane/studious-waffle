<template>
    <div>
        <h3>恋爱体验</h3>
        <el-button type="primary" @click="addNew">新增</el-button>
        <el-table :data="loveExpData" style="width: 100%">
            <el-table-column prop="id" label="ID"></el-table-column>
            <el-table-column prop="plot_name" label="剧情名"></el-table-column>
            <el-table-column label="背景图">
                <template slot-scope="scope">
                    <el-popover
                      placement="left"
                      trigger="hover"
                      width="490px">
                      <img :src="scope.row.cover_path" width="100%">
                      <img :src="scope.row.cover_path" width="100px" height="50px">
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column prop="designed_by" label="设计者"></el-table-column>
            <el-table-column prop="position" label="排序值"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" @click="handleDel(scope.$index, scope.row)">删除</el-button>
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
    name: "LoveExperience",
    data: function() {
        return {
            page_size: 20,
            total: 0,
            current_page: 1,
            screen_loading: false,
            loveExpData: [],
        }
    },
    created: function() {
        this.fetchData()
    },
    methods: {
        addNew() {},
        handleEdit(index, row) {},
        handleDel(index, row) {},
        handleCurrentChange() {},
        fetchData() {}
    }
}
</script>

