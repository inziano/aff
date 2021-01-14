import axios from 'axios'

export default {
    namespaced: true,
    // State
    state: ()=>({
        replies: [],
    }),
    // Mutations
    mutations: {
        // load replies
        LOAD(state, replies){
            state.replies = replies
        },
        // Add reply
        ADD(state, reply){
            reply = reply[0]
            state.replies.push(reply)
        },
    },
    // Actions
    actions: {
        // Fetch
        async fetch({commit}){
            // load replies
            let response = await axios.get('api/replies')
            // commit
            commit('LOAD', response.data.data)
        },
        // Create
        async create({commit},data){
            // Create reply
            await axios.post('api/replies', data)

        },
        // New reply
        newReply({commit}, data){
            // commit
            commit('ADD', data)
        },
    },
    // Getters
    getters: {
        // Replies
        replies: state => state.replies,
    }
}
