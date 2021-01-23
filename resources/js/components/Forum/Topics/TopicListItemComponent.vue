<template>
    <div class="w-4/5">
        <div v-for="topic in topics" :key="topic.id" class="flex border-l-4 border-teal-800 mb-2 p-12 px-6 py-10 sm:px-10 sm:py-6 bg-white shadow-md lg:shadow-lg h-40">
            <div class="w-1/2 flex">
                <div class="w-1/4">
                    <img class="h-24 w-full mb-4" src="images/discuss.svg">
                </div>
                <div class="w-3/4 px-4 py-4">
                    <p @click="showTopicThreads(topic.title)" class="font-medium font-sans text-gray-700 mb-2 cursor-pointer"> {{topic.title}} </p>
                    <p class="text-xs text-gray-500">
                        {{topic.description}}
                    </p>
                </div>

            </div>
            <div class="w-1/2 border-l-2 border-gray-600 px-4">
                <div class="w-full flex border-b border-gray-400">
                    <div class="flex-grow p-3 w-1/3">
                        <div class="flex justify-center text-xs text-gray-500 mb-2">
                            Discussions
                        </div>
                        <div class=" flex font-medium text-sm text-gray-700  justify-center">
                            {{topic.discussions}}
                        </div>
                    </div>
                    <div class="flex-grow p-3 w-1/3">
                        <div class="flex justify-center text-xs text-gray-500 mb-2">
                            Subscribers
                        </div>
                        <div class=" flex font-medium text-sm text-gray-700  justify-center">
                            {{topic.subscribers}}
                        </div>
                    </div>
                    <div class="flex-grow p-3 w-1/3">
                        <div class="flex justify-center text-xs text-gray-500 mb-2">
                            Activity
                        </div>
                        <div class=" flex font-medium text-xs text-gray-700  justify-center">
                            {{topic.activity | moment("from", true)}}
                        </div>
                    </div>
                </div>
                <div class="w-full flex">
                    <div class="flex-grow p-3 w-1/4">
                        <ul class="flex w-full justify-start">
                            <li class="text-xs m-2 p-2 font-normal font-sans text-gray-700 tracking-wider cursor-pointer">
                                <Icon v-if="topic.public" size="18" type="md-unlock"/> 
                                <Icon v-else size="18" type="md-lock"/> 
                            </li>
                            <li class="text-xs m-2 p-2 font-normal font-sans text-gray-700 tracking-wider cursor-pointer">
                                <a v-if="following(topic.id)" @click="unfollowTopic(topic)" class="font-normal font-sans text-gray-700 tracking-wider cursor-pointer"> <Icon size="18" color="red" type="ios-heart"/> Following </a>
                                <a v-else @click="followTopic(topic)" class="font-normal font-sans text-gray-700 tracking-wider cursor-pointer">  <Icon size="18" type="ios-heart-outline"/> Follow </a>
                            </li>
                            <li @click="editTopic(topic)" v-show="isAdmin" class="text-xs m-2 p-2 font-normal font-sans text-gray-700 tracking-wider cursor-pointer">
                                <Icon size="18" type="ios-eye"/> Edit
                            </li> 
                            <li @click="deleteTopic(topic.id)" v-show="isAdmin"  class="text-xs m-2 p-2 font-normal font-sans text-gray-700 tracking-wider cursor-pointer">
                                <a class="font-sm tracking-wide font-medium">  <Icon size="18" color="red" type="ios-trash"/> </a>
                            </li>
                        </ul>
                    </div>
                       
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    props: ['topics','isAdmin','user'],

    computed: {
        // Store values
        ...mapGetters('AuthModule',['subscriptions']),

    },
    methods: {
        ...mapActions('TopicModule', ['delete', 'subscribe', 'unsubscribe']),
        ...mapActions('AuthModule',{ sub: 'subscribe'}),
        ...mapActions('AuthModule',{ unsub: 'unsubscribe'}),

        // Following
        following(id){
            return this.subscriptions.includes( id )
        },
     
        followTopic(topic){

            const data = {
                'user': this.user.id
            }

            const params = {
                'topic': topic.id,
                'data': data
            }

            this.subscribe(params).then( response =>{
                this.sub(topic)
            }).catch( error => {
                this.$Notice.error({
                    title: 'Cannot follow this topic'
                })
            })
        },

        unfollowTopic(topic){

            const data = {
                'user': this.user.id
            }

            const params = {
                'topic': topic.id,
                'data': data
            }

            this.unsubscribe(params).then( response =>{
                this.unsub(topic)
            }).catch( error => {
                this.$Notice.error({
                    title: 'Cannot unfollow this topic'
                })
            })
        },
        showTopicThreads(title){
            this.$emit('showTopicThread', title)
        },

        editTopic(topic){
            const id = topic.id
            this.$router.push({name: 'topic', params:{id}})
        },

        deleteTopic( id){
            this.delete(id).then( response =>{

            }).catch( error =>{
                
            })
        }
    }
}
</script>