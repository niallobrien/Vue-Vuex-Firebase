import { ADD_MESSAGE } from '../mutation-types'

// initial state
const state = {
  messages: []
}

// mutations
const mutations = {
  [ADD_MESSAGE] (state, messages) {
    state.messages = messages
  }
}

export default {
  state,
  mutations
}
