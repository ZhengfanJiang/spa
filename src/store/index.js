import createPersistedState from 'vuex-persistedstate'
import Vue from 'vue'
import Vuex from 'vuex'

import list from './modules/list'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    list
  },
  plugins: [
    createPersistedState({
      // path to persist
      paths: ['list']
    })
  ]
})
