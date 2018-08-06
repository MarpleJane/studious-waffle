<template>
    <div>
        <h3>Kira学园</h3>
        <el-button type="primary" @click="addNew">新增</el-button>
        <el-table v-loading="loading" :data="kiraData" style="width: 100%">
            <el-table-column prop="id" label="ID"></el-table-column>
            <el-table-column prop="plot_name" label="剧情名"></el-table-column>
            <!-- <el-table-column label="背景图">
                <template slot-scope="scope">
                    <el-popover
                      placement="left"
                      trigger="hover"
                      width="490px">
                      <img :src="scope.row.cover_path" width="100%">
                      <img :src="scope.row.cover_path" width="100px" height="50px">
                    </el-popover>
                </template>
            </el-table-column> -->
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
    name: "KiraCampus",
    data: function() {
        return {
            page_size: 20,
            total: 0,
            current_page: 1,
            kiraData: [],
            loading: true,
            headers: {headers:{"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}},
        }
    },
    created: function() {
        this.fetchData()
    },
    methods: {
        addNew() {
            this.$router.push({name: 'AddKiraCampus'})
        },
        handleEdit(index, row) {
            this.$router.push({name: 'EditKiraCampus', params:{form: row}, query:{plot_id: row.id}})
        },
        handleDel(index, row) {
            let that = this
            this.$axios.post("/v1/del/chapter", {plot_id: row.id}, that.headers)
              .then(response => {
                  let data = response.data
                  let ret = data.ret
                  if (ret == 1) {
                      that.$message("出错了")
                  } else {
                      that.$message("已删除")
                      setTimeout(function(){
                          location.reload()
                      }, 2000)
                  }
              })
              .catch(response => {
                  that.$message("出错啦")
              })
        },
        handleCurrentChange(val) {
            let that = this
            that.loading = true
            that.current_page = val
            this.$axios.post("/v1/chapter/kira_campus", {current_page: that.current_page}, that.headers)
              .then(response => {
                  let data = response.data
                  let ret = data.ret
                  if (ret == 1) {
                      that.$message("出错了")
                  } else {
                      that.loading = false
                      let result = data.result
                      that.kiraData = result.items
                  }
              })
              .catch(response => {
                  that.$message("出错啦")
              })
        },
        fetchData() {
            let that = this
            this.$axios.get("/v1/chapter/kira_campus?page_size="+that.page_size)
              .then(response => {
                  let data = response.data
                  console.log(data)
                  let ret = data.ret
                  if (ret == 1) {
                      that.$message("出错了")
                  } else {
                      that.loading = false
                      let result = data.result
                      that.kiraData = result.items
                      that.total = result.total
                  }
              })
              .catch(response => {
                  console.log(response)
                  that.$message("出错啦")
              })
        },
    }
}
</script>

