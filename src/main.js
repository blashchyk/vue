import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyC7DkzLOVuIqap17y_llNg-zP_A4Jvkce0',
      authDomain: 'itc-ads-5abbb.firebaseapp.com',
      databaseURL: 'https://itc-ads-5abbb.firebaseio.com',
      projectId: 'itc-ads-5abbb',
      storageBucket: 'itc-ads-5abbb.appspot.com',
      messagingSenderId: '280504655379'
    })
  }
})
