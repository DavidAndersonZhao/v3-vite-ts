import { createStore } from 'vuex'
/** 格式 约束 */
export interface InterState  {  
  isShow: boolean;
}
export default createStore({
  state: {
    isShow: true
  },
  mutations: {
    show (state:InterState) {
      state.isShow = true
    },
    hide (state:InterState) {
      state.isShow = false
    }
  },
  actions: {},
  modules: {}
})
