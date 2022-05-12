import { createWebHistory, createRouter } from "vue-router";
import doSearch from './components/doSearch.vue';
import viewChart from './components/viewChart.vue';
import myPage from './components/myPage.vue';
import myPageDetail from './components/myPageDetail.vue';
import doLogin from './components/doLogin.vue';
import ViewHeader from './components/ViewHeader.vue';
import doRegister from './components/doRegister.vue'
<<<<<<< HEAD
import SideMenu from './components/SideMenu.vue';
=======
>>>>>>> 5660202dc19e7cabd32ae26a4d813ea1b46f4127
const routes = [
  {
    path: "/",
    components: {
      default: viewChart,
      header: ViewHeader,
<<<<<<< HEAD
      sidemenu:SideMenu
=======
      
>>>>>>> 5660202dc19e7cabd32ae26a4d813ea1b46f4127
    },
    props: true
  },
  {
    path: "/search",
    components: {
      default: doSearch,
<<<<<<< HEAD
      header: ViewHeader,
      sidemenu:SideMenu
=======
      header: ViewHeader
>>>>>>> 5660202dc19e7cabd32ae26a4d813ea1b46f4127
    },
    props: true
  },
  {
    path: "/myPage",
    props: true,
    components: {
      default: myPage,
      header: ViewHeader,
<<<<<<< HEAD
      sidemenu:SideMenu
=======
>>>>>>> 5660202dc19e7cabd32ae26a4d813ea1b46f4127
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
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;