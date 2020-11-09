<template>
    <div class="w-full h-full">
        <div class="w-full h-full p-5" >
            <Modal v-model="galleryModal">
                <gallery-form></gallery-form>
                <div slot="footer"></div>
            </Modal>
            <div class="w-full flex bg-white">
                <div class="w-1/6 h-10 border-r border-gray-400">
                    <p class="font-medium font-serif text-3xl tracking-wide">
                        Gallery
                    </p> 
                </div>
                <div class="w-5/6 flex content-center">
                    <search class="w-10/24" :module-name="moduleName" @items-filtered="filtered = true"></search>
                    <div class="flex-grow content-center h-full p-2">
                        <filter-a class="ml-4" :module-name="moduleName" :filter-type="typeA" @items-filtered="filtered = true" >
                            <Icon type="ios-calendar-outline" size="16"></Icon>
                        </filter-a>
                        <filter-a class="ml-4" :module-name="moduleName" :filter-type="typeB" @items-filtered="filtered = true" >
                            <Icon type="ios-pin-outline" size="16"></Icon>
                        </filter-a>
                        <a @click="clearFilters()" v-if="filtered" size="small" type="text" class="ml-4 p-0 text-gray-900 focus:text-gray-900 hover:border-0 hover:text-gray-900 active:border-0 active:text-gray-900">
                            <Icon type="ios-close" size="20"></Icon>
                            Clear Filters
                        </a>
                    </div>
                    <div class="w-2/24 content-center h-full p-2">
                        <modal-btn @modalbtn-clicked="galleryModal = true">
                            New Image
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
                    <div class="m-2 flex flex-wrap">
                        <p class="text-center w-full font-sans text-2xl font-semibold tracking-widest">
                            0
                        </p>
                        <p class="text-center w-full font-sans font-medium tracking-wider text-xs text-gray-500">
                            Images
                        </p>
                    </div>
                </div>       
            </div>  
            <div class="w-full" v-if="images">
                <div class="w-full h-auto flex flex-wrap pt-5 bg-gray-100 justify-center" v-if="!list">
                    <gallery-list  v-for="image in images" :image = image :key = image.id ></gallery-list>  
                </div>
                <div class="w-full m-2 p-2 flex justify-center">
                    <pagination :curr = meta.curr :total = meta.total :size = meta.per_page :module-name="moduleName" ></pagination>
                </div>
            </div>
            <div class="w-full" v-else>
                <div class="w-full h-full">
                    <div class="mx-auto w-1/3 p-5 m-3 content-center">
                        <img class="object-center object-contain" src='/images/camera.svg'>
                        <p class="text-xl font-medium font-sans w-full text-center pt-5"> No Images Found</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import GalleryForm from './GalleryFormComponent'
import GalleryListItem from './GalleryListItemComponent'
import Pagination from '../Widgets/PaginationComponent'
import Search from '../Widgets/SearchComponent'
import Filter from '../Widgets/FilterComponent'
import Stats from '../Widgets/StatsComponent'
import Modalbtn from '../Widgets/ModalbtnComponent'
import { mapActions, mapGetters } from 'vuex'

export default {
    components: {
        'gallery-form': GalleryForm,
        'gallery-list': GalleryListItem,
        'pagination': Pagination,
        'search': Search,
        'filter-a': Filter,
        'stats': Stats,
        'modal-btn': Modalbtn,
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
    computed:{
        ...mapGetters('GalleryModule',['images','meta','links']),
        ...mapGetters('AuthModule', ['currentUser']),
    },
    data() {
        return {
            list: false,
            galleryModal: false,
            moduleName: 'GalleryModule',
            admin: false,
            searchTerm: '',
            filtered: false,
            typeA: 'year',
            typeB: 'location',
            statsA: 'events',
        }
    },
    methods: {
        ...mapActions('GalleryModule',['fetch', 'filter']),
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