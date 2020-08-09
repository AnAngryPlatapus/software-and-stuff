import { apolloClient } from '../../main'
import {CURRENT_CONTEXT_QUERY} from '../../graphql'

const state = {
  active: false,
  role: null
}

const getters = {
  getRole: state => state.role,
  isLoggedIn: (state) => state.active
}

const mutations = {
  SET_ACTIVE (state, active) {
    state.active = active
  },
  SET_ROLE (state, role) {
    state.role = role
  }
}

const actions = {
  async login ({ commit, dispatch }) {
    try {
      const userInfo = await apolloClient.query({ query: CURRENT_CONTEXT_QUERY })
      commit('SET_ACTIVE', true)
      commit('SET_ROLE', userInfo.data.currentUser.role)
    } catch (e) {
      console.log(e)
    }
  },
  logout ({ commit, dispatch }) {
    commit('SET_ACTIVE', false)
    commit('SET_ROLE', null)
    localStorage.setItem('blog-app-token', null)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
