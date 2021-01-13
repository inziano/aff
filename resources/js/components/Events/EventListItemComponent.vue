<template>
    <div class="w-full md:w-1/2 lg:w-1/4">
        <div class="h-64 overflow-hidden shadow-sm p-3 m-1 bg-white" >
            <div class="mt-3 mb-2">
                <p class="font-500 tracking-wider text-sm antialiased" @click="view(event.id)">
                {{event.name}}
                </p>
            </div>
            <div class="mb-2">
                <p class="font-hairline text-sm tracking-widest capitalize text-gray-700">
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

    <!-- <div class="w-full md:w-1/2 lg:w-1/4 m-2">
        <div class="relative overflow-hidden pb-60">
            <img
              class="absolute h-full w-full object-cover object-center"
              src="https://collect.criggzdesign.com/wp-content/uploads/2020/07/5c77d8a62417e4405611bb42_3k-color-1-scaled.jpg"
              alt=""
            />
        </div>
        <div class="flex">
            <div class="w-20 h-224 bg-teal-500 flex justify-center items-center flex-col text-white font-bold text-center">
              <p class="text-xl">{{event.startdate | moment('Do') }}</p>
              <p class="uppercase -mt-1">{{event.startdate | moment('MMM') }}</p>
            </div>
            <div class="bg-white h-24 flex-grow flex flex-wrap items-center px-4">
                <p class="font-bold text-base">{{event.name}}</p>
            </div>
        </div>
    </div> -->
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
        view(id){
            this.$router.push({name: 'eventdetail', params: {id} })
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