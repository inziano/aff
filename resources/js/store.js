import Vue from 'vue'
import Vuex from 'vuex'
import { reject } from 'q'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        status: '',
        current_user: JSON.parse(localStorage.getItem('token')) || {},
        token: localStorage.getItem('token') || '',
        members: [],
        members_loading: false,
        threads: [],
        thread_status: '',
        replies: [],
        replies_status: '',
        topics: [],
        topics_status: ''
    },
    mutations: {
        auth_request(state){
            state.status = 'loading'
        },
        auth_success(state,user,token){
            state.status = 'success',
            state.current_user = user,
            state.token = token
        },
        auth_error(state){
            state.status = 'error'
        },
        logout(state){
            state.current_user = '',
            state.token = ''
        },
        threads_success(state,threads){
            state.thread_status = 'success'
            state.threads = threads
        },
        threads_loading(state){
            state.thread_status = 'loading'
        },
        replies_success(state,replies){
            state.replies_status = 'success',
            state.replies = replies
        },
        replies_loading(state){
            state.replies_status = 'loading'
        },
        topics_success(state,topics){
            state.topics_status = 'success',
            state.topics = topics
        },
        topics_loading(state){
            state.topics_status = 'loading'
        }
    },
    actions: {
        login({commit}){
           return new Promise((resolve, reject)=>{
               commit('auth_request')
               resolve()
           })
        },
        loggedIn({commit},payload){
            return new Promise((resolve,reject)=>{
                const token = JSON.stringify(payload)
                localStorage.setItem('token', token)
                commit('auth_success', payload, token)

                resolve()
            })
        },
        logout({commit}){
            return new Promise(( resolve, reject)=>{
                commit('logout')
                localStorage.removeItem('token')
                resolve()
            })
        },
        fetchThreads({commit}){
            return new Promise((resolve,reject)=>{
                commit('threads_loading')
                resolve()
            })
        },
        loadThreads({commit}, payload){
            return new Promise((resolve,reject)=>{
                commit('threads_success',payload)
                resolve()
            })
        },
        fetchReplies({commit}){
            return new Promise((resolve,reject)=>{
                commit('replies_loading')
                resolve()
            })
        },
        loadReplies({commit},payload){
            return new Promise((resolve,reject)=>{
                commit('replies_success',payload)

                resolve()
            })
        },
        fetchTopics({commit}){
            return new Promise((resolve,reject)=>{
                commit('topics_loading')
                resolve()
            })
        },
        loadTopics({commit},payload){
            return new Promise((resolve,reject)=>{
                commit('topics_success',payload)

                resolve()
            })
        }

    },
    getters: {
        // Is authenticated
        isAuthenticated: state => !!state.token,
        // Status
        authStatus: state => state.status,
        // Threads
        threads: state => state.threads,
        // Replies
        replies: state => state.replies,
        // Topics
        topics: state => state.topics
    }
})

export default store