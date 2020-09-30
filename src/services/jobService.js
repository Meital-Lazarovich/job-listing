import * as jobsData from '../data/jobs.json';

export const jobService = {
    query
}

const jobs = jobsData.default

function query(filters) {
    if (!filters.length) return jobs
    return jobs.filter(job => {
        for (let i = 0; i < filters.length; i++) {
            const filter = filters[i];
            if (!job.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))) return false
        }
        return true
    })
}