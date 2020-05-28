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
                    <div class="w-10/24 p-2 ml-3">
                        <Icon type="ios-search-outline" size="18"/>
                        <input v-on:keyup.enter="onSearch" v-model="searchTerm" prefix="ios-search-outline" placeholder="Search" class="appearance-none bg-transparent border-none w-3/4 font-sans tracking-wider mr-3 py-1 px-2 leading-tight focus:outline-none focus:bg-white" type="text" />
                    </div>
                    <div class="flex-grow content-center h-full p-2" > 
                        <Dropdown class="ml-4" trigger="click" style="" @on-click="filterMethod('year',$event)">
                            <a href="javascript:void(0)" class="font-sans tracking-wider text-gray-900 hover:text-gray-900">
                                <Icon type="ios-calendar-outline" size="20"></Icon>
                                Year
                            </a>
                            <DropdownMenu slot="list" style="height: 100px; overflow-y:scroll;">
                                <DropdownItem v-for="yr in years" :key="yr" :name="yr">{{yr}}</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown class="ml-4" trigger="click" @on-click="filterMethod('topic',$event)">
                            <a class="font-sans font-lg tracking-wider text-gray-900 hover:text-gray-900" href="javascript:void(0)">
                                <Icon type="ios-book-outline" size="20"></Icon>
                                Topics
                            </a>
                            <DropdownMenu slot="list" style="height: 250px; overflow-y:scroll;">
                                <DropdownItem v-for="topic in topics" :key="topic.id" :name="topic.title">{{topic.title}}</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <a @click="clearFilters()" v-if="filtered" size="small" type="text" class="ml-4 p-0 text-gray-900 focus:text-gray-900 hover:border-0 hover:text-gray-900 active:border-0 active:text-gray-900">
                            <Icon type="ios-close" size="20"></Icon>
                            Clear Filters
                        </a>
                    </div>
                    <div class="w-2/24 content-center h-full p-2">
                        <Button icon="ios-add" @click="threadModal = true">
                            New
                        </Button>
                    </div>  
                </div>
               
            </div>
            <div class="w-full flex flex-wrap bg-white p-2 flex ">
                <div class="lg:flex-grow items-center  mr-4 flex content-center">
                    <li class="list-none h-10 content-center" @click="changeView()">   
                        <!-- <span class="">
                            <Icon v-if="!list" type="ios-apps-outline" size="32"/>  
                            <Icon v-if="list" type="ios-list" size="32"/>
                        </span>      -->
                    </li>
                </div>
                <div class="w-auto flex content-center">
                    <div class="m-2 flex flex-wrap">
                        <p class="text-center w-full font-sans text-2xl font-semibold tracking-widest">
                           {{threadstats.topics}}
                        </p>
                        <p class="text-center w-full font-sans font-medium tracking-wider text-xs text-gray-500">
                            Topics
                        </p>
                    </div>
                    <div class="m-2 flex flex-wrap">
                        <p class="text-center w-full font-sans text-2xl font-semibold tracking-widest">
                           {{threadstats.threads}}
                        </p>
                        <p class="text-center w-full font-sans font-medium tracking-wider text-xs text-gray-500">
                           Threads
                        </p>
                    </div>
                </div>       
            </div>            
            <div class="w-full flex flex-wrap pt-5 bg-gray-100 min-h-screen">
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
                        <thread-list-item v-for="thread in threads" :thread = thread :key = thread.id ></thread-list-item>
                    </div>
                   
                </div>
                <div class="w-full flex p-0 mb-5 text-center">
                    <Page class="mx-auto" :current="threadmeta.current_page" :total="threadmeta.total" :page-size="threadmeta.per_page" @on-change="goToPage" />
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
import NewThread from './NewThreadComponent.vue'
import ThreadListItem from './ThreadListItemComponent'

