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
                    <div class="w-10/24 p-2 ml-3">
                        <Icon type="ios-search-outline" size="18"/>
                        <input v-on:keyup.enter="onSearch" v-model="searchTerm" prefix="ios-search-outline" placeholder="Search" class="appearance-none bg-transparent border-none w-3/4 font-sans tracking-wider mr-3 py-1 px-2 leading-tight focus:outline-none focus:bg-white" type="text" />
                    </div>
                    <div class="flex-grow content-center h-full p-2">
                        <!-- <p class="h-full text-sm tracking-wider uppercase font-sans font-medium"> Filters :</p> -->
                        <Dropdown class="ml-4" trigger="click" @on-click="filterMethod('year',$event)">
                            <a href="javascript:void(0)" class="font-sans tracking-wider text-gray-900 hover:text-gray-900">
                                <Icon type="ios-calendar-outline" size="20"></Icon>
                                Year
                            </a>
                            <DropdownMenu slot="list" style="height: 100px; overflow-y:scroll;">
                                <DropdownItem v-for="yr in years" :key="yr" :name="yr">{{yr}}</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown class="ml-4" trigger="click" @on-click="filterMethod('tags',$event)">
                            <a href="javascript:void(0)" class="font-sans tracking-wider text-gray-900 hover:text-gray-900">
                                <Icon type="ios-bookmark-outline" size="20"></Icon>
                                Tag
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem v-for="tag in tags" :key="tag" :name="tag">{{tag}}</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <a @click="clearFilters()" v-if="filtered" size="small" type="text" class="ml-4 p-0 text-gray-900 focus:text-gray-900 hover:border-0 hover:text-gray-900 active:border-0 active:text-gray-900">
                            <Icon type="ios-close" size="20"></Icon>
                            Clear Filters
                        </a>
                    </div>
                    <div class="w-2/24 content-center h-full p-2">
                        <Button  icon="ios-add" @click="pubModal = true">
                            New Publication
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
                            {{pubstats.total}}
                        </p>
                        <p class="text-center w-full font-sans font-medium tracking-wider text-xs text-gray-500">
                            Publications
                        </p>
                    </div>
                    <div class="m-2 flex flex-wrap">
                        <p class="text-center w-full font-sans text-2xl font-semibold tracking-widest">
                            {{pubstats.downloads}}
                        </p>
                        <p class="text-center w-full font-sans font-medium tracking-wider text-xs text-gray-500">
                            Downloads
                        </p>
                    </div>
                    <div class="m-2 flex flex-wrap ">
                        <p class="text-center w-full font-sans text-2xl font-semibold tracking-widest">
                           {{pubstats.views}}
                        </p>
                        <p class="text-center w-full font-sans font-medium tracking-wider text-xs text-gray-500">
                            Views
                        </p>
                    </div>
                </div>       
            </div>
            <div class="w-full" v-if="publications.length">
                <div class="w-full h-auto flex flex-wrap pt-5 bg-gray-100 justify-center" v-if="!list">
                    <publist-item  v-for="publication in publications" :publication = publication :key = publication.id ></publist-item>  
                </div>
                <div class="w-full" v-if="list">
                    <publication-table :publications = publications ></publication-table>
                </div>
                <div class="w-full flex p-0 mt-5 mb-5 text-center">
                    <Page class="mx-auto" :current="pubmeta.current_page" :total="pubmeta.total" :page-size="pubmeta.per_page" @on-change="goToPage" />
                </div> 
            </div>
            <div class="w-full" v-else>
                <div class="mx-auto w-1/3 p-5 m-3 content-center">
                    <img class="object-center object-contain" src='/images/events.svg'>
                    <p class="text-xl font-medium font-sans w-full text-center pt-5"> No Publication Found</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
import PublicationForm from './PublicationFormComponent'
import PublicationListItem from './PublicationListItemComponent'
import PublicationTable from './PublicationTableComponent'

export default {
    components: {
        'publication-form': PublicationForm,
        'publist-item': PublicationListItem,
        'publication-table': PublicationTable,
    },
    data(){
        return {
            id: this.$route.params.id,
            searchTerm: '',
            filtered: false,
            loading: false,
            pubModal: false,
            list: false,
            pubmeta: '',
            pubstats: '',
            pubs: '',
           
        }
    },
    computed: {
        ...mapState(['publications', 'current_user']),
        years(){
            const year = new Date().getFullYear()
            return Array.from({length: year - 1960}, (value, index)=> 1961 + index).reverse()
        },
        tags(){
            return this.publications.map((pub)=>{
                return pub.tags
            })
        }

    },
    mounted() {
        // Search pubs
        Echo.channel('searches').listen('SearchPublications',(e)=>{
            this.publications = e.publications
            this.pubmeta = []

        })

        // 
        Echo.channel('stats').listen('PublicationStats', (e)=>{
            console.log(e)
            this.pubstats = e.pubstats
        })
    },
    methods: {
        ...mapActions(['filterPublications', 'fetchPublications']),

        closeModal(){ this.pubModal = false },
         // clear all filters
        clearFilters(){
            this.fetchPublications().then(()=>{
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
            this.filterPublications(filter).then(()=>{
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
            this.filterPublications(filter).then(()=>{
                this.filtered = true
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Nothing found'
                })
            })
        },
        // goToPage
        goToPage(number){
            axios.get(this.pubmeta.path + '?page=' + number).then((response)=>{
                // response
                this.pubList = response.data.data
                this.pubmeta = response.data.meta
                // Pub data
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
    }
}
</script>