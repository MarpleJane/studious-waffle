<template>
    <div>
        <h3>{{current_status}}神明的一天剧情</h3>
        <div class="add-form">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="剧情名">
                    <el-input v-model="form.plot_name"></el-input>
                </el-form-item>
                <el-form-item label="说明">
                    <el-input type='textarea' v-model="form.description"></el-input>
                </el-form-item>
                <el-form-item label="排序值">
                    <el-input v-model="form.position"></el-input>
                </el-form-item>
                <el-form-item label="剧情脚本">
                    <el-input type='textarea' v-model='form.plot_json'></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">保存</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<style>
.add-form {
    width: 60%;
    margin: 0 auto;
}
</style>

<script>
export default {
    name: "AddKamisama",
    data: function() {
        return {
            form: {
                plot_name: "",
                position: 0,
                type_id: 2,
                description: "",
                plot_json: ""
            },
            edit: 0,
            headers: {headers:{"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}},
            status: ['新增', '修改'],
        }
    },
    created: function(){
        this.retriveData()
    },
    computed: {
        current_status() {
            return this.status[this.edit]
        }
    },
    methods: {
        onSubmit() {
            let that = this
            this.$axios.post("/v1/add_new/chapter", {form: that.form, edit: that.edit}, that.headers)
              .then(response => {
                  let ret = response.data.ret
                  if (ret == 0) {
                      that.$message("已保存")
                      setTimeout(function(){
                          location.reload()
                      }, 2000)
                  } else {
                      that.$message("保存出错")
                  }
              })
              .catch(response => {
                  that.$message("出错啦")
              })
        },
        retriveData() {
            let form = this.$route.params.form
            this.status = ['新增', '修改']
            if (form) {
                this.form = form
                this.edit = 1
            } else {
                this.form = {
                    plot_name: "",
                    position: 0,
                    type_id: 2,
                    description: "",
                    plot_json: ""
                }
                this.edit = 0
            }
        }
    },
}
</script>
