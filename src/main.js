import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import '@/assets/css/vertical-spacing.css'; /* css spacing */
import '@/assets/css/layout.css'; /* css spacing */
import vueCookies from "vue-cookies";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjJIEnFanTQPt5iw5abjpQx8DleeevnwM",
  authDomain: "musicchart-7be4a.firebaseapp.com",
  databaseURL: "https://musicchart-7be4a-default-rtdb.firebaseio.com",
  projectId: "musicchart-7be4a",
  storageBucket: "musicchart-7be4a.appspot.com",
  messagingSenderId: "416789536358",
  appId: "1:416789536358:web:70856c98408e320b1d97a7",
  measurementId: "G-6LBVL257J2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);






createApp(App).use(router, vueCookies).mount('#app')
