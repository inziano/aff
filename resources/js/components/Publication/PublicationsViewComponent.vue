<template>
    <div class="w-full h-full">
        <div class="w-full h-full p-5" >
            <Modal v-model="pubModal" width = "700" >
                <publication-form v-on:close-modal="closeModal()"></publication-form>
                <div slot="footer">
                    <!-- <Button type="error" size="large" long :loading="modal_loading" @click="del">Delete</Button> -->
                </div>
            </Modal>

            <div class="w-full flex bg-white">
                <div class="w-1/6 h-10 border-r border-gray-400">
                    <p class="font-medium font-serif text-3xl tracking-wide">
                        Publications
                    </p> 
                </div>
                <div class="w-5/6 flex content-center">
                     <!-- Search component -->
                    <search class="w-10/24" :module-name="moduleName" @items-filtered="filtered = true"></search>
                    <div class="flex-grow content-center h-full p-2">
                        <filter-a class="ml-4" :module-name="moduleName" :filter-items="years" :filter-type="typeA" @items-filtered="filtered = true" >
                            <Icon type="ios-calendar-outline" size="16"></Icon>
                        </filter-a>
                        <filter-a class="ml-4" :module-name="moduleName" :filter-items="tags" :filter-type="typeB" @items-filtered="filtered = true" >
                            <Icon type="ios-bookmark-outline" size="16"></Icon>
                        </filter-a>

                        <a @click="clearFilters()" v-if="filtered" size="small" type="text" class="ml-4 p-0 text-gray-900 focus:text-gray-900 hover:border-0 hover:text-gray-900 active:border-0 active:text-gray-900">
                            <Icon type="ios-close" size="20"></Icon>
                            Clear Filters
                        </a>
                    </div>
                    <div class="w-2/24 content-center h-full p-2">
                        <modal-btn @modalbtn-clicked="pubModal = true">
                            New Publication
                        </modal-btn>
                    </div>  
                </div>
               
            </div>
            <div class="w-full flex flex-wrap bg-white p-2">
                <div class="lg:flex-grow items-center  mr-4 flex content-center">
                    <li class="list-none h-10 content-center" @click="changeView()">   
                        <span class="">
                            <Icon v-if="!list" type="ios-apps-outline" size="32"/>  
                            <Icon v-if="list" type="ios-list" size="32"/>
                        </span>     
                    </li>
                </div>
                <div class="w-auto flex content-center">
                    <stats :figure="pubstats.total" :title="statsA"></stats>
                    <stats :figure="pubstats.downloads" :title="statsB"></stats>
                    <stats :figure="pubstats.views" :title="statsC"></stats>
                </div>       
            </div>
            <div class="w-full" v-if="publications">
                <div class="w-full" v-if="!list">
                    <publist-item  :publications = publications ></publist-item>  
                </div>
                <div class="w-full" v-if="list">
                    <publication-table :publications = "publications" :user = "current_user" ></publication-table>
                </div>
                <div class="w-full m-2 p-2 flex justify-center">
                    <pagination :curr = meta.curr :total = meta.total :size = meta.per_page :module-name="moduleName" ></pagination>
                </div>
            </div>
            <div class="w-full" v-else>
                <div class="mx-auto w-1/3 p-5 m-3 content-center">
                    <img class="object-center object-contain" src='/images/publications.svg'>
                    <p class="text-xl font-medium font-sans w-full text-center pt-5"> No Publication Found</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters } from 'vuex'
import PublicationForm from './PublicationFormComponent'
import PublicationListItem from './PublicationListItemComponent'
import PublicationTable from './PublicationTableComponent'
import Pagination from '../Widgets/PaginationComponent'
import Search from '../Widgets/SearchComponent'
import Filter from '../Widgets/FilterComponent'
import Stats from '../Widgets/StatsComponent'
import Modalbtn from '../Widgets/ModalbtnComponent'

export default {
    components: {
        'publication-form': PublicationForm,
        'publist-item': PublicationListItem,
        'publication-table': PublicationTable,
        'pagination': Pagination,
        'search': Search,
        'filter-a': Filter,
        'stats': Stats,
        'modal-btn': Modalbtn,
    },
    data(){
        return {
            id: this.$route.params.id,
            searchTerm: '',
            filtered: false,
            loading: false,
            pubModal: false,
            list: false,
            pubstats: '',
            typeA: 'year',
            typeB: 'tags',
            statsA: 'publications',
            statsB: 'downloads',
            statsC: 'views',
            moduleName: 'PublicationModule'
           
        }
    },
    created(){
        // confirm route has params
        if ( !Object.keys(this.$route.params).length == 0 ){
            // call filter method
            let filters = {
                criteria: 'owner',
                term: this.$route.params.id
            }
            this.filter(filters)
        }
    },
    computed: {
        // Members from vuex
        ...mapGetters('PublicationModule',['publications', 'meta','links']),
        ...mapGetters('AuthModule', ['currentUser']),
        years(){
            const year = new Date().getFullYear()
            return Array.from({length: year - 1960}, (value, index)=> 1961 + index).reverse()
        },
        tags(){
            return [...new Set(this.publications.map((pub)=>{
                return pub.tags
            }))]
        }

    },
    mounted() {
        // 
        Echo.channel('stats').listen('PublicationStats', (e)=>{
            console.log(e)
            this.pubstats = e.pubstats
        })
    },
    methods: {
        ...mapActions('PublicationModule',['filter', 'fetch']),

        closeModal(){ this.pubModal = false },
         // clear all filters
        clearFilters(){
            this.fetch().then(()=>{
               this.filtered = false
            }).catch(()=>{
                
            })
        },
        changeView(){
           if ( this.list === true ){
               this.list = false
           } else{
               this.list = true
           }
        },
    }
}
</script>