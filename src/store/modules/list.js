import types from '../mutation-types'
const defaultState = {
  dataArr: [
    { id: 1, context: 'hello world' }
  ]
}

const getters = {
  dataArr: state => state.dataArr || []
}
const actions = {
  async getData () {
    return null
  }
}

const mutations = {
  [types.SET_LIST_DATA] (state, payload) {
    state.dataArr = payload
  }
}

export default {
  namespaced: true,
  state: defaultState,
  getters,
  actions,
  mutations
}
