import axios from 'axios'

const baseURL = process.env.MIX_API_URL

export default {
    namespaced: true,
    // State
    state: ()=>({
        topics: [],
    }),
    // Mutations
    mutations: {
        // Load
        LOAD(state, topics){
            state.topics = topics
        },
        // Delete specific topics
        DELETE(state, topics){
            state.topics = state.topics.filter( t=>{
                // Filter out the topics
                return t.id !== topics
            })
        },
    },
    // Actions
    actions: {
        // Fetch
        // topics
        async fetch({commit}){
            // load topics
            let response = await axios.get(`${baseURL}/topics`)
            // commit
            commit('LOAD', response.data)
        },
        async filter({commit}, {criteria, term}){
            // Filter response
            let response = await axios.get(`${baseURL}/topics?${criteria}=${term}`)

            commit('LOAD', response.data)
        },
        async create({commit}, data){
            // create the topic
            await axios.post(`${baseURL}/topics`, data)
        },

        async update({commit},{id, data}){
            // Push patch
            let response = await axios.patch( `${baseURL}/topics/${id}`, data)
            // commit
            // commit('UPDATE', response.data.data)
        },

        async subscribe({commit}, {topic, data}){
            
            // Subscribe to the topic
            await axios.post(`${baseURL}/topics/subscribe/${topic}`,data)
        },

        async unsubscribe({commit}, {topic, data}){
            console.log(data)
            // Subscribe to the topic
            await axios.post(`${baseURL}/topics/unsubscribe/${topic}`, data)
        },

        async delete({commit},data){
            // Delete the topic
            let response = await axios.delete(`${baseURL}/topics/${data}`)

            commit('DELETE', data)
        }

    },
    // Getters
    getters: {
        // Replies
       topics: state => state.topics.data,
       meta: state => state.topics.meta,
       links: state => state.topics.links
    }
}