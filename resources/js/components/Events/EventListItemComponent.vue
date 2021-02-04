<template>
    <div class="w-full md:w-1/2 lg:w-1/4">
        <div class="h-64 overflow-hidden shadow-sm px-4 py-4 m-1 bg-white" >
            <div class="mt-3 mb-2">
                <p class="font-medium font-sans text-gray-700 mb-2 cursor-pointer" @click="view(event.id, event.name)">
                {{event.name}}
                </p>
            </div>
            <div class="mb-2">
                <p class="text-xs text-gray-500">
                {{event.description | truncate(50) }}
                </p>
            </div>
            <div class="mb-2">
                <p class="font-hairline text-xs tracking-widest capitalize text-gray-500">
                <Icon type="ios-pin-outline" size="18" />: {{event.location}}
                </p>
            </div>
            <div class="w-full mb-2">
                <p class="font-hairline text-xs tracking-widest capitalize text-gray-500">
                    <Icon type="ios-calendar-outline" size="18" /> :{{event.startdate }} - {{ event.enddate}}
                </p>
            </div>
            <div class="w-full mt-5 mb-0">
                <ul class="w-full flex">
                    <li class=" list-none mr-5 font-hairline text-xs tracking-widest capitalize text-gray-500">
                        Posted: <span class="font-thin text-xs tracking-wide capitalize text-gray-400"> {{event.created_at}}</span>
                    </li>
                    <li class=" list-none mr-5 font-hairline text-xs tracking-widest capitalize text-gray-500" v-if="event.user.id === user.id || isAdmin">
                        <a class="text-xs tracking-wide font-medium text-red-700" @click="remove(event.id)"> <Icon type="ios-trash" :size = 16 /></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    props: ['event', 'user'],
    computed: {
        ...mapGetters('AuthModule', ['isAdmin'])
    },
    methods:{
        ...mapActions('EventModule', ['delete']),
        // View
        view(id,title){
            this.$router.push({name: 'eventdetail', params: {id, title} })
        },
        // Delete
        remove(id){
            this.delete(id).then((response)=>{
                this.$Notice.success({
                    title: 'Event Deleted'
                })
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Event not deleted'
                })
            })
        }
    }
}
</script>