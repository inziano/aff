<template>
    <div class="w-full h-full">
        <div class="w-full h-full p-5" >
            <Modal v-model="pubModal" width = "700">
                <Form :model="pubForm" label-position="top" class="w-full">
                    <h4 class="text-lg text-semibold subpixel-antialiased tracking-wider">
                        Upload Publication
                    </h4>
                    <br>
                    <Row :gutter="16">
                        <Col span="16">
                            <FormItem label="Title">
                                <Input type="text" v-model="pubForm.title" placeholder="Publication Title"></Input>
                            </FormItem>
                        </Col>
                        <Col span="8">
                            <FormItem label="Publication Year">
                                <Select v-model="pubForm.publication_year" placeholder="Year of Publication">
                                    <Option v-for="yr in years" :value="yr" :key="yr">{{yr}}</Option>
                                </Select> 
                            </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="16">
                        <Col span="12">
                            <FormItem label="Author">
                                <Input type="text" v-model="pubForm.author" placeholder="Author"></Input>
                            </FormItem>
                        </Col>
                        <Col span="12">
                            <FormItem label="Publisher">
                                <Input type="text" v-model="pubForm.publisher" placeholder="Publisher"></Input>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="16">
                        <Col span="24">
                            <FormItem label="Abstract">
                                <Input type="textarea" v-model="pubForm.abstract" placeholder="Abstract"></Input>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="16">
                        <Col span="24">
                            <FormItem label="Publication">
                                <Upload type="drag" action :before-upload="publicationUpload" :format="['docx','doc','pdf']">
                                    <div style="padding: 20px 0">
                                        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                        <p>Click or drag files here to upload</p>
                                    </div>
                                </Upload>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="16">
                        <Col span="24">
                            <FormItem label="tags">
                                <Select v-model="pubForm.tags" filterable multiple allow-create>
                                    <Option v-for="tag in tags" :value="tag" :key="tag">{{ tag }}</Option>
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row :gutter="16">
                        <Col span="12">
                            <ButtonGroup>
                                <Button @click="pubModal = false">
                                    <Icon type="ios-cancel"></Icon>
                                    Cancel
                                </Button>
                                <Button type="primary" @click="onSubmit" :loading="loading">
                                    <span v-if="!loading"> 
                                        Submit
                                        <Icon type="ios-checkmark"></Icon>
                                    </span>
                                    <span v-if="loading">
                                        Submitting...
                                    </span>
                            
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
            <div class="w-full h-auto flex flex-wrap pt-5 bg-gray-100 justify-center" v-if="!list">
                <div class="w-1/5 h-64 overflow-hidden shadow-lg p-2 m-1 bg-white rounded-lg" v-for="item in pubList" :key="item.id" @click="viewPub(item.id)">
                    <div class="border border-white rounded-sm p-4 flex flex-col justify-between leading-normal">
                        <div class="mb-8">
                            <p class="text-xs text-gray-600 flex items-center mb-1">
                                {{item.publisher}}
                            </p>
                            <div class="text-gray-900 font-medium text-base mb-2 font-serif">{{item.title | truncate(30)}}</div>
                            <p class="text-gray-700 font-sans text-sm">{{item.abstract | truncate(50)}}</p>
                        </div>
                        <div class="flex items-center">
                            <img class="w-10 h-10 rounded-full mr-4" src="/images/publications.svg" alt="Avatar of Jonathan Reinink">
                            <div class="text-sm">
                                <p class="text-gray-900 leading-none mb-1 text-xs font-semibold tracking-wider">{{item.author}}</p>
                                <p class="text-gray-600 text-xs font-medium tracking-tight">{{item.created_at}}</p>
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
                                <a class="font-sm tracking-wide font-medium font-sans text-gray-700" @click="downloadPub(item)"> Download</a>
                            </li>
                        </ul>
                    </div>
                </div>           
            </div>
            <div class="w-full" v-if="list">
                <Table stripe ref="selection" :columns="publications" :data="pubList"></Table>
            </div>
            <div class="w-full flex p-0 mt-5 mb-5 text-center">
                <Page class="mx-auto" :current="pubmeta.current_page" :total="pubmeta.total" :page-size="pubmeta.per_page" @on-change="goToPage" />
            </div> 
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            id: this.$route.params.id,
            searchTerm: '',
            filtered: false,
            loading: false,
            pubModal: false,
            list: false,
            pubList: [],
            pubmeta: '',
            pubstats: '',
            pubs: '',
            pubForm:{
                title: '',
                author: '',
                publisher: '',
                abstract: '',
                publication_year: '',
                tags: '',
                user_id: '',
            },
            publication: null,
            publications: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: 'Title',
                    key: 'title'
                },
                {
                    title: 'Author',
                    key: 'author'
                },
                {
                    title: 'Downloads',
                    key: 'downloads'
                },
                {
                    title: 'Views',
                    key: 'views'
                }
            ]
        }
    },
    computed: {
        currentUser(){
            return this.$store.state.current_user
        },
        years(){
            const year = new Date().getFullYear()
            return Array.from({length: year - 1960}, (value, index)=> 1961 + index).reverse()
        },
        tags(){
            return this.pubList.map((pub)=>{
                return pub.tags
            })
        }

    },
    mounted() {
        axios({
            method: 'get',
            url: 'api/publication'
        }).then((response)=>{
            const arr = response.data
            this.pubList = arr.data
            this.pubmeta = arr.meta
            this.pubs = arr
            console.log(arr.meta)
        }).catch((error)=>{
            this.$Notice.error({
                title: 'No publications found',
                desc: error.message
            })
        })

        // Search pubs
        Echo.channel('searches').listen('SearchPublications',(e)=>{
            this.pubList = e.publications
            this.pubmeta = []

        })

        // 
        Echo.channel('stats').listen('PublicationStats', (e)=>{
            console.log(e)
            this.pubstats = e.pubstats
        })
    },
    methods: {
         // clear all filters
        clearFilters(){
            axios({
                method: 'get',
                url: 'api/publication?search=',
            }).then((response)=>{
                // log response
               const arr = response.data
                this.pubList = arr.data
                this.pubmeta = arr.meta
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
                url: 'api/publication?'+criteria+'='+term,
            }).then((response)=>{
                const arr = response.data
                this.pubList = arr.data
                this.pubmeta = arr.meta
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
                url: 'api/publication?search='+term,
            }).then((response)=>{
                const arr = response.data
                this.pubList = arr.data
                this.pubmeta = arr.meta
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
        // make Application
        viewPub(id){
            this.$router.push({name: 'publicationview', params: {id}})
        },
        changeView(){
           if ( this.list === true ){
               this.list = false
           } else{
               this.list = true
           }
        },
        onSubmit(){
            // disable submit button
            this.loading = true
            // data
            const data = this.pubForm
            data['user_id'] = this.currentUser.id

            let formdata = new FormData()

            // Loop through data and append to formdata
            Object.keys(data).forEach( key=> formdata.append(key, data[key]))
            // Append files
            formdata.append('publication', this.publication)
            // Push to db
            axios({
                method: 'post',
                url: 'api/publication',
                data: formdata
            }).then( (response)=>{
                // Show notice
                this.$Notice.success({
                    title: 'Success',
                    desc: 'Your publication has been submitted succesfully'
                })
                // Loading
                this.loading = false
                this.pubModal = false
            }).catch( (error)=>{
                // Loading
                this.loading = false
                // Notice
                this.$Notice.error({
                    title: 'Error',
                    desc: 'Error in submitting your publication'
                })
            })
        },
        publicationUpload(file){
            this.publication = file
            return false
        },
        downloadPub(item){
            // item
            const id = item.id
            const title = item.title
            axios({
                method: 'get',
                url:'api/publication/download/'+id,
                responseType: 'blob'
                
                }).then((response)=>{
                    var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                    var fileLink = document.createElement('a');
                
                    fileLink.href = fileURL;
                    fileLink.setAttribute('download', 'file.pdf');
                    document.body.appendChild(fileLink);
                
                    fileLink.click();
                this.$Notice.success({
                    title: 'Publication downloaded'
                })
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'File could not be downloaded'
                })
            })
        }
    }
}
</script>