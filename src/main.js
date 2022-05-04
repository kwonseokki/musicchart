import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import '@/assets/css/vertical-spacing.css'; /* css spacing */
import '../plugins/firebase.js'


createApp(App).use(router).mount('#app')
