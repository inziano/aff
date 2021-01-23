<template>
    <div class="w-full h-full">
        <div class="w-full h-full p-5" >
            <Modal v-model="threadModal" width="700">
                <discussion-form></discussion-form>
                <div slot="footer"></div>
            </Modal>
            <Modal v-model="topicModal" width="700">
                <topic-form :topic ="topicEdit" ></topic-form>
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
                        <filter-a v-show="topic.length > 0" class="ml-4" :module-name="moduleName" :filter-items="topic" :filter-type="typeB" @items-filtered="filtered = true" >
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
            <div class="w-full flex flex-wrap bg-white p-2">
                <div class="lg:flex-grow items-center  mr-4 flex content-center">
                </div>
                <div class="w-auto flex content-center">
                    <stats :figure="threadstats.topics" :title="statsA"></stats>
                    <stats :figure="threadstats.threads" :title="statsB"></stats>
                </div>       
            </div>            
            <div class="w-full flex flex-wrap pt-5 min-h-screen">
                <div class="w-1/6 relative bg-white pt-5 border-r-2 border-gray-200">                            
                    <div class="flex flex-col sm:flex-row sm:justify-around">
                        <div class="w-72 h-screen">
                            <nav class="mt-10 px-6">
                                <div>
                                    <p class="text-gray-600 ml-2 w-full border-b-2 pb-2 border-gray-100 mb-4 text-md font-normal">
                                        Topics
                                    </p>
                                    <a @click="showtopics" class="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start" >
                                        <span class="mx-4 text-md font-normal">
                                            Explore topics
                                        </span>
                                        <span class="flex-grow text-right">
                                        </span>
                                    </a>

                                    <a @click="topicModal = true" v-show="isAdmin" class="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start" >
                                        <span class="mx-4 text-md font-normal">
                                            Create new topic
                                        </span>
                                        <span class="flex-grow text-right">
                                        </span>
                                    </a>
                                   
                                </div>
                                <div>
                                    <p class="text-gray-600 ml-2 w-full border-b-2 pb-2 border-gray-100 mb-4 text-md font-normal">
                                        Discussions
                                    </p>
                                    <a @click="showthreads" class="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start" >
                                        <span class="mx-4 text-md font-normal">
                                            All discussions
                                        </span>
                                        <span class="flex-grow text-right">
                                        </span>
                                    </a>
                                    <a @click="mostLikedThreads" class="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start" >
                                        <span class="mx-4 text-md font-normal">
                                            Popular discussions
                                        </span>
                                        <span class="flex-grow text-right">
                                        </span>
                                    </a>
                                    <a @click="mostViewedThreads" class="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start" >
                                        <span class="mx-4 text-md font-normal">
                                            Top discussions
                                        </span>
                                        <span class="flex-grow text-right">
                                        </span>
                                    </a>
                                    <a @click="currentActiveThreads" class="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start" >
                                        <span class="mx-4 text-md font-normal">
                                            Active discussions
                                        </span>
                                        <span class="flex-grow text-right">
                                        </span>
                                    </a>
                                    <a @click="mostRecentThreads" class="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start" >
                                        <span class="mx-4 text-md font-normal">
                                            Recent discussions
                                        </span>
                                        <span class="flex-grow text-right">
                                        </span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="w-5/6 px-5">
                    <topics-view v-show="topicslist" v-on:showTopicThread ="showTopic($event)" v-on:editTopic ="editTopics($event)"></topics-view>
                    <discussions-view v-show="threadlist" v-on:showTopicThread ="showTopic($event)"></discussions-view>
                    <div v-show="loading" class="w-full p-4 h-auto">   
                        <div >
                            <div class="flex flex-wrap content-center justify-center ">
                                <img class="h-48 w-full mb-4" src="images/discuss.svg">
                                <p class="font-light text-gray-600">
                                    Follow some topics to get started
                                </p>
                            </div>
                        </div>
                    </div>     
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions, mapGetters } from 'vuex'
import TopicForm from './Topics/TopicFormComponent'
import Topics from './Topics/TopicsComponent'
import Discussions from './Discussions/DiscussionsComponent'
import DiscussionForm from './Discussions/DiscussionFormComponent'
import Search from '../Widgets/SearchComponent'
import Filter from '../Widgets/FilterComponent'
import Stats from '../Widgets/StatsComponent'
import Modalbtn from '../Widgets/ModalbtnComponent'

export default {
    components: {
        'topics-view': Topics,
        'topic-form': TopicForm,
        'discussions-view': Discussions,
        'discussion-form': DiscussionForm,
        'search': Search,
        'filter-a': Filter,
        'stats': Stats,
        'modal-btn': Modalbtn,
    },
    data (){
        return {
            list: false,
            threadModal: false,
            topicModal: false,
            moduleName: 'ThreadModule',
            threadstats: '',
            filtered: false,
            typeA: 'year',
            typeB: 'topic',
            statsA: 'topics',
            statsB: 'threads',
            loading: true,
            topicslist: false,
            threadlist: false,
            topicEdit: {}

        }
    },
    created(){
        this.fetchThreads().then( response => {
            // Set loading to false
            this.showthreads()
           
        }).catch( error => {
            // Display this error in human readable format
            this.topicslist = true
        }),
        this.fetchTopics(),
        this.fetchReplies()
    },
    computed: {
        // Store values
        ...mapGetters('ReplyModule',['replies']),
        ...mapGetters('TopicModule',['topics']),
        ...mapGetters('AuthModule',['current_user', 'isAdmin']),

        years(){
            const year = new Date().getFullYear()
            return Array.from({length: year - 1960}, (value, index)=> 1961 + index).reverse()
        },
        topic(){
            // Ensure topics are there first

            const t = typeof this.topics != 'undefined' ? this.topics : [] 

            // If there is stuff in there
            if ( Object.keys(t).length === 0 ){
                return [...new Set(t.map((topic)=>{
                    return topic.title
                }))]
                
            } else {
                const response = [ 'No Topics ']

                return response
            }
          
        }
    },
    mounted(){
        // Update
        Echo.channel('threads').listen('ThreadCreated', (e)=>{
            this.$store.dispatch('ThreadModule/newThread',e.threads)
        })
    
        // Thread like count
        Echo.channel('threads').listen('UpdateThreadLikeCount', (e)=>{
            // Find index
            let idx = this.threads.findIndex( elem=> elem.id === e.thread[0].id)
            // Splice and replace array
            this.threads.splice(idx, 1, e.thread[0])
            // console.log(e.thread[0].id)
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


        // Show all topics
        showtopics(){
            this.topicslist = true
            this.threadlist = this.loading = false
        },

        // Show all threads
        showthreads(){
            this.threadlist = true
            this.topicslist = this.loading = false
        },

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
        showTopic(title){
         
            this.filterThreads({'criteria': 'topic','term': title}).then( response=>{
                this.threadlist = true
                this.topicslist = this.loading = false
            }).catch( error =>{
                // Console error
                this.$Notice.info({
                    title: 'No threads found',
                    desc: 'This topic has no threads'
                })
            })
        },
        // Edit topic
        editTopics(topic){
            this.topicEdit = topic
            this.topicModal = true
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