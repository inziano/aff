import axios from 'axios'

const baseURL = process.env.MIX_API_URL

export default {
    namespaced: true,

    state: () => ({
        members: {
            data: [],
            meta: {},
            links: {}
        },
        member: {
            data: [],
            meta: {},
            links: {}
        },
        notifications: {},
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
        LOAD_MEMBER(state, member){
            state.member = member
        },
        LOAD_NOTIFICATIONS( state, notifications){
            state.notifications = notifications
        }
    },

    // Actions
    actions: {
        // Fetch
        async fetch({commit},page=1){
            // load the members
            let response = await axios.get(`${baseURL}/users?page=${page}`)
            // Comit
            commit('LOAD', response.data)
        },
        // 
        async fetchMember({commit},user=1){
            let response = await axios.get(`${baseURL}/users?user=${user}`)

            commit('LOAD_MEMBER', response.data)
        },
        // Filter
        async filter({commit},{criteria, term}){
            // filter publications
            let response = await axios.get(`${baseURL}/users?${criteria}=${term}`)
            // Commit
            commit('LOAD', response.data)
        },
        // Create
        async create({commit}, data){
            let response = await axios.post(`${baseURL}/users`, data)
        },
        // Update
        async update({commit}, {id, data}){
            // Push patch
            let response = await axios.patch(`${baseURL}/users/${id}`, data)
        },
        // Make member
        async approve({commit}, data){
            let response = await axios.patch( `${baseURL}/users/membership`, data)

            return response
        },
        // Get notifications
        async fetchNotifications({commit}, user){
            // Get the notifications for a particular user
            let response = await axios.get(`${baseURL}/usernotifications?user=${user}`)
            // 
            response = response.data.map( e => {
                return e.data
            })
            // Commit
            commit('LOAD_NOTIFICATIONS', response)
        }
    },

    // Getters
    getters: {
        members: state => state.members.data,
        meta: state => state.members.meta,
        links: state => state.members.links,
        notifications: state => state.notifications
    },
    
}