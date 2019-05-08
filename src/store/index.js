import vue from 'vue';
import vuex from 'vuex';
import state from './state'
import mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'
import createLogger from 'vuex/dist/logger'

vue.use(vuex)

const debug = process.env.NODE_ENV === 'development'

export default new vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: debug ? [createLogger()] : []
})
