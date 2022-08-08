import Vue from "vue";
import VueRouter from "vue-router";
import Content from "../components/Content";
import main from "../components/main";
import monan from "../components/monan";
//安装路由
//路由配置文件
Vue.use(VueRouter);

//配置导出资源
//那么其他地方就可以用了
export default new VueRouter({

routes:[
  {
//    路由路径  有点像requestmapping
    path:'/content',
    name:'content',
//    输入这个路由就会跳到到相应 组件
    component:Content
//    然后放这里就能用了

//跳转的组件
},
  {
    path: '/main',
    name: 'main',
    component:main
  },
  {
    path:'/monan',
    name:'monan',
    component:monan
  }
]
});
