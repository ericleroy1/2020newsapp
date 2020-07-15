import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from "axios";
import firebase from "firebase/app"
import 'firebase/firestore'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBbU7DkCcyuZiDynO56fLAg4feCiNJ6ozY",
  authDomain: "newsapp-32dbc.firebaseapp.com",
  databaseURL: "https://newsapp-32dbc.firebaseio.com",
  projectId: "newsapp-32dbc",
  storageBucket: "newsapp-32dbc.appspot.com",
  messagingSenderId: "369097604086",
  appId: "1:369097604086:web:6a7272319f290f518fe5d7",
  measurementId: "G-ZW3VQX3EVF"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
