import { createWebHistory, createRouter } from "vue-router";
import doSearch from './components/doSearch.vue';
import viewChart from './components/viewChart.vue';
import myPage from './components/myPage.vue';
import myPageDetail from './components/myPageDetail.vue';
import doLogin from './components/doLogin.vue';

const routes = [
  {
    path: "/",
    component: viewChart,
    props: true
  },
  {
    path: "/search",
    component: doSearch,
    props: true
  },
  {
    path: "/myPage",
    component: myPage,
    children : [
        { path : '/myPage',
         component : myPageDetail
        }
    ]
  },
  {
    path: "/login",
    component: doLogin,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;