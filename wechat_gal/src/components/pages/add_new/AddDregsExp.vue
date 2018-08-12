<template>
    <div>
        <h3>{{current_status}}渣男体验剧情</h3>
        <div class="add-form">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="剧情名">
                    <el-input v-model="form.plot_name"></el-input>
                </el-form-item>
                <el-form-item label="选择图片">
                    <el-upload
                      action="http://up-z0.qiniup.com"
                      accept="image/jpeg,image/gif,image/png,image/bmp"
                      :before-upload="beforeUpload"
                      :on-success="successHandler"
                      ref="upload"
                      :data="post_data"
                      >
                      <el-button><i class='el-icon-upload el-icon--right'></i>点击上传</el-button>
                    </el-upload>
                </el-form-item>
                <el-form-item label="排序值">
                    <el-input v-model="form.position"></el-input>
                </el-form-item>
                <el-form-item label="剧情脚本">
                    <el-input type='textarea' v-model='form.plot_json'></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" :loading="loading" :disabled="disable">保存</el-button>
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
    name: "AddDregsExp",
    data: function() {
        return {
            form: {
                plot_name: "",
                cover_path: "",
                position: 0,
                type_id: 2,
                plot_json: ""
            },
            edit: 0,
            picture: "",
            headers: {headers:{"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"}},
            status: ['新增', '修改'],
            post_data: {
                token: "",
            },
            // key: "",
            loading: false,
        }
    },
    created: function(){
        this.retriveData()
    },
    computed: {
        current_status() {
            return this.status[this.edit]
        },
        disable() {
            if (this.form.plot_name && this.form.cover_path && this.form.plot_json) {
                return false
            } else {
                return true
            }
        }
    },
    methods: {
        onSubmit() {
            let that = this
            that.loading = true
            
            if (that.ok == false) {
                that.$message("出错啦")
                that.loading = false
                return
            }

            let params = {form: that.form, edit: that.edit}
            this.$axios.post("/v1/add_new/simulation", params, that.headers)
              .then(response => {
                  let ret = response.data.ret
                  if (ret == 0 && that.edit == 0) {
                      that.$message("已保存")
                      setTimeout(function(){
                          location.reload()
                      }, 2000)
                  } else if (ret == 0 && that.edit == 1) {
                      that.$message("已保存")
                      that.$router.push({name: 'DregsExperience'})
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
                    cover_path: "",
                    position: 0,
                    type_id: 2,
                    plot_json: ""
                }
                this.edit = 0
            }
        },
        beforeUpload(picture) {
            console.log(picture)
            this.picture = picture
            
            // this.getToken()

            this.uploadTor()

            return false
        },
        successHandler(response, file, fileList) {
            console.log(response)
        },
        getToken() {
            let that = this
            let pic_name = that.picture.name
            this.$axios.post("/upload/picture", {picture: pic_name}, that.headers)
              .then(response => {
                  that.post_data.token = response.data.token
                //   that.post_data.key = response.data.key
                  console.log("token: " + that.post_data.token)
                //   console.log("key: " + that.post_data.key)
              })
              .catch(response => {
                  that.$message("出错啦")
              })
        },
        uploadTor() {
            let that = this
            // this.$axios.post("/upload/picture", {picture: that.picture}, that.headers)
            //   .then(response => {
            //       console.log("ok")
            //   })
            
            let fd = new FormData()
            fd.append("name", this.picture.name)
            fd.append("obj", this.picture)
            let request = new XMLHttpRequest()
            request.open("POST", "http://127.0.0.1:8888/upload/picture")
            request.onreadystatechange = function() {
                if (this.readyState == 4) {
                    // console.log(this.responseText)
                    let response_json = JSON.parse(this.responseText)
                    that.form.cover_path = response_json.url
                    console.log(response_json.url)
                }
            }
            request.send(fd)
            // console.log(request.responseText)
        }
    },
}
</script>
