/**
 * Created by Administrator on 2017/6/5.
 */
import * as types from './types'
import getters from './getters'
const state = {
  switchStatus: 'forward',
};

const mutations = {
  [types.UPDATE_DIRECTION](state,payload) {
    state.switchStatus = payload.switchStatus
  },
};

export default {
  state,
  mutations,
  getters
}
