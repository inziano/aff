import axios from 'axios'

export default {
    namespaced: true,

    state: () => ({
        members: {
            data: [],
            meta: {},
            links: {}
        }
    }),
    // Mutations
    mutations: {
        // Load
        LOAD(state, members){
            state.members = members
        },
        // Update
        UPDATE(state, member){
            member = member[0]
            // Find thread matching
            state.members.data.filter((t)=>{
                if ( m.id === member.id ){
                    Object.assign( m, member)
                } 
                return m
            })
        },
    },

    // Actions
    actions: {
        // Fetch
        async fetch({commit},page=1){
            // load the members
            let response = await axios.get(`api/user?page=${page}`)
            // Comit
            commit('LOAD', response.data)
        },
        // Filter
        async filter({commit},{criteria, term}){
            // filter publications
            let response = await axios.get(`api/user?${criteria}=${term}`)
            // Commit
            commit('LOAD', response.data)
        },
        // Update
        async update({commit}, {id, data}){
            console.log(id)
            // Push patch
            let response = await axios.patch(`api/user/${id}`, data)
            // commit
            // commit('UPDATE', response.data.data)
        },
    },

    // Getters
    getters: {
        members: state => state.members.data,
        meta: state => state.members.meta,
        links: state => state.members.links
    },
    
}