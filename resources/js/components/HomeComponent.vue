<template>
    <div class="w-full h-full bg-white p-2 flex">
        <div class="w-3/4 h-full p-1">
            <li  v-for="article in topNews" :key="article.id" @click="viewArticle(article.id)" class="w-full list-none " style="min-height: 400px; background: url(https://picsum.photos/3000/400) no-repeat">
                <div class="relative w-full opacity-50 bg-black p-5" style="min-height: 400px;">
                    <p class="relative ml-20 mt-10 text-3xl font-thin subpixel-antialiased text-white capitalize" style="top: 30%">
                        {{article.title}}
                    </p>
                    <div class="ml-20 w-2/3 text-xl font-hairline text-white" v-html="$options.filters.truncate(article.body)"></div>
                    <p class="ml-20 mt-4 w-2/3 text-sm font-medium text-white">
                        {{ article.created_at | moment("from")}}
                    </p>
                </div>
            </li>
            <div class="w-full h-56 p-1 mx-auto flex mb-5">
                <a class="w-1/3 m-1 h-auto mb-5" v-for="article in otherNews" :key="article.id" @click="viewArticle(article.id)">
                    <div class="w-full" style="height: 60%; background: url(https://picsum.photos/1000/400)">
                    </div>
                    <p class="m-1 w-2/3 text-lg font-semibold text-gray-800 capitalize">
                        {{article.title}}
                    </p>
                    <div class="m-1 w-4/5 text-base font-normal text-gray-800" v-html="$options.filters.truncate(article.body)"></div>
                    <p class="m-1 w-2/3 text-xs font-medium text-gray-800">
                        {{ article.created_at  | moment("from")}}
                    </p>
                </a>
            </div>
            <div class="w-full">
                <div class="w-full bg-teal-100 p-5" style="">
                    <div class="w-full flex">
                        <p class="flex-grow width-3/4 text-xl font-semibold subpixel-antialiased tracking-wide"> Publications </p>
                        <img class=" w-1/4 h-24 object-contain" src="/images/publications.svg">
                    </div>
                </div>
                <div class="w-full p-1 mx-auto flex ">
                    <div class="w-1/4 h-64 bg-white shadow-md rounded-lg m-1" v-for="item in topPubs" :key="item.id">
                        <div class="border border-white rounded-full p-4 flex flex-col justify-between leading-normal">
                            <div class="mb-8">
                                <p class="text-xs text-gray-600 flex items-center mb-1">
                                    {{item.publisher}}
                                </p>
                                <div class="text-gray-900 font-medium text-xl mb-2">{{item.title | truncate(20)}}</div>
                                <p class="text-gray-700 text-base">{{item.abstract | truncate(20)}}</p>
                            </div>
                            <div class="flex items-center">
                                <img class="w-10 h-10 rounded-full mr-4" src="/images/landing.jpg" alt="Avatar of Jonathan Reinink">
                                <div class="text-sm">
                                    <p class="text-gray-900 leading-none mb-1">{{item.author}}</p>
                                    <p class="text-gray-600 text-xs">{{item.created_at}}</p>
                                </div>
                            </div>
                            <ul class="w-full mt-5 flex">
                                <li class="mr-5">
                                    <Icon type="ios-eye-outline" size="18"/><span class="ml-1 font-semibold">{{item.views}}</span>
                                </li>
                                <li class="mr-5">
                                    <Icon type="ios-download-outline" size="18"/><span class="ml-1 font-semibold">{{item.downloads}}</span>
                                </li>
                                <li class="mr-5">
                                    <a class="font-sm tracking-wide font-medium font-sans" @click="downloadPub(item)"> Download</a>
                                </li>
                            </ul>
                        </div>
                    </div>   
                </div>
            </div>
          
        </div>
        <div class="w-1/4 h-full p-2">
            <div class="w-full relative" style="height: 45%">
                <div class="w-full bg-teal-100 p-5" style="height: 25%;">
                    <div class="w-full h-full flex">
                        <p class="flex-grow width-3/4 text-xl font-semibold subpixel-antialiased tracking-wide"> Events </p>
                        <img class=" w-1/4 object-contain" src="/images/events.svg">
                    </div>
                  
                </div>
                <div class="w-full bg-gray-100" style="height: 73%">
                    <ul class="w-full p-1" v-if="topEvents.length">
                        <li class="mb-2 mt-1 p-2 border-b border-gray-400" v-for="event in topEvents" :key="event.id" >
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
            <div class="w-full relative" style="height: 45%">
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
import axios from 'axios'
export default {
    data() {
        return {
            events: '',
            publications: '',
            news: '',
            vacancies: '',
        }
    },
    computed: {
        topPubs() {
            return this.publications.slice(0,4)
        },
        topEvents() {
            return this.events.slice(0,2)
        },
        topVacancies() {
            return this.vacancies.slice(0,2)
        },
        topNews() {
            return this.news.slice(0,1)
        },
        otherNews() {
            return this.news.slice(1,4)
        }
    },
    mounted(){
        // Axios
        axios.all([
            axios.get('api/publication'),
            axios.get('api/event'),
            axios.get('api/news'),
            axios.get('api/vacancy')
        ]).then( axios.spread((publications,events,news,vacancies)=>{
            this.events = events.data.data
            this.news = news.data.data
            this.publications = publications.data.data
            this.vacancies = vacancies.data.data
        })).catch((error)=>{
            // show error
            this.$Notice.error({
                title: 'Error occurred',
            })
        })
    },
    methods:{
        // Article
        viewArticle(id){
            this.$router.push({name: 'article', params:{id}})
        },
    }
}
</script>