<template>
    <div class="w-full h-full">
        <Modal v-model="vacancyModal" width="700">
            <Form :model="vacancyForm" label-position="top" class="w-full">
                <h4 class="text-lg text-semibold subpixel-antialiased tracking-wider"> New Vacancy </h4>
                <br>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Title">
                            <Input v-model="vacancyForm.title" type="text" placeholder="Title"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="12">
                        <FormItem label="Application Deadline">
                            <DatePicker v-model="vacancyForm.deadline" type="date" placeholder="Deadline" style="width: 100%"></DatePicker>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="Number of Positions">
                            <Input type="number" placeholder="Number of Positions"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Location">
                            <Input  v-model="vacancyForm.location" type="text" placeholder="Location"></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="24">
                        <FormItem label="Description">
                            <quill  v-model="vacancyForm.description" :config="config" output="html"></quill>
                            <!-- <Input  v-model="vacancyForm.description" type="textarea" placeholder="Description"></Input> -->
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="24">
                        <ButtonGroup>
                            <Button @click="vacancyModal = false">
                                <Icon type="ios-cancel"></Icon>
                                Cancel
                            </Button>
                            <Button type="primary" @click="onSubmit">
                                <Icon type="ios-checkmark"></Icon>
                                Create Vacancy
                            </Button>
                        </ButtonGroup>
                    </Col> 
                </Row>
            
            </Form>
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
                    <div class="w-10/24 p-2 ml-3">
                        <Icon type="ios-search-outline" size="18"/>
                        <input v-on:keyup.enter="onSearch" v-model="searchTerm" prefix="ios-search-outline" placeholder="Search" class="appearance-none bg-transparent border-none w-3/4 font-sans tracking-wider mr-3 py-1 px-2 leading-tight focus:outline-none focus:bg-white" type="text" />
                    </div>
                    <div class="flex-grow content-center h-full p-2">
                        <Dropdown class="ml-4" trigger="click" style="">
                            <a href="javascript:void(0)" class="font-sans tracking-wider text-gray-900 hover:text-gray-900">
                                <Icon type="ios-calendar-outline" size="20"></Icon>
                                Year
                            </a>
                            <DropdownMenu slot="list" style="height: 100px; overflow-y:scroll;">
                                <DropdownItem v-for="yr in year" :key="yr">{{yr}}</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown class="ml-4" trigger="click" style="">
                            <a href="javascript:void(0)" class="font-sans tracking-wider text-gray-900 hover:text-gray-900">
                                <Icon type="ios-map-outline" size="20"></Icon>
                                Country
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem></DropdownItem>
                                <DropdownItem></DropdownItem>
                                <DropdownItem></DropdownItem>
                                <DropdownItem></DropdownItem>
                                <DropdownItem></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown class="ml-4" trigger="click" style="">
                            <a href="javascript:void(0)" class="font-sans tracking-wider text-gray-900 hover:text-gray-900">
                                <Icon type="ios-briefcase-outline" size="20"></Icon>
                                Expertise
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem></DropdownItem>
                                <DropdownItem></DropdownItem>
                                <DropdownItem></DropdownItem>
                                <DropdownItem></DropdownItem>
                                <DropdownItem></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <div class="w-2/24 content-center h-full p-2">
                        <Button icon="ios-add" @click="vacancyModal = true">
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
                    <a class="w-1/5 overflow-hidden shadow-lg p-2 px-5 h-64 bg-white m-2 rounded-lg text-gray-700 hover:text-gray-900" v-for="vacancy in vacancies" :key="vacancy.id" @click="makeApplication(vacancy.id)">
                        <div class="mt-3 mb-2">
                            <p class="font-500 tracking-wider text-lg antialiased">
                                {{vacancy.title}}
                            </p>
                        </div>
                        <div class="mb-2">
                            <p class="font-hairline text-sm tracking-widest capitalize text-gray-700" v-html="$options.filters.truncate(vacancy.description)">
                            <!-- {{vacancy.description | truncate(50)}} -->
                            </p>
                        </div>
                        <div class="mb-2">
                            <p class="font-hairline text-xs tracking-widest capitalize text-gray-600">
                                <Icon type="ios-pin-outline" size="18" />:{{vacancy.location}}
                            </p>
                        </div>
                        <div class="w-full mt-3 ">
                            <p class="font-hairline text-xs tracking-widest capitalize text-gray-500">
                                <Icon type="ios-calendar-outline" size="18" /> : <span class="font-thin text-xs tracking-wide capitalize text-gray-400"> {{vacancy.deadline | moment("calendar") }}</span>
                            </p>
                        </div>
                        <div class="w-full mt-3 mb-0">
                            <p class="font-hairline text-xs tracking-widest capitalize text-gray-500">
                                Posted: <span class="font-thin text-xs tracking-wide capitalize text-gray-400"> {{vacancy.created_at}}</span>
                            </p>
                        </div>
                        <div class="w-full mt-5 mb-0">
                            <a class="mr-2 font-hairline text-xs tracking-widest capitalize text-gray-500" @click="makeApplication(vacancy.id)">
                                Apply
                            </a>
                            <a class="text-xs tracking-wide font-medium text-red-700" v-if="vacancy.user.id === currentUser.id " @click="deleteVacancy(vacancy.id)"> Remove </a>

                        </div>
                    </a>
                </div>
                <div class="w-full p-2 bg-gray-100" v-if="list">
                    <Table height="200" :columns="vacancyColumns" :data="vacancies"></Table>
                </div>
                <div class="w-full flex p-0 mb-5 text-center" >
                    <Page class="mx-auto" :current="vacancymeta.current_page" :total="vacancymeta.total" :page-size="vacancymeta.per_page" @on-change="goToPage" />
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
export default {
    data(){
        return {
            list: false,
            vacancyModal: false,
            admin: false,
            vacancymeta: '',
            vacancyData: '',
            vacancystats: '',
            vacancyForm: {
                title: '',
                type: '',
                description: '',
                deadline: '',
                positions: ''
            },
            vacancies: [],
            vacancyColumns: [
                {
                    title: 'Title',
                    key: 'title'
                },
                {
                    title: 'Positions',
                    key: 'positions'
                },
                {
                    title: 'Location',
                    key: 'location'
                },
                {
                    title: 'Deadline',
                    key: 'deadline'
                },
            ],
            config: {
            placeholder: 'Compose a question...',
            theme: 'snow',
            modules: {
                // toolbar: [
                // ['bold', 'italic', 'underline', 'strike'],
                // ['blockquote', 'code-block'],
                // [{ 'header': 1 }, { 'header': 2 }],
                // [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                // [{ 'script': 'sub' }, { 'script': 'super' }],
                // [{ 'indent': '-1' }, { 'indent': '+1' }],
                // [{ 'direction': 'rtl' }],
                // [{ 'size': ['small', false, 'large', 'huge'] }],
                // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                // [{ 'font': [] }],
                // [{ 'color': [] }, { 'background': [] }],
                // [{ 'align': [] }],
                // ['clean'],
                // ],
                syntax: {
                highlight: text => hljs.highlightAuto(text).value
                }
            }
            },
        }
    },
    computed: {
        year(){
            const year = new Date().getFullYear()
            return Array.from({length: year - 1960}, (value, index)=> 1961 + index).reverse()
        },
    },
    mounted(){
        axios({
            method: 'get',
            url: 'api/vacancy'
        }).then((response)=>{
            this.vacancies = response.data.data
            this.vacancyData = response.data
            this.vacancymeta = response.data.meta
        }).catch((error)=>{
            this.$Notice.info({
                title: 'Vacancies',
                desc: 'No vacancies currently'
            })
        })

        // 
        Echo.channel('vacancies').listen('VacancyCreated',(e)=>{
            this.vacancies = e.vacancies
            console.log(e.vacancies)
        })
        
        // Update
        Echo.channel('vacancies').listen('VacancyDeleted',(e)=>{
            this.vacancies = e.vacancies
        })

        Echo.channel('stats').listen('VacancyStats',(e)=>{
            this.vacancystats = e.vacancystats
        })
    },
    computed: {
        currentUser(){
            return this.$store.state.current_user
        },
        year(){
            const year = new Date().getFullYear()
            return Array.from({length: year - 1960}, (value, index)=> 1961 + index).reverse()
        },
    },
    methods:{
        // goToPage
        goToPage(number){
            axios.get(this.vacancymeta.path + '?page=' + number).then((response)=>{
                // response
                this.vacancies = response.data.data
                this.vacancymeta = response.data.meta
                // Pub data
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
        // On submit
        onSubmit(){
            let formdata = this.vacancyForm
            formdata['user_id'] = this.currentUser.id
            // Push to db
            axios({
                method: 'post',
                url: 'api/vacancy',
                data: formdata
            }).then((response)=>{
                this.$Notice.success({
                    title: 'Vacancy Created',
                })
                this.vacancyModal = false
            }).catch((error)=>{
                this.$Notice.error({
                    title: 'Vacancy not created',
                })
            })
        },
        // make Application
        makeApplication(id){
            this.$router.push({name: 'vacancyapplication', params: {id}})
        },
        // Delete
        deleteVacancy(id){
            axios({
                method: 'delete',
                url: 'api/vacancy/'+id,
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