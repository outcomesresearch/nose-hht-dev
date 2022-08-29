import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  sum: undefined,
  average: undefined,
  questionnaireComplete: false,
};

const getters = {
  getSum(state) {
    return state.sum;
  },
  getAverage(state) {
    return state.average;
  },
  getQuestionnaireComplete(state) {
    return state.questionnaireComplete;
  },
};

const actions = {
  SET_SUM({ commit }, value) {
    commit('SET_SUM_MUATION', value);
  },
  SET_AVERAGE({ commit }, value) {
    commit('SET_AVERAGE_MUATION', value);
  },
  SET_QUESTIONNAIRECOMPLETE({ commit }, value) {
    commit('SET_QUESTIONNAIRECOMPLETE_MUATION', value);
  },
};

const mutations = {
  SET_SUM_MUATION(state, value) {
    state.sum = value;
  },
  SET_AVERAGE_MUATION(state, value) {
    state.average = value;
  },
  SET_QUESTIONNAIRECOMPLETE_MUATION(state, value) {
    state.questionnaireComplete = value;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
