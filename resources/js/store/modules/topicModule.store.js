import axios from 'axios'

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
        }
    },
    // Actions
    actions: {
        // Fetch
        // topics
        async fetch({commit}){
            // load topics
            let response = await axios.get('api/topics')
            // commit
            commit('LOAD', response.data.data)
        }
    },
    // Getters
    getters: {
        // Replies
       topics: state => state.topics
    }
}