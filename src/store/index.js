import Vue from 'vue'
import Vuex from 'vuex'
import {jobService} from '../services/jobService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobs: []
  },
  mutations: {
    setJobs(state, {filters}) {
      state.jobs = jobService.query(filters);
    }
  },
  getters: {
    jobs(state) {
      return state.jobs
    }
  }
})
