/*
 * @Author: your name
 * @Date: 2021-04-19 09:54:25
 * @LastEditTime: 2021-04-19 09:55:56
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vite-project\src\store\index.ts
 */
import { createStore } from 'vuex'

const defaultState = {
  count: 0
}
export default createStore({
    state() {
      return defaultState
    },
    mutations: {
      increment(state: typeof defaultState) {
        state.count++
      }
    },
    actions: {
      increment(context) {
        context.commit('increment')
      }
    },
    getters: {
      double(state: typeof defaultState) {
        return 2 * state.count
      }
    }
  })