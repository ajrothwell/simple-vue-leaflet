import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    map: {
      map: null,
      // center: [],
    }
  },
  mutations: {
    setMap(state, payload) {
      state.map.map = payload.map;
    },
  },
  actions: {

  }
})
