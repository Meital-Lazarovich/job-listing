<template>
    <section class="job-preview flex align-center space-between">
        <img :src="imgSrc" :alt="job.comp.name" />
        <div class="info flex column space-between">
            <p class="main">
                <span class="comp-name">{{ job.comp.name }}</span>
                <span class="new flag" v-if="job.isNew">new!</span>
                <span class="featured flag" v-if="job.isFeatured">featured</span>
            </p>
            <h4>{{ job.title }}</h4>
            <div class="extra">
                {{creationTime}} 
                <span>•</span>
                {{job.jobDef}} 
                <span>•</span>
                {{job.loc}} 
            </div>
        </div>
        <div class="tags">
            <div v-for="(tag, idx) in job.tags" :key="idx">
                {{ tag }}
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: { job: Object },
    computed: {
        creationTime() {
            const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
            const currTime = Date.now()
            return Math.floor((currTime - this.job.createdAt) / oneDay)
        },
        imgSrc() {
            return require(`@/assets/img/comps/${this.job.comp.img}`)
        }
    }
}
</script>