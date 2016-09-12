import Vue from 'vue'
import VueFire from 'vuefire'
// import Firebase from 'firebase'
import App from './App'

Vue.use(VueFire)

// const firebaseApp = Firebase.initializeApp({ databaseURL: 'https://tinyissue-f4320.firebaseio.com/' })
// const db = firebaseApp.database()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
