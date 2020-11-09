import axios from 'axios'

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
            let response = await axios.get('api/stats')

            commit('LOAD', response.data)
        }
    },
    getters: {
        memberstats: state => state.memberStats
    }
}
