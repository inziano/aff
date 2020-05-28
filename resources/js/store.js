import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        status: '',
        current_user: JSON.parse(localStorage.getItem('aff_token') )|| {},
        token: localStorage.getItem('aff_token') || '',
        threads: [],
        replies: [],
        topics: [],
        members: [],
        publications: [],
        news: [],
        vacancies: [],
        events: []
    },
    mutations: {
        logout(state){
            state.current_user = '',
            state.token = ''
        },
        // Login user
        LOGIN_USER(state, user){
            // Stringify and store user token
            let token = JSON.stringify(user)

            // Set item on local storage
            localStorage.setItem('aff_token', token)

            // Store user 
            state.current_user = user
        },
        // Load news
        LOAD_NEWS(state, news){
            state.news = news
        },
        // Add article
        ADD_ARTICLE(state, article){
            article = article[0]
            state.news.push(article)
        },
        // Delete
        DELETE_ARTICLE(state, article){
            state.news = state.news.filter( a =>{
                return a.id !== article
            })
        },
        // load publications
        LOAD_PUBLICATIONS(state, publications){
            state.publications = publications
        },
        // load events
        LOAD_EVENTS(state, events){
            state.events = events
        },
        // Add event
        ADD_EVENT(state, event){
            event = event[0]
            state.events.push(event)
        },
        // Delete specific thread
        DELETE_EVENT(state, event){
            state.events = state.events.filter( e=>{
                // Filter out the thread
                return e.id !== event
            })
        },
        // load vacancies
        LOAD_VACANCIES(state, vacancies){
            state.vacancies = vacancies
        },
        // Add vacancy
        ADD_VACANCY(state, vacancy){
            vacancy = vacancy[0]
            state.vacancies.push(vacancy)
        },
        // load profiles
        LOAD_MEMBERS(state, members){
            state.members = members
        },
        // load threads
        LOAD_THREADS(state, threads){
            state.threads = threads
        },
        // Add thread
        ADD_THREAD(state, thread){
            thread = thread[0]
            // Update
            state.threads.push(thread)
        },
        // Update threads
        UPDATE_THREADS(state, thread){
            thread = thread[0]
            // Find thread matching
            state.threads.filter((t)=>{
                if ( t.id === thread.id ){
                    Object.assign( t, thread)
                } 
                return t
            })
        },
        // Delete specific thread
        DELETE_THREAD(state, thread){
            state.threads = state.threads.filter( t=>{
                // Filter out the thread
                return t.id !== thread
            })
        },
        // load replies
        LOAD_REPLIES(state, replies){
            state.replies = replies
        },
        // Add reply
        ADD_REPLY(state, reply){
            reply = reply[0]
            state.replies.push(reply)
        },
        // load topics
        LOAD_TOPICS(state, topics){
            state.topics = topics
        }
    },
    actions: {
        // Login
        async login({commit}, data){
            let response = await axios.post('api/user/login', data)
            // commit
            commit('LOGIN_USER', response.data)
        },
        // Register user
        async register({commit}, data){
            let response = await axios.post('api/user', data)
            // commit
            commit('LOGIN_USER', response.data.data)
        },

        // Logout
        logout({commit}){
            return new Promise(( resolve, reject)=>{
                commit('logout')
                localStorage.removeItem('token')
                resolve()
            })
        },
        // Members
        async fetchMembers({commit}){
            // load the members
            let response = await axios.get('api/user')
            // Comit
            commit('LOAD_MEMBERS', response.data.data)
        },
        async filterMembers({commit},{criteria, term}){
            // filter publications
            let response = await axios.get(`api/user?${criteria}=${term}`)
            // Commit
            commit('LOAD_MEMBERS', response.data.data)
        },
        // Publications
        async fetchPublications({commit}){
            // load publications 
            let response = await axios.get('api/publication')
            // Commit
            commit('LOAD_PUBLICATIONS', response.data.data)
        },
        async filterPublications({commit},{criteria, term}){
            // filter publications
            let response = await axios.get(`api/publication?${criteria}=${term}`)
            // Commit
            commit('LOAD_PUBLICATIONS', response.data.data)
        },
        // News items
        async fetchNews({commit}){
            // load news
            let response = await axios.get('api/news')
            // commit
            commit('LOAD_NEWS', response.data.data)
        },
        async filterArticles({commit},{criteria, term}){
            // filter publications
            let response = await axios.get(`api/news?${criteria}=${term}`)
            // Commit
            commit('LOAD_NEWS', response.data.data)
        },
        // Create article
        async createArticle({commit},data){
            await axios.post('api/news', data)
        },
        // Add article
        newArticle({commit}, data){
            commit('ADD_ARTICLE', data)
        },
        // Delete 
        async deleteArticle({commit}, data){
            let response = await axios.delete(`api/news/${data}`)
            // commit
            commit('DELETE_ARTICLE',data)
        },
        //vacancies
        async fetchVacancies({commit}){
            // Load vacancies
            let response = await axios.get('api/vacancy')
            // commit
            commit('LOAD_VACANCIES', response.data.data)
        },
        async filterVacancies({commit},{criteria, term}){
            // filter publications
            let response = await axios.get(`api/vacancy?${criteria}=${term}`)
            // Commit
            commit('LOAD_VACANCIES', response.data.data)
        },
        async createVacancy({commit}, data){
            // 
            let response = await axios.post('api/vacancy', data)
        },
        newVacancy({commit},data){
            // Commit
            commit('ADD_VACANCY', data)
        },
        // events
        async fetchEvents({commit}){
            // load events
            let response = await axios.get('api/event')
            // commit
            commit('LOAD_EVENTS', response.data.data )
        },
        async filterEvents({commit},{criteria, term}){
            // filter publications
            let response = await axios.get(`api/event?${criteria}=${term}`)
            // Commit
            commit('LOAD_EVENTS', response.data.data)
        },
        // new thread
        async createEvent({commit}, data){
            // push dataa
            await axios.post('api/event', data)
        },
        // Update store
        newEvent({commit},data){
            // commit to store
            commit('ADD_EVENT', data)
        },
        // Delete event
        async deleteEvent({commit},data){
            let response = await axios.delete(`api/event/${data}`)
            // Delete if succesful
            commit('DELETE_EVENT', data)
        },
        // threads
        async fetchThreads({commit}){
            // load threads
            let response = await axios.get('api/thread')
            // commit
            commit('LOAD_THREADS', response.data.data)
        },
        async filterThreads({commit},{criteria, term}){
            // filter publications
            let response = await axios.get(`api/thread?${criteria}=${term}`)
            // Commit
            commit('LOAD_THREADS', response.data.data)
        },
        // Create thread
        async createThread({commit}, data){
            // create the thread
            await axios.post('api/thread', data)
        },
        // New thread
        newThread({commit}, data){
            // Commit 
            commit('ADD_THREAD', data)
        },
        // Update thread
        async updateThread({commit},{id, data}){
            // Push patch
            let response = await axios.patch(`api/thread/${id}`, data)
            // commit
            commit('UPDATE_THREADS', response.data.data)
        },
        // Thread updated
        updateThreads({commit}, data){
            commit('UPDATE_THREADS', data)
        },
        // Delete thread
        async deleteThread({commit},payload){
            // Delete the thread
            let response = await axios.delete(`api/thread/${payload}`)
            // Commit
            commit('DELETE_THREADS', payload)
        },
        // replies
        async fetchReplies({commit}){
            // load replies
            let response = await axios.get('api/reply')
            // commit
            commit('LOAD_REPLIES', response.data.data)
        },
        // create reply
        async createReply({commit},data){
            // Create reply
            await axios.post('api/reply', data)

        },
        // New reply
        newReply({commit}, data){
            // commit
            commit('ADD_REPLY', data)
        },
        // topics
        async fetchTopics({commit}){
            // load topics
            let response = await axios.get('api/topic')
            // commit
            commit('LOAD_TOPICS', response.data.data)
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