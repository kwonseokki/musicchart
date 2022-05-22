import { createWebHistory, createRouter } from "vue-router";
import doSearch from './components/doSearch.vue';
import ListDetail from './components/ListDetail.vue';
import ListChart from './components/ListChart.vue'

const routes = [

  /* 차트리스트 페이지 */
  {
    path: "/",
    components: {
      default: ListChart,
      doSearch:doSearch
    },
    props: true
  },
   /* 검색 페이지 */
  {
    path: "/search",
    components: {
      default: doSearch,
    },
    props: true
  },

  /* 상세페이지 */
  {
    path:"/listdetail/:pageNum",
    components: {
      default:ListDetail,
    },
    props: true
  },
  /* 상세페이지 접근방지 */
  {
    path:"/listdetail",
    components: {
      default:ListDetail,
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