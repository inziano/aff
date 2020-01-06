<template>
    <div class="w-full h-full">
        <div class="w-full h-full p-5" >
            <Modal v-model="pubModal" title="Upload Publication">
                <Form :model="pubForm" label-position="top" class="w-full">
                    <h4 class="text-lg text-semibold subpixel-antialiased tracking-wider">
                        Upload Publication
                    </h4>
                    <br>
                    <Row :gutter="16">
                        <Col span="24">
                            <FormItem label="Title">
                                <Input type="text" v-model="pubForm.title" placeholder="Publication Title"></Input>
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
                        <Col span="12">
                            <Button size="large" @click="onSubmit" :loading="loading">
                                <span v-if="!loading"> 
                                    Submit
                                    <Icon type="ios-checkmark"></Icon>
                                </span>
                                <span v-if="loading">
                                    Submitting...
                                </span>
                        
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <div slot="footer">
                    <!-- <Button type="error" size="large" long :loading="modal_loading" @click="del">Delete</Button> -->
                </div>
            </Modal>
            <nav class="w-full flex mb-2">
                <div class="lg:flex-grow lg:w-auto">
                    <p class="font-medium font-serif text-3xl tracking-wide">
                        Publications
                    </p>
                    <p class="font-normal font-sans text-lg tracking-tight">
                        Find Publications
                    </p>
                </div>
                <div class="w-2/24 p-3">
                    <Button icon="ios-add" @click="pubModal = true">
                        New
                    </Button>
                </div>
            </nav>
            <ul class="w-full flex flex-wrap bg-gray-300 p-1">
                <div class="lg:flex-grow lg:w-auto">
                    <li class="mr-3" @click="changeView()">
                        <Icon v-if="list" type="ios-list" size="32"/>
                        <Icon v-if="!list" type="ios-apps-outline" size="32"/>       
                    </li> 
                </div>
                <div class="w-1/24 flex">
                    <input v-on:keyup.enter="onSearch" v-model="searchTerm" class="appearance-none bg-transparent border-none w-3/4 font-sans tracking-wider mr-3 py-1 px-2 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Search" ></input>
                    <li class="mr-1 p-2">
                        <Icon type="ios-search-outline" size="24"/>       
                    </li>
                </div>
            </ul>
            <div class="w-full flex flex-wrap p-2 px-5 bg-gray-200 justify-center" v-if="!list">
                <div class="w-1/5 h-64 bg-white shadow-lg rounded-sm m-1" v-for="item in pubList" :key="item.id">
                    <div class="border border-white rounded-sm p-4 flex flex-col justify-between leading-normal">
                        <div class="mb-8">
                            <p class="text-xs text-gray-600 flex items-center mb-1">
                                {{item.publisher}}
                            </p>
                            <div class="text-gray-900 font-medium text-xl mb-2 font-serif">{{item.title | truncate(20)}}</div>
                            <p class="text-gray-700 text-base font-sans">{{item.abstract | truncate(50)}}</p>
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
            loading: false,
            pubModal: false,
            list: false,
            pubList: [],
            pubmeta: '',
            pubs: '',
            pubForm:{
                title: '',
                author: '',
                publisher: '',
                abstract: '',
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
            console.log(arr)
        }).catch((error)=>{
            this.$Notice.error({
                title: 'No publications found',
                desc: error.message
            })
        })

        // Search pubs
        Echo.channel('searches').listen('SearchPublications',(e)=>{
            this.pubList = e.publications

        })
    },
    methods: {
        // Search
        onSearch() {
            // 
            let formdata = {
                search: this.searchTerm
            }
            // Search
            axios({
                method: 'post',
                url: 'api/publication/search',
                data: formdata
            }).then((response)=>{
                // log response
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