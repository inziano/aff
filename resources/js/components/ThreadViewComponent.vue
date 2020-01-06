<template>
    <div class="w-full h-full">
        <div class="w-full flex flex-wrap p-5">
            <nav class="w-full flex mb-2">
                <div class="lg:flex-grow lg:w-auto">
                    <li class="ml-5 list-none">
                        <Icon type="ios-arrow-round-back" size="44" @click="$router.go(-1)"/>    
                    </li>
                </div>
                <div class="w-2/24">
                </div>
            </nav>
            <div class="w-full h-full flex flex-wrap p-2 bg-gray-200">
                <div class="w-full overflow-hidden p-5 m-2 bg-white rounded" v-for="thread in threadData" :key="thread.id">
                    <li class="mt-2 mb-3 list-none"> 
                        <Avatar size="small" icon="ios-person" />
                        <span class="font-sans font-semibold tracking-wide text-gray-600 text-xs">{{thread.user.username}}</span>
                    </li>
                    <h4 class="text-gray-600 text-xl font-serif tracking-wide mb-2">
                        {{thread.subject}}
                    </h4>
                    <p class="text-gray-600 text-base tracking-wide font-sans font-normal">
                        {{thread.body}}
                    </p>
                    <div class="w-full mt-2 mb-2">
                        <li class="mt-2 mb-2 list-none">
                            <span class="font-sans font-semibold tracking-wide text-gray-600 text-xs"> {{thread.created_at | moment("from") }} </span>
                        </li>
                    </div>
                   
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

                <reply class="w-full pl-1 pt-2" :replies="replies"></reply>
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
            axios.patch('api/thread/'+id,{views: 1})
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