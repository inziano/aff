import axios from 'axios'

export default {
    namespaced: true,
    // State
    state: ()=>({
        threads: [],
    }),
    // Mutations
    mutations: { 
        // load threads
        LOAD(state, threads){
            state.threads = threads
        },
        // Add thread
        ADD(state, thread){
            thread = thread[0]
            // Update
            state.threads.push(thread)
        },
        // Update threads
        UPDATE(state, thread){
            thread = thread[0]
            // Find thread matching
            state.threads.filter((t)=>{
                if ( t.id === thread.id ){
                    Object.assign( t, thread)
                } 
                return t
            })
        },
        // Delete specific thread
        DELETE(state, thread){
            state.threads = state.threads.filter( t=>{
                // Filter out the thread
                return t.id !== thread
            })
        },
    },
    // Actions
    actions: {
        // Fetch 
        async fetch({commit}, page = 1){
            // load threads
            let response = await axios.get(`api/threads?page=${page}`)
            // commit
            commit('LOAD', response.data)
        },
        // Filter
        async filter({commit},{criteria, term}){
            // filter publications
            let response = await axios.get(`api/threads?${criteria}=${term}`)
            // Commit
            commit('LOAD', response.data)
        },
        // Create
        async create({commit}, data){
            // create the thread
            await axios.post('api/threads', data)
        },
        // New thread
        newThread({commit}, data){
            // Commit 
            commit('ADD', data)
        },
        // Update
        async update({commit},{id, data}){
            // Push patch
            let response = await axios.patch(`api/threads/${id}`, data)
            // commit
            commit('UPDATE', response.data.data)
        },
        // Thread updated
        updateThreads({commit}, data){
            commit('UPDATE', data)
        },
        // Delete 
        async delete({commit},payload){
            // Delete the thread
            let response = await axios.delete(`api/threads/${payload}`)
            // Commit
            commit('DELETE', payload)
        },
    },
    // Getters
    getters: {
        // Threads
        threads: state => state.threads.data,
        meta: state => state.threads.meta,
        links: state => state.threads.links
    }
}