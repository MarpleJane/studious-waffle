<template>
    <div class='header'>
        <div class='gal-header'>wechatGAL</div>
        <div class='logout'>退出</div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data: function() {
            return {}
        }
    }
</script>

<style>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width:100%;
        height:48px;
        line-height: 45px;
        color: white;
        background-color: #000;
        border-bottom: 2px solid #cd3333;
        z-index: 10;
    }

    .gal-header {
        text-align: left;
        margin-left: 20px;
        float: left;
    }

    .logout {
        float: right;
        margin-right: 50px;
    }
</style>
