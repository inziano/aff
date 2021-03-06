import axios from 'axios'

const baseURL = process.env.MIX_API_URL

export default {
    namespaced: true,
    // State
    state: ()=>({
        messages: {
            data: [],
            meta: {},
            links: {}
        },
        thread: []
    }),

    // Mutations
    mutations: {
        LOAD( state, messages){
            state.messages = messages
        },
        LOAD_THREAD( state, thread){
            state.thread = thread 
        },
        ADD(state, thread){
            thread = thread[0]
            state.thread.push(thread)
        }
    },

    actions: {
        // Fetch messages
        async fetch({commit}, user = 1){
            // Load messages for user
            let response = await axios.get(`${baseURL}/messages?all=${user}`)
            // Commit
            commit('LOAD', response.data)
        },

        // Create
        async create({commit}, data){
            let response = await axios.post(`${baseURL}/messages`,data)
        },

        // Filter 
        async filter({commit}, {criteria, term}){
            let response = await axios.get(`${baseURL}/messages?${criteria}=${term}`)
            // Commit
            commit('LOAD', response.data)
        },

        // Conversation
        async conversation({commit}, {first, second}){
            let response = await axios.get(`${baseURL}/messages?conversation=${first},${second}`)
            // 
            commit('LOAD_THREAD', response.data.data)
        },

        // Search for users
        async search_users({commit},{criteria, term}){
            let response = await axios.get(`${baseURL}/users?${criteria}=${term}`)
            // edit response
            let r = response.data.data

            return r.map((e)=> {
                return e.bio
            })

        },

        // New Conversation
        async newConversation({commit}, data){
            // Get recipient and sender bio's
            let sender = await axios.get(`${baseURL}/users?user=${data.sender}`)
            let recipient = await axios.get(`${baseURL}/users?user=${data.recipient}`)

            // Sender bio
            sender = sender.data.data
            sender = sender.map((e)=>{
                return e.bio
            })

            // Recipient bio
            recipient = recipient.data.data
            recipient = recipient.map((e)=>{
                return e.bio
            })

            let d = new Date()
            d = d.toISOString()

            // Create message object
            let msg = {
                content: "Type something to send a message",
                created_at: d,
                recipient: recipient[0],
                sender: sender[0]
            }

            const mg = new Array( msg )

            commit('LOAD_THREAD', mg)
        },

        // 
        newMessage({commit}, data){
            //
            commit('ADD', data) 
        }
    },
    // Getters
    getters: {
        messages: state => state.messages.data,
        meta: state => state.messages.meta,
        links: state => state.messages.links
    }
}