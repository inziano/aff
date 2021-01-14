import axios from 'axios'

// Store module object
export default {
    namespaced: true,
    // State
    state: ()=>({
        status: '',
        currentUser: JSON.parse(localStorage.getItem('aff_token')) || {},
        currentUserDetails: null,
        resetUser: {
            "id": '',
            "username": '',
            "email": '',
            "email_verified_at": '',
            "status": '',
            "created_at": '',
            "updated_at": '',
        },
    }),
    // Mutations
    mutations: {
        // Login user
        LOGIN(state, user){
            // Stringify and store user token
            let token = JSON.stringify(user)

            // Set item on local storage
            localStorage.setItem('aff_token', token)

            // Store user 
            state.currentUser = user
        },
        LOGOUT(state){
            state.currentUser = '',
            state.currentUserDetails = '',
            state.token = ''
        },
        ADD_LOGGEDIN_USER(state, user){
            state.currentUserDetails = user
        },
        RESET_USER(state, user){
            state.resetUser = user
        }
    },
    // Actions
    actions: {
        // Login
        async login({commit}, data){

            await axios.get('/sanctum/csrf-cookie')

            let response = await axios.post('api/auth/login', data)
            
            commit('LOGIN', response.data)

            console.log(response)

            return response
        },
        // Register user
        async register({commit}, data){
            let response = await axios.post('api/auth/register', data)
            // commit
            commit('LOGIN', response.data)
        },
        // User data
        async loadUserData({commit}, id){
            let response = await axios.get(`api/users/${id}`)
            // commit
            commit('ADD_LOGGEDIN_USER', response.data.data)
        },
        // Reset password
        async resetPassword({commit},data){
            let response = await axios.post('api/auth/reset', data)
        },
        // Verify email account
        async verifyAccount({commit},data){
            let response = await axios.post('api/auth/verify', data)
            // commit
            commit('RESET_USER', response.data)
        },
        // Logout
        logout({commit}){
            return new Promise(( resolve, reject)=>{
                commit('LOGOUT')
                localStorage.removeItem('aff_token')
                resolve()
            })
        },
    },
    // Getters
    getters: {
        // Is authenticated
        isAuthenticated: state => !Object.keys(state.currentUser).length == 0,
        // Is admin
        isAdmin: state => state.currentUser.roles.map( right => { return right.name == 'Administrator' ? true : false } ).shift(),
        // Is member
        isMember: state => state.currentUser.status == 'Member' ? true : false,
        // Status
        authStatus: state => state.status,
        // Current user
        current_user: state => state.currentUser,
        // Current user details
        current_user_details: state => state.currentUserDetails,
        // Reset email
        reset_user: state => state.resetUser,
    }
}