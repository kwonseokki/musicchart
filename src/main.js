import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import '@/assets/css/vertical-spacing.css'; /* css spacing */



createApp(App).use(router).mount('#app')
