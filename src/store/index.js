import Vue from 'vue'
import Vuex from 'vuex'
import persist from 'vuex-persistedstate'
import moduleA from './moduleA'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backColor: '#f39a96',
    toggleMask: false,
    taskList: [],
    time: '2021-03-22',
    goods: []
  },

  getters: {
    changeTime(state) {
      return state.time + ' 12:12:12'
    }
  },

  mutations: { // 只能同步操作数据
    changeMask(state) {
      state.toggleMask = !state.toggleMask
    },

    changeBackColor(state,value) {
      state.backColor = value
    },

    addTask(state, value) {
      state.taskList.push(value)
    },

    changeTaskStatus(state, i) {
      state.taskList[i].status = 2
    },

    changeGoods(state, val) {
      console.log(val)
      state.goods = val
    }

  },
  actions: {  // 处理异步数据的函数
    getProducts(context) {
      // console.log(context)
      setTimeout(function() {
        context.commit('changeGoods', [{name: '黑龙瞎'}, {name:''}])
      }, 1000) 
    }
  },
  modules: {
    moduleA
  },

  plugins: [persist()]
})
