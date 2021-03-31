var moduleA = {
    state: {
        content: '德玛西亚'
    },
    getters: {
        changeContent(state, getters, rootState) {
            return state.content.split('').reverse().join('')
        }
    },
    mutations: {

    },

    actions: {

    },

    modules: {

    },

    plugins: []
}

export default moduleA