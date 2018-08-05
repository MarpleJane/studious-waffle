<template>
    <div>
        <h3>新增账户</h3>
        <div class="add-form">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="账号">
                    <el-input v-model="form.user_name"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="form.real_name"></el-input>
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
    name: "AddAdmin",
    data: function() {
        return {
            form: {
                user_name: "",
                password: "",
                real_name: ""
            },
        }
    },
    methods: {
        onSubmit() {},
    },
}
</script>
