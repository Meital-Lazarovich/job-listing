import Vue from 'vue'
import Vuex from 'vuex'
import {jobService} from '../services/jobService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobs: []
  },
  mutations: {
    setJobs(state) {
      state.jobs = jobService.query();
    }
  },
  getters: {
    jobs(state) {
      return state.jobs
    }
  }
})
