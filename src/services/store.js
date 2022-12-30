import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  sum: undefined,
  average: undefined,
  questionnaireComplete: false,
  error: {},
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
  getError(state) {
    return state.error;
  },
  thereIsError(state) {
    return Object.keys(state.error).length;
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
  SET_ERROR({ commit }, value) {
    commit('SET_ERROR_MUTATION', value);
    // Clear error after 5 seconds
    setTimeout(() => {
      commit('SET_ERROR_MUTATION', {});
    }, 5000);
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
  SET_ERROR_MUTATION(state, value) {
    state.error = value;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
