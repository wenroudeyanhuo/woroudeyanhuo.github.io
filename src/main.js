// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'  //自动扫描里面的路由配置



//导入进来之后，vue还需要显示的进行声明
Vue.config.productionTip = false
//使用插件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //导入路由配置后，可以使用
  router,
  components: { App },
  template: '<App/>'
})
