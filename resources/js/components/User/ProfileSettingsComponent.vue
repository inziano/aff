<template>
<div class="w-full min-h-screen flex">
    <div class="w-1/5 bg-white p-2">
        <profile-card :user = dets :account = user :editing = editing v-on:editing="viewProfile"></profile-card>
        <div class="w-full h-auto justify-right" v-if="id === this.currentUser.id">
            <div class="p-5 mt-2 h-auto">
                <p class="text-lg  px-2"> Settings </p>
                <hr class="w-full mt-2 mb-4 text-gray-900" />
                <ul class="w-full mt-2 px-4">
                    <li class="my-4 text-gray-700 font-medium"><a class="text-gray-700 text-base font-medium tracking-wider hover:text-gray-900" @click="editProfile"> Profile </a></li>
                    <li class="my-4 text-gray-700 font-medium"><a class="text-gray-700 text-base font-medium tracking-wider hover:text-gray-900" @click="editEducation"> Education </a></li>
                    <li class="my-4 text-gray-700 font-medium"><a class="text-gray-700 text-base font-medium tracking-wider hover:text-gray-900" @click="editWork"> Career </a></li>
                    <li class="my-4 text-gray-700 font-medium"><a class="text-gray-700 text-base font-medium tracking-wider hover:text-gray-900" @click="editAccount"> Account </a></li>
                </ul>
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