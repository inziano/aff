import axios from 'axios'

export default {
    namespaced: true,
    // State
    state: ()=>({
        events: {
            data: [],
            meta: {},
            links: {}
        },
    }),
    // Mutations
    mutations: {
        // Load
        LOAD(state, events){
            state.events = events
        },
        // Add
        ADD(state, event){
            event = event[0]
            state.events.data.push(event)
        },
        // Delete
        DELETE(state, event){
            state.events = state.events.filter( e=>{
                // Filter out the thread
                return e.id !== event
            })
        },
    },
    // Actions
    actions: {
        // Fetch
        async fetch({commit}, page=1){
            // load events
            let response = await axios.get(`api/event?page=${page}`)
            // commit
            commit('LOAD', response.data)
        },
        // Filter
        async filter({commit},{criteria, term}){
            // filter publications
            let response = await axios.get(`api/event?${criteria}=${term}`)
            // Commit
            commit('LOAD', response.data)
        },
        // Create
        async create({commit}, data){
            // push dataa
            await axios.post('api/event', data)
        },
        // Update
        newEvent({commit},data){
            // commit to store
            commit('ADD', data)
        },
        // Delete
        async delete({commit},data){
            let response = await axios.delete(`api/event/${data}`)
            // Delete if succesful
            commit('DELETE', data)
        },
    },
    // Getters
    getters: {
        // Events
        events: state => state.events.data,
        meta: state => state.events.meta,
        links: state => state.events.links
    }
}
