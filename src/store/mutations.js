import * as types from './mutation-types'

const mutations = {
  [types.CREATE_WARN](state, val) {
    state.warn = val
  },
  [types.ROUTE_TO](state, to) {
    state.routeTo = to
  }
}

export default mutations
