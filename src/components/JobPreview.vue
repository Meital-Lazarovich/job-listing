<template>
    <section class="job-preview">
        <h2>{{ job.title }}</h2>
    </section>
</template>

<script>
export default {
    props: { job: Object }
}
</script>