<template>
    <div class="bg-white px-4 py-3 mb-2 flex" @click="viewThread(thread.id)">
        <div class="w-3/5">
            <div class="">
                <p class="font-serif font-medium text-gray-700 tracking-wide text-xl">
                    {{thread.subject}}
                </p>
            </div>
            <div class="w-full py-1 flex content-center">
                <li class="list-none mr-2"> 
                    <span class="ml-1 font-sans font-thin tracking-wide text-gray-600">Posted by: {{thread.user.username}}</span>
                </li>
                <li class="list-none mx-2">
                    <span class="mr-1 font-sans font-thin tracking-wide text-gray-600 text-xs"> {{thread.created_at | moment("from") }} </span>
                </li>
            </div>
            <div>
                <span v-html="thread.body"></span>
            </div>
            <div class="w-full py-1">
                <a @click="showTopic(thread.topic.id)">
                    <Tag color="default" >{{thread.topic.title}}</Tag>
                </a>
            </div>
        </div>
        <div class="w-2/5 h-auto flex items-center">
            <ul class="flex w-full justify-center">
                <li class="m-2 p-2 font-medium font-sans text-gray-700 tracking-wider" @click="likeItem(thread.id)">
                    <Icon type="ios-heart-outline" class="bg-red"/> {{thread.likes}}
                </li>
                <li class="m-2 p-2 font-medium font-sans text-gray-700 tracking-wider">
                    <Icon type="ios-eye-outline" /> {{thread.views}}
                </li>
                <li class="m-2 p-2 font-medium font-sans text-gray-700 tracking-wider">
                    <Icon type="ios-chatbubbles-outline" /> {{thread.comments}}
                </li>
                <!-- <li class="m-2 p-2 font-medium font-sans text-gray-700 tracking-wider">
                    <a class="text-gray-800" @click="viewThread(thread.id)">View</a>
                </li> -->
                <li class="m-2 p-2 font-medium font-sans text-gray-700 tracking-wider" v-if="thread.user_id === current_user.id">
                <a class="font-sm tracking-wide font-medium text-red-700" @click="deleteItem(thread.id)"> Remove </a>
                </li>
            </ul>
        </div>
        
        
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    props: [ 'thread' ],
    computed: {
        ...mapState(['current_user']),
    },
    methods: {
        // view thread
        viewThread(id){
            this.$router.push({name: 'thread', params:{id}})
        },
        // Emit methods when clicked
        deleteItem( id ){
            // Delete item
            this.$store.dispatch('deleteThread', id)
        },
        // Like thread
        likeItem( id ){
            let data = {
                likes: 1
            }
            // Update
            this.$store.dispatch('updateThread', {id, data})
        },

    }
}
</script>