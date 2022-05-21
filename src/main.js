import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import '@/assets/css/vertical-spacing.css'; /* css spacing */
import '@/assets/css/layout.css'; /* css spacing */
import vueCookies from "vue-cookies";
import { initializeApp } from "firebase/app";








createApp(App).use(router, vueCookies).mount('#app')
