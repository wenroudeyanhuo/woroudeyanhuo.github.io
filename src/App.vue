<template>
  <div id="app">


    <h1>温柔的烟火</h1>
<!--    以往我们缇欧转页面使用  a 标签-->
    <router-link to="/main">首页</router-link>
    <router-link to="/content">content</router-link>
    <router-link to="/monan">磨难</router-link>
<!--    视图-->
    <router-view></router-view>
<!--    写视图的目的是为了展示模板-->
<!--    现在使用router-->
  </div>
</template>
<!--且这是一个动态的！！！，这里运行之后可以随之页面的改动进行改变-->
<script>

export default {
  name: 'App',
}
</script>


<!--这边style没有scope 那么在所有地方都生效  -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
