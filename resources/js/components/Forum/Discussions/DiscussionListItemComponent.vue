<template>
    <div>
        <div v-for="thread in threads" :key="thread.id" class="max-w-4xl px-10 my-4 py-2 border-l-4 border-teal-800 bg-white shadow-md">
            <div class="flex justify-between items-center">
                <span class="font-light text-gray-600 text-xs">{{thread.created_at | moment("dddd, MMMM Do YYYY") }}</span>
                <a @click="showTopic(thread.topic.title)" class="px-2 py-1 bg-gray-600 text-gray-100 font-medium rounded hover:bg-gray-500 text-xs">{{thread.topic.title}}</a>
            </div>
            <div class="mt-2">
                <a @click="viewThread(thread.id, thread.subject)" class="text-gray-700 font-sans font-medium hover:text-gray-600 cursor-pointer">{{thread.subject}}</a>
                <!-- <p v-html="thread.body" class="mt-2 text-gray-600 text-xs"></p> -->
            </div>
            <div class="flex justify-between items-center mt-2">
                <div class="mt-4 flex items-center">
                    <div class="flex mr-2 text-gray-700 text-sm">
                        <li class="list-none m-2 p-2 font-medium font-sans text-gray-700 tracking-wider " @click="likeItem(thread.id)">
                            <Icon type="ios-heart-outline" class="bg-red"/> {{thread.likes}}
                        </li>
                    </div>
                    <div class="flex mr-2 text-gray-700 text-sm">
                        <li class="list-none m-2 p-2 font-medium font-sans text-gray-700 tracking-wider">
                            <Icon type="ios-eye-outline" /> {{thread.views}}
                        </li>
                    </div>
                    <div class="flex mr-2 text-gray-700 text-sm">
                        <li class="list-none m-2 p-2 font-medium font-sans text-gray-700 tracking-wider">
                            <Icon type="ios-chatbubbles-outline" /> {{thread.comments}}
                        </li>
                    </div>
                    <div class="flex mr-2 text-gray-700 text-sm">
                        <li class="list-none m-2 p-2 font-medium font-sans text-gray-700 tracking-wider" v-if="thread.user_id == user.id || isAdmin">
                            <a class="font-sm tracking-wide font-medium text-red-700" @click="deleteItem(thread.id)">  <Icon type="ios-trash"/> </a>
                        </li>
                    </div>
                </div>
                <div>
                    <a class="flex items-center" href="#">
                        <img class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" src="images/discuss.svg" alt="avatar">
                        <h1 class="text-gray-700 font-bold">{{thread.user.username}}</h1>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    props: [ 'threads' , 'user'],
    computed: {
        ...mapGetters('AuthModule', ['isAdmin'])
    },
    methods: {
        ...mapActions('ThreadModule',['update', 'delete']),
        // view thread
        viewThread(id, title){
            let data = {
                views: 1
            }
            // Update
            this.update({id, data})
            this.$router.push({name: 'thread', params:{id, title}})
        },
        // Emit methods when clicked
        deleteItem( id ){
            // Delete item
            this.delete(id)
        },
        // Like thread
        likeItem( id ){
            let data = {
                likes: 1
            }
            // Update
            this.update({id, data})
        },
        showTopic(title){
            this.$emit('showTopicThread', title)
        }
    }
}
</script>