export default {
    components: {
        'new-thread': NewThread,
        'thread-list-item': ThreadListItem
    },
    data (){
        return {
            list: false,
            threadModal: false,
            threadmeta: '',
            threadstats: '',
            searchTerm: '',
            filtered: false,
        }
    },
    created(){
        this.fetchThreads(),
        this.fetchTopics(),
        this.fetchReplies()
    },
    computed: {
        // Store values
        ...mapState(['current_user', 'threads', 'topics', 'replies']),
        years(){
            const year = new Date().getFullYear()
            return Array.from({length: year - 1960}, (value, index)=> 1961 + index).reverse()
        },
    },
    mounted(){
        // Update
        Echo.channel('threads').listen('ThreadCreated', (e)=>{
            this.$store.dispatch('newThread',e.threads)
        })
         // Deleted thread
        Echo.channel('threads').listen('ThreadDeleted', (e)=>{
            // Update threads
            this.threadData = e.threads
        })

        // Thread like count
        Echo.channel('threads').listen('UpdateThreadLikeCount', (e)=>{
            // Find index
            let idx = this.threadData.findIndex( elem=> elem.id === e.thread[0].id)
            // Splice and replace array
            this.threadData.splice(idx, 1, e.thread[0])
            // console.log(e.thread[0].id)
        })

        // Filter threads
        Echo.channel('filters').listen('FilterThreads', (e)=>{
           this.$store.dispatch('loadThreads',e.threads)
        })

        // Search threads
        Echo.channel('searches').listen('SearchThreads',(e)=>{
            this.$store.dispatch('loadThreads',e.threads)
        })

        Echo.channel('stats').listen('ThreadStats',(e)=>{
            this.threadstats = e.threadstats
        })
    },
    methods: {
        // Store actions
        ...mapActions(['fetchThreads','fetchTopics','fetchReplies','filterThreads']),
        // goToPage
        goToPage(number){
            axios.get(this.pubmeta.path + '?page=' + number).then((response)=>{
                // response
                let threads = response.data.data
                this.$store.dispatch('loadThreads',threads)
                this.threadmeta = response.data.meta
                // Pub data
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Nothing found'
                })
            })
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
        // Clear filter
        filterMethod(criteria, term) {
            let filter = {
                criteria: criteria,
                term: term
            }
            // call route based on criteria
            this.filterThreads(filter).then(()=>{
                this.filtered = true
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Nothing found'
                })
            })
        },
        // Search
        onSearch() {
            // 
            let filter = {
                criteria: 'search',
                term: this.searchTerm
            }
            // Search
            this.filterThreads(filter).then(()=>{
                this.filtered = true
            }).catch(()=>{
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
                url: 'api/thread/filter',
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
        // Thread
        viewThread(id){
            this.$router.push({name: 'thread', params:{id}})
        },

        // Toggle likes 
        likeThread(id){
            let data = {
                likes: 1
            }
            // axios
            axios({
                method: 'patch',
                url: 'api/thread/'+id,
                data: data
            }).then((response)=>{
                this.$Notice.success({
                    title: 'You liked this'
                })
                }).catch((error)=>{
                    this.$Notice.error({
                        title: 'Error'
                })
            })
        },

        // Recent threads
        mostRecentThreads(){
            // Check the most recent threads
            let recent = this.threadData.filter((elem)=>{
                let time = new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)

                return new Date(elem.created_at) > time
            })

           this.$store.dispatch('loadThreads',recent)
        },
        // Top popular threads
        mostLikedThreads(){
            // Loop through thread return the top threads
            let sorted = this.threadData.sort( (a,b)=> (a.likes > b.likes) ? -1: 1)

            this.$store.dispatch('loadThreads',sorted)
        },
        // Top viewed threads
        mostViewedThreads(){
            // Loop through thread return top thread
            let sorted = this.threadData.sort( (a,b)=> (a.views > b.views) ? -1: 1)
            // 
            this.$store.dispatch('loadThreads',sorted)
        },
        // active threads
        // TODO: fix bug, double click to fetch data
        currentActiveThreads(){
            // Top recent comments
            let sorted = this.replies.sort( (a,b)=> (a.created_at > b.created_at) ? -1: 1).slice(0, 5)

            // Most recently commented threads
            let threadIds = sorted.map((elem)=>{
                return elem.thread_id
            })
            // get the recently commented threads
            let data = this.threadData.filter((elem)=>{
                return threadIds.includes(elem.id)
            })

            this.$store.dispatch('loadThreads',data)

        },
        // Delete thread
        deleteThread(id){
            axios({
                method: 'delete',
                url: 'api/thread/'+id,
            }).then((response)=>{
                this.$Notice.success({
                    title: 'Thread Deleted'
                })
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Thread not deleted'
                })
            })
        }
    }
}
</script>