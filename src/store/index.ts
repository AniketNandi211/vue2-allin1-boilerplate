import Vue from 'vue'
import Vuex from 'vuex'
import Counter from '@/store/modules/counter'
import { getModule } from 'vuex-module-decorators'

Vue.use(Vuex)

// Root state just holds info about the app and nothing else
const store = new Vuex.Store({
  state: {
    appVersion: 0.5,
    appName: 'Vue TypeScript boilerplate App',
    desc: 'A boilerplate app with vue2 + typescript along with' +
      ' vuetify, vue-router, vuex-store'
  },
  modules: {
    Counter
  }
})

export default store
export const CounterModule = getModule(Counter, store)