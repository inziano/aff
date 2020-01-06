<template>
    <div class="w-full h-full">
        <Modal v-model="vacancyModal">
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
                            <Button>
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
            <nav class="w-full flex mb-2">
                <div class="lg:flex-grow lg:w-auto">
                    <p class="font-medium font-serif text-3xl tracking-wide">
                        Vacancies
                    </p>
                    <p class="font-normal font-sans text-lg tracking-tight">
                        Find Vacancies Around You
                    </p>
                </div>
                <div class="w-2/24 p-3">
                    <Button icon="ios-add" @click="vacancyModal = true">
                        New
                    </Button>
                </div>
            </nav>
            <ul class="w-full flex flex-wrap bg-gray-200 p-1">
                <div class="lg:flex-grow lg:w-auto">
                    <li class="mr-3" @click="changeView()">
                        <Icon v-if="list" type="ios-list" size="32"/>
                        <Icon v-if="!list" type="ios-apps-outline" size="32"/>       
                    </li> 
                </div>
                <div class="w-1/24">
                    <li class="mr-3 p-2">
                        <Icon type="ios-search-outline" size="24"/>       
                    </li>
                </div>
            </ul>
           <div v-if="vacancies.length">
                <div class="w-full flex  flex-wrap p-2 bg-gray-100 justify-center" v-if="!list">
                    <div class="w-64 overflow-hidden shadow-lg p-2 px-5 h-64 bg-white m-2 rounded-lg" v-for="vacancy in vacancies" :key="vacancy.id">
                        <div class="mt-3 mb-2">
                            <p class="font-500 tracking-wider text-lg antialiased">
                                {{vacancy.title}}
                            </p>
                        </div>
                        <div class="mb-2">
                            <p class="font-hairline text-sm tracking-widest capitalize text-gray-700">
                            {{vacancy.description}}
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
                    </div>
                </div>
                <div class="w-full p-2 bg-gray-100" v-if="list">
                    <Table height="200" :columns="vacancyColumns" :data="vacancies"></Table>
                </div>
                <div class="w-full flex p-0 mb-5 text-center" v-if="vacancymeta.length === 0">
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
                    title: 'Description',
                    key: 'description'

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
    },
    computed: {
        currentUser(){
            return this.$store.state.current_user
        }
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