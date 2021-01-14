<template>
    <div class="w-full h-full">
        <div class="w-full h-full p-5" >
            <Modal v-model="threadModal" width="700">
                <new-thread></new-thread>
                <div slot="footer"></div>
            </Modal>
            <div class="w-full flex bg-white">
                <div class="w-1/6 h-10 border-r border-gray-400">
                    <p class="font-medium font-serif text-3xl tracking-wide">
                        Forum
                    </p> 
                </div>
                <div class="w-5/6 flex content-center">
                    <!-- Search component -->
                    <search class="w-10/24" :module-name="moduleName" @items-filtered="filtered = true"></search>
                    <div class="flex-grow content-center h-full p-2">
                        <filter-a class="ml-4" :module-name="moduleName" :filter-items="years" :filter-type="typeA" @items-filtered="filtered = true" >
                            <Icon type="ios-calendar-outline" size="16"></Icon>
                        </filter-a>
                        <filter-a class="ml-4" :module-name="moduleName" :filter-items="topic" :filter-type="typeB" @items-filtered="filtered = true" >
                            <Icon type="ios-book-outline" size="16"></Icon>
                        </filter-a>
                        <a @click="clearFilters()" v-if="filtered" size="small" type="text" class="ml-4 p-0 text-gray-900 focus:text-gray-900 hover:border-0 hover:text-gray-900 active:border-0 active:text-gray-900">
                            <Icon type="ios-close" size="20"></Icon>
                            Clear Filters
                        </a>
                    </div>
                    <div class="w-2/24 content-center h-full p-2">
                        <modal-btn @modalbtn-clicked="threadModal = true">
                            New Thread
                        </modal-btn>
                    </div>  
                </div>
               
            </div>
            <div class="w-full flex flex-wrap bg-white p-2 flex ">
                <div class="lg:flex-grow items-center  mr-4 flex content-center">
                </div>
                <div class="w-auto flex content-center">
                    <stats :figure="threadstats.topics" :title="statsA"></stats>
                    <stats :figure="threadstats.threads" :title="statsB"></stats>
                </div>       
            </div>            
            <div class="w-full flex flex-wrap pt-5 min-h-screen">
                <div class="w-1/6 border-r border-r-black pt-5">
                    <nav class="w-full flex mb-2 ">
                        <div class="mx-5">
                            <ul class="list-reset">
                                <li>
                                    <a class="block p-2 text-gray-900 font-light tracking-wider text-sm" @click="mostViewedThreads"> Popular All Time</a>
                                </li>
                                <li>
                                    <a class="block p-2 text-gray-900 font-light tracking-wider text-sm" @click="currentActiveThreads"> Active Threads</a>
                                </li>
                                <li>
                                    <a class="block p-2 text-gray-900 font-light tracking-wider text-sm " @click="mostLikedThreads"> Popular</a>
                                </li>
                                <li>
                                    <a class="block p-2 text-gray-900 font-light tracking-wider text-sm " @click="mostRecentThreads"> Recent</a>
                                </li>
                               
                            </ul>
                               
                        </div>
                    </nav>
                </div>
                <div class="w-5/6 px-5">
                    <div class="w-full">
                        <div v-if="threads">
                            <thread-list-item  v-for="thread in threads"  :key = thread.id :thread = thread :user = current_user ></thread-list-item>
                        </div>
                        <div v-else>
                            <p> No discussions </p>
                        </div>
                    </div>
                   
                </div>
                <div class="w-full m-2 p-2 flex justify-center" v-if="meta">
                    <pagination :curr = meta.curr :total = meta.total :size = meta.per_page :module-name="moduleName" ></pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions, mapGetters } from 'vuex'
import NewThread from './NewThreadComponent.vue'
import ThreadListItem from './ThreadListItemComponent'
import Pagination from '../Widgets/PaginationComponent'
import Search from '../Widgets/SearchComponent'
import Filter from '../Widgets/FilterComponent'
import Stats from '../Widgets/StatsComponent'
import Modalbtn from '../Widgets/ModalbtnComponent'

