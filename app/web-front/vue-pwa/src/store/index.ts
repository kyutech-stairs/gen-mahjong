import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    focus: false,
  },
  mutations: {
    switchFocus(state, bloocon) {
      state.focus = bloocon;
    },
  },
  actions: {
  },
  modules: {
  },
});
