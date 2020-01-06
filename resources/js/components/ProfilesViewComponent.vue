<template>
    <div class="w-full h-full">
        <div class="w-full h-full p-5">
            <Modal v-model="inviteModal" title="Send Invitation">
                <invitation></invitation>
            </Modal>
            <nav class="w-full flex mb-2">
                <div class="lg:flex-grow lg:w-auto">
                    <h3 class="font-semibold text-xl mb-2">
                        Members
                    </h3>
                    <p class="font-hairline text-xs">
                        View Members
                    </p>
                </div>
                <div class="w-2/24 p-3">
                    <Button icon="ios-add" @click="inviteModal = true">
                        Send Invitation
                    </Button>
                </div>
            </nav>
            <ul class="w-full flex flex-wrap bg-gray-200 p-1">
                <div class="flex lg:flex-grow lg:w-auto">
                    <li class="mr-3" @click="changeView()">
                        <Icon v-if="list" type="ios-list" size="32"/>
                        <Icon v-if="!list" type="ios-apps-outline" size="32"/>       
                    </li>
                    
                </div>
                <div class="flex w-1/24">
                    <li v-if="!list" class="mr-3 p-2" @click="filter()">
                        <Icon type="ios-funnel-outline" size="24"/>       
                    </li>
                    <input v-on:keyup.enter="onSearch" v-model="searchTerm" class="appearance-none bg-transparent border-none w-3/4 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Search" ></input>
                    <li class="mr-1 p-2">
                        <Icon type="ios-search-outline" size="24"/>       
                    </li>
                </div>
            </ul>
            <div class="w-full h-auto flex flex-wrap pt-5 bg-gray-100 justify-center" v-if="!list">
                <div v-for="member in members" :key="member.id" class="w-64 h-64 overflow-hidden shadow-lg p-2 m-1 bg-white rounded-lg">
                    <div class="w-full text-center mb-3 pt-2">
                        <Avatar :style="{background: '#0A8754'}" size=""> JD </Avatar>
                        <p class="text-base font-medium mt-3 text-gray-600"> {{member.email}}</p>
                        <p class="text-sm font-medium tracking-wide mt-1 text-gray-600"> {{member.status}} </p>
                    </div>
                    <ul class="flex justify-center w-2/3 mx-auto mb-4">
                        <li class="mx-auto">
                            <Icon type="ios-chatboxes" size="20"/>
                        </li>
                        <li class="mx-auto">
                            <Icon type="ios-notifications" size="20"/>
                        </li>
                        <li class="mx-auto">
                            <Icon type="ios-trash" size="20"/>
                        </li>
                    </ul>
                    <Divider></Divider>
                    <div class="w-full flex p-0 text-center">
                        <div class="w-1/2">
                            <a class="text-gray-600" @click="goToDetail(member.id)" >
                                <Icon type="ios-person" size="18"/> Profile
                            </a>
                           
                        </div>
                        <Divider type="vertical"></Divider>
                        <div class="w-1/2">
                            <a class="text-gray-600" @click="goToPub(member.id)">
                                <Icon type="ios-apps" size="18"/> Publications
                            </a>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full h-full p-2 bg-gray-100" v-if="list">
                <Table height="" stripe ref="selection" :columns="member" :data="members" @on-select="addToList" @on-select-all="addToList" @on-select-cancel="removeFromList" @on-select-all-cancel="removeFromList"></Table>
                <Button class="mt-3" type="success" @click="makeMember" v-if="updateList.length != '0'">Make Member</Button>
            </div>
            <div class="w-full flex p-0 text-center">
                <Page class="mx-auto" :current="membermeta.current_page" :total="membermeta.total" :page-size="membermeta.per_page" @on-change="goToPage" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Invitation from './InvitationComponent'
export default {
    components: {
        'invitation': Invitation
    },
    data() {
        return {
            list: false,
            inviteModal: false,
            searchTerm: '',
            updateList: [],
            members: [],
            membermeta: '',
            memberlink: '',
            member: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: 'ID',
                    key: 'id'
                },
                {
                    title: 'Username',
                    key: 'username'
                },
                {
                    title: 'Email',
                    key: 'email'
                },
                {
                    title: 'status',
                    key: 'status',
                    filters: [
                            {
                                label: 'Member',
                                value: 1
                            },
                            {
                                label: 'Applicant',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.status === 'member';
                            } else if (value === 2) {
                                return row.status === 'applicant';
                            }
                        }
                },
            ],
            memberdata: [],
        }
    },
    mounted() {
        // Pull all the profiles
        axios({
            method: 'get',
            url: 'api/user'
        }).then((response)=>{
            // response
            this.members = response.data.data
            this.membermeta = response.data.meta,
            this.memberlink = response.data.link
            // Member data
            this.memberdata = response.data
        }).catch((error)=>{
            // error
        })

        Echo.channel('members').listen('UserModified', (e)=>{
            this.members = e.users
            // console.log(e.replies)
        })
        // Search pubs
        Echo.channel('searches').listen('SearchUsers',(e)=>{
            this.members = e.users
            console.log(e)
        })
    },
    methods: {
        // Search
        onSearch() {
            // 
            let formdata = {
                search: this.searchTerm
            }
            // Search
            axios({
                method: 'post',
                url: 'api/user/search',
                data: formdata
            }).then((response)=>{
                // log response
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Nothing found'
                })
            })
        },

        // goToPage
        goToPage(number){
            axios.get(this.membermeta.path + '?page=' + number).then((response)=>{
                // response
                this.members = response.data.data
                this.membermeta = response.data.meta,
                this.memberlink = response.data.link
                // Member data
                this.memberdata = response.data
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Nothing found'
                })
            })
        },
        changeView(){
           if ( this.list === true ){
               this.list = false
           } else{
               this.list = true
           }
        },
        makeMember(){
            let formdata = {
                id: this.updateList,
                status: 'member'
            }
            // push to axios
            axios({
                method:'patch',
                url: 'api/user/membership',
                data: formdata
            }).then((response)=>{
                this.$Notice.success({
                    title: 'Members Updated',
                    desc: 'Membership updated'
                })
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Members not updated',
                    desc: 'Membership not updated'
                })
            })
        },
        // Select and update status
        addToList (val) {
            const id = val.map((resp)=>{
                return resp.id
            })
           this.updateList = id
           console.log(this.updateList)
        },
        removeFromList(val){
            const id = val.map((resp)=>{
                return resp.id
            })
            this.updateList.filter((resp)=>{
                !id.includes(resp)
            })
            console.log(id)
        },
        // Go
        goToDetail(id){
            this.$router.push({name: 'profile', params: {id}})
        },
        goToPub(id){
            this.$router.push({name: 'publications', params: {id}})
        }

    }
    
}
</script>