export default {
    components: {
        'new-thread': NewThread,
        'thread-list-item': ThreadListItem,
        'pagination': Pagination,
        'search': Search,
        'filter-a': Filter,
        'stats': Stats,
        'modal-btn': Modalbtn,
    },
    data (){
        return {
            list: false,
            threadModal: false,
            threadmeta: '',
            threadstats: '',
            searchTerm: '',
            filtered: false,
            typeA: 'year',
            typeB: 'topic',
            statsA: 'topics',
            statsB: 'threads',
            moduleName: 'ThreadModule',
        }
    },
    created(){
        this.fetchThreads(),
        this.fetchTopics(),
        this.fetchReplies()
    },
    computed: {
        // Store values
        ...mapGetters('AuthModule',['current_user']),
        ...mapGetters('TopicModule',['topics']),
        ...mapGetters('ReplyModule',['replies']),
        ...mapGetters('ThreadModule',['threads','meta','links']),

        years(){
            const year = new Date().getFullYear()
            return Array.from({length: year - 1960}, (value, index)=> 1961 + index).reverse()
        },
        topic(){
            return [...new Set(this.topics.map((topic)=>{
                return topic.title
            }))]
        }
    },
    mounted(){
        // Update
        Echo.channel('threads').listen('ThreadCreated', (e)=>{
            this.$store.dispatch('ThreadModule/newThread',e.threads)
        })
         // Deleted thread
        Echo.channel('threads').listen('ThreadDeleted', (e)=>{
            // Update threads
            this.threadData = e.threads
        })

        // Thread like count
        Echo.channel('threads').listen('UpdateThreadLikeCount', (e)=>{
            // Find index
            let idx = this.threads.findIndex( elem=> elem.id === e.thread[0].id)
            // Splice and replace array
            this.threads.splice(idx, 1, e.thread[0])
            // console.log(e.thread[0].id)
        })

        // Filter threads
        Echo.channel('filters').listen('FilterThreads', (e)=>{
           this.$store.dispatch('ThreadModule/fetch',e.threads)
        })

        // Search threads
        Echo.channel('searches').listen('SearchThreads',(e)=>{
            this.$store.dispatch('ThreadModule/fetch',e.threads)
        })

        Echo.channel('stats').listen('ThreadStats',(e)=>{
            this.threadstats = e.threadstats
        })
    },
    methods: {
        // Store actions
        ...mapActions('ThreadModule',{ fetchThreads: 'fetch',filterThreads: 'filter'}),
        ...mapActions('ReplyModule',{ fetchTopics: 'fetch'}),
        ...mapActions('TopicModule',{ fetchReplies: 'fetch'}),

        // clear all filters
        clearFilters(){
            this.fetchThreads().then(()=>{
                this.filtered = false
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Nothing found'
                })
            })
        },
        // Show topic threads
        showTopic(id){
         
            let formdata = {
                topic: id
            }

            axios({
                method: 'post',
                url: 'api/threads/filter',
                data: formdata
            }).then((response)=>{
                // Console response
            }).catch((error)=>{
                // Console error
                this.$Notice.info({
                    title: 'No threads found',
                    desc: 'This topic has no threads'
                })
            })
        },
        // Recent threads
        mostRecentThreads(){
            this.filterThreads({'criteria': 'recent','term':'recent'})
        },
        // Top popular threads
        mostLikedThreads(){
            // Loop through thread return the top threads
            this.filterThreads({'criteria': 'popular','term':'popular'})
        },
        // Top viewed threads
        mostViewedThreads(){
            // Loop through thread return top thread
            this.filterThreads({'criteria': 'mostViewed','term':'mostviewed'})
        },
        // active threads
        // TODO: fix bug, double click to fetch data
        currentActiveThreads(){
            // Top recent comments
            this.filterThreads({'criteria': 'active','term':'active'})
        },
    }
}
</script>