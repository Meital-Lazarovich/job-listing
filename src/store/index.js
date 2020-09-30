import Vue from 'vue'
import Vuex from 'vuex'
import jobService from '../services/jobService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobs: []
  },
  mutations: {
    setJobs(state, { jobs }) {
      state.jobs = jobs;
    }
  },
  getters: {
    jobs(state) {
      return state.jobs
    }
  },
  actions: {
    loadJobs(context) {
      const jobs = jobService.getJobs();
      context.commit({ type: 'setJobs', jobs })
    }
  }
})
