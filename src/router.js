import { createWebHistory, createRouter } from "vue-router";
import doSearch from './components/doSearch.vue';
import viewChart from './components/viewChart.vue';
import myPage from './components/myPage.vue';
import myPageDetail from './components/myPageDetail.vue';
import doLogin from './components/doLogin.vue';
import doRegister from './components/doRegister.vue'
import SideMenu from './components/SideMenu.vue';
import ListDetail from './components/ListDetail.vue';
import ListChart from './components/ListChart.vue'
const routes = [
  {
    path: "/",
    components: {
      default: viewChart,
      sidemenu:SideMenu
    },
    props: true
  },
  {
    path: "/listchart",
    components: {
      default: ListChart,
      sidemenu:SideMenu
    },
    
    props: true
  },

  {
    path: "/search",
    components: {
      default: doSearch,
      sidemenu:SideMenu,
    },
    props: true
  },
  {
    path: "/myPage",
    props: true,
    components: {
      default: myPage,
      sidemenu:SideMenu
    },
    children: [
      {
        path: '/myPage',
        component: myPageDetail,
        props: true,
      }
    ]
  },
  {
    path: "/login",
    component: doLogin,
    props: true,
  },
  {
    path: "/register",
    component: doRegister,
  },
  {
    path:"/listdetail/:pageNum",
    components: {
      default:ListDetail,
      sidemenu:SideMenu
    },
    props: true
  },
  {
    path:"/listdetail",
    components: {
      default:ListDetail,
      sidemenu:SideMenu
    },
    props: true
  },

];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;