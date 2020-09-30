<template>
    <section class="home container">
        <JobList v-if="jobs && jobs.length" :jobs="jobs"></JobList>
    </section>
</template>

<script>
import JobList from '../components/JobList'

export default {
    name: 'Home',
    created() {
      this.$store.commit('setJobs')
    },
    computed: {
        jobs() {
            return this.$store.getters.jobs
        }
    },
    components: {
        JobList
    }
}
</script>
