<template>
    <div class="w-full h-full">
        <div class="w-full h-full p-5" >
            <Modal v-model="newsModal" fullscreen title="Write Article">
                <Form :model="newsForm" label-position="top" class="w-full">
                    <h4 class="text-lg text-semibold subpixel-antialiased tracking-wider"> New Article </h4>
                    <br>
                    <Row :gutter="16">
                        <Col span="24">
                            <FormItem label="Title">
                                <Input v-model="newsForm.title" type="text" placeholder="News Title"></Input>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="16" >
                        <Col span="24">
                            <FormItem label="Article" class="h-full" style="min-height:300px;">
                                <quill  v-model="newsForm.body" :config="config" output="html"></quill>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="16">
                        <Col span="24">
                            <ButtonGroup>
                                <Button @click="onCancel">
                                    <Icon type="ios-cancel"></Icon>
                                    Cancel
                                </Button>
                                <Button type="primary" @click="onSubmit">
                                    <Icon type="ios-checkmark"></Icon>
                                    Create
                                </Button>
                            </ButtonGroup>
                        </Col> 
                    </Row>
                </Form>
                <div slot="footer">
                    <!-- <Button type="error" size="large" long :loading="modal_loading" @click="del">Delete</Button> -->
                </div>
            </Modal>
            <div class="w-full flex bg-white">
                <div class="w-1/6 h-10 border-r border-gray-400">
                    <p class="font-medium font-serif text-3xl tracking-wide">
                        News
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
                                <DropdownItem v-for="yr in years" :key="yr" :name="yr">{{yr}}</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <a @click="clearFilters()" v-if="filtered" size="small" type="text" class="ml-4 p-0 text-gray-900 focus:text-gray-900 hover:border-0 hover:text-gray-900 active:border-0 active:text-gray-900">
                            <Icon type="ios-close" size="20"></Icon>
                            Clear Filters
                        </a>
                        <!-- <Dropdown class="ml-4" trigger="click" style="">
                            <a href="javascript:void(0)" class="font-sans tracking-wider text-gray-900 hover:text-gray-900">
                                <Icon type="ios-book-outline" size="20"></Icon>
                                Topic
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem></DropdownItem>
                            </DropdownMenu>
                        </Dropdown> -->

                    </div>
                    <div class="w-2/24 content-center h-full p-2">
                        <Button icon="ios-add" @click="newsModal = true">
                            New
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
                            {{newsstats.articles}}
                        </p>
                        <p class="text-center w-full font-sans font-medium tracking-wider text-xs text-gray-500">
                            Articles
                        </p>
                    </div>
                </div>       
            </div>  
            <div class="w-full h-full" v-if="news.length">
                <div class="w-full flex flex-wrap p-2 bg-gray-200 justify-center" v-if="!list">
                    <a class="bg-white w-1/4 m-1 border-darken-4 shadow-lg rounded-sm" v-for="article in news" :key="article.id" @click="viewArticle(article.id)" style="min-height: 40vh">
                        <div class="w-full" style="height: 60%; background: url(https://picsum.photos/1000/400)">
                        </div>
                        <p class="m-1 w-full text-lg font-semibold text-gray-800 pl-3 pt-2">
                            {{article.title | truncate(20)}}
                        </p>
                        <div v-html="$options.filters.truncate(article.body)" class="m-1 w-full text-gray-800 pl-3"></div>
                        <p class="pl-3 pt-2 m-1 w-2/3 text-xs font-medium text-gray-800">
                            {{ article.created_at | moment("from")}}
                        </p>
                    </a>
                </div>
                <div class="w-full" v-if="list">
                    <Table stripe ref="selection" :columns="newsArticles" :data="news"  @on-select="addToList" @on-select-all="addToList" @on-select-cancel="removeFromList" @on-select-all-cancel="removeFromList"></Table>
                    <Button class="mt-3" type="success" @click="publishArticle">Publish</Button>
                </div>
                <div class="w-full flex p-0 mt-5 mb-5 text-center">
                    <Page class="mx-auto" :current="newsMeta.current_page" :total="newsMeta.total" :page-size="newsMeta.per_page" @on-change="goToPage" />
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
export default {
    data(){
        return{
            list: false,
            newsModal: false,
            updateList: [],
            searchTerm: '',
            filtered: false,
            news: '',
            newsMeta: '',
            newsData: '',
            newsstats: '',
            newsArticles: [
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
                    title: 'Title',
                    key: 'title'
                },
                {
                    title: 'Posted',
                    key: 'created_at'
                },
                {
                    title: 'Published',
                    key: 'published'
                }
            ],
            newsForm: {
                title: '',
                body: '',
                published: ''
            },
            config: {
                placeholder: 'Compose an article...',
                theme: 'snow',
                modules: {
                    toolbar: [
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],
                    [{ 'header': 1 }, { 'header': 2 }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    [{ 'script': 'sub' }, { 'script': 'super' }],
                    [{ 'indent': '-1' }, { 'indent': '+1' }],
                    [{ 'direction': 'rtl' }],
                    [{ 'size': ['small', false, 'large', 'huge'] }],
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    [{ 'font': [] }],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'align': [] }],
                    ['clean'],
                    ],
                    syntax: {
                    highlight: text => hljs.highlightAuto(text).value
                    }
                }
            },
        }
    },
    mounted(){
        axios({
            method: 'get',
            url: 'api/news'
        }).then((response)=>{
            this.news = response.data.data
            this.newsData = response.data
            this.newsMeta = response.data.meta
            console.log(this.news)
        }).catch((error)=>{
            console.log(error)
            this.$Notice.info({
                title: 'News',
                desc: 'No news currently'
            })
        })

        // Search news
        Echo.channel('searches').listen('SearchNews',(e)=>{
            this.news = e.news
            this.newsMeta = []
        })

        // Update
        Echo.channel('news').listen('NewsCreated',(e)=>{
            this.news = e.news
        })

        // Update
        Echo.channel('news').listen('NewsDeleted',(e)=>{
            this.news = e.news
        })

        Echo.channel('stats').listen('NewsStats',(e)=>{
            this.newsstats = e.newsstats
        })
    },
    computed: {
        currentUser(){
            return this.$store.state.current_user
        },
        years(){
            const year = new Date().getFullYear()
            return Array.from({length: year - 1960}, (value, index)=> 1961 + index).reverse()
        },
    },
    methods: {
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

        // goToPage
        goToPage(number){
            axios.get(this.newsMeta.path + '?page=' + number).then((response)=>{
                // response
                this.news = response.data.data
                this.newsMeta = response.data.meta
                // Pub data
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Nothing found'
                })
            })
        },
        // Cancel
        onCancel(){
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
            axios({
                method: 'get',
                url: 'api/news?search=',
            }).then((response)=>{
                this.news = response.data.data
                this.newsData = response.data
                this.newsMeta = response.data.meta
                this.filtered = false
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Nothing found'
                })
            })
        },
        // Clear filter
        filterMethod(criteria, term) {
            // call route based on criteria
            axios({
                method: 'get',
                url: 'api/news?'+criteria+'='+term,
            }).then((response)=>{
                this.news = response.data.data
                this.newsData = response.data
                this.newsMeta = response.data.meta
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
            let term = this.searchTerm
            // Search
            axios({
                method: 'get',
                url: 'api/news?search='+term,
            }).then((response)=>{
                this.news = response.data.data
                this.newsData = response.data
                this.newsMeta = response.data.meta
                this.filtered = true
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Nothing found'
                })
            })
        },
        // Submit
        onSubmit(){
            let formdata = this.newsForm
            formdata['user_id'] = this.currentUser.id
            // Push to db
            axios({
                method: 'post',
                url: 'api/news',
                data: formdata
            }).then((response)=>{
                this.$Notice.success({
                    title: 'News Created',
                    desc: 'Your news was succesfully created'
                })
                this.newsModal = false
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'News not created',
                    desc: 'Your news was not created'
                })
            })
        },
        // View article
        viewArticle(id){
            this.$router.push({name: 'article', params:{id}})
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