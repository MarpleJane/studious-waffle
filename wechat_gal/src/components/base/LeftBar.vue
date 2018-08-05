<template>
    <div class="leftbar">
        <el-menu :default-active="$route.path" 
          class="el-menu-vertical-demo" 
          unique-opened router
          background-color="#000"
          text-color="#fff"
          active-text-color="#fff">
            <el-menu-item index="/admin_management">
                <i class="el-icon-menu"></i>
                <span slot="title">账号管理</span>
            </el-menu-item>
            <el-submenu index="simulation">
                <template slot="title">模拟类型剧情</template>
                <el-menu-item index="/simulation/love_experience">
                    恋爱体验
                </el-menu-item>
                <el-menu-item index="/simulation/dregs_experience">
                    渣男模拟
                </el-menu-item>
            </el-submenu>
            <el-submenu index="chapter">
                <template slot="title">章节式剧情</template>
                <el-menu-item index="/chapter/kira_campus">
                    Kira学园
                </el-menu-item>
                <el-menu-item index="/chapter/kamisama">
                    神明的一天
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "LeftBar",
        data: function() {
            return {}
        },
        computed: {
            onRoutes: function() {
                console.log(this.$route.path)
                return this.$route.path.replace("/", "")
            }
        }
    }
</script>

<style scoped>
    .leftbar {
        position: fixed;
        display: block;
        width: 200px;
        top: 50px;
        left: 0;
        bottom: 0;
    }
    .leftbar > ul {
        height: 100%;
    }

    .el-menu-item.is-active {
        background-color: darkred !important;
    }

    .el-submenu .el-menu-item {
        min-width: 199px;
    }
</style>
