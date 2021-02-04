<template>
    <div class="w-full h-full">
        <Modal v-model="vacancyModal" width="700">
            <vacancy-form></vacancy-form>
            <div slot="footer"></div>
        </Modal>
        <div class="w-full h-full p-5" >
            <div class="w-full flex bg-white">
                <div class="w-1/6 h-10 border-r border-gray-400">
                    <p class="font-medium font-serif text-3xl tracking-wide">
                        Vacancies
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
                        <!-- <modal-btn @modalbtn-clicked="vacancyModal = true">
                            New
                        </modal-btn> -->
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
                            {{vacancystats.vacancy}}
                        </p>
                        <p class="text-center w-full font-sans font-medium tracking-wider text-xs text-gray-500">
                           Vacancies
                        </p>
                    </div>
                </div>       
            </div>  
           
            <div v-if="vacancies.length">
                <div class="w-full flex  flex-wrap p-2 bg-gray-100 justify-center" v-if="!list">
                    <vacancylist-item v-for="vacancy in vacancies" :key="vacancy.id" :vacancy = "vacancy" :user = "current_user"></vacancylist-item>
                </div>
                <div class="w-full p-2 bg-gray-100" v-if="list">
                    <vacancy-table :vacancies = vacancies></vacancy-table>
                </div>
                <div class="w-full m-2 p-2 flex justify-center">
                    <pagination :curr = meta.curr :total = meta.total :size = meta.per_page :module-name="moduleName" ></pagination>
                </div>
            </div>
            <div class="w-full h-full" v-else>
               <div class="mx-auto w-1/3 p-5 m-3 content-center">
                   <img class="object-center object-contain" src='/images/vacancy.svg'>
                   <p class="text-xl font-medium font-sans w-full text-center pt-5"> No Vacancies Found</p>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

import { mapActions, mapGetters } from 'vuex'
import Pagination from '../Widgets/PaginationComponent'
import Search from '../Widgets/SearchComponent'
import Filter from '../Widgets/FilterComponent'
import Stats from '../Widgets/StatsComponent'
import Modalbtn from '../Widgets/ModalbtnComponent'
import VacancyListItem from './VacancyListItemComponent'
import VacancyTable from './VacancyTableComponent'
import VacancyForm from './VacancyFormComponent'
export default {
    components: {
        'pagination': Pagination,
        'search': Search,
        'filter-a': Filter,
        'stats': Stats,
        'modal-btn': Modalbtn,
        'vacancylist-item': VacancyListItem,
        'vacancy-table': VacancyTable,
        'vacancy-form': VacancyForm
    },
    data(){
        return {
            list: false,
            vacancyModal: false,
            moduleName: 'VacancyModule',
            admin: false,
            vacancystats: '',
            searchTerm: '',
            filtered: false,
            typeA: 'year',
            typeB: 'location',
            statsA: 'events',
            loading: true,
            error: false,
        }
    },
    created(){
        this.fetch().then( response => {
            // Loading false
            this.loading = false
        }).catch( error => {
            // Show error screen
            this.error = true
        })
    },
    computed: {
        // Store values
        ...mapGetters('AuthModule', ['current_user']),
        ...mapGetters('VacancyModule',['vacancies','meta','links']),

        // Year
        years(){
            const year = new Date().getFullYear()
            return Array.from({length: year - 1960}, (value, index)=> 1961 + index).reverse()
        },

        locations(){
            return [...new Set(this.vacancies.map((e)=>{
                return e.location
            }))]
        }
    },
    mounted(){
        // 
        Echo.channel('vacancies').listen('VacancyCreated',(e)=>{
            this.newVacancy(e.vacancies)
        })
        
        // Update
        Echo.channel('vacancies').listen('VacancyDeleted',(e)=>{
            this.vacancies = e.vacancies
        })

        Echo.channel('stats').listen('VacancyStats',(e)=>{
            this.vacancystats = e.vacancystats
        })
    },
    methods:{
        ...mapActions('VacancyModule',['newVacancy','fetch', 'filter']),
           // clear all filters
        clearFilters(){
            this.fetch().then((response)=>{
                this.filtered = false
            }).catch((error)=>{
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
        },
        // Delete
        deleteVacancy(id){
            axios({
                method: 'delete',
                url: 'api/vacancies/'+id,
            }).then((response)=>{
                this.$Notice.success({
                    title: 'Vacancy Deleted'
                })
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Vacancy not deleted'
                })
            })
        }
    }

}
</script>