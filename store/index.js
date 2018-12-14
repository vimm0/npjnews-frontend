import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      article: '',
      categories: ''
    },
    mutations: {
      addArticle(state, payload) {
        state.article = payload
      },
      addCategories(state, payload) {
        state.categories = payload
      }
    },
    // actions: {},
    // getters: {...}
  })
}

export default createStore
