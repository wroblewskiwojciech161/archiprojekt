import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
/**
 * Scentralizowane zarządzanie stanem aplikacji
 */
export default new Vuex.Store({
  /**
   * stan aplikacji
   */
  state: {
    mobile : false,
    language: window.localStorage.getItem('lang_config') ?  window.localStorage.getItem('lang_config') : 'pl',
    apiURL:process.env.VUE_APP_API_URL,
    user_uuid : null,
    user:null
  },
  mutations: {
    updateState(state, { key, value }) {
      Vue.set(state, key, value);
    },
  },
  actions: {
    
    invokeUpdateState({ commit }, payload) {
      const key = payload.key;
      const value = payload.value;
      commit("updateState", { key, value });
    },
  },
  modules: {},
  getters: {
    getApiUrl: (state) => {
      return state.apiURL;
    },
    isLogged: (state) =>{
      return state.logged;
    },
    getCurrentUser: (state) =>{
      return state.user_uuid
    },
    getUserData: (state) =>{
      return state.user
    },
    getMobile : (state) =>{
      return state.mobile
    }
  }
});
