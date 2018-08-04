<template>
  <div id="app">

    <galHeader></galHeader>
    <leftbar></leftbar>
    
    <div class="content">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>

  </div>
</template>

<script>
    import leftbar from './components/base/LeftBar'
    import galHeader from './components/base/Header'
    
    export default {
      name: 'App',
      components: { leftbar, galHeader }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.el-header {
  text-align: left;
  line-height: 60px;
}

.content {
  position: absolute;
  left: 220px;
  right: 0;
  top:60px;
  bottom: 0;
  width: auto;
  padding: 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
