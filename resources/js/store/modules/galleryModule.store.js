import axios from 'axios'

export default {
    namespaced: true,
    // State
    state: ()=>({
        images: {
            data: [],
            meta: {},
            links: {}
        },
    }),
    // Mutations
    mutations: {
        // load images
        LOAD(state, images){
            state.images = images
        },
    },
    // Actions
    actions: {
        // Fetch
        async fetch({commit}, page = 1){
            // load images 
            let response = await axios.get(`api/gallery?page=${page}`)
            // Commit
            commit('LOAD', response.data)
        },
        // Filter
        async filter({commit},{criteria, term}){
            // filter images
            let response = await axios.get(`api/gallery?${criteria}=${term}`)
            // Commit
            commit('LOAD', response.data)
        },
    },
    // Getters
    getters: {
        // images
        images: state => state.images.data,
        meta: state => state.images.meta,
        links: state => state.images.links
    }
}