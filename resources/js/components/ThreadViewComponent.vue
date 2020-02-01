<template>
    <div class="w-full h-full">
        <div class="w-full flex flex-wrap p-5">
            <div class="w-full h-full flex flex-wrap p-2">
                <div class="w-full overflow-hidden p-2 m-2 bg-white flex" v-for="thread in threadData" :key="thread.id">
                    <div class="w-9/12">
                        <div class="w-4/5 mb-3 flex items-baseline">
                            <div class="w-auto lg:flex-grow">
                                <li class="list-none lg:flex-grow"> 
                                    <Avatar size="default" class="mx-2"> {{ thread.user.username.slice(0,2)}}</Avatar>
                                    <span class="font-sans font-medium tracking-wide text-gray-600 text-lg">{{thread.user.username}}</span>
                                </li>
                            </div>
                            <div class="w-6/24">
                                <li class="list-none">
                                    <span class="font-sans font-semibold tracking-wide text-gray-600 text-xs"> {{thread.created_at | moment("from") }} </span>
                                </li>
                            </div>
                        </div>
                    
                        <h4 class="text-gray-900 font-normal text-4xl font-sans tracking-wide mb-2">
                            {{thread.subject}}
                        </h4>
                        <p class="text-gray-900 text-base tracking-wide font-sans font-normal">
                            {{thread.body}}
                        </p>
                    
                    
                        <div class="w-2/5 mt-3 ">
                            <a class="font-sm tracking-wide font-medium font-sans text-gray-700" @click="reply = true" v-if="!reply"> Reply</a>
                        </div>
                        <div class="w-2/5 mt-5" v-if="reply">
                            <Form :model="replyForm" label-position="top">
                                <Row :gutter="16">
                                    <Col span="24">
                                        <FormItem label="Reply">
                                            <!-- <Input v-model="replyForm.body" type="textarea" placeholder="Reply"></Input> -->
                                            <quill  v-model="replyForm.body" :config="config" output="html"></quill>
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row :gutter="16">
                                    <Col span="24">
                                        <ButtonGroup>
                                            <Button @click="reply = false">
                                                <Icon type="ios-cancel"></Icon>
                                                Cancel
                                            </Button>
                                            <Button type="success" @click="onReply">
                                                <Icon type="ios-checkmark"></Icon>
                                                Submit
                                            </Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>

                    <div class="w-3/12 p-5 ml-3">
                        <div class="flex items-center px-5 pt-5">
                            <p class="w-full text-xl tracking-wider font-sans">
                                Discussion Info
                            </p>
                        </div>
                        <div class="flex flex-wrap items-center px-5 pt-5">
                            <p class="w-full text-sm font-sans tracking-wide mb-2">
                                Views: {{thread.views}}
                            </p>
                            <p class="w-full text-sm font-sans tracking-wide mb-2">
                                Tags: {{thread.topic.title}}
                            </p>
                        </div>
                    </div>
                </div>
               
                <div class="w-full overflow-hidden p-2 m-2 bg-gray-100">
                    <reply class="w-10/12 pl-1 pt-2" :replies="replies"></reply>
                </div>

               
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Reply from './ReplyComponent'

export default {
    data() {
        return {
            threadId: this.$route.params.id,
            reply: false,
            replyForm: {
                body: ''
            },
            config: {
                placeholder: 'Compose a reply',
                theme: 'snow'
            },
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
        }
    },
    components:{
        'reply': Reply
    },
    mounted(){
        // Thread id
        const id = this.threadId   
        // add views       
        axios.all([
            axios.get('api/thread/'+id,{views: 1})
        ]).then( axios.spread(()=>{
            // 
        })).catch((error)=>{
            this.$Notice.info({
                title: 'Error',
                desc: error
            })
        })
        // Update replies realtime
        Echo.channel('replies').listen('ThreadReplied', (e)=>{
            this.$store.dispatch('loadReplies',e.replies)
        })

        // Thread view count
        Echo.channel('thread').listen('threadViewCount', (e)=>{
            console.log(e)
        })

        // Reply liked
        Echo.channel('replies').listen('UpdateReplyLikeCount', (e)=>{
            // Find index
            let idx = this.replies.findIndex( elem=> elem.id === e.reply[0].id)
            // Splice and replace array
            this.replies.splice(idx, 1, e.thread[0])
        })
    },
    computed: {
        currentUser(){
            return this.$store.state.current_user
        },
        threadData() {
            return this.$store.getters.threads.filter((threads)=>{
                return threads.id === this.threadId
            })
        },
        replies(){

            return this.$store.getters.replies.filter((replies)=>{
                // console.log(this.threadId)
                return replies.thread_id === this.threadId
            })

        },

    },
    methods: {
        onReply(){
            let formdata = this.replyForm
            // Add user and thread
            formdata['user_id'] = this.currentUser.id
            formdata['thread_id'] = this.threadId

            // Post reply
            axios({
                method: 'post',
                url: 'api/reply',
                data: formdata
            }).then((response)=>{
                // 
                this.reply = false
                this.$Notice.success({
                    title: 'Replied to thread'
                })
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Cannot reply to thread'
                })
            })
        },
        likeReply(id){
            let data = {
                likes: 1
            }
            // axios
            axios({
                method: 'patch',
                url: 'api/reply/'+id,
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
    }
}
</script>