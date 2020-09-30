import * as jobsData from '../data/jobs.json';

export const jobService = {
    query
}

const jobs = jobsData.default

function query(filters = []) {
    if (!filters.length) return jobs
}