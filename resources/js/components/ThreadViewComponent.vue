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
            <div class="w-full flex flex-wrap p-2 bg-gray-100">
                <div class="w-2/3 mx-auto overflow-hidden shadow-md p-5 m-2 bg-white rounded" v-if="threadData">
                    <h4 class="text-gray-700 text-lg mb-4">
                        {{threadData.subject}}
                    </h4>
                    <p class="text-gray-700 text-sm">
                        {{threadData.body}}
                    </p>
                    <div class="w-2/5 mt-5">
                        <a @click="reply = true" v-if="!reply"> Reply</a>
                    </div>

                    <div class="w-2/5 mt-5" v-if="reply">
                        <Form :model="replyForm" label-position="top">
                            <Row :gutter="16">
                                <Col span="24">
                                    <FormItem label="Reply">
                                        <Input v-model="replyForm.body" type="textarea" placeholder="Reply"></Input>
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
                <div class="w-2/3 mx-auto">
                    <List item-layout="vertical" class="w-2/3 ml-10 shadow bg-white px-5 rounded">
                        <ListItem v-for="reply in replies" :key="reply.id">
                            <ListItemMeta description="" />
                            <p class="p-2 mt-2 font-normal font-sans"> {{reply.body}}</p>
                            <p class="p-2 font-thin text-xs">{{reply.created_at}}</p>
                            <template  slot="action">
                                <li class="p-2 ml-2">
                                    <Icon type="ios-heart-outline" /><span class="ml-2 font-medium text-sm">0</span>
                                </li>
                                <li class="p-2 ml-2" v-if="reply.user_id === currentUser.id">
                                   <a class="font-sm tracking-wide font-medium text-red-700" @click="deleteReply(reply.id)"> Remove </a>
                                </li>
                            </template>
                        </ListItem> 
                    </List>
                </div>
               
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            threadId: this.$route.params.id,
            reply: false,
            replies:'',
            replyForm: {
                body: ''
            },
            threadData: ''
        }
    },
    mounted(){
        // Pull replies
        const id = this.threadId
        axios.all([
            axios.get('api/thread/'+id),
            axios.get('api/reply/'+id)
        ]).then( axios.spread((thread, reply)=>{
            this.threadData = thread.data
            this.replies = reply.data
        })).catch((error)=>{
            this.$Notice.info({
                title: 'Error',
                desc: error
            })
        })
        Echo.channel('replies').listen('ThreadReplied', (e)=>{
            this.replies = e.replies

            // console.log(e.replies)
        })
    },
    computed: {
        currentUser(){
            return this.$store.state.current_user
        }
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
                this.$Notice.success({
                    title: 'Replied to thread'
                })
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Cannot reply to thread'
                })
            })
        },
        deleteReply(id){
            axios({
                method: 'delete',
                url: 'api/reply/'+id,
            }).then((response)=>{
                this.$Notice.success({
                    title: 'Reply Deleted'
                })
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Reply not deleted'
                })
            })
        }
    }
}
</script>