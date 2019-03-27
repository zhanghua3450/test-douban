import Vue from 'vue';
import Router from 'vue-router';
import PagesView from "./views/PagesView.vue";
import HomeView from "./views/HomeView.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/pages/'
    },
    {
      path: '/pages',
      component: PagesView,
      children:[
        {
          path:'/',
          redirect:'/pages/home'
        },{
          path:'home',
          name:'home',
          component:HomeView
        }
      ]
    }
  ]
})
