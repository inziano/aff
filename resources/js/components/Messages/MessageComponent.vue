<template>
    <div class="w-full h-full">
        <div class="w-full h-full p-5" >
            <div class="w-full flex bg-white">
                <div class="w-1/6 h-10 border-r border-gray-400">
                    <p class="font-medium font-serif text-3xl tracking-wide">
                        Messages
                    </p> 
                </div>
                <div class="w-5/6 flex content-center">
                    <search class="w-10/24" :module-name="moduleName" @items-filtered="filtered = true"></search>
                    <div class="flex-grow content-center h-full p-2">
                        <filter-a class="ml-4" :module-name="moduleName" :filter-items="years" :filter-type="typeA" @items-filtered="filtered = true" >
                            <Icon type="ios-calendar-outline" size="16"></Icon>
                        </filter-a>
                        <a @click="clearFilters()" v-if="filtered" size="small" type="text" class="ml-4 p-0 text-gray-900 focus:text-gray-900 hover:border-0 hover:text-gray-900 active:border-0 active:text-gray-900">
                            <Icon type="ios-close" size="20"></Icon>
                            Clear Filters
                        </a>
                    </div>
                </div>           
               
            </div>
            <div class="w-full flex flex-wrap bg-white p-2">
                <div class="lg:flex-grow items-center  mr-4 flex content-center">
                </div>
                <div class="w-auto flex content-center">
                    <stats :figure="messagestats.messages" :title="statsA"></stats>
                </div>
               
            </div>

            <div class="w-full min-h-screen flex border-t border-2">
                <div class="w-1/4 h-full bg-gray-200">
                    <messagelist-item :messages = msg :user = current_user v-on:viewthread="viewThread($event)" v-on:newchat="newChat($event)"></messagelist-item>
                </div>
                <div class="w-1/2 bg-gray-100">
                    <message-thread :threads = chats :user = current_user ></message-thread>
                </div>
                <div class="w-1/4">
                    <chat-details :threads = chats :user = current_user ></chat-details>
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import MessageListItem from './Widgets/MessageListItemComponent'
import MessageThreads from './Widgets/MessageThreadsComponent'
import ChatDetails from './Widgets/ChatDetailsComponent'
import Pagination from '../Widgets/PaginationComponent'
import Search from '../Widgets/SearchComponent'
import Filter from '../Widgets/FilterComponent'
import Stats from '../Widgets/StatsComponent'
import Modalbtn from '../Widgets/ModalbtnComponent'

export default {
    components: {
        'messagelist-item': MessageListItem,
        'message-thread': MessageThreads,
        'chat-details': ChatDetails,
        'pagination': Pagination,
        'search': Search,
        'filter-a': Filter,
        'stats': Stats,
        'modal-btn': Modalbtn
    },
    data() {
        return {
            list: false,
            messageModal: false,
            loading: false,
            moduleName: 'MessageModule',
            admin: false,
            searchTerm: '',
            filtered: false,
            typeA: 'year',
            statsA: 'messages',
            messagestats: '',
        }
    },
    computed: {
       ...mapGetters('AuthModule',['current_user']),
       ...mapGetters('UserModule',['members']),
       ...mapState('MessageModule', ['messages', 'thread']),
        years(){
            const year = new Date().getFullYear()
            return Array.from({length: year - 1960}, (value, index)=> 1961 + index).reverse()
        },
        msg(){
            return this.messages.data
        },
        chats() {
            return this.thread
        }
    },
    mounted(){
        // 
        Echo.channel('messages').listen('MessageReplied',(e)=>{
            this.newMessage(e.message)
        })
    },
    created(){
        this.fetch(this.current_user.id)
    },
    methods: {
        ...mapActions('MessageModule',['fetch','conversation','newMessage', 'newConversation']),
        // Change view
        changeView(){
           if ( this.list === true ){
               this.list = false
           } else{
               this.list = true
           }
        },
        viewThread(e) {
            let items = { 'first': e, 'second':this.current_user.id }

            this.conversation(items)
        },
        newChat(e) {
            let items = { 'recipient': e, 'sender':this.current_user.id }
            
            this.newConversation(items)
        }
    }
    
}
</script>