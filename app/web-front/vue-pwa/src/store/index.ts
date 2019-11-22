import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    focus: false,
    own_wind: 'a',
    ground_wind: 'a',
  },
  mutations: {
    switchFocus(state, bloocon) {
      state.focus = bloocon;
    },
    switchOwnWind(state, wind) {
      state.own_wind = wind;
    },
    switchGroundWind(state, wind) {
      state.ground_wind = wind;
    },
  },
  getters: {
    focusInputBox: (state) => {
      return state.focus;
    },
    ownWind: (state) => {
      return state.own_wind;
    },
    groundWind: (state) => {
      return state.ground_wind;
    },
  },
  actions: {
  },
  modules: {
  },
});
