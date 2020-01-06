<template>
    <div class="w-full h-full">
        <Modal v-model="threadModal" width="700">
            <Form v-model="threadForm" label-position="top">
                <h4 class="text-lg text-semibold subpixel-antialiased tracking-wider"> New Thread </h4>
                <br>
                <Row :gutter="16">
                    <Col span="12">
                        <FormItem label="Category">
                            <Select v-model="threadForm.topic_id">
                                <Option v-for="topic in topics" :key="topic.id" :value="topic.id" > {{topic.title}}</Option>
                            </Select>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Topic">
                            <Input v-model="threadForm.subject" type="text" placeholder="Thread Title"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Discusion Question">
                            <quill  v-model="threadForm.body" :config="config" output="html"></quill>
                            <!-- <Input v-model="threadForm.body" type="textarea" placeholder="Description"></Input> -->
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="24">
                        <ButtonGroup>
                            <Button>
                                <Icon type="ios-cancel"></Icon>
                                Cancel
                            </Button>
                            <Button type="primary" @click="onSubmit">
                                <Icon type="ios-checkmark"></Icon>
                                Create Thread
                            </Button>
                        </ButtonGroup>
                    </Col> 
                </Row>
                
            </Form>
            <div slot="footer"></div>
        </Modal>
        <div class="w-full h-full p-5" >
            <nav class="w-full flex mb-2">
                <div class="lg:flex-grow lg:w-auto">
                    <p class="font-medium font-serif text-3xl tracking-wide">
                        Forum
                    </p>
                    <p class="font-normal font-sans text-lg tracking-tight">
                       Discuss Similar Interests
                    </p>
                </div>
                <div class="w-2/24 p-3">
                    <Button icon="ios-add" @click="threadModal = true">
                        New
                    </Button>
                </div>
            </nav>
            <ul class="w-full flex flex-wrap bg-gray-200 p-1">
                <div class="flex flex-wrap lg:flex-grow lg:w-auto">
                    <li class="mr-3" @click="changeView()">
                        <Icon v-if="list" type="ios-list" size="32"/>
                        <Icon v-if="!list" type="ios-apps-outline" size="32"/>       
                    </li> 
                </div>
                <div class="w-1/24 flex">
                    <input v-on:keyup.enter="onSearch" v-model="searchTerm" class="appearance-none bg-transparent border-none w-3/4 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Search" ></input>
                    <li class="mr-1 p-2">
                        <Icon type="ios-search-outline" size="24"/>       
                    </li>
                </div>
            </ul> 
            <div class="w-full flex flex-wrap pt-5 bg-gray-100 min-h-screen">
                <div class="w-1/6 border-r border-r-black pt-5">
                    <nav class="w-full flex mb-2 ">
                        <div class="mx-5">
                            <ul class="list-reset">
                                <li>
                                    <a class="block p-2 text-gray-600 font-bold tracking-wide text-sm" @click="mostViewedThreads"> Popular All Time</a>
                                </li>
                                <li>
                                    <a class="block p-2 text-gray-600 font-bold tracking-wide text-sm" @click="currentActiveThreads"> Active Threads</a>
                                </li>
                                <li>
                                    <a class="block p-2 text-gray-600 font-bold tracking-wide text-sm " @click="mostLikedThreads"> Popular</a>
                                </li>
                                <li>
                                    <a class="block p-2 text-gray-600 font-bold tracking-wide text-sm " @click="mostRecentThreads"> Recent</a>
                                </li>
                               
                            </ul>
                               
                        </div>
                    </nav>
                </div>
                <div class="w-5/6 px-5">
                    <nav class="w-full flex mb-5 ">
                        <div class="w-64">
                            <Dropdown trigger="click">
                                <a class="font-sans font-medium text-lg tracking-wide text-gray-800" href="javascript:void(0)">
                                    Topics
                                    <Icon type="ios-arrow-down"></Icon>
                                </a>
                                <DropdownMenu slot="list" >
                                    <DropdownItem v-for="topic in topics" :key="topic.id">
                                    <a class="font-sans text-base tracking-wide text-gray-800" @click="showTopic(topic.id)"> {{topic.title}}</a>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </nav>
                    <div class="w-3/4">
                        <div v-for="thread in threadData" :key="thread.id" class="bg-white px-4 py-3 rounded-sm mb-2 shadow-md" @click="viewThread(thread.id)">
                            <div class="w-full mt-2 mb-4">
                                <li class="list-none"> 
                                    <Avatar size="small" icon="ios-person" />
                                    <span class="ml-1 font-sans font-medium tracking-wide text-gray-600">{{thread.user.username}}</span>
                                </li>
                                <li class="mt-2 list-none">
                                    <span class="ml-1 font-sans font-semibold tracking-wide text-gray-600 text-xs"> {{thread.created_at | moment("from") }} </span>
                                </li>
                            </div>
                            <div class="mb-3">
                                <p class="font-serif font-medium text-gray-700 tracking-wide text-2xl">
                                    {{thread.subject}}
                                </p>
                            </div>
                            <div>
                                <span v-html="thread.body"></span>
                            </div>
                            <div class="w-full mt-5 mb-3">
                                <a @click="showTopic(thread.topic.id)">
                                    <Tag color="default" >{{thread.topic.title}}</Tag>
                                </a>
                            </div>
                            <ul class="flex">
                                <li class="m-2 p-2 font-medium font-sans text-gray-700 tracking-wider" @click="likeThread(thread.id)">
                                    <Icon type="ios-heart-outline" class="bg-red"/> {{thread.likes}}
                                </li>
                                <li class="m-2 p-2 font-medium font-sans text-gray-700 tracking-wider">
                                    <Icon type="ios-eye-outline" /> {{thread.views}}
                                </li>
                                <li class="m-2 p-2 font-medium font-sans text-gray-700 tracking-wider">
                                    <Icon type="ios-chatbubbles-outline" /> {{thread.comments}}
                                </li>
                                <li class="m-2 p-2 font-medium font-sans text-gray-700 tracking-wider">
                                    <a class="text-gray-800" @click="viewThread(thread.id)">View</a>
                                </li>
                                <li class="m-2 p-2 font-medium font-sans text-gray-700 tracking-wider" v-if="thread.user_id === currentUser.id">
                                   <a class="font-sm tracking-wide font-medium text-red-700" @click="deleteThread(thread.id)"> Remove </a>
                                </li>
                            </ul>
                        </div>
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
export default {
    data (){
        return {
            list: false,
            threadModal: false,
            threadmeta: '',
            searchTerm: '',
            threadForm: {
                topic_id: '',
                subject: '',
                body: ''
            },
            config: {
                placeholder: 'Compose a question...',
                theme: 'snow',
                modules: {
                    toolbar: [
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],
                    [{ 'header': 1 }, { 'header': 2 }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    [{ 'script': 'sub' }, { 'script': 'super' }],
                    [{ 'indent': '-1' }, { 'indent': '+1' }],
                    [{ 'direction': 'rtl' }],
                    [{ 'size': ['small', false, 'large', 'huge'] }],
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    [{ 'font': [] }],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'align': [] }],
                    ['clean'],
                    ],
                    syntax: {
                    highlight: text => hljs.highlightAuto(text).value
                    }
                }
            },
        }
    },
    computed: {
        currentUser(){
            return this.$store.state.current_user
        },
        threadData(){
            return this.$store.getters.threads
        },
        replies(){
            return this.$store.getters.replies
        },
        topics(){
            return this.$store.getters.topics
        }
    },
    mounted(){
        this.$store.dispatch('login')
        // TODO: Move this to store
        axios.all([
            axios.get('api/thread'),
            axios.get('api/topic'),
            axios.get('api/reply')
        ]).then( axios.spread((threads,topics,replies)=>{
            let thread = threads.data.data
            this.threadmeta = threads.data.meta
            this.$store.dispatch('loadThreads',thread)

            let reply = replies.data.data
            this.$store.dispatch('loadReplies',reply)

            let topic = topics.data.data
            this.$store.dispatch('loadTopics',topic)
        })).catch((error)=>{
            // show error
            this.$Notice.error({
                title: 'Error occurred',
                desc: error.message
            })
        })

        // Update
        Echo.channel('threads').listen('ThreadCreated', (e)=>{
            this.$store.dispatch('loadThreads',e.threads)
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
    },
    methods: {
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
        // Search
        onSearch() {
            // 
            let formdata = {
                search: this.searchTerm
            }
            // Search
            axios({
                method: 'post',
                url: 'api/thread/search',
                data: formdata
            }).then((response)=>{
                // log response
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Nothing found'
                })
            })
        },
        // Submit
        onSubmit(){
            console.log(this.currentUser.id)
            let formdata = this.threadForm
            formdata['user_id'] = this.currentUser.id
            // Push to db
            axios({
                method: 'post',
                url: 'api/thread',
                data: formdata
            }).then((response)=>{
                this.$Notice.success({
                    title: 'Thread Created',
                    desc: 'Your thread was succesfully created'
                })
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Thread not created',
                    desc: 'Your thread was not created'
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