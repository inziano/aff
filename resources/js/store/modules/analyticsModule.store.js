import axios from 'axios'

const baseURL = process.env.MIX_API_URL

export default {
    namespaced: true,

    state: () => ({
        memberStats: ''
    }),

    mutations: {
        LOAD(state, members){
            state.memberStats = members
        }
    },
    actions: {
        async fetch({commit}){
            let response = await axios.get(`${baseURL}/stats`)

            commit('LOAD', response.data)
        }
    },
    getters: {
        memberstats: state => state.memberStats
    }
}
