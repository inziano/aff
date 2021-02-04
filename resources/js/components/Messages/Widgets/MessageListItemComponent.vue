<template>
    <div class="w-full min-h-screen">
        <div class="hidden sm:block w-1/5 md:w-full bg-gray-200 px-4 pt-6">
            <div class="flex items-center space-x-4">
                <img class="w-12 h-12 rounded-full" :src=path>
                <div class="flex flex-1 flex-col leading-tight">
                    <span class="text-lg font-semibold text-teal-600">{{user.email}}</span>
                    <span class="text-xs text-gray-600">{{user.status}}</span>
                </div>
            </div>
        </div>
        <div class="relative mt-6 flex px-4">
            <span class="absolute inset-y-0 pl-4 flex items-center">
            <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            </span>
            <input v-model="usersearch" type="text" class="py-2 pl-10 text-xs w-full placeholder-gray-400" placeholder="Search Friends" @keyup.enter="search">
        </div>
        <contact-results v-if="userlist.length > 0" :contacts = userlist v-on:startchat="newChat($event)"></contact-results>

        <div class="px-4 mt-5 space-y-6" v-for="m in message" :key="m.user_id">
            <div class="flex items-center space-x-4 ">
                <img class="w-10 h-10 rounded-full" :src=avatar alt="My profile">
                <div class="flex flex-1 flex-col leading-tight">
                    <div class="flex items-center justify-between">
                        <span class="text-sm font-normal text-teal-600">
                            <a class="text-sm font-normal text-teal-600 capitalize" @click="view(m.user_id)"> {{m.firstname}} {{ m.lastname }}</a>
                        </span>
                        <span class="text-xs text-gray-400" style="font-size: 0.7em">{{m.created_at | moment("from")}}</span>
                    </div>
                    <div class="flex items-center justify-between mt-2">
                        <span class="text-xs text-gray-600">{{m.content}}</span>
                       
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ContactResults from './ContactResultsComponent'
export default {
    components: {
        'contact-results': ContactResults
    },
    props: ['messages','user'],

    data(){
        return {
            usersearch: '',
            userlist: ''
        }
    },

    computed:{
        ...mapGetters('AuthModule',['current_user']),

        path(){
            return this.user.image !== null ? this.user.image : process.env.MIX_APP_URL + "/images/avatar.svg"
        },
        avatar(){
            return process.env.MIX_APP_URL + "/images/messages.svg"
        },

        message(){
            const result = []

            const map = new Map()

            let self = this

            for ( const item of this.messages ) {

                let i = item.sender.id == self.user.id ? { 'id': item.id, 'person': item.recipient, 'content': item.content, 'created_at': item.created_at }  : { 'id': item.id,'person': item.sender, 'content': item.content, 'created_at': item.created_at }

                if ( !map.has(i.person.id) ) {
                    map.set(i.person.id, true)

                    // Push the unique values to result
                    // Destructure object and get only required values
                    result.push( ( ({person: {user_id}, person: {firstname}, person: { lastname}, content, created_at}) => ({ user_id, firstname, lastname, content, created_at}) )(i))
    
                }
            }
            return result
        },

    },
    methods: {
        ...mapActions('MessageModule',['search_users']),
        view(id){
            this.$emit('viewthread', id)
        },
        search() {
            let filter = {
                criteria: 'search',
                term: this.usersearch
            }

            this.search_users( filter ).then( data => {
                this.userlist = data
            }).catch(error => {
                this.$Notice.error({
                    title: 'Error occured'
                })
            })
        },
        newChat(e) {
            this.$emit('newchat', e)
            // 
            this.userlist = []
            this.usersearch = ''
        }
    }
}
</script>