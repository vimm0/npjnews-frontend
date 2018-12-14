import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      articles: '',
      categories: '',
      internationalNews: '',
      breakingNews: '',
    },
    mutations: {
      addArticle(state, payload) {
        state.articles = payload
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
