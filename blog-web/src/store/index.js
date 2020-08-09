import Vue from 'vue'
import Vuex from 'vuex'
import Context from './modules/Context'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    Context
  }
})
