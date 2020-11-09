<template>
    <div class="w-full h-full">
        <div class="w-full h-full p-5" >
            <Modal v-model="eventModal" title="Create Event">
               <event-form></event-form>
                <div slot="footer">
                    <!-- <Button type="error" size="large" long :loading="modal_loading" @click="del">Delete</Button> -->
                </div>
            </Modal>
            <div class="w-full flex bg-white">
                <div class="w-1/6 h-10 border-r border-gray-400">
                    <p class="font-medium font-serif text-3xl tracking-wide">
                        Events
                    </p> 
                </div>
                <div class="w-5/6 flex content-center">
                    <search class="w-10/24" :module-name="moduleName" @items-filtered="filtered = true"></search>
                    <div class="flex-grow content-center h-full p-2">
                        <filter-a class="ml-4" :module-name="moduleName" :filter-items="years" :filter-type="typeA" @items-filtered="filtered = true" >
                            <Icon type="ios-calendar-outline" size="16"></Icon>
                        </filter-a>
                        <filter-a class="ml-4" :module-name="moduleName" :filter-items="locations" :filter-type="typeB" @items-filtered="filtered = true" >
                            <Icon type="ios-pin-outline" size="16"></Icon>
                        </filter-a>
                        <a @click="clearFilters()" v-if="filtered" size="small" type="text" class="ml-4 p-0 text-gray-900 focus:text-gray-900 hover:border-0 hover:text-gray-900 active:border-0 active:text-gray-900">
                            <Icon type="ios-close" size="20"></Icon>
                            Clear Filters
                        </a>
                    </div>
                    <div class="w-2/24 content-center h-full p-2">
                        <modal-btn @modalbtn-clicked="eventModal = true">
                            New Event
                        </modal-btn>
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
                    <stats :figure="eventstats.events" :title="statsA"></stats>
                </div>
               
            </div>
            <div class="w-full h-full" v-if="events.length">
                <div class="w-full flex flex-wrap p-2 bg-gray-100 justify-center" v-if="!list">
                    <eventlist-item v-for="event in events" :key="event.id" :event = "event" :user = "current_user"></eventlist-item>
                </div>

                <div class="w-full p-2 bg-gray-100" v-if="list">
                   <event-table :events="events"></event-table>
                </div>
                
                <div class="w-full m-2 p-2 flex justify-center">
                    <pagination :curr = meta.curr :total = meta.total :size = meta.per_page :module-name="moduleName" ></pagination>
                </div>
            </div>

            <div class="w-full h-full" v-else>
                <div class="mx-auto w-1/3 p-5 m-3 content-center">
                    <img class="object-center object-contain" src='/images/events.svg'>
                    <p class="text-xl font-medium font-sans w-full text-center pt-5"> No Events Found</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions, mapGetters } from 'vuex'
import EventTable from './EventTableComponent'
import EventForm from './EventFormComponent'
import EventListItem from './EventListItemComponent'
import Pagination from '../Widgets/PaginationComponent'
import Search from '../Widgets/SearchComponent'
import Filter from '../Widgets/FilterComponent'
import Stats from '../Widgets/StatsComponent'
import Modalbtn from '../Widgets/ModalbtnComponent'

export default {
    components: {
        'event-form': EventForm,
        'event-table': EventTable,
        'eventlist-item': EventListItem,
        'pagination': Pagination,
        'search': Search,
        'filter-a': Filter,
        'stats': Stats,
        'modal-btn': Modalbtn,
    },
    data(){
        return {
            list: false,
            eventModal: false,
            moduleName: 'EventModule',
            admin: false,
            searchTerm: '',
            filtered: false,
            typeA: 'year',
            typeB: 'location',
            statsA: 'events',
            eventstats: '',
        }
    },
    computed: {
        // map state
        ...mapGetters('AuthModule', ['current_user']),
        ...mapGetters('EventModule',['events','meta','links']),

        years(){
            const year = new Date().getFullYear()
            return Array.from({length: year - 1960}, (value, index)=> 1961 + index).reverse()
        },
        locations(){
            return [...new Set(this.events.map((e)=>{
                return e.location
            }))]
        }
    },
    mounted(){
        // Search events
        Echo.channel('searches').listen('SearchEvents',(e)=>{
            this.events = e.events
        })

        // Update
        Echo.channel('events').listen('EventCreated',(e)=>{
            this.newEvent(e.event)
        })

        // Update
        Echo.channel('events').listen('EventDeleted',(e)=>{
            this.events = e.events
        })

        Echo.channel('stats').listen('EventStats',(e)=>{
            this.eventstats = e.eventstats
        })
    },
    methods: {

        // Store actions
        ...mapActions('EventModule',['newEvent', 'delete','fetch']),

        // clear all filters
        clearFilters(){
            this.fetch().then(()=>{
                this.filtered = false
            }).catch(()=>{
                this.$Notice.error({
                    title: 'Nothing found'
                })
            })
        },
        // Change view
        changeView(){
           if ( this.list === true ){
               this.list = false
           } else{
               this.list = true
           }
        }
    }
}
</script>