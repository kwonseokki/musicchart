import { createWebHistory, createRouter } from "vue-router";
import doSearch from './components/doSearch.vue';
import viewChart from './components/viewChart.vue';
import myPage from './components/myPage.vue';
import myPageDetail from './components/myPageDetail.vue';
import doLogin from './components/doLogin.vue';
import ViewHeader from './components/ViewHeader.vue';
import doRegister from './components/doRegister.vue'

import SideMenu from './components/SideMenu.vue';


const routes = [
  {
    path: "/",
    components: {
      default: viewChart,
      header: ViewHeader,
      sidemenu:SideMenu

      

    },
    props: true
  },
  {
    path: "/search",
    components: {
      default: doSearch,
      header: ViewHeader,
      sidemenu:SideMenu,
      header: ViewHeader

    },
    props: true
  },
  {
    path: "/myPage",
    props: true,
    components: {
      default: myPage,
      header: ViewHeader,
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
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;