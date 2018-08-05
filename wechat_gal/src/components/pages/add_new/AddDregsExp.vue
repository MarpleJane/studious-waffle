<template>
    <div>
        <h3>新增渣男体验剧情</h3>
        <div class="add-form">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="剧情名">
                    <el-input v-model="form.plot_name"></el-input>
                </el-form-item>
                <el-form-item label="设计者">
                    <el-input v-model="form.designed_by"></el-input>
                </el-form-item>
                <el-form-item label="说明">
                    <el-input type='textarea' v-model="form.description"></el-input>
                </el-form-item>
                <el-form-item label="选择图片">
                    <el-button><i class='el-icon-upload el-icon--right'></i>点击上传</el-button>
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
    name: "AddAdmin",
    data: function() {
        return {
            form: {
                plot_name: "",
                designed_by: "",
                cover_path: "",
                position: 0,
                type_id: 2,
                description: "",
                plot_json: ""
            },
        }
    },
    methods: {
        onSubmit() {},
    },
}
</script>
