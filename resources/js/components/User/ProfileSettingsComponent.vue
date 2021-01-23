<template>
<div class="w-full min-h-screen flex">
    <div class="w-1/5 bg-white p-2">
        <profile-card :user = dets :account = user :editing = editing v-on:editing="viewProfile"></profile-card>
        <div class="w-full h-auto justify-right" v-if="id === this.currentUser.id">
            <div class="flex flex-col sm:flex-row sm:justify-around">
                <div class="h-auto">
                    <nav class="mt-10 px-2">
                        <div>
                            <p class="text-gray-600 ml-2 w-full border-b-2 pb-2 border-gray-100 mb-4 text-md font-normal">
                                Settings
                            </p>

                            <a @click="editProfile" class="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start" >
                                <span class="mx-4 text-md font-normal">
                                    Profile
                                </span>
                                <span class="flex-grow text-right">
                                </span>
                            </a>

                            <a @click="editEducation" class="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start" >
                                <span class="mx-4 text-md font-normal">
                                    Education
                                </span>
                                <span class="flex-grow text-right">
                                </span>
                            </a>
                            <a @click="editWork" class="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start" >
                                <span class="mx-4 text-md font-normal">
                                    Career
                                </span>
                                <span class="flex-grow text-right">
                                </span>
                            </a>
                            <a @click="editAccount" class="hover:text-gray-800 font-thin text-gray-500 dark:text-gray-400 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start" >
                                <span class="mx-4 text-md font-normal">
                                    Account
                                </span>
                                <span class="flex-grow text-right">
                                </span>
                            </a>
                            
                        </div>
                    </nav>
                </div>
            </div>             
        </div>
    </div>
    <div class="w-4/5">
        <div class="w-full h-12">
            <Breadcrumb class="p-4">
                <BreadcrumbItem to="/">Home</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="w-full p-4 h-auto">
            <profile-details :user = dets :education = education :work = work v-if="!editing"></profile-details>
            <bio-form class="w-5/6" :user = dets v-if="editprofile" ></bio-form>
            <work-form class="w-5/6" :work = work v-if="editwork"></work-form>
            <education-form class="w-5/6" :education = education v-if="editeducation"></education-form>
            <account-form class="w-5/6" :account = dets v-if="editaccount"></account-form>
        </div>
    </div>
</div>
    
</template>
<script>
import axios from 'axios'
import { mapState, mapGetters, mapActions } from 'vuex'
import ProfileDetails from './ProfileWidgets/ProfileDetailsComponent'
import ProfileCard from './ProfileWidgets/ProfileCardComponent'
import BioForm from './UserForms/BioFormComponent'
import WorkForm from './UserForms/WorkFormComponent'
import EducationForm from './UserForms/EducationFormComponent'
import AccountForm from './UserForms/AccountFormComponent'

export default {
    components: {
        'profile-details': ProfileDetails,
        'profile-card': ProfileCard,
        'bio-form': BioForm,
        'work-form': WorkForm,
        'education-form': EducationForm,
        'account-form': AccountForm
    },
    data() {
        return {
            id: this.$route.params.id,
            editing: false,
            editprofile: false,
            editwork: false,
            editeducation: false,
            editaccount: false

        }
    },
    mounted() {
        this.loadUserData(this.currentUser.id)
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
        viewProfile(){
            this.editing = this.editprofile = this.editwork = this.editeducation = this.editaccount = false
        },
        isEditing () {
            if ( this.editing ){
                this.editing = false
            } else {
                this.editing = true
            }
        },
        editProfile() {
            if ( this.editwork || this.editeducation || this.editaccount ) {
                this.editeducation = this.editwork = this.editaccount = false
            }
            this.editing = this.editprofile = true
        },
        editEducation() {
            if ( this.editwork || this.editprofile || this.editaccount ) {
                this.editprofile = this.editwork = this.editaccount = false
            }
            this.editing = this.editeducation = true
        },
        editWork() {
            if ( this.editprofile || this.editeducation || this.editaccount  ) {
                this.editeducation = this.editprofile = this.editaccount = false
            }
            this.editing = this.editwork = true
        },
        editAccount() {
            if ( this.editprofile || this.editeducation || this.editwork ) {
                this.editeducation = this.editprofile = this.editwork = false
            }
            this.editing = this.editaccount = true
        }
    }

}
</script>