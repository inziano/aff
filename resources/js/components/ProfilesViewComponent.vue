<template>
    <div class="w-full h-full">
        <div class="w-full h-full p-5">
            <Modal v-model="inviteModal">
                <invitation class="w-full"></invitation>
                <div slot="footer"></div>
            </Modal>
            <div class="w-full flex bg-white">
                <div class="sm:w-1/5 md:1/5 w-1/6 h-10 border-r border-gray-400">
                    <p class="font-medium font-serif text-3xl tracking-wide">
                        Profiles
                    </p> 
                </div>
                <div class="w-5/6 flex content-center">
                    <div class="w-10/24 p-2 ml-3">
                        <Icon type="ios-search-outline" size="18"/>
                        <input v-on:keyup.enter="onSearch" v-model="searchTerm" prefix="ios-search-outline" placeholder="Search" class="appearance-none bg-transparent border-none w-3/4 font-sans tracking-wider mr-3 py-1 px-2 leading-tight focus:outline-none focus:bg-white" type="text" />
                    </div>
                    <div class="flex-grow content-center h-full p-2">
                        <Dropdown class="ml-4" trigger="click" style="" @on-click="filterMethod('year',$event)">
                            <a href="javascript:void(0)" class="font-sans tracking-wider text-gray-900 hover:text-gray-900">
                                <Icon type="ios-calendar-outline" size="20"></Icon>
                                Year
                            </a>
                            <DropdownMenu slot="list" style="height: 100px; overflow-y:scroll;">
                                <DropdownItem v-for="yr in years" :key="yr" :name="yr" >{{yr}}</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown class="ml-4" trigger="click" style="" @on-click="filterMethod('country',$event)">
                            <a href="javascript:void(0)" class="font-sans tracking-wider text-gray-900 hover:text-gray-900">
                                <Icon type="ios-map-outline" size="20"></Icon>
                                Country
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem v-for="country in countries" :key="country" :name="country">{{country}}</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown class="ml-4" trigger="click" @on-click="filterMethod('expertise',$event)">
                            <a href="javascript:void(0)" class="font-sans tracking-wider text-gray-900 hover:text-gray-900">
                                <Icon type="ios-briefcase-outline" size="20"></Icon>
                                Expertise
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem v-for="expert in expertise" :key="expert" :name="expert">{{expert}}</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <a @click="clearFilters()" v-if="filtered" size="small" type="text" class="ml-4 p-0 text-gray-900 focus:text-gray-900 hover:border-0 hover:text-gray-900 active:border-0 active:text-gray-900">
                            <Icon type="ios-close" size="20"></Icon>
                            Clear Filters
                        </a>
                    </div>
                    <div class="w-2/24 content-center h-full p-2">
                        <Button icon="ios-add" @click="inviteModal = true">
                            Send Invitation
                        </Button>
                    </div>  
                </div>
               
            </div>
            <div class="w-full flex flex-wrap bg-white p-2 flex ">
                <div class="lg:flex-grow items-center  mr-4 flex content-center">
                    <li class="list-none h-10 content-center" @click="changeView()">   
                        <span class="">
                            <Icon v-if="!list" type="ios-apps-outline" size="32"/>  
                            <Icon v-if="list" type="ios-list" size="32"/>
                        </span>     
                    </li>
                </div>
                <div class="w-auto flex content-center">
                    <div class="m-2 flex flex-wrap">
                        <p class="text-center w-full font-sans text-2xl font-semibold tracking-widest">
                            {{memberstats.applicants}}
                        </p>
                        <p class="text-center w-full font-sans font-medium tracking-wider text-xs text-gray-500">
                            Applicants
                        </p>
                    </div>
                    <div class="m-2 flex flex-wrap">
                        <p class="text-center w-full font-sans text-2xl font-semibold tracking-widest">
                            {{memberstats.members}}
                        </p>
                        <p class="text-center w-full font-sans font-medium tracking-wider text-xs text-gray-500">
                           Members
                        </p>
                    </div>
                    <div class="m-2 flex flex-wrap">
                        <p class="text-center w-full font-sans text-2xl font-semibold tracking-widest">
                            {{memberstats.total}}
                        </p>
                        <p class="text-center w-full font-sans font-medium tracking-wider text-xs text-gray-500">
                           Total
                        </p>
                    </div>
                </div>       
            </div>
            <div class="w-full h-auto flex flex-wrap pt-5 bg-gray-100 justify-center" v-if="!list">
                <div v-for="member in members" :key="member.id" class="sm:w-1/2 md:w-1/3 lg:w-1/5 h-auto overflow-hidden shadow-lg p-2 m-1 bg-white rounded-lg">
                    <div class="w-full text-center mb-3 pt-2">
                        <Avatar :style="{background: '#0A8754'}" size=""> {{member.bio.firstname.slice(0,1)}}{{member.bio.lastname.slice(0,1)}} </Avatar>
                        <p class="text-base font-medium text-gray-600"> {{member.bio.firstname}} {{member.bio.lastname}}</p>
                        <p class="text-xs font-medium mt-2 text-gray-600"> {{member.bio.citizenship}} | {{member.bio.residency}}</p>
                        <p class="text-xs font-medium mt-2 text-gray-600"> {{member.email}}</p>
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
                    <div class="w-full flex p-0 pb-3 text-center">
                        <div class="w-1/2">
                            <a class="text-gray-600" @click="goToDetail(member.id)" >
                                <Icon type="ios-person" size="18"/> Profile
                            </a>
                           
                        </div>
                        <Divider type="vertical" style="height: auto;"></Divider>
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
import { mapState, mapActions } from 'vuex'
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
            filterTerm: '',
            filtered: false,
            updateList: [],
            membermeta: '',
            memberlink: '',
            memberstats: '',
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
    computed: {
        // Members from vuex
        ...mapState(['members']),

        years(){
            const year = new Date().getFullYear()
            return Array.from({length: year - 1960}, (value, index)=> 1961 + index).reverse()
        },
        countries(){
            return this.members.map((member)=>{
                return member.bio.residency
            })
        },
        expertise(){
            return this.members.map((member)=>{
                return member.bio.qualification
            })
        }
    },
    mounted() {
        Echo.channel('members').listen('UserModified', (e)=>{
            this.members = e.users
            // console.log(e)
        })
        // Search pubs
        Echo.channel('searches').listen('SearchUsers',(e)=>{
            this.members = e.users
            this.membermeta = [],
            console.log(e)
        }),
        Echo.channel('stats').listen('UserStats', (e)=>{
            this.memberstats = e.userstats
            console.log(e)
        })
    },
    methods: {
        ...mapActions(['filterMembers', 'fetchMembers']),
        // clear all filters
        clearFilters(){
            this.fetchMembers().then(()=>{
               this.filtered = false
            }).catch(()=>{
                
            })
        },
        // Clear filter
        filterMethod(criteria, term) {
            let filter = {
                criteria: criteria,
                term: term
            }
            // call route based on criteria
            this.filterMembers(filter).then(()=>{
                this.filtered = true
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Nothing found'
                })
            })
        },
        // Search
        onSearch() {
            // 
            let filter = {
                criteria: 'search',
                term: this.searchTerm
            }
            // Search
            this.filterMembers(filter).then((response)=>{
                this.filtered = true
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