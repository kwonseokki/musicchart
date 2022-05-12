firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged((fireU) => store.commit("setFireUser",fireU))
Vue.prototype.$firebase = firebase