import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        current_user: JSON.parse(localStorage.getItem('token')) || {},
        token: localStorage.getItem('token') || '',
        members: [],
        members_loading: false
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
        }

    },
    getters: {
        // Is authenticated
        isAuthenticated: state => !!state.token,
        // Status
        authStatus: state => state.status,
    }
})

export default store