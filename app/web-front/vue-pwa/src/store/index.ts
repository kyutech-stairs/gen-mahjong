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
      console.log(wind);
    },
    switchGroundWind(state, wind) {
      state.ground_wind = wind;
    },
  },
  actions: {
  },
  modules: {
  },
});
