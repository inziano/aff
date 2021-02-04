import axios from 'axios'

const baseURL = process.env.MIX_API_URL

export default {
    namespaced: true,
    // State
    state: ()=>({
        publications: {
            data: [],
            meta: {},
            links: {}
        },
    }),
    // Mutations
    mutations: {
        // load publications
        LOAD(state, publications){
            state.publications = publications
        },
    },
    // Actions
    actions: {
        // Fetch
        async fetch({commit}, page = 1){
            // load publications 
            let response = await axios.get(`${baseURL}/publications?page=${page}`)
            // Commit
            commit('LOAD', response.data)
        },
        // Filter
        async filter({commit},{criteria, term}){
            // filter publications
            let response = await axios.get(`${baseURL}/publications?${criteria}=${term}`)
            // Commit
            commit('LOAD', response.data)
        },
    },
    // Getters
    getters: {
        // Publications
        publications: state => state.publications.data,
        meta: state => state.publications.meta,
        links: state => state.publications.links
    }
}