<template>
    <div class="w-full h-full bg-white p-2 flex">
        <div class="w-3/4 h-full p-1 relative">
            <news-item v-for="article in topNews" :key="article.id" :article = article ></news-item>
            <div class="w-full flex mb-5">
                <newslist-item class="w-1/3" v-for="article in otherNews" :key="article.id" :article = article ></newslist-item>
            </div>
            <div class="w-full h-auto">
                <div class="w-full bg-teal-100 p-5" style="">
                    <div class="w-full flex mb-2">
                        <p class="flex-grow width-3/4 text-xl font-semibold subpixel-antialiased tracking-wide"> Publications </p>
                        <img class=" w-1/4 h-24 object-contain" src="/images/publications.svg">
                    </div>
                </div>
                <div class="w-full p-1 mx-auto mb-2 flex flex-wrap justify-center">
                    <publist-item  v-for="publication in topPubs" :publication = publication :key = publication.id ></publist-item>  
                </div>
            </div>
          
        </div>
        <div class="w-1/4 h-full p-2">
            <div class="w-full relative mb-2" style="height: auto">
                <div class="w-full bg-teal-100 p-5" style="height: 25%;">
                    <div class="w-full h-full flex">
                        <p class="flex-grow width-3/4 text-xl font-semibold subpixel-antialiased tracking-wide"> Events </p>
                        <img class=" w-1/4 object-contain" src="/images/events.svg">
                    </div>
                </div>
                <div class="w-full bg-gray-100" style="height: 73%">
                    <ul class="w-full p-1" v-if="topEvents.length">
                        <li class="mb-2 mt-1 p-2 border-b border-gray-400" v-for="event in topEvents" :key="event.id" >
                            <!-- <div class="flex">
                                <div class="w-20 h-20 bg-teal-500 flex justify-center items-center flex-col text-white font-bold text-center">
                                    <p class="text-sm">{{event.startdate | moment('D') }}</p>
                                    <p class="uppercase -mt-1">{{event.startdate | moment('MMM') }}</p>
                                </div>
                                <div class="bg-white h-20 items-center px-4">
                                    <p class="font-normal text-sm">{{event.name}}</p>
                                </div>
                            </div> -->
                            <p class="mb-1 text-sm font-medium tracking-wider"> {{event.name}} </p>
                            <p class="mb-1 text-xs font-thin tracking-wider"> {{event.location}} </p>
                            <p class="mt-1  w-2/3 text-xs font-medium text-gray">
                                {{ event.startdate | moment("from")}}
                            </p>
                        </li>
                        <router-link to="/events" class="ml-2 w-full p-1 text-xs tracking-wider text-gray-800 uppercase"> View All</router-link>
                    </ul>
                    <div class="w-full" v-else>
                        <div class="mx-auto w-1/2 p-5 m-3 content-center">
                            <img class="object-center object-contain" src='/images/events.svg'>
                            <p class="text-lg font-normal font-sans w-full text-center pt-5"> No Events Found</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="w-full relative" style="height: auto">
                <div class="w-full h-24 bg-teal-100 pt-5 px-5" style="height: 25%;">
                    <div class="w-full flex">
                        <p class="flex-grow width-3/4 text-xl font-semibold subpixel-antialiased tracking-wide"> Vacancies </p>
                        <img class=" w-1/4 object-contain" src="/images/vacancy.svg">
                    </div>
                </div>
                <div class="w-full bg-gray-100" style="height: 73%">
                    <ul class="w-full p-1" v-if="topVacancies.length">
                        <li class="mb-2 mt-1 p-2 border-b border-gray-400" v-for="vacancy in topVacancies" :key="vacancy.id">
                            <p class="mb-1 text-sm font-medium tracking-wider"> {{vacancy.title}} </p>
                            <p class="mb-1 text-xs font-thin tracking-wider"> {{vacancy.location}} </p>
                            <p class="mb-0  w-2/3 text-xs font-medium text-gray">
                                {{ vacancy.deadline | moment("from")}}
                            </p>
                        </li>
                        <router-link to="/vacancies" class="ml-2 w-full p-1 text-xs tracking-wider text-gray-800 uppercase"> View All</router-link>
                    </ul>
                   
                    <div class="w-full" v-else>
                        <div class="mx-auto w-1/2 p-5 m-3 content-center">
                            <img class="object-center object-contain" src='/images/vacancy.svg'>
                            <p class="text-lg font-normal font-sans w-full text-center pt-5"> No Vacancies Found</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import PublicationListItem from './Publication/PublicationListItemComponent'
import NewsItem from './News/NewsItemComponent'
import NewsListItem from './News/NewsListItemComponent'

export default {
    components: {
        'publist-item' : PublicationListItem,
        'newslist-item' : NewsListItem,
        'news-item' : NewsItem
    },
    computed: {
        // Pull values from store
        // ...mapState(['vacancies', 'publications', 'events', 'news']),
        ...mapGetters('NewsModule', ['news']),
        ...mapGetters('PublicationModule', ['publications']),
        ...mapGetters('EventModule', ['events']),
        ...mapGetters('VacancyModule', ['vacancies']),

        // Top news
        topVacancies(){
            let v = this.vacancies.slice(0,3)
            return v
        },

        topNews(){
            let v = this.news.slice(0,1) 
            return v
        },

        otherNews(){
            let v = this.news.slice(1,4) 
            return v
        },

        topPubs(){
            let p = this.publications.slice(0,3) 
            return p
        },

        topEvents(){
            let e = this.events.slice(0,3)
            return e
        },
    },
    methods:{
        // Article
        viewArticle(id){
            this.$router.push({name: 'article', params:{id}})
        },
        // View publication
        viewPublication(id){
            this.$router.push({name: 'publicationview', params: {id}})
        }
    }
}
</script>