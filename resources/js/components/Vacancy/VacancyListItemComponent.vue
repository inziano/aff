<template>
    <div class="w-1/4">
        <div class="overflow-hidden shadow-lg p-2 px-5 h-64 bg-white m-2 rounded-lg text-gray-700 hover:text-gray-900" @click="makeApplication(vacancy.id)">
            <div class="mt-3 mb-2">
                <p class="font-500 tracking-wider text-sm antialiased">
                    {{vacancy.title }}
                </p>
            </div>
            <div class="mb-2">
                <p class="font-hairline text-xs tracking-widest capitalize text-gray-600">
                    <Icon type="ios-pin-outline" size="18" />:{{vacancy.location}}
                </p>
            </div>
            <div class="w-full mt-3 ">
                <p class="font-hairline text-xs tracking-widest capitalize text-gray-500">
                    <Icon type="ios-calendar-outline" size="18" /> : <span class="font-thin text-xs tracking-wide capitalize text-gray-400"> {{vacancy.deadline | moment("calendar") }}</span>
                </p>
            </div>
            <div class="w-full mt-3 mb-0">
                <ul class="w-full flex">
                    <li class=" list-none mr-5 font-hairline text-xs tracking-widest capitalize text-gray-500">
                        Posted: <span class="font-thin text-xs tracking-wide capitalize text-gray-400"> {{vacancy.created_at}}</span>
                    </li>
                    <li class=" list-none mr-5 font-hairline text-xs tracking-widest capitalize text-gray-500">
                        <a class="text-xs tracking-wide font-medium text-green-700" @click="makeApplication(vacancy.id)">Apply</a>
                    </li>
                    <li class=" list-none mr-5 font-hairline text-xs tracking-widest capitalize text-gray-500" v-if="vacancy.user.id === user.id || isAdmin">
                        <a class="text-xs tracking-wide font-medium text-red-700" @click="deleteVacancy(vacancy.id)"> <Icon type="ios-trash" :size = 16 /></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: ['vacancy', 'user'],
    computed: {
        ...mapGetters('AuthModule', ['isAdmin'])
    },
    methods:{
        // make Application
        makeApplication(id){
            this.$router.push({name: 'vacancyapplication', params: {id}})
        },
    }
}
</script>