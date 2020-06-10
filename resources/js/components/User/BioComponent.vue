<template>
    <div class="w-full h-full flex flex-wrap">
        <ul class="w-full flex flex-wrap bg-white h-8 m-0 p-2">
            <div class="">
                <li class="ml-5">
                    <Icon type="ios-arrow-round-back" size="44" @click="$router.go(-1)"/>    
                </li>
            </div>
        </ul>
        
        <div class="w-3/12 border-r border-r-gray-100 mt-0">
            <div class="bg-white rounded-lg p-6">
                <img class="h-20 w-20 rounded-full mx-auto" src="images/landing.jpg">
                <div class="mt-5 text-center">
                    <h2 class="text-lg">{{current_user.username}}</h2>
                    <p class="mb-5 text-gray-600">{{current_user.email}}</p>
                    <p class="mb-2 text-gray-600">{{dets.qualification}}</p>
                    <p class="mb-2 text-gray-600">{{dets.field_of_study}}</p>
                    <p class="text-gray-600 text-xs">
                       <Icon type="ios-pin" /><span>{{dets.residency}}</span> 
                    </p>
                    <p class="pt-3 mt-5 text-gray-700 hover:text-green-500" @click="isEditing">
                        <span v-if="editing"> View Profile</span>
                        <span v-if="!editing"> Edit </span>

                    </p>
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
                        Messages
                    </p>
                </div>
            </div>
        </div>
        <div v-if="!editing" class="w-6/12 pt-0">
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
                        <div class="p-2 border-b border-b-2" v-for="edu in education" :key="edu.id">
                            <p class="text-base font-medium text-gray-600 tracking-wider capitalize">{{edu.institution}}</p>
                            <p class="text-sm font-medium text-gray-700 tracking-widest">{{edu.degree}}</p>
                            <p class="text-xs font-sans mb-2"> {{edu.startdate | moment("MMMM Do YYYY") }} - {{edu.enddate| moment("MMMM Do YYYY") }}</p>
                            <p class="text-sm tracking-wider mb-2">
                                {{edu.description}}
                            </p>
                        </div>
                    </div>
            </div>
        </div>

        <div v-if="!editing" class="w-3/12 pt-0 px-4">
            <h4 class="text-gray-700 text-lg mb-4"> Work </h4>
            <Timeline>
                    <TimelineItem v-for="work in work" :key="work.id">
                        <p class="time">{{work.startdate | moment("MMMM Do YYYY")}} - {{work.enddate  | moment("MMMM Do YYYY")}}</p>
                        <p class="text-gray-600 text-xs">{{work.country}}</p>
                        <p class="content text-sm">{{work.institution}}</p>
                        <p class="content text-sm">{{work.description}}</p>
                    </TimelineItem>
            </Timeline>
        </div>

        <div v-if="editing" class="w-8/12 pt-2 px-4">
            <Collapse v-model="val" accordion>
                <Panel name="personal">
                    Basic Information
                    <div slot="content">
                        <bio-form></bio-form>
                    </div>
                </Panel>
                <Panel name="education">
                    Education
                    <div slot="content">
                        <education-form></education-form>
                    </div>
                </Panel>
                <Panel name="work">
                    Work Experience
                    <div slot="content">
                       <work-form></work-form>
                    </div>
                </Panel>
            </Collapse>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex';
import BioForm from './UserForms/BioFormComponent'
import WorkForm from './UserForms/WorkFormComponent'
import EducationForm from './UserForms/EducationFormComponent'

export default {
    components: {
        'bio-form': BioForm,
        'work-form': WorkForm,
        'education-form': EducationForm
    },
    data() {
        return {
            id: '',
            editing: false,
            val: "personal",
        }
    },
    computed: {
        ...mapState(['current_user','members']),
        // Member
        profile(){
            let curr_id = this.current_user.id
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
    },
    mounted(){
        // Fetch specific details
        const id = this.$store.state.current_user.id
    },
    methods: {
        isEditing () {
            if ( this.editing ){
                this.editing = false
            } else {
                this.editing = true
            }
        },
    }
}
</script>