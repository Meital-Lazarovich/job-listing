<template>
    <section :class="['job-preview flex space-between', {marked: job.isFeatured}]">
        <img :src="imgSrc" :alt="job.comp.name" />
        <div class="info flex column space-between">
            <p class="main bold flex align-center">
                <span class="comp-name">{{ job.comp.name }}</span>
                <span class="new flag flex-center" v-if="job.isNew">new!</span>
                <span class="featured flag flex-center" v-if="job.isFeatured">featured</span>
            </p>
            <p class="title bold pointer">{{ job.title }}</p>
            <div class="extra">
                {{creationTime}}d ago<span>•</span>{{job.jobDef}}<span>•</span>{{job.loc}} 
            </div>
        </div>
        <div class="tags flex align-center">
            <div class="bold pointer" v-for="(tag, idx) in job.tags" :key="idx">
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