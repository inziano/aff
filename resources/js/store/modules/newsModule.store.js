import axios from 'axios'

export default {
    namespaced: true,
    // State
    state: ()=>({
        news: {
            data: [],
            meta: {},
            links: {}
        },
    }),
    // Mutations
    mutations: {
        // Load
        LOAD(state, news){
            state.news = news
        },
        // Add
        ADD(state, article){
            article = article[0]
            state.news.data.push(article)
        },
        // Delete
        DELETE(state, article){
            state.news = state.news.filter( a =>{
                return a.id !== article
            })
        },
    },
    // Actions
    actions: {
        // Fetch
        async fetch({commit}, page=1){
            // load news
            let response = await axios.get(`api/news?page=${page}`)
            // commit
            commit('LOAD', response.data)
        },
        // Filter
        async filter({commit},{criteria, term}){
            // filter publications
            let response = await axios.get(`api/news?${criteria}=${term}`)
            // Commit
            commit('LOAD', response.data)
        },
        // Create
        async create({commit},data){
            await axios.post('api/news', data)
        },
        // Add
        newArticle({commit}, data){
            commit('ADD', data)
        },
        // Delete 
        async delete({commit}, data){
            let response = await axios.delete(`api/news/${data}`)
            // commit
            commit('DELETE',data)
        },
    },
    // Getters
    getters: {
        // News
        news: state => state.news.data,
        meta: state => state.news.meta,
        links: state => state.news.links
    }
}