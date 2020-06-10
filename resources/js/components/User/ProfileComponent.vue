<template>
    <div class="w-full h-full">
        {{ id }}
        <div class="w-full flex flex-wrap bg-white m-0 p-0">
            <div class="">
                <li class="ml-5 list-none">
                    <Icon type="ios-arrow-round-back" size="44" @click="$router.go(-1)"/>    
                </li>
            </div>
        </div>
        <div class="w-full flex flex-wrap">

            <div class="w-3/12 border-r border-r-gray-100 mt-0">
                <div class="bg-white rounded-lg p-6">
                    <img class="h-20 w-20 rounded-full mx-auto" src="images/landing.jpg">
                    <div class="mt-5 text-center">
                        <h2 class="text-lg">{{dets.firstname}} {{ dets.lastname}}</h2>
                        <p class="mb-5 text-gray-600">{{dets.email}}</p>
                        <p class="mb-2 text-gray-600">{{dets.qualification}}</p>
                        <p class="text-gray-600 text-xs">
                        <Icon type="ios-pin" /><span>{{dets.residency}}</span> 
                        </p>
                        <!-- <a href="" class="pt-3 mt-5 text-gray-700 hover:text-green-500">Edit</a> -->
                    </div>
                </div>
                <div class="w-full p-2 flex">
                    <div class="w-1/3 text-center">
                        <p class="text-xs uppercase text-gray-700">
                            <span class="text-xl font-semibold text-gray-500">0</span> <br>
                            Pubs
                        </p>
                    </div>
                    <div class="w-1/3 text-center">
                        <p class="text-xs uppercase text-gray-700">
                            <span class="text-xl font-semibold text-gray-500">0</span> <br>
                            Images
                        </p>
                    </div>
                    <div class="w-1/3 text-center">
                        <p class="text-xs uppercase text-gray-700">
                            <span class="text-xl font-semibold text-gray-500">0</span> <br>
                            Pubs
                        </p>
                    </div>
                </div>
            </div>
            <div class="w-6/12 pt-0">
                <div class="w-11/12">
                        <div class="w-full overflow-hidden shadow-md p-5 m-2 bg-white rounded">
                            <h4 class="text-gray-700 text-lg mb-4">
                                Summary
                            </h4>
                            <p class="text-gray-700 text-sm">
                                {{dets.summary}}
                            </p>
                        </div>
                        <div class="w-full overflow-hidden shadow-md p-5 m-2 bg-white rounded">
                            <h4 class="text-gray-700 text-lg mb-3">
                                Education
                            </h4>
                            <Divider></Divider>
                            <div class="p-2 border-b border-b-2" v-for="edu in education" :key="edu.key">
                                <p class="text-base font-medium text-gray-600 tracking-wider">{{edu.institution}}</p>
                                <p class="text-sm font-medium text-gray-700 tracking-widest">{{edu.degree}}</p>
                                <p class="text-xs font-sans mb-2"> {{edu.startdate}} - {{edu.enddate}}</p>
                                <p class="text-sm tracking-wider mb-2">
                                    {{edu.description}}
                                </p>
                            </div>
                        </div>
                </div>
            </div>
            <div class="w-3/12 pt-0 px-4">
                <h4 class="text-gray-700 text-lg mb-4"> Work </h4>
                <Timeline>
                    <TimelineItem v-for="work in work" :key="work.id">
                            <p class="time">{{work.startdate}} - {{work.enddate}}</p>
                            <p class="text-gray-600 text-xs">{{work.country}}</p>
                            <p class="content text-sm">{{work.institution}}</p>
                            <p class="content text-sm">{{work.description}}</p>
                        </TimelineItem>
                </Timeline>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    data() {
        return {
            id: this.$route.params.id,
            bioData: {},
            workData: {},
            eduData: {}
        }
    },
    computed: {
       ...mapState(['members']),
        // Member
        profile(){
            let curr_id = this.id
            return this.members.filter( (member)=>{
                return member.id == curr_id
            })
        },
        education(){
            return this.profile[0].education
        },
        work(){
            return this.profile[0].work
        },
        dets(){
            return this.profile[0].bio
        }
    }
}
</script>