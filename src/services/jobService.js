import jobs from './data/jobs.json';

export {
    query
}

function query(filters = []) {
    if (!filters.length) return jobs
}