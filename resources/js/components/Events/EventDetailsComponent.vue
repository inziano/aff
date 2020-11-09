<template>
    <div class="w-full h-full">
        <ul class="w-full flex flex-wrap bg-white h-8 m-0 mb-5 p-0">
            <div class="">
                <li class="mt-5 ml-5">
                    <Icon type="ios-arrow-round-back" size="44" @click="$router.go(-1)"/>    
                </li>
            </div>
        </ul>
        <div class="p-2 mx-auto w-4/5 flex flex-wrap content-center justify-center" v-for="event in event" :key="event.id">
            <div class="w-2/3">
                <p class="text-4xl font-serif">
                    {{event.name}}
                </p>
                <p class=" font-medium text-sm">
                    {{event.location}}
                </p>
                <p class=" font-medium text-sm">
                    {{event.startdate }} - {{ event.enddate}}
                </p>
            </div>
            
            <div class="mt-6 w-2/3 text-lg tracking-wide font-sans font-normal" >
                {{event.description}}
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return {
            eventId: this.$route.params.id
        }
    },

    computed: {
        ...mapGetters('EventModule', ['events']),
        event(){
            let id = this.eventId
            return this.events.filter(ev => {
                return ev.id === id
            })
        }
    },
    
}
</script>