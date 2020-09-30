<template>
    <section class="job-filter container flex">
        <input type="text" placeholder="Enter words separated by comma to filter results" v-model="filter" @input="setFilter"/>
    </section>
</template>

<script>
export default {
    data() {
        return {
            filter: ''
        }
    },
    methods: {
        setFilter() {
            const filters = this.filter.split(',')
            this.$emit('jobs-filtered', filters);
        }
    }
}
</script>