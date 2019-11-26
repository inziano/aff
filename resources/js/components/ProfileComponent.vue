<template>
    <div class="w-full h-full flex flex-wrap">
        <ul class="w-full flex flex-wrap bg-white h-8 m-0 p-0">
            <div class="">
                <li class="mt-5 ml-5">
                    <Icon type="ios-arrow-round-back" size="44" @click="$router.go(-1)"/>    
                </li>
            </div>
        </ul>
        <div class="w-3/12 border-r border-r-gray-100 mt-0">
            <div class="bg-white rounded-lg p-6">
                <img class="h-20 w-20 rounded-full mx-auto" src="images/landing.jpg">
                <div class="mt-5 text-center">
                    <h2 class="text-lg">{{this.bioData.firstname}} {{ this.bioData.lastname}}</h2>
                    <p class="mb-5 text-gray-600">{{this.bioData.email}}</p>
                    <p class="mb-2 text-gray-600">{{this.bioData.qualification}}</p>
                    <p class="text-gray-600 text-xs">
                       <Icon type="ios-pin" /><span>{{this.bioData.residency}}</span> 
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
                            {{this.bioData.summary}}
                        </p>
                    </div>
                    <div class="w-full overflow-hidden shadow-md p-5 m-2 bg-white rounded">
                        <h4 class="text-gray-700 text-lg mb-3">
                            Education
                        </h4>
                        <Divider></Divider>
                        <div class="p-2 border-b border-b-2">
                            <p class="text-base font-medium text-gray-600 tracking-wider">{{this.eduData.institution}}</p>
                            <p class="text-sm font-medium text-gray-700 tracking-widest">{{this.eduData.degree}}</p>
                            <p class="text-xs font-sans mb-2"> {{this.eduData.startdate}} - {{this.eduData.enddate}}</p>
                            <p class="text-sm tracking-wider mb-2">
                                {{this.eduData.description}}
                            </p>
                        </div>
                    </div>
            </div>
        </div>
        <div class="w-3/12 pt-0 px-4">
            <h4 class="text-gray-700 text-lg mb-4"> Work </h4>
            <Timeline>
                   <TimelineItem>
                        <p class="time">{{this.workData.startdate}} - {{this.workData.enddate}}</p>
                        <p class="text-gray-600 text-xs">{{this.workData.country}}</p>
                        <p class="content text-sm">{{this.workData.institution}}</p>
                        <p class="content text-sm">{{this.workData.description}}</p>
                    </TimelineItem>
            </Timeline>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            id: this.$route.params.id,
            bioData: {},
            workData: {},
            eduData: {}
        }
    },
    mounted() {
        // Fetch the specific user details
        const id = this.id

        axios.all([
            axios.get('api/bio/'+id),
            axios.get('api/education/'+id),
            axios.get('api/work/'+id)
        ]).then( axios.spread((bio,edu,work)=>{
            // Bio information
            console.log(bio.data)
            this.bioData = bio.data
            // Education information
            this.eduData = edu.data
            // // Work information
            this.workData = work.data
        })).catch((error)=>{
            this.editing = true
            // Show information to fill in details
            this.$Notice.info({
                title: 'User',
                desc: 'Please fill in your biodata'
            })
        })
    }
}
</script>