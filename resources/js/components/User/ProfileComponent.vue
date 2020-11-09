<template>
    <div class="w-full h-full">
        <div class="w-full flex flex-wrap bg-white m-0 p-0">
            <div class="">
                <li class="ml-5 list-none">
                    <Icon type="ios-arrow-round-back" size="44" @click="$router.go(-1)"/>    
                </li>
            </div>
        </div>
        <div class="w-full flex flex-wrap">
            <div class="w-1/4 mt-0">
                <div class="bg-white rounded-lg p-6">
                    <img class="h-20 w-20 rounded-full mx-auto" src="images/landing.jpg">
                    <div class="mt-5 text-center">
                        <h2 class="text-lg">
                            <span  v-if="dets.firstname !== null"> {{dets.firstname}} </span>
                            <span  v-if="dets.lasttname !== null"> {{ dets.lastname}} </span> 
                        </h2>
                        <p class="mb-5 text-gray-600">{{dets.email}}</p>
                        <p class="mb-2 text-gray-600">{{dets.qualification}}</p>
                        <p class="text-gray-600 text-xs">
                            <Icon type="ios-pin" /><span>{{dets.residency}}</span> 
                        </p>
                        <p class="pt-3 mt-5 text-gray-700 hover:text-green-500" @click="isEditing" v-if="currentUser.id == user.id">
                            <span v-if="editing"> View Profile</span>
                            <span v-if="!editing"> Edit </span>
                        </p>
                    </div>
                </div>
                <div class="w-full p-2 flex">
                    <div class="w-1/2 text-center">
                        <a class="text-xs uppercase text-gray-700" @click="goToPub(user.id)">
                            <span class="text-xl font-semibold text-gray-500">{{user.publications}}</span> <br>
                            Pubs
                        </a>
                    </div>
                    <div class="w-1/2 text-center">
                        <a class="text-xs uppercase text-gray-700"  @click="goToGallery(user.id)">
                            <span class="text-xl font-semibold text-gray-500">0</span> <br>
                            Images
                        </a>
                    </div>
                </div>
            </div>
            <div class="w-3/4 flex" v-if="!editing">
                <div class="w-3/5 pt-0">
                    <div class="w-full">
                            <div class="w-full overflow-hidden p-5 m-2">
                                <h4 class="text-gray-700 text-lg mb-4">
                                    Summary
                                </h4>
                                <span v-html="dets.summary"></span>
                    
                            </div>
                            <div class="w-full overflow-hidden p-5 m-2 ">
                                <h4 class="text-gray-700 text-lg mb-3">
                                    Education
                                </h4>
                                <div v-if="education.length !== 0">
                                    <div class="pt-5 border-b border-dotted border-gray-700" v-for="edu in education" :key="edu.key">
                                        <p class="text-base font-medium text-gray-600 tracking-wider">{{edu.institution}}</p>
                                        <p class="text-sm font-medium text-gray-700 tracking-widest">{{edu.degree}}</p>
                                        <p class="text-xs font-sans mb-2"> {{edu.startdate}} - {{edu.enddate}}</p>
                                        <p class="text-sm tracking-wider mb-2">
                                            {{edu.description}}
                                        </p>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="flex flex-wrap content-center justify-center ">
                                        <img class="h-48 w-full" src="images/certification.svg">
                                        <p class="font-semibold text-gray-600">
                                            Education & Certification
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="w-2/5 pt-0 px-4">
                    <div class="w-full">
                        <div class="w-full overflow-hidden p-5 m-2">
                            <h4 class="text-gray-700 text-lg mb-4"> Work </h4>
                            <Timeline v-if="work.length !== 0">
                                <TimelineItem v-for="work in work" :key="work.id">
                                    <p class="text-gray-600">
                                        <span class=" tracking-tight text-xs"> {{work.startdate}} </span> 
                                        -
                                        <span class="tracking-tight text-xs"> {{work.enddate}} </span> 
                                    </p>
                                    <p class="text-gray-600 text-xs">{{work.country}}</p>
                                    <p class="text-sm font-bold tracking-wide text-gray-600">{{work.institution}}</p>
                                    <p class="content text-sm">{{work.description}}</p>
                                </TimelineItem>
                            </Timeline>
                            <div v-else>
                                <div class="flex flex-wrap content-center justify-center">
                                    <img class="h-48 w-full" src="images/work.svg">
                                    <p class="font-semibold text-gray-600">
                                        Work experience
                                    </p>
                                </div>    
                            </div>
                        </div>
                    </div>
                    
                   
                </div>
            </div>
            <div class="w-6/12 pl-5" v-else>
                <editbio-form class="ml-2 w-full"></editbio-form>
            </div>
           
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapGetters, mapActions } from 'vuex'
import EditBioForm from './UserForms/EditBioFormComponent'

export default {
    components: {
        'editbio-form': EditBioForm,
    },
    mounted() {
        this.loadUserData(this.currentUser.id)
    },
    data() {
        return {
            id: this.$route.params.id,
            editing: false,
        }
    },
    computed: {
       ...mapState('AuthModule',['currentUser']),
       ...mapGetters('AuthModule',['current_user_details']),
       ...mapGetters('UserModule',['members']),
        // Member
        profile(){
            let curr_id = this.$route.params.id

            if ( curr_id === this.currentUser.id) {
                if ( this.current_user_details === null ){
                    let details = [{education: [], work: [], bio: []}]
                    return details
                } else {
                    // Return current user details
                    return this.current_user_details
                }
                   
            } else {
                return this.members.filter( (member)=>{
                    return member.id == curr_id
                })
            }
    
        },
        user(){
            if ( Object.keys(this.profile[0]).length !== 0 ){
                return this.profile[0]
            }
            this.editing = true
            return false
        },
        education(){
            if(this.profile[0].education.length !== 0 ){
                return this.profile[0].education
            }
            return []
        },
        work(){
            if ( this.profile[0].work.length !== 0){
                return this.profile[0].work
            }
            return []
            
        },
        dets(){
            if ( this.profile[0].bio !== null){
                return this.profile[0].bio
            }
            this.editing = true
            return false
        }
    },
    methods: {
        ...mapActions('AuthModule',['loadUserData']),
        isEditing () {
            if ( this.editing ){
                this.editing = false
            } else {
                this.editing = true
            }
        },
        goToPub(id){
            this.$router.push({name: 'publications', params: {id}})
        },
        goToGallery(id){
            this.$router.push({name: 'gallery', params: {id}})
        }
    }
}
</script>