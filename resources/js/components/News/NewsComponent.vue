<template>
    <div class="w-full h-full">
        <div class="w-full h-full p-5" >
            <Modal v-model="newsModal" fullscreen title="Write Article">
                <news-form v-on:close-modal='closeModal()'></news-form>
                <div slot="footer"></div>
            </Modal>
            <div class="w-full flex bg-white">
                <div class="w-1/6 h-10 border-r border-gray-400">
                    <p class="font-medium font-serif text-3xl tracking-wide">
                        News
                    </p> 
                </div>
                <div class="w-5/6 flex content-center">
                    <search class="w-10/24" :module-name="moduleName" @items-filtered="filtered = true"></search>
                    <div class="flex-grow content-center h-full p-2">
                        <filter-a class="ml-4" :module-name="moduleName" :filter-items="years" :filter-type="typeA" @items-filtered="filtered = true" >
                            <Icon type="ios-calendar-outline" size="16"></Icon>
                        </filter-a>
                        <a @click="clearFilters()" v-if="filtered" size="small" type="text" class="ml-4 p-0 text-gray-900 focus:text-gray-900 hover:border-0 hover:text-gray-900 active:border-0 active:text-gray-900">
                            <Icon type="ios-close" size="20"></Icon>
                            Clear Filters
                        </a>
                    </div>
                    <div class="w-2/24 content-center h-full p-2">
                        <modal-btn @modalbtn-clicked="newsModal = true">
                            New Article
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
                    <stats :figure="newsstats.articles" :title="statsA"></stats>
                </div>       
            </div>  
            <div class="w-full h-full" v-if="news.length">
                <div class="w-full flex flex-wrap p-2 bg-gray-200 justify-center" v-if="!list">
                   <newslist-item class="w-1/4" v-for="article in news" :key="article.id"  :article = article ></newslist-item>
                </div>
                <div class="w-full" v-if="list">
                    <news-table :news = news ></news-table>
                </div>
                <div class="w-full m-2 p-2 flex justify-center">
                    <pagination :curr = meta.curr :total = meta.total :size = meta.per_page :module-name="moduleName" ></pagination>
                </div>
            </div>
            <div class="w-full h-full" v-else>
               <div class="mx-auto w-1/3 p-5 m-3 content-center">
                   <img class="object-center object-contain" src='/images/empty.svg'>
                   <p class="text-xl font-medium font-sans w-full text-center pt-5"> No News Found</p>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import NewsForm from './NewsFormComponent'
import NewsListItem from './NewsListItemComponent'
import NewsTable from './NewsTableComponent'
import Pagination from '../Widgets/PaginationComponent'
import Search from '../Widgets/SearchComponent'
import Filter from '../Widgets/FilterComponent'
import Stats from '../Widgets/StatsComponent'
import Modalbtn from '../Widgets/ModalbtnComponent'

export default {
    components:{
        'news-form': NewsForm,
        'newslist-item': NewsListItem,
        'news-table': NewsTable,
        'pagination': Pagination,
        'search': Search,
        'filter-a': Filter,
        'stats': Stats,
        'modal-btn': Modalbtn,
    },
    data(){
        return{
            list: false,
            newsModal: false,
            updateList: [],
            searchTerm: '',
            filtered: false,
            newsstats: '',
            typeA: 'year',
            statsA: 'articles',
            moduleName: 'NewsModule'
        }
    },
    computed: {
        // store values
        ...mapGetters('AuthModule',['current_user']),
        // Members from vuex
        ...mapGetters('NewsModule',['news', 'meta','links']),
        // Years
        years(){
            const year = new Date().getFullYear()
            return Array.from({length: year - 1960}, (value, index)=> 1961 + index).reverse()
        },
    },
    mounted(){
        // Search news
        Echo.channel('searches').listen('SearchNews',(e)=>{
            this.news = e.news
            this.newsMeta = []
        })

        // Update
        Echo.channel('news').listen('NewsCreated',(e)=>{
            this.newArticle(e.news)
        })

        // Update
        Echo.channel('news').listen('NewsDeleted',(e)=>{
            this.news = e.news
        })

        Echo.channel('stats').listen('NewsStats',(e)=>{
            this.newsstats = e.newsstats
        })
    },
  
    methods: {
        ...mapActions('NewsModule',['newArticle','filter','fetch']),
        // Publish
        publishArticle(){
            let formdata = {
                id: this.updateList,
                published: '1'
            }
            // push to axios
            axios({
                method:'patch',
                url: 'api/news',
                data: formdata
            }).then((response)=>{
                this.$Notice.success({
                    title: 'Article Published',
                    desc: ''
                })
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Article not Published',
                    desc: ''
                })
            })
        },
        // Cancel
        closeModal(){
            this.newsModal = false
        },

        // Change view
        changeView(){
           if ( this.list === true ){
               this.list = false
           } else{
               this.list = true
           }
        },
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
    }
}
</script>