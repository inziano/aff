<template>
    <ul>
        <li class=" list-none w-auto m-2 ml-5 rounded-sm">
            <div class="bg-white px-3 py-4">
                <div class="w-full">
                    <li class="list-none"> 
                        <Avatar size="small" icon="ios-person" />
                        <span class="ml-1 font-sans font-thin text-gray-600">{{reply.user.username}}</span>
                    </li>
                </div>
                <div class="p-2 mt-2 font-medium font-sans">
                    <span class="text-base" v-html="reply.body"></span>
                </div>
                <p class="p-2 font-thin text-xs text-gray-600">{{reply.created_at | moment("from")}}</p>
                <div class="mt-2 mb-2 w-full flex flex-wrap ">
                    <li class="p-2 ml-2" @click="likeReply(reply.id)">
                        <Icon type="ios-heart-outline" /><span class="ml-2 font-medium text-sm"> {{reply.likes}}</span>
                    </li>
                    <li class="p-2 ml-2">
                        <a class="font-sm tracking-wide font-medium font-sans text-gray-700" @click="replysm = true" >Reply</a>
                    </li>
                    <li class="p-2 ml-2" v-if="reply.user_id === user.id">
                        <a class="font-sm tracking-wide font-medium font-sans text-gray-700 hover:text-red-700" @click="deleteReply(reply.id)"> Remove </a>
                    </li>
                </div>
                <!-- Fix: Open reply form for specific reply -->
                <div class="w-2/5 mt-5" v-if="replysm">
                    <new-reply :threadId = reply.thread_id :replyId = reply.id :user = user.id ></new-reply>
                </div>
            </div>
            <reply class="pl-2" v-for="reply in reply.replies" :key="reply.id" :reply="reply" :user = user ></reply>
        </li> 
    </ul>
</template>

<script>
import NewReply from './NewReplyComponent'
import Reply from './ReplyComponent'

export default {
    name: 'reply',
    props: ['reply', 'user'],
    components: {
        'reply': Reply,
        'new-reply': NewReply
    },
    data(){
        return {
            replysm: false,
        }
    },
    methods: {
        likeReply(id){
            let data = {
                likes: 1
            }
            // axios
            axios({
                method: 'patch',
                url: 'api/replies/'+id,
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
        deleteReply(id){
            axios({
                method: 'delete',
                url: 'api/replies/'+id,
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