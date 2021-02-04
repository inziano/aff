import axios from 'axios'

const baseURL = process.env.MIX_API_URL

export default {
    namespaced: true,
    // State
    state: ()=>({
        vacancies: {
            data: [],
            meta: {},
            links: {}
        },
        applications:  {
            data: [],
            meta: {},
            links: {}
        },
    }),
    // Mutations
    mutations: {
        // load vacancies
        LOAD(state, vacancies){
            state.vacancies = vacancies
        },
        LOAD_APPLICATIONS(state, applications){
            state.applications = applications
        },
        // Add vacancy
        ADD(state, vacancy){
            vacancy = vacancy[0]
            state.vacancies.data.push(vacancy)
        },
    },
    // Actions
    actions: {
        // Fetch
        async fetch({commit}){
            // load vacancies
            let response = await axios.get(`${baseURL}/vacancies`)
            // commit
            commit('LOAD', response.data)
        },
        async fetchApplications({commit}, id){
            // Fetch applications
            let response = await axios.get(`${baseURL}/vacancyapplications/${id}`)

            commit('LOAD_APPLICATIONS', response.data)
        },
        // Filter
        async filter({commit},{criteria, term}){
            // filter publications
            let response = await axios.get(`${baseURL}/vacancies?${criteria}=${term}`)
            // Commit
            commit('LOAD', response.data)
        },
        // create
        async create({commit},data){
            // Create vacancy
            await axios.post(`${baseURL}/vacancies`, data)

        },
        // New vacancy
        newVacancy({commit}, data){
            // commit
            commit('ADD', data)
        },
    },
    // Getters
    getters: {
        // Vacancies
        vacancies: state => state.vacancies.data,
        meta: state => state.vacancies.meta,
        links: state => state.vacancies.links,
        applications: state => state.applications.data
    }
}
