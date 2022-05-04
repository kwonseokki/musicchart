import { createWebHistory, createRouter } from "vue-router";
import doSearch from './components/doSearch.vue';
import viewChart from './components/viewChart.vue';
import myPage from './components/myPage.vue';
import myPageDetail from './components/myPageDetail.vue';
import doLogin from './components/doLogin.vue';
import ViewHeader from './components/ViewHeader.vue';
import doRegister from './components/doRegister.vue'
const routes = [
  {
    path: "/",
    components: {
      default: viewChart,
      header: ViewHeader
    },
    props: true
  },
  {
    path: "/search",
    components: {
      default: doSearch,
      header: ViewHeader
    },
    props: true
  },
  {
    path: "/myPage",
    components: {
      default: myPage,
      header: ViewHeader
    },
    children: [
      {
        path: '/myPage',
        component: myPageDetail
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