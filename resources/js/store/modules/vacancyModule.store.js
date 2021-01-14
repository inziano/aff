import axios from 'axios'

export default {
    namespaced: true,
    // State
    state: ()=>({
        vacancies: {
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
            let response = await axios.get('api/vacancies')
            // commit
            commit('LOAD', response.data)
        },
        // Filter
        async filter({commit},{criteria, term}){
            // filter publications
            let response = await axios.get(`api/vacancies?${criteria}=${term}`)
            // Commit
            commit('LOAD', response.data)
        },
        // create
        async create({commit},data){
            // Create vacancy
            await axios.post('api/vacancies', data)

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
    }
}
