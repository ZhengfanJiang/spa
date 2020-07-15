import types from '../mutation-types'
import { getPostData } from '../../api/list/request'

const defaultState = {
  dataArr: []
}

const getters = {
  dataArr: state => state.dataArr || []
}
const actions = {
  async getData (context, count) {
    const payload = await getPostData(count)
    context.commit(types.SET_LIST_DATA, payload)
  },
  async addData (context, count) {
    const payload = await getPostData(count)
    context.commit(types.ADD_DATA, payload)
  }
}

const mutations = {
  [types.SET_LIST_DATA] (state, payload) {
    state.dataArr = payload
  },
  [types.ADD_DATA] (state, payload) {
    state.dataArr = state.dataArr.concat(payload)
  }
}

export default {
  namespaced: true,
  state: defaultState,
  getters,
  actions,
  mutations
}
