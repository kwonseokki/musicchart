import { createWebHistory, createRouter } from "vue-router";
import doSearch from './components/doSearch.vue';
import viewChart from './components/viewChart.vue';
import myPage from './components/myPage.vue';
import myPageDetail from './components/myPageDetail.vue';
import doLogin from './components/doLogin.vue';
import SideMenu from './components/SideMenu.vue';
import ListDetail from './components/ListDetail.vue';
import ListChart from './components/ListChart.vue'

const routes = [
  /* 홈화면 경로 */
  {
    path: "/",
    components: {
      default: viewChart,
      sidemenu:SideMenu
    },
    props: true
  }, 
  /* 차트리스트 페이지 */
  {
    path: "/listchart",
    components: {
      default: ListChart,
      sidemenu:SideMenu
    },
    props: true
  },
   /* 검색 페이지 */
  {
    path: "/search",
    components: {
      default: doSearch,
      sidemenu:SideMenu,
    },
    props: true
  },
  /* 마이페이지 */
  {
    path: "/myPage",
    props: true,
    components: {
      default: myPage,
      sidemenu:SideMenu
    },
    children: [  // 마이페이지 상세 컴포넌트
      {
        path: '/myPage',
        component: myPageDetail,
        props: true,
      }
    ]
  },
  /* 로그인 페이지 */
  {
    path: "/login",
    component: doLogin,
    props: true,
  },
  /* 상세페이지 */
  {
    path:"/listdetail/:pageNum",
    components: {
      default:ListDetail,
      sidemenu:SideMenu
    },
    props: true
  },
  /* 상세페이지 접근방지 */
  {
    path:"/listdetail",
    components: {
      default:ListDetail,
      sidemenu:SideMenu
    },
    beforeEnter: (to, from, next) => {
      alert("잘못된 접근입니다.");
      next('/');
    }
  },
];




const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;