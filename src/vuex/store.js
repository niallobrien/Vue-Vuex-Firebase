// vuex/store.js
import Vue from 'vue'
import Vuex from 'vuex'
import VuexFire from 'vuexfire'
import messages from './modules/messages'

Vue.use(Vuex)
Vue.use(VuexFire)
Vue.config.debug = true

export default new Vuex.Store({
  mutations: VuexFire.mutations,
  getters: {
    messages: state => { state.messages }
  },
  modules: {
    messages
  }
})
