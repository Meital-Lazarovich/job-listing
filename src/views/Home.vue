<template>
    <section class="home flex column align-center">
        <JobFilter @jobs-filtered="loadJobs" />
        <JobList v-if="jobs && jobs.length" :jobs="jobs" />
    </section>
</template>

<script>
import JobList from '../components/JobList'
import JobFilter from '../components/JobFilter'

export default {
    name: 'Home',
    created() {
        this.loadJobs()
    },
    computed: {
        jobs() {
            return this.$store.getters.jobs
        }
    },
    methods: {
        loadJobs(filters = []) {
            this.$store.commit('setJobs', {filters})
        }
    },
    components: {
        JobList,
        JobFilter
    }
}
</script>
