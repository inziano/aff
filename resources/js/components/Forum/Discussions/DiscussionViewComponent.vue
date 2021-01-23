<template>
    <div class="w-full h-full">
        <div class="w-full flex flex-wrap p-5">
            <div class="w-full h-full flex flex-wrap p-2">
                <div class="w-full overflow-hidden p-2 m-2 bg-white flex" v-for="thread in threadData" :key="thread.id">
                    <div class="w-9/12">
                        <div class="w-4/5 mb-3 flex items-baseline">
                            <div class="w-auto lg:flex-grow">
                                <li class="list-none lg:flex-grow"> 
                                    <Avatar v-if="thread.user.username" size="default" class="mx-2"> {{ thread.user.username.slice(0,2)}}</Avatar>
                                    <Avatar v-else> -- </Avatar>
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
                        <p v-html="thread.body" class="text-gray-900 text-base tracking-wide font-sans font-normal"> </p>
                    
                    
                        <div class="w-2/5 mt-3 ">
                            <a class="font-sm tracking-wide font-medium font-sans text-gray-700" @click="reply = true" v-if="!reply"> Reply</a>
                        </div>
                        <div class="w-2/5 mt-5" v-if="reply">
                            <new-reply :threadId = thread.id :user = current_user.id></new-reply>
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
               
                <div class="w-full overflow-hidden p-2 m-2">
                    <reply class="w-10/12 pl-1 pt-2" v-for="reply in threadReplies" :key="reply.id" :reply="reply" :user = current_user ></reply>
                </div>

               
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions, mapGetters } from 'vuex'
import Reply from '../ReplyComponent'
import NewReply from '../NewReplyComponent'

export default {
    data() {
        return {
            threadId: this.$route.params.id,
            reply: false,
        }
    },
    components:{
        'reply': Reply,
        'new-reply': NewReply
    },
    mounted(){
        // Thread view count
        Echo.channel('threads').listen('threadViewCount', (e)=>{
            console.log(e)
            // console.log(this.replies.findIndex( elem => elem.id === e.reply[0].id))
            // let idx = this.threads.findIndex( elem=> elem.id === e.thread[0].id)
            // // // Splice and replace array
            // this.replies.splice(idx, 1, e.thread[0])
        })
        // Reply liked
        Echo.channel('replies').listen('UpdateReplyLikeCount', (e)=>{
            // Find index
            let idx = this.replies.findIndex( elem=> elem.id === e.reply[0].id)
            // Splice and replace array
            this.replies.splice(idx, 1, e.reply[0])
        })

        // Reply
        Echo.channel('replies').listen('ThreadReplied', (e)=>{
            this.update(e.thread)
            this.newReply(e.reply)
        })
    },
    computed: {

        ...mapGetters('ThreadModule',['threads']),
        ...mapGetters('ReplyModule',['replies']),
        ...mapGetters('AuthModule',['current_user']),

        threadData() {
            return this.threads.filter((threads)=>{
                return threads.id === this.threadId
            })
        },
        threadReplies(){
            return this.replies.filter((replies)=>{
                // console.log(this.threadId)
                return replies.thread_id === this.threadId
            })
        },

    },
    methods: {
        ...mapActions('ThreadModule',['update']),
        ...mapActions('ReplyModule',['newReply']),

        onReply(){
            let formdata = this.replyForm
            // Add user and thread
            formdata['user_id'] = this.current_user.id
            formdata['thread_id'] = this.threadId
            // Post reply
            this.$store.dispatch('ReplyModule/create', formdata).then((response)=>{
                // 
                this.reply = false
                this.$Notice.success({
                    title: 'Replied to thread'
                })
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'You are not authorised to reply to this thread'
                })
            })
        },
    }
}
</script>