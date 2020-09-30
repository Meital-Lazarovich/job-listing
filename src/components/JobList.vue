<template>
    <section class="job-list">
        <JobPreview v-for="job in jobs" :job="job" :key="job._id"></JobPreview>
    </section>
</template>

<script>
import JobPreview from './JobPreview'
export default {
    props: {jobs: Array},
    components: {
        JobPreview
    }
}
</script>