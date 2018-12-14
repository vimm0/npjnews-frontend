import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      article: '',
      categories: '',
      internationalNews: '',
      breakingNews: '',
    },
    mutations: {
      addArticle(state, payload) {
        state.article = payload
      },
      addCategories(state, payload) {
        state.categories = payload
      },
       addInternationalNews(state, payload) {
        state.internationalNews = payload
      },
      addBreakingNews(state, payload) {
        state.breakingNews = payload
      }
    },
    // actions: {},
    // getters: {...}
  })
}

export default createStore
