<template>
    <div class="w-full h-full">
        <div class="w-full h-full p-5">
            <Modal v-model="inviteModal">
                <invitation class="w-full" v-on:close-modal='closeModal()'></invitation>
                <div slot="footer"></div>
            </Modal>
            <div class="w-full flex bg-white">
                <div class="sm:w-1/5 md:1/5 w-1/6 h-10 border-r border-gray-400">
                    <p class="font-medium font-serif text-3xl tracking-wide">
                        Profiles
                    </p> 
                </div>
                <div class="w-5/6 flex content-center">
                    <!-- Search component -->
                    <search class="w-10/24" :module-name="moduleName" @items-filtered="filtered = true"></search>
                    <div class="flex-grow content-center h-full p-2">
                        <filter-a class="ml-4" :module-name="moduleName" :filter-items="years" :filter-type="typeA" @items-filtered="filtered = true" >
                            <Icon type="ios-calendar-outline" size="16"></Icon>
                        </filter-a>
                        <filter-a class="ml-4" :module-name="moduleName" :filter-items="countries" :filter-type="typeB" @items-filtered="filtered = true" >
                            <Icon type="ios-map-outline" size="16"></Icon>
                        </filter-a>
                        <filter-a class="ml-4" :module-name="moduleName" :filter-items="expertise" :filter-type="typeC" @items-filtered="filtered = true" >
                            <Icon type="ios-briefcase-outline" size="16"></Icon>
                        </filter-a>
                        <filter-a class="ml-4" :module-name="moduleName" :filter-items="gender" :filter-type="typeD" @items-filtered="filtered = true" >
                            <Icon type="ios-people-outline" size="16"></Icon>
                        </filter-a>

                        <a @click="clearFilters()" v-if="filtered" size="small" type="text" class="ml-4 p-0 text-gray-900 focus:text-gray-900 hover:border-0 hover:text-gray-900 active:border-0 active:text-gray-900">
                            <Icon type="ios-close" size="20"></Icon>
                            Clear Filters
                        </a>
                    </div>
                    <div class="w-2/24 content-center h-full p-2">
                        <modal-btn @modalbtn-clicked="inviteModal = true">
                            Invite
                        </modal-btn>
                    </div>  
                </div>
            </div>
            <div class="w-full flex flex-wrap bg-white p-2 flex ">
                <div class="lg:flex-grow items-center mr-4 flex content-center">
                    <li class="list-none h-10 content-center" @click="changeView()">   
                        <span class="">
                            <Icon v-if="!list" type="ios-apps-outline" size="30"/>  
                            <Icon v-if="list" type="ios-list" size="30"/>
                        </span>     
                    </li>
                    <li class="ml-4 list-none h-10 content-center"@click="showAnalytics()">   
                        <span class="">
                            <Icon v-if="!charts" type="ios-analytics" size="30"/>
                            <Icon v-if="charts" type="ios-list" size="30"/> 
                        </span>     
                    </li>
                </div>
                <div class="w-auto flex content-center">
                    <stats :figure="memberstats.applicants" :title="statsA"></stats>
                    <stats :figure="memberstats.members" :title="statsB"></stats>
                    <stats :figure="memberstats.total" :title="statsC"></stats>
                </div>       
            </div>
            <div class="w-full h-auto flex flex-wrap pt-5 bg-gray-100 justify-center" v-if="!list && !charts">
               <profilelist-item class="w-full md:w-1/2 lg:w-1/4" v-for="member in profiles" :key="member.id" :member = member ></profilelist-item>
            </div>
            <div class="w-full h-auto p-2 bg-gray-100" v-if="list">
               <profiles-table :members = profiles ></profiles-table>
            </div>
            <div class="w-full h-auto p-2 bg-gray-100" v-if="charts">
                <member-analytics :stats ="memberstats"></member-analytics>
            </div>
            <div class="w-full m-2 p-2 flex justify-center">
                <pagination :curr = meta.curr :total = meta.total :size = meta.per_page :module-name="moduleName" v-if="!charts"></pagination>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions, mapGetters } from 'vuex'
import Invitation from './InvitationComponent'
import ProfileListItem from './ProfileListItemComponent'
import ProfilesTable from './ProfilesTableComponent'
import MemberAnalytics from './MemberAnalyticsComponent'
import Pagination from '../Widgets/PaginationComponent'
import Search from '../Widgets/SearchComponent'
import Filter from '../Widgets/FilterComponent'
import Stats from '../Widgets/StatsComponent'
import Modalbtn from '../Widgets/ModalbtnComponent'

export default {
    components: {
        'invitation': Invitation,
        'profilelist-item': ProfileListItem,
        'profiles-table': ProfilesTable,
        'member-analytics': MemberAnalytics,
        'pagination': Pagination,
        'search': Search,
        'filter-a': Filter,
        'stats': Stats,
        'modal-btn': Modalbtn,
    },
    data() {
        return {
            list: false,
            charts: false,
            inviteModal: false,
            filterTerm: '',
            filtered: false,
            profile: 'Profiles',
            typeA: 'year',
            typeB: 'country',
            typeC: 'expertise',
            typeD: 'gender',
            statsA: 'applicants',
            statsB: 'members',
            statsC: 'all',
            moduleName: 'UserModule'
        }
    },
    computed: {
        // Members from vuex
        ...mapGetters('UserModule',['meta','links']),
        ...mapGetters('AnalyticsModule', ['memberstats']),
        ...mapState('UserModule',['members']),

        profiles(){
            return this.members.data
        },
        years(){
            const year = new Date().getFullYear()
            return Array.from({length: year - 1960}, (value, index)=> 1961 + index).reverse()
        },
        countries(){
            return [...new Set(this.profiles.map((member)=>{
                return member.bio !== null ? member.bio.citizenship : '-' 
            }))]
        },
        expertise(){
            return [...new Set(this.profiles.map((member)=>{
                return member.bio !== null ? member.bio.title : '-'
            }))]
        },
        gender(){
            return [...new Set(this.profiles.map((member)=>{
                return member.bio !== null ? member.bio.gender : '-'
            }))]
        }
    },
    mounted() {
        Echo.channel('members').listen('UserModified', (e)=>{
            this.members = e.users
            // console.log(e)
        })
    },
    methods: {
        ...mapActions('UserModule',['fetch']),
        // close modal
        closeModal(){
            this.inviteModal = false
        },
        // clear all filters
        clearFilters(){
            this.fetch().then(()=>{
               this.filtered = false
            }).catch( ()=>{} )
        },
        changeView(){
           if ( this.list === true ){
               this.list = false
           } else{
               this.list = true
           }
        },
        showAnalytics(){
            if ( this.charts === true ){
                this.charts = false
            } else {
                this.charts = true
            }
        }
    }
    
}
</script>